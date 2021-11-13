# frozen_string_literal: true

require_relative "vagrant_interactive/version"

module VagrantInteractive
  class Error < StandardError; end
  class MyPlugin < Vagrant.plugin("2")
    name "My Plugin"
  end
end
