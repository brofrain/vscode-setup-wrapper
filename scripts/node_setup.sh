#!/bin/bash

# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash;

(
    # Install Node
    nvm install node;

    # Install latest npm
    nvm install-latest-npm;

    (
        # Install pnpm
        npm i -g pnpm;

        # Install Playwright
        npm i -g playwright && npx playwright install-deps;
    )
)

tput setaf 2;
echo "Node.js is ready to use!"
tput sgr0;
