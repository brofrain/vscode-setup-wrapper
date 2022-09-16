#!/bin/bash

# Install prerequisites
sudo apt install -y build-essential libssl-dev;

# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh;

(
    # Install Wasm stuff
    rustup target add wasm32-unknown-unknown;
    cargo install wasm-pack;
    cargo install wasm-bindgen-cli;
    cargo install trunk;
)

(
    # Install other stuff
    cargo install rust-i18n;
)

tput setaf 2;
echo "Rust is ready to use!"
tput sgr0;
