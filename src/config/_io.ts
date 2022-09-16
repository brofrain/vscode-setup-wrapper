import fs from 'node:fs'

import YAML from 'yaml'

import type { HexColor, User, Keybinding } from '~/types'

const readConfigYaml = (filename: string) =>
  YAML.parse(fs.readFileSync(`src/config/${filename}.yaml`, 'utf8'))

const writeConfigYaml = (filename: string, data: any) =>
  fs.writeFileSync(
    `src/config/${filename}.yaml`,
    YAML.stringify(data, { singleQuote: true })
  )

const readConfigArrayYaml = (filename: string) => {
  const data = readConfigYaml(filename)

  if (!Array.isArray(data)) {
    throw new TypeError(`File ${filename}.yaml does not contain an array`)
  }

  if (
    data.length &&
    !data.some((item) => typeof item !== 'string' || typeof item !== 'number')
  ) {
    const sortedData = data.sort((a: string, b: string) =>
      a.localeCompare(b, undefined, { sensitivity: 'base' })
    )

    writeConfigYaml(filename, sortedData)

    return sortedData
  }

  return data
}

interface NestedColors {
  [key: string]: HexColor | NestedColors
}

const flattenColors = (nestedColors: NestedColors, keyPrefix = '') => {
  const flatColors: Record<string, HexColor> = {}

  for (const [key, value] of Object.entries(nestedColors)) {
    if (typeof value === 'string') {
      flatColors[`${keyPrefix}${key === '~' ? '' : key}`] = value
    } else {
      Object.assign(flatColors, flattenColors(value, keyPrefix + key))
    }
  }

  return flatColors
}

export const readColors = (): Record<string, HexColor> =>
  flattenColors(readConfigYaml('colors'))

export const readDictionary = (): string[] =>
  readConfigArrayYaml('dictionary').map(String)

export const readExtensions = (): string[] => readConfigArrayYaml('extensions')

export const readKeybindings = (): Keybinding[] =>
  readConfigArrayYaml('keybindings').map((item: Keybinding) => ({
    ...item,
    ...(item.args?.cmd
      ? { args: { ...item.args, cmd: item.args.cmd.replaceAll('\n', '') } }
      : {}),
  }))

export const readVariables = (): Record<string, any> =>
  readConfigYaml('variables')

export const readUser = (): User => {
  const { tag, firstname, lastname, alias } = readConfigYaml('user')

  for (const item of [tag, firstname, lastname]) {
    if (!item || typeof item !== 'string') {
      throw new Error('Invalid user data')
    }
  }

  return {
    tag,
    firstname: firstname.toLowerCase(),
    lastname: lastname.toLowerCase(),
    ...(alias && typeof alias === 'string'
      ? { alias: alias.toLowerCase() }
      : {}),
  }
}
