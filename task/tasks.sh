#!/bin/bash

ROOT_DIR_PATH=".."

if [ ! -z "$SYNCED_DIR_DEST" ]; then
  ROOT_DIR_PATH="$SYNCED_DIR_DEST"
fi

source "$ROOT_DIR_PATH/core/core.sh"

# Upgrade system libraries
upgrade_sys_libs() {
  sudo apt update -y && sudo apt upgrade -y
}

# Install prerequisites
install_prerequisites() {
  if [[ $(is_installed unzip) = "false" ]]; then
    sudo apt install unzip -y
  fi
}

# Install nvm (nodejs version manager)
install_nvm() {
  if [[ $(is_installed nvm) = "false" ]]; then
    curl -o- "$1" | bash
  fi
}

# Install latest LTS version of nodejs
install_node() {
  if [[ $(is_installed nvm) = "true" &&
    $(is_installed node) = "false" ]]; then
    nvm install --lts
  fi
}

# Install yarn
install_yarn() {
  if [[ $(is_installed npm) = "true" &&
    $(is_installed yarn) = "false" ]]; then
    npm i -g yarn
  fi
}

# Install deno
install_deno() {
if [[ $(is_installed deno) = "false" ]]; then
( curl -fsSL "$1" | bash ) &&
cat >> ~/.bashrc <<- EOF
if ! command -v deno &> /dev/null; then
  export PATH="\$HOME/.deno/bin:\$PATH"
fi
EOF
fi
}

# Clone workspace monorepo
install_workspace() {
if [[ $(is_installed mlw) = "false" ]]; then
git clone "$1" "$HOME/.morajlab" &&
cat >> ~/.bashrc <<- EOF
  if ! command -v mlw &> /dev/null; then
    export PATH="\$HOME/.morajlab/bin:\$PATH"
  fi
EOF
fi
}

# Install shellspec
install_shellspec() {
  if [[ $(run_by_ssh "echo $(command -v shellspec &> /dev/null && echo true)") != "true" ]]; then
    curl -fsSL "$1" | sh -s -- --yes
  fi
}
