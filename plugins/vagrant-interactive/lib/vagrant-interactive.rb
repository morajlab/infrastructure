# frozen_string_literal: true

module VagrantPlugins
  module VagrantInteractive
    class Plugin < Vagrant.plugin(2)
      name "vagrant-interactive"
      description "Create interactive terminal prompt for vagrant"

      command "interactive" do
        require File.expand_path("../command", __FILE__)
        Command
      end
    end
  end
end