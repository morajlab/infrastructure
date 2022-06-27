#!/usr/bin/env bash

shopt -s expand_aliases

PROVISION_PATH=$(dirname $(realpath $(dirname $0)))

alias is_installed="bash $(pwd)/bash_modules/bin/is_installed"

if [[ $(is_installed ansible --alias) = 1 ]]; then
    if [[ $(is_installed pip --alias) = 1 ]]; then
        cd $(mktemp -d)
        curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
        python3 get-pip.py --user
    fi

    python3 -m pip install --user ansible
fi

alias ansible-playbook="$HOME/.local/bin/ansible-playbook"

ansible-playbook -v --connection=local --inventory 127.0.0.1, $PROVISION_PATH/playbooks/playbook.yml