RSYNCED_SOURCE_PATH="."
RSYNCED_DEST_PATH="/vagrant"
SYNCED_SOURCE_PATH="shared"
SYNCED_DEST_PATH="/home/vagrant/shared"
PROVISION_PATH="provision"

Vagrant.configure("2") do |config|
  config.vm.define "morajlab_infra", primary: true do |mji|
    mji.vm.box = "ubuntu/impish64"

    mji.vm.synced_folder RSYNCED_SOURCE_PATH, RSYNCED_DEST_PATH,
      type: "rsync", owner: "vagrant", group: "vagrant",
      rsync__exclude: [".git/", ".vagrant/", "docs", SYNCED_SOURCE_PATH]

    mji.vm.synced_folder SYNCED_SOURCE_PATH, SYNCED_DEST_PATH,
      owner: "vagrant", group: "vagrant"
  end

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "2048"
  end

  config.vm.provision "bootstrap", type: "ansible_local" do |ansible|
    ansible.galaxy_role_file = "#{PROVISION_PATH}/playbooks/bootstrap/requirements.yml"
    ansible.playbook = "#{PROVISION_PATH}/playbooks/bootstrap/playbook.yml"
  end
end
