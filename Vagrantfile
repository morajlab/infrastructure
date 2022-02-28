RSYNCED_SOURCE_PATH="."
RSYNCED_DEST_PATH="/vagrant"
SYNCED_SOURCE_PATH="shared"
SYNCED_DEST_PATH="/home/vagrant/shared"
WORKSPACE_MACHINE_NAME="workspace"
VCS_MACHINE_NAME="vcs"
NAME_PREFIX="mji"
DEFAULT_RAM=4*1024

Vagrant.configure("2") do |config|
  config.vm.box = "morajlab/debian-bullseye64"

  config.vm.define WORKSPACE_MACHINE_NAME, primary: true do |ws|
    ws.vm.synced_folder RSYNCED_SOURCE_PATH, RSYNCED_DEST_PATH,
      type: "rsync", owner: "vagrant", group: "vagrant",
      rsync__exclude: [".git/", ".vagrant/", "docs", SYNCED_SOURCE_PATH]

    ws.vm.synced_folder "#{SYNCED_SOURCE_PATH}/#{WORKSPACE_MACHINE_NAME}", SYNCED_DEST_PATH,
      owner: "vagrant", group: "vagrant"

    ws.vm.provider "virtualbox" do |vb|
      vb.name = "#{NAME_PREFIX}_#{WORKSPACE_MACHINE_NAME}"
      vb.gui = false
      vb.memory = DEFAULT_RAM
    end
  end

  config.vm.define VCS_MACHINE_NAME do |vcs|
    vcs.vm.synced_folder RSYNCED_SOURCE_PATH, RSYNCED_DEST_PATH,
      type: "rsync", owner: "vagrant", group: "vagrant",
      rsync__exclude: [".git/", ".vagrant/", "docs", SYNCED_SOURCE_PATH]

    vcs.vm.synced_folder "#{SYNCED_SOURCE_PATH}/#{VCS_MACHINE_NAME}", SYNCED_DEST_PATH,
      owner: "vagrant", group: "vagrant"

    vcs.vm.provider "virtualbox" do |vb|
      vb.name = "#{NAME_PREFIX}_#{VCS_MACHINE_NAME}"
      vb.gui = false
      vb.memory = DEFAULT_RAM
    end
  end
end
