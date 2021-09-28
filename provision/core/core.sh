#!/bin/bash

# Run commands using SSH
run_by_ssh() {
  sudo -H -u vagrant bash -i -c "$(echo $1)"
}

# Echo data
eko() {
  local redirect=${2:-"1"}

  if [[ $redirect = 0 ]]; then
    echo $1 >&3
  elif [[ $redirect = 1 ]]; then
    echo $1
  fi
}

# Check string existence in a file
string_exist() {
  grep -Fxq "$1" "$2" && echo "true"
}

# Append string to file if doesn't exist
append_unique() {
  if $(run_by_ssh "! grep -Fxq \"$1\" $2"); then
    echo "$1" >> "$2"
  fi
}

# Check library has been installed
is_installed() {
  if $(run_by_ssh "command -v $1 &> /dev/null"); then
    echo "true"
  else
    echo "false"
  fi
}

# Hide logs
hide_logs() {
  tty -s
  exec 3>&1 &>/dev/null
}

# Colorize message
colorize_msg() {
  local color_name=${2:-"white"}
  local escape="\033"
  local reset="[0m"
  local red="[31m"
  local green="[32m"
  local color=""

  case ${2^^} in
    RED)
      color=$red
    ;;
    GREEN)
      color=$green
    ;;
    WHITE)
      color=$reset
    ;;
  esac

  echo -e "${escape}$color$1${escape}$reset"
}

# Log messages
log_msg() {
  local type=${2:-"-d"}
  local msg=""

  case ${type^^} in
    -E)
      msg=$(colorize_msg "$1" red)
    ;;
    -S)
      msg=$(colorize_msg "$1" green)
    ;;
    -D)
      msg=$(colorize_msg "$1" white)
    ;;
  esac

  echo "$msg"
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
| ${b//?/ } |"

  for l in "${s[@]}"; do
    printf '| %s%*s%s |\n' "$(tput setaf 4)" "-$w" "$l" "$(tput setaf 3)"
  done

  echo "| ${b//?/ } |
 -${b//?/-}-"

  tput sgr 0
}
