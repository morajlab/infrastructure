#!/bin/bash

SCRIPT_VERSION="1.0.0-beta"
CURRENT_DIR_PATH="$(dirname "$0")"
FILE_NAME=$(basename $0)
SCRIPTS_DIR_NAME="scripts"

# Include other scripts
source "$CURRENT_DIR_PATH/$SCRIPTS_DIR_NAME/binds.sh"
source "$CURRENT_DIR_PATH/$SCRIPTS_DIR_NAME/commands.sh"

echo "${options_commands[*]}"

check_args() {
  for arg in ${args[*]}; do
    echo "$arg"
  done
}

check_options() {
  for opt in ${options[@]}; do
    echo ${opt:2}
  done
}

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

# c++ webview.cc `pkg-config --cflags --libs gtk+-3.0 webkit2gtk-4.0` -o webview

exit 0
