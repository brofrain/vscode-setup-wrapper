#!/bin/bash

# Disable welcome message
touch ~/.hushlogin;

# Install ZSH
sudo apt install zsh -y;

# Install Powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k;

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P );

# Use ZSH configuration preset
cat "$parent_path/../assets/preset_zshrc" > ~/.zshrc;

# Use Powerlevel10k configuration preset
cat "$parent_path/../assets/preset_p10k.zsh" > ~/.p10k.zsh;

# Set ZSH as default shell
chsh -s /usr/bin/zsh;

tput setaf 2;
echo "ZSH is ready to use!"
tput sgr0;
