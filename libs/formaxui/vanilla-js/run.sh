#!/bin/bash

SCRIPT_VERSION="1.0.0-beta"
CURRENT_DIR_PATH="$(dirname "$0")"
FILE_NAME=$(basename $0)
SCRIPTS_DIR_NAME="scripts"

# Include other scripts
source "$CURRENT_DIR_PATH/$SCRIPTS_DIR_NAME/binds.sh"
source "$CURRENT_DIR_PATH/$SCRIPTS_DIR_NAME/commands.sh"

# Run argument commands
check_args() {
  for arg in ${args[*]}; do
    case "$arg" in
      "compile")
        compile
      ;;
      "serve")
        start_web_server
      ;;
      *)
        echo "ERROR:: Argument '$arg' not found !"
      ;;
    esac
  done
}

# Run option commands
check_options() {
  for opt in ${options[@]}; do
    opt=${opt:2}

    case "$opt" in
      "help")
        get_help
      ;;
      *)
        echo "ERROR:: Option '$opt' not found !"
        exit 1
      ;;
    esac
  done
}

# Check input arguments, options and etc.
check_inputs() {
  args=()
  options=()

  if [ -z $1 ]; then
    echo "You havn't entered any parameteres !"
    exit 1
  fi

  for arg in "$@"; do
    case "$arg" in
      --*)
        options+=( "$arg" )
      ;;
      *)
        args+=( "$arg" )
      ;;
    esac
  done

  if [ ${#args[@]} != 0 ]; then
    check_args $args
  fi

  if [ ${#options[@]} != 0 ]; then
    check_options $options
  fi
}

check_inputs $@

exit 0
