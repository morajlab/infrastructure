SYNCED_DIR_SOURCE="."
SYNCED_DIR_DEST="/home/vagrant/.infrastructure"
PROVISION_DIR="#{SYNCED_DIR_DEST}/provision"
SHELL_ARGS = <<-SCRIPT
  --nvm-url https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh
  --deno-url https://deno.land/x/install/install.sh
  --workspace-url https://github.com/morteza-jamali/file-manager-action.git
  --no-upgrade
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"

  config.vm.synced_folder SYNCED_DIR_SOURCE, SYNCED_DIR_DEST,
    type: "rsync", owner: "root", group: "root",
    rsync__exclude: [".git/", ".vagrant/"]

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "4096"
  end

  # config.vm.provision "test", type: "shell", run: "never" do |sh|
  #   sh.path = "#{TEST_SCRIPTS_PATH}/bootstrap.test.sh"
  #   sh.privileged = false
  #   sh.keep_color = true
  # end

  config.vm.provision "bootstrap", type: "shell" do |sh|
    sh.inline = "#{PROVISION_DIR}/bootstrap.provision.sh $*"
    sh.privileged = false
    sh.keep_color = true
    sh.args = <<-SCRIPT
      ${PARAMS=(#{SHELL_ARGS})[@]}
    SCRIPT
    sh.env = {
      SYNCED_DIR_DEST: SYNCED_DIR_DEST,
      PROVISION_DIR: PROVISION_DIR
    }
  end

  # config.trigger.before [:destroy, :halt] do |trigger|
  #   trigger.name = "VCS trigger"
  #   trigger.info = "Check VCS (version control system) status of workspace"
  #   trigger.run = { path: "#{PROVISION_SCRIPTS_PATH}/vcs.sh" }
  # end
end
