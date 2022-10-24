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

$envariables = @{
    VAGRANT_HOME                   = "E:\.vagrant.d"
    VAGRANT_DEFAULT_PROVIDER       = "virtualbox"
    VAGRANT_VMWARE_CLONE_DIRECTORY = "E:\virtual-machines\vmware"
};

Set-EnvironmentVariables -Variables $envariables -Debug