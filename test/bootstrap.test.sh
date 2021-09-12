#!/bin/bash

PROVISION_DIR_PATH="$HOME/.infrastructure/provision"
SHELL_ARGS=<<- SCRIPT
  --nvm-url https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh
  --deno-url https://deno.land/x/install/install.sh
  --workspace-url https://github.com/morteza-jamali/winword.git
SCRIPT

source "$PROVISION_DIR_PATH/bootstrap.sh" <<- SCRIPT
    ${PARAMS=($shell_args)[@]}
SCRIPT
