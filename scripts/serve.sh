#!/bin/sh

app_name=$1

[ ! -z $1 ] || read -p "What's your app name ? " app_name

npx nx run $app_name:serve
