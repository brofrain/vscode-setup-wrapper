import fs from 'node:fs'

export const readJson = (path: string) =>
  JSON.parse(fs.readFileSync(path, 'utf8'))

export const writeJson = (path: string, data: any) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n')
}
