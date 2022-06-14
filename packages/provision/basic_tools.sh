#!/usr/bin/env bash

export DEBIAN_FRONTEND=noninteractive

sudo apt update -y
sudo apt upgrade -y
sudo apt install \
  unzip \
  zip \
  dos2unix \
  tree \
  build-essential \
  openjdk-18-jdk-headless \
  -y

# sdkman
if $(command -v sdk &>/dev/null && echo false); then
  clear
  echo '============= Install sdkman ==========='
  #curl -s "https://get.sdkman.io" | bash
  #source "/home/vagrant/.sdkman/bin/sdkman-init.sh"
fi

# docker engine
if ! command -v docker &>/dev/null; then
  sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    -y
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
if ! command -v fnm &>/dev/null; then
  curl -fsSL https://fnm.vercel.app/install | bash
fi

. ~/.bashrc

if ! command -v node &>/dev/null; then
  fnm install --lts
  npm i -g npm@latest
fi

if ! command -v yarn &>/dev/null; then
  npm i -g yarn
fi

# act
if ! command -v act &>/dev/null; then
  curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash
  mkdir -p .act/bin
  sudo mv bin/act .act/bin/
  sudo rm -rf bin
fi
