#!/usr/bin/env bash

# Install bpm
if ! command -v bpm &>/dev/null; then
  curl -fsSL https://raw.githubusercontent.com/morajlab/bpm/master/packages/install/install.sh | bash

  # TODO: Add this feature to bpm installer script
  echo 'export PATH=$HOME/.bpm:$PATH' >> $HOME/.bashrc
else
  echo 'bpm already installed !'
fi

. $HOME/.bashrc

bpm install is_installed
