start_web_server() {
  deno run --allow-net --allow-read "$CURRENT_DIR_PATH/src/server.ts"
}
