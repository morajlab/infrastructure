#!/usr/bin/env bash

export DEBIAN_FRONTEND=noninteractive

shopt -s expand_aliases

PACKAGES_PATH=$(dirname $(realpath $(dirname $0)))/bash_modules

alias is_installed=$PACKAGES_PATH/bin/is_installed

# TODO: Create preseed config
# sudo apt update -y
# sudo apt upgrade -y
# sudo apt install \
#   unzip \
#   zip \
#   dos2unix \
#   tree \
#   build-essential \
#   openjdk-18-jdk-headless \
#   -y

# sdkman
if [[ $(is_installed sdk --alias) = 1 ]]; then
  curl -s "https://get.sdkman.io" | bash
  source "/home/vagrant/.sdkman/bin/sdkman-init.sh"
fi

# docker engine
if [[ $(is_installed docker --alias) = 1 ]]; then
  # TODO: Create preseed config
  # sudo apt-get install \
  #   ca-certificates \
  #   curl \
  #   gnupg \
  #   lsb-release \
  #   -y
  sudo mkdir -p /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  echo \
   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  sudo apt-get update
  sudo apt-get install \
    docker-ce \
    docker-ce-cli \
    containerd.io \
    docker-compose-plugin \
    -y
fi

# fnm, nodejs, npm, yarn
if [[ $(is_installed fnm --alias) = 1 ]]; then
  curl -fsSL https://fnm.vercel.app/install | bash
fi

. ~/.bashrc

if [[ $(is_installed node --alias) = 1 ]]; then
  fnm install --lts
  npm i -g npm@latest
fi

if [[ $(is_installed yarn --alias) = 1 ]]; then
  npm i -g yarn
fi

# act
if [[ $(is_installed act --alias) = 1 ]]; then
  curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash
  mkdir -p .act/bin
  sudo mv bin/act .act/bin/
  sudo rm -rf bin
fi
