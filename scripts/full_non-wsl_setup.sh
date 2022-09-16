#!/bin/bash

# Update Ubuntu
sudo apt update -y;
sudo apt upgrade -y;

# Make sure that Git is installed
sudo apt install git -y;

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P );

# Setup ZSH
source "$parent_path/zsh_setup.sh";

(
    # Setup Node.js
    source "$parent_path/node_setup.sh";

    # Setup Rust with WebAssembly tools
    source "$parent_path/rust_setup.sh";

    # Setup GitHub
    source "$parent_path/gh_setup.sh";
)

tput setaf 2;
echo "Ubuntu has been fully configured! Please restart your shell for changes to take effect..."
tput sgr0;
