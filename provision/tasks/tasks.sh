#!/bin/bash

ROOT_DIR_PATH="../.."

if [ ! -z "$SYNCED_DIR_DEST" ]; then
  ROOT_DIR_PATH="$SYNCED_DIR_DEST"
fi

source "$ROOT_DIR_PATH/provision/core/core.sh"

# Upgrade system libraries
upgrade_sys_libs() {
  sudo apt update -y && sudo apt upgrade -y
}

# Add cron jobs
add_cron_jobs() {
  append_unique "export ML_INFRA_ROOT_PATH=$ROOT_DIR_PATH && bash $ROOT_DIR_PATH/provision/executors/cron.provision.sh" ~/.bashrc
}

# Install prerequisites
install_prerequisites() {
  if [[ $(is_installed unzip) = "false" ]]; then
    sudo apt install unzip -y
  fi
  if [[ $(is_installed python3-pip) = "false" ]]; then
    sudo apt install python3-pip -y
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
npm i -g yarn &&
cat >> ~/.bashrc <<- EOF
if [[ ! "\$PATH" == *"\$HOME/.yarn/bin"* ]]; then
  export PATH="\$HOME/.yarn/bin:\$PATH"
fi
EOF
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

# Install vscode server
install_code_server() {
  if [[ $(is_installed code-server) = "false" ]]; then
    ( curl -fsSL "$1" | bash ) &&
    sudo systemctl enable --now code-server@$USER
  fi
}

# Configure code server
configure_code_server() {
  local path=~/.config/code-server/config.yaml

  if [[ -f "$path" && $(string_exist "auth: none" "$path") != "true" ]]; then
    sed -i.bak 's/auth: password/auth: none/' "$path"
    sudo systemctl restart code-server@$USER
  fi
}

# Clone workspace monorepo
clone_workspace() {
  local path="$HOME/workspace"

  if [ ! -d $path ]; then
    git clone "$1" $path
  fi
}

# Install shellspec
install_shellspec() {
  if [[ $(run_by_ssh "echo $(command -v shellspec &> /dev/null && echo true)") != "true" ]]; then
    curl -fsSL "$1" | sh -s -- --yes
  fi
}

# Set file watch maximun
set_file_watch_limit() {
  local max_user_watches=524288

  if [[ $(sysctl fs.inotify.max_user_watches -n) != "$max_user_watches" ]]; then
    echo fs.inotify.max_user_watches=$max_user_watches | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
  fi
}

# Install windscribe vpn
install_windscribe() {
  if [[ $(is_installed windscribe) = "false" ]]; then
    sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key FDC247B7 &&
    echo 'deb https://repo.windscribe.com/ubuntu bionic main' | sudo tee /etc/apt/sources.list.d/windscribe-repo.list &&
    sudo apt-get update -y &&
    sudo apt-get install windscribe-cli -y
  fi
}