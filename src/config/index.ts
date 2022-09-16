import {
  readColors,
  readDictionary,
  readExtensions,
  readKeybindings,
  readUser,
  readVariables,
} from './_io'

export const colors = readColors()
export const dictionary = readDictionary()
export const extensions = readExtensions()
export const keybindings = readKeybindings()
export const variables = readVariables()
export const user = readUser()

export { default as settings } from './settings'
export { default as theme } from './theme'
