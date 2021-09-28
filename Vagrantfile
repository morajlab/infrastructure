SYNCED_DIR_SOURCE="."
SYNCED_DIR_DEST="/home/vagrant/.infrastructure"
PROVISION_EXECUTORS_DIR="#{SYNCED_DIR_DEST}/provision/executors"

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"

  config.vm.synced_folder SYNCED_DIR_SOURCE, SYNCED_DIR_DEST,
    type: "rsync", owner: "vagrant", group: "vagrant",
    rsync__exclude: [".git/", ".vagrant/"]

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "4096"
  end

  config.vm.provision "pre_test", type: "shell", run: "never" do |sh|
    sh.inline = "#{PROVISION_EXECUTORS_DIR}/test.provision.sh $*"
    sh.privileged = false
    sh.keep_color = true
    sh.args = <<-SCRIPT
      ${PARAMS=(
        --url https://git.io/shellspec
        --init
      )[@]}
    SCRIPT
    sh.env = {
      SYNCED_DIR_DEST: SYNCED_DIR_DEST
    }
  end

  config.vm.provision "test", type: "shell", run: "never" do |sh|
    sh.inline = "#{PROVISION_EXECUTORS_DIR}/test.provision.sh"
    sh.privileged = false
    sh.keep_color = true
    sh.env = {
      SYNCED_DIR_DEST: SYNCED_DIR_DEST,
      PRE_TEST_PROVISION_NAME: "pre_test"
    }
  end

  config.vm.provision "bootstrap", type: "shell" do |sh|
    sh.inline = "#{PROVISION_EXECUTORS_DIR}/bootstrap.provision.sh $*"
    sh.privileged = false
    sh.keep_color = true
    sh.args = <<-SCRIPT
      ${PARAMS=(
        --nvm-url https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh
        --deno-url https://deno.land/x/install/install.sh
        --workspace-url https://github.com/morajlab/workspace.git
        --code-server-url https://code-server.dev/install.sh
      )[@]}
    SCRIPT
    sh.env = {
      SYNCED_DIR_DEST: SYNCED_DIR_DEST
    }
  end

  config.trigger.before :all do |trigger|
    trigger.info = "Initialize infrastructure"
    trigger.run = { inline: ".\\scripts\\init.bat" }
    trigger.ignore = [:destroy, :halt]
  end

  # config.trigger.before [:destroy, :halt] do |trigger|
  #   trigger.name = "VCS trigger"
  #   trigger.info = "Check VCS (version control system) status of workspace"
  #   trigger.run = { path: "#{PROVISION_SCRIPTS_PATH}/vcs.sh" }
  # end
end
