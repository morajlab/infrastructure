Vagrant.configure("2") do |config|
  config.vm.define "morajlab_infra", primary: true do |morajlab_infra|
    morajlab_infra.vm.box = "ubuntu/impish64"
    morajlab_infra.vm.synced_folder ".", "/vagrant",
      type: "rsync", owner: "vagrant", group: "vagrant",
      rsync__exclude: [".git/", ".vagrant/", "docs"]
  end

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "2048"
  end

  config.vm.provision "ansible_local" do |ansible|
    ansible.galaxy_role_file = "provision/requirements.yml"
    ansible.playbook = "provision/playbook.yml"
  end
end
