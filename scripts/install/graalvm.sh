#!/usr/bin/env bash


download() {
    local CACHE_PATH="/tmp/"
    local TAR_NAME="graalvm.tar.gz"
    local DOWNLOAD_URL="https://github.com/graalvm/graalvm-ce-builds/releases/download/vm-22.0.0.2/graalvm-ce-java17-linux-amd64-22.0.0.2.tar.gz"

    cd /tmp/ && \
    ([ -f $CACHE_PATH/$TAR_NAME ] || curl -L -# -o $TAR_NAME $DOWNLOAD_URL) && \
    ([ -d /tmp/.graalvm ] || mkdir .graalvm) && \
    tar xzvf $TAR_NAME -C .graalvm && \
    mv .graalvm ~
}

init() {
cat << 'EOF' >> "~/.graalvm/graalvm-ce-java17-22.0.0.2/bin/gvm"
#!/usr/bin/env bash

GRAALVM_BIN_PATH=$(dirname "$0")

$GRAALVM_BIN_PATH/$1 ${*:2}
EOF
}

set_env() {
    export JAVA_HOME=~/.graalvm/graalvm-ce-java17-22.0.0.2
    export PATH=~/.graalvm/graalvm-ce-java17-22.0.0.2/bin/gvm:$PATH
}

download && \
init && \
set_env

exit 0
