# VSCode setup

Simple extension+keybindings+theme pack and settings builder.\
The project aims to help maintain a rich collection of preferences and circumvent configuration limitations for both some plugins and VSCode itself.

## Features

- custom color theme

  - color palette can be shared with `settings.json` configuration

- font: [Fira Code](https://github.com/tonsky/FiraCode)

- extensions:

  - [Browser Lite](https://marketplace.visualstudio.com/items?itemName=antfu.browse-lite)

    - open: **CTRL** + **F5**
    - refresh: **F5**
    - devtools: **CTRL** + **SHIFT** + **F5**

  - [change-case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case)

  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

    - automatically extends dictionary by todo-like tags and user's name
    - debounce: 300ms

  - [Command Runner](https://marketplace.visualstudio.com/items?itemName=edonet.vscode-command-runner)

    - integration with Multi-command

  - [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

  - [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

    - colors are configurable via theme

  - [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

    - fix on save

  - [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml)

  - [Format in context menus](https://marketplace.visualstudio.com/items?itemName=lacroixdavid1.vscode-format-context-menu)

  - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

    - some visual aspects are configurable via theme

  - [Iconify Intellisense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)

  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

  - [Markdown Preview Github Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles)

  - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

  - [Multiple clipboards](https://marketplace.visualstudio.com/items?itemName=slevesque.vscode-multiclip)

    - merge copy: **CTRL** + **SHIFT** + **C**
    - merge cut: **CTRL** + **SHIFT** + **X**
    - show copy history: **CTRL** + **SHIFT** + **V**

  - [Multi-command](https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command)

    - run application: **F2**
      - if the project contains `package.json`:
        - if the file has Vite: `npx vite --port 4343`
        - if the file has "dev" script: `npm run dev`
        - if the file has "build" script: `npm run build`
      - if the project contains `Cargo.toml`: `RUST_LOG=debug cargo run`
    - run tests: **F3**
      - if the project contains `package.json` with "test" script: `npm run test`
      - if the project contains `Cargo.toml`: `RUST_LOG=debug cargo test -- --show-output`

  - [Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

  - [Prettier](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)

    - format on save

  - [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

    - format on save

  - [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)

  - [Tabnine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)

  - [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

    - simplified configuration
    - personal mention tags as a separate tag group

  - [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

  - [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar) + [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=vue.vscode-typescript-vue-plugin)

    - no takeover mode, due to non-descriptive error messages
    - second server

## Prerequisites

_\* - optional steps_

- ### [Fira Code](https://github.com/tonsky/FiraCode)

  The font can be downloaded from the above link.\
  The installation is basically the same on any operating system. Right click on the contents of the `ttf` directory and then install.

- ### [VSCode](https://code.visualstudio.com/)

- ### [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) (Windows only)

  - Insall WSL: PowerShell (as admin) -> `wsl --install` OR:

    - Enable WSL: PowerShell (as admin) -> `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
    - Enable Virtual Machine Platform: PowerShell (as admin) -> `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`
    - Download and run the [WSL2 Linux kernel update package](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi).
    - Set WSL version to 2: PowerShell (as admin) -> `wsl --set-default-version 2`
    - Insall Ubuntu: PowerShell (as admin) -> `wsl --install -d Ubuntu`

  - Install [WSL extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) for VSCode

  - Opening GUI from Ubuntu (e.g. Playwright) requires [VcXsrv](https://sourceforge.net/projects/vcxsrv/) installed on Windows

  - Open Ubuntu terminal and set up the user

  - Configure WSL mounting options to allow Ubuntu to modify Windows' files: `echo -e "[automount]\nenabled = true\nroot = /mnt/\noptions = \"metadata,umask=22,fmask=11\"" | sudo tee /etc/wsl.conf`

  - Restart terminal

  - \* [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701):

    - Install the program via Microsoft Store

    - **Startup** -> **Default profile** -> select **Ubuntu**

    - \* **Startup** -> **Launch on machine startup** -> turn on

    - **Profile** -> **Defaults** -> **Appearance** -> **Font face** -> select **Fira Code**

    - \* Running Git hooks from VSCode for some reason requires opening the IDE from WSL with administrator privileges. This inconvenience can be soothed by running the terminal always with admin's blessing: **Defaults** -> **Run this profile as Administrator** -> turn on

    Potential bugs with Windows Terminal can be fixed via PowerShell: `sfc /scannow`

  _REMEMBER TO ALWAYS RUN VSCODE FROM A WSL TERMINAL_ (empty window: `code -n` | current directory: `code .`)

  Reset (if something breaks): **Apps & features** -> **Ubuntu** -> **Advanced** -> **Reset**.

- ### Bash Shell

  - Download the repository under `~` path

  - Enable scripts: `PROJECT_DIR_NAME="vscode-setup-wrapper" && chmod 755 ~/$PROJECT_DIR_NAME/scripts/*`

  - Shell setup:

    - standalone Linux: `PROJECT_DIR_NAME="vscode-setup-wrapper" && bash ~/$PROJECT_DIR_NAME/scripts/full_non-wsl_setup.sh`

    - WSL Linux: `PROJECT_DIR_NAME="vscode-setup-wrapper" && bash ~/$PROJECT_DIR_NAME/scripts/full_wsl_setup.sh`

- ### Git

  - `git config --global user.name "<name>"`
  - `git config --global user.email "<email>"`

- ### [Node.js](https://nodejs.org/)

  Latest Node.js is included in shell setup scripts (`node_setup.sh`).\
  Additional commands:

  - Install version:

    - Latest: `nvm install node`
    - LTS: `nvm install --lts`
    - Specific: `nvm install v18.7.0`

  - Set default version: `nvm alias default node`

  - Switch versions:

    - Latest: `nvm use node`
    - LTS: `nvm use --lts`
    - Specific: `nvm use v18.7.0`

  - Install the latest npm: `nvm install-latest-npm`

- ### [Rust](https://www.rust-lang.org/)

  Rust tools along with WebAssembly features is part of shell configuration scripts (`rust_setup.sh`).

  - \* Update Rust stuff: `rustup update`

- ### \* Local GitHub authentication

  - `gh auth login` -> **HTTPS** -> Paste a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

- ### \* Local GitLab authentication

  - `ssh-keygen -t rsa -b 2048 && cat ~/.ssh/id_rsa.pub` -> copy the string to the configuration of GitLab SSH keys

## Usage

_\* - optional steps_

0. `pnpm i`

1. \* Most of the configuration can be done via the `src/config/` directory:

   - `colors.yaml` - a convenient place do define colors used for the color theme. Especially useful for plugins that do not extend theme API and can be only stylized via settings
   - `dictionary.yaml` - an array of words used by [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
   - `extensions.yaml` - an array of extension ids. _CONTENTS WILL OVERWRITE THE EXTENSION LIST IN PACKAGE.JSON_
   - `keybindings.yaml` - an array of keybindings. _CONTENTS WILL OVERWRITE THE KEYBINDING LIST IN PACKAGE.JSON_
   - `settings.ts` - the file will be transformed directly into _settings.json_
   - `theme.ts` - the file will be transformed directly into the custom theme json file and included in the package's vsix
   - `user.yaml` - personal data for generating personal tags
   - `variables.yaml` - other reused values can be stored here

2. \* `src/helpers/` can be expanded to include additional configuration tools

3. `pnpm build` to build the final vsix. `pnpm build:json` and `pnpm build:vsix` can be also used separately. _VERSION, DESCRIPTION, PUBLISHER, EXTENSIONS AND KEYBINDINGS WILL BE AUTOMATICALLY UPDATED IN PACKAGE.JSON_

4. Install the package:

   - Linux: `PROJECT_DIR_NAME="vscode-setup-wrapper" && code --install-extension "~/$PROJECT_DIR_NAME/dist/setup.vsix"`

   - Windows with WSL:

     - via PowerShell: `$PROJECT_DIR_NAME = "vscode-setup-wrapper"; $LINUX_USER = $(wsl whoami); code --install-extension "\\wsl$\Ubuntu\home\$LINUX_USER\$PROJECT_DIR_NAME\dist\setup.vsix"; wsl code --install-extension "/home/$LINUX_USER/$PROJECT_DIR_NAME/dist/setup.vsix"`

     - via VSCode:

       - Open a VSCode window <u>without</u> WSL
       - **Extensions** -> **●●●** -> **Install from VSIX...** -> select the `dist/setup.vsix` file
       - Open a VSCode window <u>with</u> WSL and repeat the installation

5. Copy-paste the generated settings: `F1` -> **Preferences: Open settings (JSON)** -> copy the contents from `dist/settings.json`
