import { extensions } from '~/config'

import * as cSpell from './cSpell'

import type { Settings } from '~/types'

export * as cSpell from './cSpell'
export * as search from './search'
export * as todoTree from './todoTree'

export const extendSettings = (settings: Settings): Settings => {
  const newSettings = { ...settings }

  if (extensions.includes('streetsidesoftware.code-spell-checker')) {
    Object.assign(newSettings, { ...cSpell.words(newSettings) })
  }

  return newSettings
}
