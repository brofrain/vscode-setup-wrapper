import { dictionary, extensions } from '~/config'

type Settings = Record<string, any>

const retrieveWordsFromSettings = (settings: Settings) => {
  if (
    !(
      extensions.includes('Gruntfuggly.todo-tree') &&
      'todo-tree.general.tags' in settings
    )
  ) {
    return []
  }

  const todoTreeTags: string[] = settings['todo-tree.general.tags']

  if (!todoTreeTags.length) {
    return []
  }

  return [
    ...new Set(
      todoTreeTags.flatMap((tag) => tag.replace(/[.@]/g, '').split(' '))
    ),
  ]
}

export const words = (settings: Settings) => ({
  'cSpell.words': [...dictionary, ...retrieveWordsFromSettings(settings)].map(
    (word) => word.toLowerCase()
  ),
})
