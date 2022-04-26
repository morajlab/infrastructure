#!/usr/bin/env bash

CLI_ROOT_PATH=$(dirname $0)
ACTIVATE_FILE="${CLI_ROOT_PATH}/env/bin/activate"

if [[ ! -f $ACTIVATE_FILE ]]; then
	echo '*** Building `MJI` cli app ***'
	( cd $CLI_ROOT_PATH && make virtualenv ) &> /dev/null
fi

source $ACTIVATE_FILE && mji $*
