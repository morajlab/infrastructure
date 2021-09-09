#!/bin/bash

NVM_INSTALL_URL=""
DENO_INSTALL_URL=""
WORKSPACE_URL=""
UPGRADE_SYS_LIBS=0

# Script options
NVM_INSTALL_OPTION="--nvm-url"
DENO_INSTALL_OPTION="--deno-url"
WORKSPACE_CLONE_OPTION="--workspace-url"
NO_UPGRADE_OPTION="--no-upgrade"

tty -s

# Run option commands
while [ "$#" -gt 0 ]; do
  case "${1^^}" in
    "${NVM_INSTALL_OPTION^^}")
      NVM_INSTALL_URL="$2"
      shift
      shift
    ;;
    "${DENO_INSTALL_OPTION^^}")
      DENO_INSTALL_URL="$2"
      shift
      shift
    ;;
    "${WORKSPACE_CLONE_OPTION^^}")
      WORKSPACE_URL="$2"
      shift
      shift
    ;;
    "${NO_UPGRADE_OPTION^^}")
      UPGRADE_SYS_LIBS=1
      shift
    ;;
    *)
      shift
    ;;
  esac
done

# Hide logs
exec 3>&1 &>/dev/null

# Log messages
log_msg() {
  local type=${2:-"-d"}
  local reset="\033[0m"
  local color="\033"

  case ${type^^} in
    -E)
      color="$color[31m"
    ;;
    -S)
      color="$color[32m"
    ;;
    -D)
      color=$reset
    ;;
  esac

  echo -e "${color}$1$reset" >&3
}

log_error() {
  log_msg "ERROR:: $1" -e

  if [[ ${2^^} = "-E" ]]; then
    exit 1
  fi
}

box_drawer() {
  local s=("$@") b w

  for l in "${s[@]}"; do
    ((w<${#l})) && { b="$l"; w="${#l}"; }
  done

  tput setaf 3

  echo " -${b//?/-}-
| ${b//?/ } |" >&3

  for l in "${s[@]}"; do
    printf '| %s%*s%s |\n' "$(tput setaf 4)" "-$w" "$l" "$(tput setaf 3)" >&3
  done

  echo "| ${b//?/ } |
 -${b//?/-}-" >&3

  tput sgr 0
}

# Check options are set properly
if [ -z "$NVM_INSTALL_URL" ]; then
  log_error "Option '$NVM_INSTALL_OPTION' is not set !" -e
elif [ -z "$DENO_INSTALL_URL" ]; then
  log_error "Option '$DENO_INSTALL_OPTION' is not set !" -e
elif [ -z "$WORKSPACE_URL" ]; then
  log_error "Option '$WORKSPACE_CLONE_OPTION' is not set !" -e
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