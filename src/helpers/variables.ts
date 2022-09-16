import { variables } from '~/config'

export const variable = (key: string) => {
  if (!(key in variables)) {
    throw new Error(`Variable not found: ${key}`)
  }

  return variables[key]
}
