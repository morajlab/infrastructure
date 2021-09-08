#!/bin/bash

NVM_INSTALL_URL=""
DENO_INSTALL_URL=""
WORKSPACE_URL=""
UPGRADE_SYS_LIBS=0
SHOW_LOG=1

tty -s

# Run option commands
while [ "$#" -gt 0 ]; do
  case "$1" in
    --nvm-url)
      NVM_INSTALL_URL="$2"
      shift
      shift
    ;;
    --deno-url)
      DENO_INSTALL_URL="$2"
      shift
      shift
    ;;
    --workspace-url)
      WORKSPACE_URL="$2"
      shift
      shift
    ;;
    --no-upgrade)
      UPGRADE_SYS_LIBS=1
      shift
    ;;
    --show-log)
      SHOW_LOG=0
      shift
    ;;
    *)
      shift
    ;;
  esac
done

# Toggle log display
if [ $SHOW_LOG = 1 ]; then
  exec 3>&1 &>/dev/null
else
  exec 3>&1
fi

if [ -z "$NVM_INSTALL_URL" ] || \
   [ -z "$DENO_INSTALL_URL" ] || \
   [ -z "$WORKSPACE_URL" ]; then
  echo "ERROR:: Arguments are not set properly !"
  exit 1
fi

# Run commands using SSH
run_by_ssh() {
  sudo -H -u vagrant bash -i -c "$(echo $1)"
}

# Upgrade system libraries
task_1() {
  sudo apt update -y && sudo apt upgrade -y
}

# Install prerequisites
task_2() {
  sudo apt install unzip -y
  sudo apt install python3-pip -y
}

# Install nvm (nodejs version manager)
task_3() {
  curl -o- "$NVM_INSTALL_URL" | bash
}

# Install latest LTS version of nodejs
task_4() {
run_by_ssh "$(cat <<- SCRIPT
  nvm --version && nvm install --lts
SCRIPT
)"
}

# Install yarn
task_5() {
run_by_ssh "$(cat <<- SCRIPT
  node -v && npm -v && npm i -g yarn
SCRIPT
)"
}

# Install deno
task_6() {
  curl -fsSL "$DENO_INSTALL_URL" | bash
}

task_7() {
cat >> ~/.bashrc <<- EOF
  if ! command -v deno &> /dev/null; then
    export PATH="$HOME/.deno/bin:$PATH"
  fi
EOF
}

# Clone workspace monorepo
task_8() {
  git clone "$WORKSPACE_URL" "$HOME/workspace"
}

# Run tasks
if [ $UPGRADE_SYS_LIBS = 0 ]; then
  task_1  
fi

task_2
task_3
task_4
task_5
task_6
task_7
task_8