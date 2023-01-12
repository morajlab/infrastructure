const React = require('react');
const Husky = require('husky');
const spinners = require('cli-spinners');
const crc = require('create-react-class');
const { URL } = require('url');
const { TaskList, Task } = require('ink-task-list');
const { exec } = require('child_process');
const { simpleGit } = require('simple-git');
const { render, Box, Text } = require('ink');

const mjwConfig = require('../mjw.config.json');

const TASK_STATES = {
  ERROR: 'error',
  SUCCESS: 'success',
  PENDING: 'pending',
  LOADING: 'loading',
};
const ce = React.createElement;

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
    simpleGit().submoduleUpdate(['--init', '--recursive']),
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
      'gem instalfl bundler prettier_print syntax_tree syntax_tree-haml syntax_tree-rbs',
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
    const component = crc({
      getInitialState: function () {
        return { state: TASK_STATES.LOADING };
      },
      componentDidMount: function () {
        Promise.all(task.func())
          .then(() => {
            this.setState({ state: TASK_STATES.SUCCESS });
          })
          .catch((error) => {
            // this.props.addErrorCallback(error.toString());
            this.props.addErrorCallback('error.toString()');
            this.setState({ state: TASK_STATES.ERROR });
          });
      },
      render: function () {
        const label =
          task.label ?? task.func.name.replaceAll('_', ' ').toUpperCase();

        return ce(Task, {
          label,
          state: this.state.state,
          spinner:
            this.state.state == TASK_STATES.LOADING ? spinners.dots : null,
        });
      },
    });

    TaskItemArray.push((addErrorCallback) =>
      ce(component, { addErrorCallback })
    );
  });

  return crc({
    render: function () {
      const ItemArray = [];

      TaskItemArray.forEach((item) => {
        ItemArray.push(item(this.props.addErrorCallback));
      });

      return ce(
        Box,
        { borderStyle: 'single' },
        ce(TaskList, null, ...ItemArray)
      );
    },
  });
}

function ErrorsComponent() {
  return crc({
    render: function () {
      const err_components = [];

      if (this.props.errors) {
        this.props.errors.forEach((err) => {
          err_components.push(ce(Text, { color: 'red' }, err));
        });
      }

      if (err_components.length == 0) {
        return null;
      }

      return ce(
        Box,
        { borderStyle: 'single', borderColor: 'red' },
        ...err_components
      );
    },
  });
}

function AppComponent() {
  const component = crc({
    getInitialState: function () {
      return {
        errors: [],
      };
    },
    addError: function (error) {
      this.setState({ errors: [...this.state.errors, error] });
    },
    render: function () {
      return ce(
        React.Fragment,
        null,
        ce(TasksComponent(), { addErrorCallback: this.addError }),
        ce(ErrorsComponent(), { errors: this.state.errors })
      );
    },
  });

  return ce(component);
}

_render(AppComponent());
