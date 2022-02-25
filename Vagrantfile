RSYNCED_SOURCE_PATH="."
RSYNCED_DEST_PATH="/vagrant"
SYNCED_SOURCE_PATH="shared"
SYNCED_DEST_PATH="/home/vagrant/shared"
PROVISION_PATH="provision"
WORKSPACE_MACHINE_NAME="workspace"
VCS_MACHINE_NAME="vcs"

Vagrant.configure("2") do |config|
  config.vm.define WORKSPACE_MACHINE_NAME, primary: true do |ws|
    ws.vm.box = "ubuntu/impish64"

    ws.vm.synced_folder RSYNCED_SOURCE_PATH, RSYNCED_DEST_PATH,
      type: "rsync", owner: "vagrant", group: "vagrant",
      rsync__exclude: [".git/", ".vagrant/", "docs", SYNCED_SOURCE_PATH]

    ws.vm.synced_folder "#{SYNCED_SOURCE_PATH}/#{WORKSPACE_MACHINE_NAME}", SYNCED_DEST_PATH,
      owner: "vagrant", group: "vagrant"

    ws.vm.provision "bootstrap", type: "ansible_local" do |ansible|
      ansible.galaxy_role_file = "#{PROVISION_PATH}/playbooks/bootstrap/requirements.yml"
      ansible.playbook = "#{PROVISION_PATH}/playbooks/bootstrap/playbook.yml"
    end
  end

  config.vm.define VCS_MACHINE_NAME do |vcs|
    vcs.vm.box = "debian/bullseye64"

    vcs.vm.synced_folder RSYNCED_SOURCE_PATH, RSYNCED_DEST_PATH,
      type: "rsync", owner: "vagrant", group: "vagrant",
      rsync__exclude: [".git/", ".vagrant/", "docs", SYNCED_SOURCE_PATH]

    vcs.vm.synced_folder "#{SYNCED_SOURCE_PATH}/#{VCS_MACHINE_NAME}", SYNCED_DEST_PATH,
      owner: "vagrant", group: "vagrant"
  end

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "4096"
  end
end
