#!/bin/bash

shell_args=<<- SCRIPT
  --nvm-url https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh
  --deno-url https://deno.land/x/install/install.sh
  --workspace-url https://github.com/morteza-jamali/winword.git
SCRIPT

"../provision/bootstrap.sh" <<- SCRIPT
    ${PARAMS=($shell_args)[@]}
SCRIPT