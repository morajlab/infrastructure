#!/usr/bin/env bash

PROVISION_PATH=$(dirname $(realpath $(dirname $0)))
TEMP_PATH=$(mktemp -d)

$PROVISION_PATH/scripts/install.sh

cp -r $PROVISION_PATH $TEMP_PATH
chmod 777 $TEMP_PATH/provision/ -R

echo -e "toor\ntoor" | passwd
useradd -m -s /bin/bash -G adm,dialout,cdrom,floppy,sudo,audio,dip,video,plugdev,netdev mjl
echo -e "mjl\nmjl" | passwd mjl

su -c "$TEMP_PATH/provision/bin/ansible.sh" mjl