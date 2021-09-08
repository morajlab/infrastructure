$shell_args = <<-SCRIPT
  --nvm-url https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh
  --deno-url https://deno.land/x/install/install.sh
  --workspace-url https://github.com/morajlab/workspace.git
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "4096"
  end

  config.vm.provision "shell" do |sh|
    sh.path = "./provision/bootstrap.sh"
    sh.privileged = false
    sh.keep_color = true
    sh.args = <<-SCRIPT
      ${PARAMS=(#{$shell_args})[@]}
    SCRIPT
  end
end
