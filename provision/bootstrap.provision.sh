#!/bin/bash

ROOT_DIR_PATH=".."
NVM_INSTALL_URL=""
DENO_INSTALL_URL=""
WORKSPACE_URL=""
UPGRADE_SYS_LIBS=0

# Script options and arguments
NVM_INSTALL_OPTION="--nvm-url"
DENO_INSTALL_OPTION="--deno-url"
WORKSPACE_CLONE_OPTION="--workspace-url"
NO_UPGRADE_OPTION="--no-upgrade"

if [ ! -z "$SYNCED_DIR_DEST" ]; then
  ROOT_DIR_PATH="$SYNCED_DIR_DEST"
fi

source "$ROOT_DIR_PATH/task/tasks.sh"

# Check options and arguments
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

# Validate arguments and options
if [ -z "$NVM_INSTALL_URL" ]; then
  log_error "Option '$NVM_INSTALL_OPTION' is not set !" -e
elif [ -z "$DENO_INSTALL_URL" ]; then
  log_error "Option '$DENO_INSTALL_OPTION' is not set !" -e
elif [ -z "$WORKSPACE_URL" ]; then
  log_error "Option '$WORKSPACE_CLONE_OPTION' is not set !" -e
fi

if [[ $UPGRADE_SYS_LIBS = 0 ]]; then
  upgrade_sys_libs
fi

install_prerequisites
install_nvm "$NVM_INSTALL_URL"
install_deno "$DENO_INSTALL_URL"
run_by_ssh "$(cat <<- SCRIPT
  export SYNCED_DIR_DEST=$ROOT_DIR_PATH &&
  source $ROOT_DIR_PATH/task/tasks.sh &&
  install_node &&
  install_yarn
SCRIPT
)"
install_workspace "$WORKSPACE_URL"
