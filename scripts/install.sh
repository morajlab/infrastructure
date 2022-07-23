#!/usr/bin/env bash

# shopt -s expand_aliases

ROOT_PATH=$(dirname $(realpath $(dirname $0)))
# is_installed="source $ROOT_PATH/packages/bash-scripts/packages/is_installed/bin/is_installed"
install_husky="$ROOT_PATH/node_modules/.bin/husky install"
# requirements=("git" "node" "npm")
package_manager="yarn"
installation_script=
# error=0

# alias log="$ROOT_PATH/packages/bash-scripts/packages/log/bin/log"

while [ "$#" -gt 0 ]; do
  case "${1^^}" in
    "--PACKAGE-MANAGER" | "--PM")
      package_manager="$2"

      shift
      shift
    ;;
    *)
      shift
    ;;
  esac
done

if [[ ${package_manager^^} = "YARN" ]]; then
  # requirements+=("yarn")
  installation_script='yarn'
elif [[ ${package_manager^^} = "NPM" ]]; then
  installation_script='npm i'
else
  # log error "package manager '$package_manager' is invalid"
  exit 1
fi

# for req in ${requirements[@]}; do
#   if [[ $($is_installed $req --alias) = 1 ]]; then
#     log error "'$req' is not installed"
#     error=$(($error+1))
#   fi
# done

# [[ $error != 0 ]] && exit $error

git submodule update --init --recursive && \
git submodule foreach --recursive 'git checkout -b submodules | echo -n' && \
$installation_script && \
$install_husky && \
gem install bundler prettier_print syntax_tree syntax_tree-haml syntax_tree-rbs && \
git submodule foreach --recursive $install_husky

# [[ $? = 0 ]] && log success "Workspace installed successfully"
