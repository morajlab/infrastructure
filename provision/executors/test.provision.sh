#!/bin/bash

ROOT_DIR_PATH="../.."
SHELLSPEC_URL=""
SHELLSPEC_INIT=1

# Script options and arguments
SHELLSPEC_URL_OPTION="--url"
SHELLSPEC_INIT_OPTION="--init"

if [ ! -z "$SYNCED_DIR_DEST" ]; then
  ROOT_DIR_PATH="$SYNCED_DIR_DEST"
fi

source "$ROOT_DIR_PATH/provision/tasks/tasks.sh"

# Check options and arguments
while [ "$#" -gt 0 ]; do
  case "${1^^}" in
    "${SHELLSPEC_URL_OPTION^^}")
      SHELLSPEC_URL="$2"
      shift
      shift
    ;;
    "${SHELLSPEC_INIT_OPTION^^}")
      SHELLSPEC_INIT=0
      shift
    ;;
    *)
      shift
    ;;
  esac
done

# Check options and arguments
if [[ -z $SHELLSPEC_URL && $SHELLSPEC_INIT = 0 ]]; then
  log_error "Option '$SHELLSPEC_URL_OPTION' is not set !" -e
fi

if [[ $SHELLSPEC_INIT = 0 ]]; then
  install_shellspec $SHELLSPEC_URL
else
  if [[ $(run_by_ssh "echo $(command -v shellspec &> /dev/null && echo true)") != "true" ]]; then
    log_error "First run '$PRE_TEST_PROVISION_NAME' provision !" -e
  fi

  cd "$ROOT_DIR_PATH" &&
  shellspec --init &&
  shellspec
fi
