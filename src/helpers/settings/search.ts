import { variable } from '~/helpers'

export const exclude = () => ({
  'search.exclude': Object.fromEntries(
    variable('search_exclude_paths').map((path: string) => [path, true])
  ),
})
