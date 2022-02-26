RSYNCED_SOURCE_PATH="."
RSYNCED_DEST_PATH="/vagrant"
SYNCED_SOURCE_PATH="shared"
SYNCED_DEST_PATH="/home/vagrant/shared"
PROVISION_PATH="provision"
WORKSPACE_MACHINE_NAME="workspace"
VCS_MACHINE_NAME="vcs"
NAME_PREFIX="mji"
DEFAULT_RAM=4*1024

Vagrant.configure("2") do |config|
  config.vm.box = "debian/bullseye64"

  config.vm.define WORKSPACE_MACHINE_NAME, primary: true do |ws|
    ws.vm.synced_folder RSYNCED_SOURCE_PATH, RSYNCED_DEST_PATH,
      type: "rsync", owner: "vagrant", group: "vagrant",
      rsync__exclude: [".git/", ".vagrant/", "docs", SYNCED_SOURCE_PATH]

    ws.vm.synced_folder "#{SYNCED_SOURCE_PATH}/#{WORKSPACE_MACHINE_NAME}", SYNCED_DEST_PATH,
      owner: "vagrant", group: "vagrant"

    ws.vm.provision "requirements", type: "ansible_local" do |ansible|
      ansible.playbook = "#{PROVISION_PATH}/playbooks/requirements/playbook.yml"
    end

    ws.vm.provision "bootstrap", type: "ansible_local" do |ansible|
      ansible.galaxy_role_file = "#{PROVISION_PATH}/playbooks/bootstrap/requirements.yml"
      ansible.playbook = "#{PROVISION_PATH}/playbooks/bootstrap/playbook.yml"
    end

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
