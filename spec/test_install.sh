#!/usr/bin/env bash

shopt -s expand_aliases

ROOT_PATH=$(dirname $(realpath $(dirname $0)))
install="source $ROOT_PATH/scripts/install.sh"

alias log="$ROOT_PATH/packages/bash-scripts/packages/log/bin/log"

# test 1
alias git=
alias node=
($install)

if [[ $? != 2 ]]; then
  log error "Test #1 failed"
  exit 1
fi

log success "Test #1 passed successfully"

alias yarn=
alias npm=
($install)

if [[ $? != 4 ]]; then
  log error "Test #2 failed"
  exit 1
fi

log success "Test #2 passed successfully"

unalias git node yarn npm

# # test 3
# $install

# if [[ $? != 0 ]]; then
#   log error "Test #3 failed"
#   exit 1
# fi

# log success "Test #3 passed successfully"

log success "All tests passed successfully"
