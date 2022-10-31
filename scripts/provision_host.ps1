[CmdletBinding()]
param (
    [Parameter(HelpMessage = "Path to Vagrant workspaces root")]
    [ValidateNotNullOrEmpty()]
    [ValidateScript(
        {
            Test-Path $_;
        }, 
        ErrorMessage = "Path '{0}' is invalid."
    )]
    [string]
    $RootPath = (Join-Path $env:SystemDrive "Vagrant-Workspaces"),
    [Parameter(HelpMessage = "Default Vagrant provider")]
    [ValidateSet("VIRTUALBOX", "VMWARE", "DOCKER", "HYPERV")]
    [string]
    $DefaultProvider = "VIRTUALBOX"
)

$PROVIDERS_LIST = @{
    VIRTUALBOX = "virtualbox";
    VMWARE     = "vmware_desktop";
    DOCKER     = "docker";
    HYPERV     = "hyperv";
};

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
        [string[]]
        $Path
    )

    $result = $RootPath;

    if ($Path.Length -gt 0) {
        $Path | ForEach-Object {
            $result = Join-Path -Path $result -ChildPath $_;
        }
    }

    return $result;
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
    VAGRANT_DEFAULT_PROVIDER       = $PROVIDERS_LIST[$DefaultProvider]
    VAGRANT_VMWARE_CLONE_DIRECTORY = Get-VagrantPath -Path "virtual-machines", "vmware"
};

Set-EnvironmentVariables -Variables $envariables
Install-VagrantPlugins