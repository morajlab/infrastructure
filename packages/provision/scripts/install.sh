#!/usr/bin/env bash

# Install bpm
if ! command -v bpm &>/dev/null; then
  curl -fsSL https://raw.githubusercontent.com/morajlab/bpm/master/packages/install/install.sh | bash
else
  echo 'bpm already installed !'
fi

# TODO: Add this feature to bpm installer script
$HOME/.bpm/bpm install is_installed
