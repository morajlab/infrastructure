workspace(name = "morajlab_infrastructure")

load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazelruby_rules_ruby//ruby:defs.bzl", "ruby_bundle")
load(
  "@bazelruby_rules_ruby//ruby:deps.bzl",
  "rules_ruby_dependencies",
  "rules_ruby_select_sdk",
)

git_repository(
  name = "bazelruby_rules_ruby",
  remote = "https://github.com/bazelruby/rules_ruby.git"
)

rules_ruby_dependencies()

rules_ruby_select_sdk(version = "3.0.2")

ruby_bundle(
  name = "bundle",
  bundler_version = "2.1.4",
  excludes = {
      "mini_portile": ["test/**/*"],
  },
  gemfile = "//:Gemfile",
  gemfile_lock = "//:Gemfile.lock",
)
