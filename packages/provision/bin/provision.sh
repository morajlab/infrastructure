#!/usr/bin/env bash

PROVISION_PATH=$(dirname $(realpath $(dirname $0)))
TEMP_PATH=$(mktemp -d)

echo -e "toor\ntoor" | passwd
useradd -m -s /bin/bash -G adm,dialout,cdrom,floppy,sudo,audio,dip,video,plugdev,netdev mjl
echo -e "mjl\nmjl" | passwd mjl

cp -r $PROVISION_PATH $TEMP_PATH

chown mjl:mjl $TEMP_PATH -R
chmod 777 $TEMP_PATH/provision -R

su -c "cd $TEMP_PATH/provision && ./bin/ansible.sh" mjl