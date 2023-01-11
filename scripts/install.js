const { URL } = require('url');
const Husky = require('husky');
const { simpleGit } = require('simple-git');
const mjwConfig = require('../mjw.config.json');

Husky.install();

function install_submodules() {
  const submodules = mjwConfig?.git?.submodules;

  if (!submodules || !submodules?.modules) {
    return;
  }

  const options = submodules.options ?? {};

  simpleGit().submoduleUpdate(['--init', '--recursive']);

  const modules_promises = [];

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

    modules_promises.push(simpleGit(module_path).checkout(branch));
  });

  Promise.allSettled(modules_promises).then((results) =>
    results.forEach((result) => console.log(result))
  );
}

install_submodules();
