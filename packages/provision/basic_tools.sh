#!/usr/bin/env bash

sudo apt update
sudo apt install \
  unzip \
  zip \
  dos2unix \
  tree \
  build-essential \
  openjdk-18-jdk-headless \
  -y

# sdkman
curl -s "https://get.sdkman.io" | bash
source "/home/vagrant/.sdkman/bin/sdkman-init.sh"

# docker engine
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

# fnm, nodejs, npm, yarn
curl -fsSL https://fnm.vercel.app/install | bash
source ~/.bashrc
fnm install --lts
npm i -g npm@latest
npm i -g yarn

# act
curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash
