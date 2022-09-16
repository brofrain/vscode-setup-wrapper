import { extensions, keybindings, user } from '~/config'

import { extendKeybindings } from './keybindings'

import { readJson, writeJson } from '../io'

interface PackageJson {
  publisher: string
  description: string
  version: string
  extensionPack: string[]
  contributes?: {
    keybindings?: { key: string; command: string; when?: string }[]
  }
}

const updatePackagePublisher = (packageJson: PackageJson) => {
  packageJson.publisher = user.alias || `${user.firstname[0]}${user.lastname}`
}

const updatePackageDescription = (packageJson: PackageJson) => {
  const now = new Date()
  const { 0: date, 1: time } = new Date(
    now.getTime() - now.getTimezoneOffset() * 60_000
  )
    .toISOString()
    .split('T')

  packageJson.description = `${date} ${time.split('.')[0]}`
}

const updatePackageVersion = (packageJson: PackageJson) => {
  const { 0: major, 1: minor, 2: patch } = packageJson.version.split('.')
  packageJson.version = `${major}.${minor}.${Number(patch) + 1}`
}

const updatePackageExtensionPack = (packageJson: PackageJson) => {
  packageJson.extensionPack = extensions
}

const updatePackageKeybindings = (packageJson: PackageJson) => {
  if (!packageJson.contributes) {
    packageJson.contributes = {}
  }
  packageJson.contributes.keybindings = extendKeybindings(keybindings)
}

export const updatePackageJson = () => {
  const packageJson: PackageJson = readJson('package.json')

  updatePackagePublisher(packageJson)
  updatePackageDescription(packageJson)
  updatePackageVersion(packageJson)
  updatePackageExtensionPack(packageJson)
  updatePackageKeybindings(packageJson)

  writeJson('package.json', packageJson)
}
