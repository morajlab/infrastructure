# TODO: Complete the list of providers
$PROVIDERS_LIST = @{
    VIRTUALBOX = "virtualbox";
};

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
        $RootPath = "C:\Vagrant-Workspaces", # Get system drive name
        [ValidateNotNullOrEmpty()]
        [string]
        $DefaultProvider = $PROVIDERS_LIST.VIRTUALBOX
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
}

Test-Arguments @args

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

# $envariables = @{
#     VAGRANT_HOME                   = Join-Path $RootPath ".vagrant.d"
#     VAGRANT_VAGRANTFILE            = "Vagrantfile.rb"
#     VAGRANT_DEFAULT_PROVIDER       = "virtualbox"
#     VAGRANT_VMWARE_CLONE_DIRECTORY = Join-Path $RootPath "virtual-machines\vmware"
# };

# Set-EnvironmentVariables -Variables $envariables -Debug:$debug