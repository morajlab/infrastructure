const React = require('react');
const Husky = require('husky');
const spinners = require('cli-spinners');
const crc = require('create-react-class');
const { URL } = require('url');
const { TaskList, Task } = require('ink-task-list');
const { simpleGit } = require('simple-git');
const { render } = require('ink');

const mjwConfig = require('../mjw.config.json');

const TASK_STATES = {
  ERROR: 'error',
  SUCCESS: 'success',
  PENDING: 'pending',
  LOADING: 'loading',
};
const ce = React.createElement;

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

const tasks = [
  {
    label: 'Install Husky',
    func: installHusky,
  },
  {
    label: 'Install Submodules',
    func: installSubmodules,
  },
];

const TasksComponents = [];

tasks.forEach((task, key) => {
  const component = crc({
    getInitialState: function () {
      return { state: TASK_STATES.LOADING };
    },
    componentDidMount: function () {
      Promise.all(task.func())
        .then(() => {
          this.setState({ state: TASK_STATES.SUCCESS });
        })
        .catch(() => {
          this.setState({ state: TASK_STATES.ERROR });
        });
    },
    render: function () {
      const label =
        task.label ?? task.func.name.replaceAll('_', ' ').toUpperCase();

      return ce(Task, {
        label,
        state: this.state.state,
        spinner: this.state.state == TASK_STATES.LOADING ? spinners.dots : null,
      });
    },
  });

  TasksComponents.push(ce(component, { key }));
});

render(ce(TaskList, null, TasksComponents));
