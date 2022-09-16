export interface Keybinding {
  key: string
  command: string
  when?: string
  args?: {
    cmd?: string
    newTerminal?: boolean
    saveAllFiles?: boolean
    showTerminal?: boolean
    focus?: boolean
    sequence?: (string | { command: string; args?: Record<string, any> })[]
  }
}
