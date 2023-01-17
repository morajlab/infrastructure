const Husky = require('husky');
const spinners = require('cli-spinners');
const { createElement, useState, useEffect } = require('react');
const { URL } = require('url');
const { TaskList, Task } = require('ink-task-list');
const { exec } = require('child_process');
const { simpleGit } = require('simple-git');
const { Provider, useSelector, useDispatch } = require('react-redux');
const { configureStore, createSlice } = require('@reduxjs/toolkit');
const { render, Box, Text } = require('ink');

const mjwConfig = require('../mjw.config.json');
const TASK_STATES = {
  ERROR: 'error',
  SUCCESS: 'success',
  PENDING: 'pending',
  LOADING: 'loading',
};
const ce = createElement;
const errorSlice = createSlice({
  name: 'error',
  initialState: {
    value: [],
  },
  reducers: {
    addError: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
  },
});
const { addError } = errorSlice.actions;
const errorStore = configureStore({
  reducer: {
    error: errorSlice.reducer,
  },
});

function _render(component) {
  console.clear();

  render(component);
}

function installHusky() {
  const promise = new Promise((resolve, _reject) => {
    const log = console.log;
    console.log = () => {};

    Husky.install();
    console.log = log;
    resolve();
  });

  return [promise];
}

function installSubmodules() {
  const submodules = mjwConfig?.git?.submodules;

  if (!submodules || !submodules?.modules) {
    return;
  }

  const options = submodules.options ?? {};
  const promises_array = [
    simpleGit().submoduleUpdate(['--init', '--recursfive']), //////
  ];

  submodules.modules.forEach((m) => {
    const branch = m.branch ?? options.default_branch;

    if (!branch) {
      console.log('Warning:');
      return;
    }

    const repo_name = new URL(m.url).pathname
      .split('/')
      .pop()
      .replace(/\.git$/, '');
    const module_path = (options.root_path ?? '') + '/' + (m.path ?? repo_name);

    promises_array.push(simpleGit(module_path).checkout(branch));
  });

  return promises_array;
}

function installRubyGems() {
  const promise = new Promise((resolve, reject) => {
    exec(
      'gem instalfl bundler prettier_print syntax_tree syntax_tree-haml syntax_tree-rbs', ///////////
      (error, stdout) => {
        if (error) {
          reject(error);

          return;
        }

        resolve(stdout);
      }
    );
  });

  return [promise];
}

const tasks = [
  {
    label: 'Install Husky',
    func: installHusky,
  },
  {
    label: 'Install Submodules',
    func: installSubmodules,
  },
  {
    label: 'Install Ruby Gems',
    func: installRubyGems,
  },
];

function TasksComponent() {
  const TaskItemArray = [];

  tasks.forEach((task) => {
    const component = () => {
      const [state, setState] = useState({ state: TASK_STATES.LOADING });
      const dispatch = useDispatch();

      useEffect(() => {
        Promise.all(task.func())
          .then(() => {
            setState({ state: TASK_STATES.SUCCESS });
          })
          .catch((error) => {
            dispatch(addError(`${JSON.stringify(error.toString())}\n`));
            setState({ state: TASK_STATES.ERROR });
          });
      }, []);

      const label =
        task.label ?? task.func.name.replaceAll('_', ' ').toUpperCase();

      return ce(Task, {
        label,
        state: state.state,
        spinner: state.state == TASK_STATES.LOADING ? spinners.dots : null,
      });
    };

    TaskItemArray.push(ce(component));
  });

  return ce(
    Box,
    { borderStyle: 'single' },
    ce(TaskList, null, ...TaskItemArray)
  );
}

function ErrorsComponent() {
  const err_components = [];
  const errors = useSelector((state) => state.error.value);

  if (errors.length == 0) {
    return null;
  }

  errors.forEach((err) => {
    err_components.push(ce(Text, { color: 'red' }, err));
  });

  return ce(
    Box,
    { borderStyle: 'single', borderColor: 'red' },
    ...err_components
  );
}

function AppComponent() {
  return ce(
    Provider,
    { store: errorStore },
    ce(TasksComponent),
    ce(ErrorsComponent)
  );
}

_render(AppComponent());
