# TODO: Create powershell common arguments

# TODO: Complete the list of providers
$PROVIDERS_LIST = @{
    VIRTUALBOX = "virtualbox";
    VMWARE     = "vmware_desktop";
    DOCKER     = "docker";
    HYPERV     = "hyperv";
};
$root_path = "C:\Vagrant-Workspaces"; # Get system drive name
$default_provider = $PROVIDERS_LIST.VIRTUALBOX;

function Test-RootPath {
    return $true;
}

function Test-DefaultProvider {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]
        $DefaultProvider
    )

    $PROVIDERS_LIST.Values | ForEach-Object {
        if ($DefaultProvider -ceq $_) {
            return $true;            
        }
    }

    return $false;
}

function Test-Arguments {
    [CmdletBinding()]
    param (
        [ValidateNotNullOrEmpty()]
        [string]
        $RootPath = $root_path,
        [ValidateNotNullOrEmpty()]
        [string]
        $DefaultProvider = $default_provider
    )

    if (-Not (Test-DefaultProvider -DefaultProvider $DefaultProvider)) {
        $exception = [System.Exception]@{
            Source   = "provision_host.ps1";
            HelpLink = "https://developer.hashicorp.com/vagrant/docs/providers"
        };

        Write-Error `
            -Message "Invalid value" `
            -Category InvalidArgument `
            -TargetObject $DefaultProvider `
            -Exception $exception;
    
        Exit 1;
    }
    
    # if (-Not (Test-RootPath)) {}

    $script:root_path = $RootPath;
    $script:default_provider = $DefaultProvider;
}

Test-Arguments @args

filter Invoke-ArrayToHashtable {
    begin {
        $hashtable = @{};
        $counter = 0;
    }
    process {
        $hashtable[$_] = $counter;
        ++$counter;
    }
    end {
        return $hashtable;
    }
}

function Get-VagrantPath {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $false)]
        [string] # TODO: Create argument with multiple type (string, string[])
        $Path
    )
    
    return Join-Path $root_path $Path;
}

function Set-EnvironmentVariables {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [hashtable]
        $Variables
    )

    $Variables.Keys | ForEach-Object {
        Write-Debug "Set '$($_)' to '$($Variables[$_])'";
        [System.Environment]::SetEnvironmentVariable($_, $Variables[$_], "User");
    }
}

function Install-VagrantPlugins {
    $PLUGINS = @(
        "vagrant-vmware-desktop",
        "vagrant-disksize"
    ) | Invoke-ArrayToHashtable;

    vagrant plugin list | ForEach-Object {
        if ($_.ToString() -like "*No plugins installed*") {
            return;
        }

        $PLUGINS.Remove($_.Split(" ")[0]);
    }

    if ($PLUGINS.Count -eq 0) {
        return;
    }

    $PLUGINS.Keys | ForEach-Object {
        vagrant plugin install $_
    }
}

$envariables = @{
    VAGRANT_HOME                   = Get-VagrantPath -Path ".vagrant.d"
    VAGRANT_VAGRANTFILE            = "Vagrantfile.rb"
    VAGRANT_DEFAULT_PROVIDER       = $default_provider
    # TODO: Use path array:
    # VAGRANT_VMWARE_CLONE_DIRECTORY = Get-VagrantPath -Path "virtual-machines", "vmware"
    VAGRANT_VMWARE_CLONE_DIRECTORY = Get-VagrantPath -Path "virtual-machines\vmware"
};

Set-EnvironmentVariables -Variables $envariables
Install-VagrantPlugins
