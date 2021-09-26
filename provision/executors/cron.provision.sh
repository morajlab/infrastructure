#!/bin/bash

ROOT_DIR_PATH="../.."

if [ ! -z "$ML_INFRA_ROOT_PATH" ]; then
  ROOT_DIR_PATH="$ML_INFRA_ROOT_PATH"
fi

SYNCED_DIR_DEST=$ROOT_DIR_PATH

source "$ROOT_DIR_PATH/provision/tasks/tasks.sh"

configure_code_server
