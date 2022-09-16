#!/bin/bash

# Disable password
sudo passwd -d $(whoami);

(
    parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P );
    source "$parent_path/full_non-wsl_setup.sh";
)

(
    # Setup VcXsrv
    echo -e "\n# VcXsrv configuration" >> ~/.zshrc;
    echo "$(whoami) ALL = (root) NOPASSWD: /etc/init.d/dbus" | sudo EDITOR='tee -a' visudo -f /etc/sudoers.d/dbus;
    echo "export DISPLAY=\$(cat /etc/resolv.conf | grep nameserver | awk '{print \$2; exit;}'):0.0" >> ~/.zshrc;
    echo "sudo /etc/init.d/dbus start &> /dev/null" >> ~/.zshrc;

    # Auto-run VcXsrv on launch
    echo -e 'if ! powershell.exe "Get-Process vcxsrv" &> /dev/null ; then\n\tpowershell.exe "Start-Process \\"C:\\Program Files\\VcXsrv\\vcxsrv.exe\\" -ArgumentList \\"-multiwindow -ac\\""\nfi' >> ~/.zshrc;
)

tput setaf 2;
echo "Ubuntu WSL has been fully configured! Please restart your shell..."
tput sgr0;
