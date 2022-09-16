import { color, extendSettings, todoTree, search, variable } from '~/helpers'

import type { Settings } from '~/types'

const settings: Settings = {
  'debug.javascript.codelens.npmScripts': 'never',

  'editor.bracketPairColorization.enabled': true,
  'editor.codeActionsOnSave': {
    'source.fixAll': false,
    'source.fixAll.eslint': true,
    'source.organizeImports': false,
  },
  'editor.fontFamily': 'Fira Code',
  'editor.fontLigatures': true,
  'editor.fontSize': 15.5,
  'editor.glyphMargin': false,
  'editor.guides.bracketPairs': 'active',
  'editor.lightbulb.enabled': false,
  'editor.linkedEditing': true,
  'editor.smoothScrolling': true,

  'files.autoSave': 'afterDelay',
  'files.autoSaveDelay': variable('feedback_debounce_ms'),
  'files.eol': '\n',

  'explorer.confirmDelete': false,
  'explorer.confirmDragAndDrop': false,

  'mergeEditor.diffAlgorithm': 'experimental',

  ...search.exclude(),
  'search.smartCase': true,

  'terminal.integrated.defaultProfile.linux': 'zsh',
  'terminal.integrated.defaultProfile.windows': 'Ubuntu (WSL)',
  'terminal.integrated.enablePersistentSessions': false,
  'terminal.integrated.minimumContrastRatio': 1,
  'terminal.integrated.shellIntegration.decorationIconError': 'primitive-dot',
  'terminal.integrated.shellIntegration.decorationIconSuccess': 'primitive-dot',
  'terminal.integrated.smoothScrolling': true,

  'window.customMenuBarAltFocus': false,
  'window.enableMenuBarMnemonics': false,
  'window.titleBarStyle': 'custom',

  'workbench.colorTheme': 'Custom',
  'workbench.iconTheme': 'material-icon-theme',
  'workbench.layoutControl.enabled': false,
  'workbench.list.smoothScrolling': true,
  'workbench.startupEditor': 'welcomePageInEmptyWorkbench',

  '[css][html][javascript][json][json5][jsonc][markdown][scss][typescript][yaml][vue]':
    {
      'editor.defaultFormatter': 'esbenp.prettier-vscode',
      'editor.formatOnSave': true,
    },
  '[rust]': {
    'editor.defaultFormatter': 'rust-lang.rust-analyzer',
    'editor.formatOnSave': true,
  },
  '[toml]': {
    'editor.defaultFormatter': 'tamasfe.even-better-toml',
    'editor.formatOnSave': true,
  },

  // intellisense
  'editor.acceptSuggestionOnCommitCharacter': false,
  'editor.quickSuggestionsDelay': 10,
  'editor.suggest.filterGraceful': true,
  'editor.suggest.matchOnWordStartOnly': false,
  'editor.suggest.shareSuggestSelections': true,
  'editor.suggest.showDeprecated': false,
  'editor.suggest.showOperators': false,
  'editor.suggest.showColors': false,
  'editor.suggest.snippetsPreventQuickSuggestions': false,
  'editor.suggestSelection': 'recentlyUsedByPrefix',
  'editor.parameterHints.enabled': false,
  'editor.quickSuggestions': {
    other: true,
    comments: true,
    strings: true,
  },
  'editor.wordBasedSuggestions': true,
  'editor.wordBasedSuggestionsMode': 'allDocuments',

  // built-in extensions
  'css.hover.documentation': false,
  'css.hover.references': false,
  'css.lint.unknownAtRules': 'ignore',

  'git.autofetch': 'all',
  'git.autofetchPeriod': 60,
  'git.autoStash': true,
  'git.closeDiffOnOperation': true,
  'git.confirmSync': false,
  'git.enableSmartCommit': true,
  'git.fetchOnPull': true,
  'git.inputValidationLength': 999,
  'git.inputValidationSubjectLength': null,
  'git.openAfterClone': 'always',

  'html.hover.references': false,
  'html.hover.documentation': false,

  'scss.hover.documentation': false,
  'scss.hover.references': false,
  'scss.lint.unknownAtRules': 'ignore',

  // installed extensions
  'browse-lite.startUrl': `localhost:${variable('preferred_vite_port')}`,

  'command-runner.commands': {
    'Pass': ':',

    'Run Project': [
      'clear;',

      '(',

      '  cd ${workspaceFolder} &&',

      // if `package.json` exists
      '  if [ -f package.json ]; then',

      //   if `package.json` uses Vite
      '    if cat package.json | grep "\\"vite\\": \\"" >/dev/null; then',

      //     run Vite on preferred port
      `      npx vite --port ${variable('preferred_vite_port')};`,

      //   if `package.json` has "dev" script
      '    elif cat package.json | grep "\\"dev\\": \\"" >/dev/null; then',

      //     run "dev" script
      '      npm run dev;',

      //   if `package.json` has "build" script
      '    elif cat package.json | grep "\\"build\\": \\"" >/dev/null; then',

      //     run "build" script
      '      npm run build;',

      '    else',

      '      tput setaf 1; echo "Nothing to run..."; tput sgr0;',

      '    fi;',

      // if `Cargo.toml` exists
      '  elif [ -f Cargo.toml ]; then',

      //   run `cargo run` with RUST_LOG in "debug" mode
      '    RUST_LOG=debug cargo run;',

      '  else',

      '    tput setaf 1; echo "Nothing to run..."; tput sgr0;',

      '  fi;',

      ')',
    ].join(''),

    'Run Tests': [
      'clear;',

      '(',

      '  cd ${workspaceFolder} &&',

      // if `package.json` exists and has "test" script
      '  if [ -f package.json ] && cat package.json | grep "\\"test\\": \\"" >/dev/null; then',

      //   run "test" script
      '    npm run test;',

      // if `Cargo.toml` exists
      '  elif [ -f Cargo.toml ]; then',

      //   run `cargo test` with visible output and RUST_LOG in "debug" mode
      '    RUST_LOG=debug cargo test -- --show-output;',

      '  else',

      '    tput setaf 1; echo "Tests not found..."; tput sgr0;',

      '  fi;',

      ')',
    ].join(''),

    'Rust Analysis': [
      'clear;',

      '(',

      '  cd ${workspaceFolder} &&',

      // make sure that `Cargo.toml` exists
      '  [ -f Cargo.toml ] &&',

      // lint
      '  cargo clippy &&',

      '  (',

      // if `package.json` exists
      '    [ -f package.json ] && ',

      // and uses Vite
      '    cat package.json | grep "\\"vite\\": \\"" >/dev/null &&',

      // and Vite is currently running
      '    ps aux | grep vite | grep -v grep >/dev/null &&',

      //   build wasm files
      '      trunk build',

      '  ) || :',

      ')',
    ].join(''),
  },
  'command-runner.showRunCommandInEditorContextMenu': false,
  'command-runner.showRunCommandInExplorerContextMenu': false,
  'command-runner.terminal.autoFocus': false,
  'command-runner.terminal.autoClear': false,
  'command-runner.terminal.name': 'Command Runner',

  'codesnap.backgroundColor': '#0000',
  'codesnap.boxShadow': '#0009 5px 5px 30px',
  'codesnap.showWindowControls': false,
  'codesnap.transparentBackground': true,

  'cSpell.allowCompoundWords': true,
  'cSpell.ignorePaths': variable('search_exclude_paths'),
  'cSpell.language': 'en',
  'cSpell.maxDuplicateProblems': 2,
  'cSpell.maxNumberOfProblems': 120,
  'cSpell.minWordLength': 3,
  'cSpell.numSuggestions': 0,
  'cSpell.showStatus': false,
  'cSpell.showCommandsInEditorContextMenu': false,
  'cSpell.showSuggestionsLinkInEditorContextMenu': false,
  'cSpell.spellCheckDelayMs': variable('feedback_debounce_ms'),
  'cSpell.useGitignore': false,

  'errorLens.enabledDiagnosticLevels': ['error', 'warning'],
  'errorLens.messageTemplate': '',
  'errorLens.scrollbarHackEnabled': true,

  'eslint.validate': [
    'html',
    'javascript',
    'javascriptreact',
    'json',
    'json5',
    'jsonc',
    'markdown',
    'typescript',
    'typescriptreact',
    'yaml',
    'vue',
  ],

  'gitlens.codeLens.enabled': false,
  'gitlens.currentLine.format': "${author, }${agoOrDate}${' • 'message}",
  'gitlens.currentLine.scrollable': false,
  'gitlens.hovers.enabled': false,
  'gitlens.menus': { editorGroup: { blame: false } },
  'gitlens.statusBar.enabled': false,
  'gitlens.views.branches.branches.layout': 'list',
  'gitlens.views.stashes.files.layout': 'list',

  'liveshare.allowInvites': 'all',
  'liveshare.codeLens': false,
  'liveshare.languages.allowGuestCommandControl': true,
  'liveshare.launcherClient': 'visualStudioCode',
  'liveshare.populateGitCoAuthors': 'never',
  'liveshare.showInStatusBar': 'whileCollaborating',

  'multiCommand.commands': [
    {
      command: 'multiCommand.runProject',
      interval: variable('shell_warmup_ms'),
      sequence: [
        {
          command: 'command-runner.run',
          args: {
            command: 'Pass',
            terminal: { name: 'Project', autoClear: true },
          },
        },
        {
          command: 'command-runner.run',
          args: {
            command: 'Run Project',
            terminal: { name: 'Project', autoClear: true, autoFocus: true },
          },
        },
      ],
    },
    {
      command: 'multiCommand.runTests',
      interval: variable('shell_warmup_ms'),
      sequence: [
        {
          command: 'command-runner.run',
          args: {
            command: 'Pass',
            terminal: { name: 'Tests', autoClear: true },
          },
        },
        {
          command: 'command-runner.run',
          args: {
            command: 'Run Tests',
            terminal: { name: 'Tests', autoClear: true, autoFocus: true },
          },
        },
      ],
    },
    {
      command: 'multiCommand.rustAnalysis',
      sequence: [
        {
          command: 'command-runner.run',
          variableSubstitution: true,
          args: {
            command: 'Rust Analysis',
            terminal: { name: 'Rust Analysis', autoClear: true },
          },
        },
      ],
    },
  ],

  'multiclip.bufferSize': 20,

  'prettier.useEditorConfig': false,

  'playwright.reuseBrowser': false,

  // todo `runItOn` is barely usable
  // automatic Rust analysis should be integrated with a different on-save trigger
  // 'runItOn': {
  //   commands: [
  //     {
  //       match: '\\.(html|rs|scss)$',
  //       isShellCommand: false,
  //       cmd: 'multiCommand.rustLintAndBuildForVite',
  //     },
  //   ],
  // },

  'rust-analyzer.checkOnSave.command': 'clippy',
  'rust-analyzer.hover.actions.debug.enable': false,
  'rust-analyzer.hover.actions.run.enable': false,
  'rust-analyzer.imports.granularity.enforce': true,
  'rust-analyzer.lens.debug.enable': false,
  'rust-analyzer.typing.autoClosingAngleBrackets.enable': true,

  'scss.scannerExclude': variable('search_exclude_paths'),

  'todo-tree.filtering.excludeGlobs': variable('search_exclude_paths'),
  'todo-tree.filtering.includeHiddenFiles': true,
  'todo-tree.general.statusBar': 'tags',
  'todo-tree.highlights.highlightDelay': 0,
  ...todoTree.tagGroups({
    highlight: {
      fontWeight: '600',
      foreground: color('syntax_comment'),
      borderRadius: '3px',
      rulerLane: 'center',
      rulerOpacity: 0.4,
    },
    userHighlight: {
      icon: 'mention',
      iconColour: 'background',
      foreground: color('light'),
      background: color('accent', 0.6),
      rulerColour: 'background',
    },
    tags: {
      TODO: {
        highlight: {
          icon: 'light-bulb',
          foreground: color('success'),
          background: color('success', 0.15),
        },
      },
      FIX: {
        aliases: ['FIXME', 'FIXIT', 'TOFIX'],
        highlight: {
          icon: 'tools',
          foreground: color('warn'),
          background: color('warn', 0.15),
        },
      },
      BUG: {
        highlight: {
          icon: 'flame',
          foreground: color('error'),
          background: color('error', 0.15),
        },
      },
      NOTE: {
        aliases: ['XXX'],
        highlight: {
          icon: 'bookmark',
          foreground: color('light'),
          hideFromStatusBar: true,
        },
      },
      HACK: {
        aliases: ['WORKAROUND'],
        highlight: {
          icon: 'zap',
          foreground: '#196df7',
          hideFromStatusBar: true,
        },
      },
    },
  }),
  'todo-tree.tree.buttons.expand': false,
  'todo-tree.tree.buttons.filter': false,
  'todo-tree.tree.buttons.groupByTag': false,
  'todo-tree.tree.buttons.viewStyle': false,
  'todo-tree.tree.scanMode': 'workspace only',
  'todo-tree.tree.tagsOnly': true,

  'volar.autoCompleteRefs': true,
  'volar.codeLens.references': false,
  'volar.completion.preferredAttrNameCase': 'kebab',
  'volar.completion.preferredTagNameCase': 'pascal',
  'volar.icon.preview': false,
  'volar.icon.splitEditors': false,
  'volar.preview.backgroundColor': '#0000',
  'volar.takeOverMode.enabled': false,
  'volar.vueserver.useSecondServer': true,
}

export default extendSettings(settings)
