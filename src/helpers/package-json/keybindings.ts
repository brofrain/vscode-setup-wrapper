import type { Keybinding } from '~/types'

import { readJson } from '../io'
import { variable } from '../variables'

type Key = string
type Command = string | { command: 'type'; args: { text: string } }
type KeyAndCommand = [Key, Command]

const TEXT_EDITING: KeyAndCommand[] = [
  ...[...'abcdefghijklmnopqrstuwxyz'].flatMap<KeyAndCommand>((c) => [
    [`[Key${c.toUpperCase()}]`, { command: 'type', args: { text: c } }],
    [
      `shift+[Key${c.toUpperCase()}]`,
      { command: 'type', args: { text: c.toUpperCase() } },
    ],
  ]),
  ...[...'1234567890'].flatMap<KeyAndCommand>((c) => [
    [`[Digit${c}]`, { command: 'type', args: { text: c } }],
    [`[Numpad${c}]`, { command: 'type', args: { text: c } }],
  ]),
  ['shift+[Digit1]', { command: 'type', args: { text: '!' } }],
  ['shift+[Digit2]', { command: 'type', args: { text: '@' } }],
  ['shift+[Digit3]', { command: 'type', args: { text: '#' } }],
  ['shift+[Digit4]', { command: 'type', args: { text: '$' } }],
  ['shift+[Digit5]', { command: 'type', args: { text: '%' } }],
  ['shift+[Digit6]', { command: 'type', args: { text: '^' } }],
  ['shift+[Digit7]', { command: 'type', args: { text: '&' } }],
  ['shift+[Digit8]', { command: 'type', args: { text: '*' } }],
  ['shift+[Digit9]', { command: 'type', args: { text: '(' } }],
  ['shift+[Digit0]', { command: 'type', args: { text: ')' } }],
  ['[Space]', { command: 'type', args: { text: ' ' } }],
  ['[Tab]', 'tab'],
  ['[Enter]', { command: 'type', args: { text: '\n' } }],
  ['[Backspace]', 'deleteLeft'],
  ['[Delete]', 'deleteRight'],
  ['[Backquote]', { command: 'type', args: { text: '`' } }],
  ['[Minus]', { command: 'type', args: { text: '-' } }],
  ['shift+[Minus]', { command: 'type', args: { text: '_' } }],
  ['[Equal]', { command: 'type', args: { text: '=' } }],
  ['shift+[Equal]', { command: 'type', args: { text: '+' } }],
  ['[BracketLeft]', { command: 'type', args: { text: '[' } }],
  ['shift+[BracketLeft]', { command: 'type', args: { text: '{' } }],
  ['[BracketRight]', { command: 'type', args: { text: ']' } }],
  ['shift+[BracketRight]', { command: 'type', args: { text: '}' } }],
  ['[Backslash]', { command: 'type', args: { text: '\\' } }],
  ['shift+[Backslash]', { command: 'type', args: { text: '|' } }],
  ['[Semicolon]', { command: 'type', args: { text: ';' } }],
  ['shift+[Semicolon]', { command: 'type', args: { text: ':' } }],
  ['[Quote]', { command: 'type', args: { text: "'" } }],
  ['shift+[Quote]', { command: 'type', args: { text: '"' } }],
  ['[Comma]', { command: 'type', args: { text: ',' } }],
  ['shift+[Comma]', { command: 'type', args: { text: '<' } }],
  ['[Period]', { command: 'type', args: { text: '.' } }],
  ['shift+[Period]', { command: 'type', args: { text: '>' } }],
  ['[Slash]', { command: 'type', args: { text: '/' } }],
  ['shift+[Slash]', { command: 'type', args: { text: '?' } }],
  ['[NumpadMultiply]', { command: 'type', args: { text: '*' } }],
  ['[NumpadAdd]', { command: 'type', args: { text: '+' } }],
  ['[NumpadComma]', { command: 'type', args: { text: ',' } }],
  ['[NumpadSubtract]', { command: 'type', args: { text: '-' } }],
  ['[NumpadDivide]', { command: 'type', args: { text: '/' } }],
]

const TEXT_EDITING_COMMANDS: Command[] = [
  'undo',
  'redo',
  'editor.action.deleteLines',
  'editor.action.moveLinesUpAction',
  'editor.action.moveLinesDownAction',
  'editor.action.copyLinesDownAction',
  'editor.action.copyLinesUpAction',
  'editor.action.commentLine',
  'editor.action.addCommentLine',
  'editor.action.removeCommentLine',
  'editor.action.quickFix',
  'editor.action.clipboardCutAction',
  'editor.action.clipboardPasteAction',
  'multiclip.cut',
  'multiclip.cutMerge',
  'multiclip.paste',
  'multiclip.regularPaste',
  'multiclip.list',
]

const SAVE_FILE_KEY: Key = 'ctrl+s'

const DEFAULT_KEYBINDINGS: Keybinding[] = readJson(
  'assets/default-keybindings.json'
)

const TOGGLE_AUTOSAVE: Command = 'workbench.action.toggleAutoSave'

const EXECUTE_SEQUENCE: Command = 'extension.multiCommand.execute'

const autoSavePerLanguageHack = (keybindings: Keybinding[]): Keybinding[] => {
  const languages: string[] = variable('disable_autosave_languages')
  const languagesStr = languages.join('|')

  const matchLanguagesRegStr = `/^(${languagesStr})$/`
  const notMatchLanguagesRegStr = `/^(?!(${languagesStr})).*$/`

  const whenEnabledButShouldBeDisabled = `editorLangId =~ ${matchLanguagesRegStr} && config.files.autoSave != 'off'`
  const whenDisabledButShouldBeEnabled = `editorLangId =~ ${notMatchLanguagesRegStr} && config.files.autoSave == 'off'`
  const whenEnabledButShouldBeDisabledInEditor = `editorTextFocus && !editorReadonly && ${whenEnabledButShouldBeDisabled}`
  const whenDisabledButShouldBeEnabledInEditor = `editorTextFocus && !editorReadonly && ${whenDisabledButShouldBeEnabled}`

  // typing
  const typeAndDisableAutoSave: Keybinding[] = TEXT_EDITING.map(
    ([key, command]) => ({
      key,
      when: whenEnabledButShouldBeDisabledInEditor,
      command: EXECUTE_SEQUENCE,
      args: { sequence: [TOGGLE_AUTOSAVE, command] },
    })
  )

  const typeAndEnableAutoSave: Keybinding[] = TEXT_EDITING.map(
    ([key, command]) => ({
      key,
      when: whenDisabledButShouldBeEnabledInEditor,
      command: EXECUTE_SEQUENCE,
      args: { sequence: [command, TOGGLE_AUTOSAVE] },
    })
  )

  // commands
  const commandAndToggleAutoSave: Keybinding[] = []
  const allKeybindings = [...keybindings, ...DEFAULT_KEYBINDINGS]
  for (const command of TEXT_EDITING_COMMANDS) {
    const activeEditingKeybindings = allKeybindings
      .filter((item) => item.command === command)
      .filter(
        (item) =>
          !allKeybindings.some(
            (otherItem) =>
              otherItem.command === `-${item.command}` &&
              otherItem.key === item.key
          )
      )

    for (const item of activeEditingKeybindings) {
      const newKeybindingBase = {
        key: item.key,
        command: EXECUTE_SEQUENCE,
      }

      {
        const when = item.when
          ? `${item.when} && ${whenEnabledButShouldBeDisabled}`
          : whenEnabledButShouldBeDisabledInEditor

        commandAndToggleAutoSave.push({
          ...newKeybindingBase,
          when,
          args: { sequence: [TOGGLE_AUTOSAVE, command] },
        })
      }
      {
        const when = item.when
          ? `${item.when} && ${whenDisabledButShouldBeEnabled}`
          : whenDisabledButShouldBeEnabledInEditor

        commandAndToggleAutoSave.push({
          ...newKeybindingBase,
          when,
          args: { sequence: [command, TOGGLE_AUTOSAVE] },
        })
      }
    }
  }

  // save
  const saveAndToggleAutoSave: Keybinding = {
    key: SAVE_FILE_KEY,
    command: EXECUTE_SEQUENCE,
    args: {
      sequence: ['workbench.action.files.save', TOGGLE_AUTOSAVE],
    },
  }

  const saveAndDisableAutoSave: Keybinding = {
    ...saveAndToggleAutoSave,
    when: whenEnabledButShouldBeDisabledInEditor,
  }
  const saveAndEnableAutoSave: Keybinding = {
    ...saveAndToggleAutoSave,
    when: whenDisabledButShouldBeEnabledInEditor,
  }

  return [
    ...typeAndDisableAutoSave,
    ...typeAndEnableAutoSave,
    ...commandAndToggleAutoSave,
    saveAndDisableAutoSave,
    saveAndEnableAutoSave,
  ]
}

const warnAboutDuplicates = (keybindings: Keybinding[]): void => {
  const set = new Set<string>()

  for (const { key, command, when = '-' } of keybindings) {
    const item = `${key}|${command}|${when}`

    if (set.has(item)) {
      // eslint-disable-next-line no-console
      console.warn(
        '\u001B[33m%s\u001B[0m',
        'Duplicate keybinding:\n' +
          `\tKey: ${key}\n` +
          `\tCommand: ${command}\n` +
          (when !== '-' ? `\tWhen: ${when}\n` : '')
      )
    } else {
      set.add(item)
    }
  }
}

export const extendKeybindings = (keybindings: Keybinding[]): Keybinding[] => {
  warnAboutDuplicates(keybindings)
  return [...keybindings, ...autoSavePerLanguageHack(keybindings)]
}
