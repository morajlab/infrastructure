SYNCED_DIR_DEST="/vagrant"
PROVISION_EXECUTORS_DIR="#{SYNCED_DIR_DEST}/provision/executors"

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/impish64"

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "2048"
  end

  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "playbook.yml"
  end

  config.vm.provision "bootstrap", type: "shell" do |sh|
    sh.inline = "#{PROVISION_EXECUTORS_DIR}/bootstrap.provision.sh $*"
    sh.privileged = true
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
end
