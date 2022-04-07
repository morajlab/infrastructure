SHARED_SYNC_ROOT = 'shared'
LINUX_VM_NAME = 'linux_workspace'
WINDOWS_VM_NAME = 'windows_workspace'
NAME_PREFIX = 'mji'
DEFAULT_RAM = 4 * 1024

Vagrant.configure('2') do |config|
  config.vm.synced_folder '.',
                          '/vagrant',
                          type: 'rsync',
                          owner: 'vagrant',
                          group: 'vagrant',
                          rsync__exclude: [
                            '.git/',
                            '.vagrant/',
                            'docs',
                            SHARED_SYNC_ROOT
                          ],
                          disabled: true

  config.vm.define LINUX_VM_NAME do |ws|
    ws.vm.box = 'morajlab/debian-bullseye64'
    ws.vm.synced_folder "#{SHARED_SYNC_ROOT}/#{LINUX_VM_NAME}",
                        '/home/vagrant/shared',
                        owner: 'vagrant',
                        group: 'vagrant',
                        create: true

    ws.vm.provider 'virtualbox' do |vb|
      vb.name = "#{NAME_PREFIX}_#{LINUX_VM_NAME}"
      vb.gui = false
      vb.cpus = 2
      vb.memory = DEFAULT_RAM
      vb.customize ['modifyvm', :id, '--cpuexecutioncap', '100']
    end
  end

  config.vm.define WINDOWS_VM_NAME do |ws|
    ws.vm.box = 'morajlab/windows-11'
    ws.vm.synced_folder SHARED_SYNC_ROOT,
                        'C:/Users/vagrant/shared',
                        owner: 'vagrant',
                        group: 'vagrant',
                        create: true

    ws.vm.provider 'virtualbox' do |vb|
      vb.name = "#{NAME_PREFIX}_#{WINDOWS_VM_NAME}"
      vb.gui = false
      vb.cpus = 2
      vb.memory = DEFAULT_RAM
      vb.customize ['modifyvm', :id, '--cpuexecutioncap', '100']
    end
  end
end
