#!/usr/bin/env bash

shopt -s expand_aliases

# Install bpm
if ! command -v bpm &>/dev/null; then
  curl -fsSL https://raw.githubusercontent.com/morajlab/bpm/master/packages/install/install.sh | bash
else
  echo 'bpm already installed !'
fi

alias bpm=$HOME/.bpm/bpm

# TODO: Add this feature to bpm installer script
bpm install is_installed
