module VagrantPlugins
  module VagrantInteractive
    class Command < Vagrant.plugin(2, :command)
      def self.synopsis
        "create interactive mode for vagrant"
      end

      def execute
        options = {}
        options[:force] = false

        opts = OptionParser.new do |o|
          o.banner = "Usage: vagrant interactive"
          o.separator ""

          o.on("-f", "--force", "Force interactive mode") do |f|
            options[:force] = f
          end

          o.on("-w", "--workspace-url URL", "Workspace url") do |workspace_url|
            options[:workspace_url] = workspace_url
          end
        end

        # Parse the options
        argv = parse_options(opts)

        print options
        # @env.ui.info("Workspace url => #{argv}")

        return if !argv


        # machines = []
        # with_target_vms(argv) do |machine|
        #   machines << machine
        #   machine.action(:reload, options)
        # end

        # # Output the post-up messages that we have, if any
        # machines.each do |m|
        #   next if !m.config.vm.post_up_message
        #   next if m.config.vm.post_up_message == ""

        #   # Add a newline to separate things.
        #   @env.ui.info("", prefix: false)

        #   m.ui.success(I18n.t(
        #     "vagrant.post_up_message",
        #     name: m.name.to_s,
        #     message: m.config.vm.post_up_message))
        # end

        # Success, exit status 0
        0
      end
    end
  end
end
