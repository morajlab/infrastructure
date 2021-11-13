# frozen_string_literal: true

module VagrantPlugins
  module VagrantInteractive
    class Plugin < Vagrant.plugin(2)
      name "vagrant-interactive"
      description "Create interactive terminal prompt for vagrant"

      command "interactive" do
        require_relative "vagrant-interactive/command"
        Command
      end
    end
  end
end