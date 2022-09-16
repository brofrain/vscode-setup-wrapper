import { user } from '~/config'
import { removeAlphaFromColor } from '~/helpers'

import type { HexColor } from '~/types'

// https://primer.style/octicons
type Octicon = string

type HighlightOptionsReference = 'foreground' | 'background'

interface HighlightOptions {
  icon?: Octicon
  fontStyle?: 'normal' | 'italic'
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  foreground?: HexColor
  background?: HexColor
  borderRadius?: string
  iconColour?: HighlightOptionsReference
  rulerColour?: HighlightOptionsReference
  rulerLane?: 'left' | 'right' | 'center' | 'full'
  rulerOpacity?: number
  hideFromTree?: boolean
  hideFromStatusBar?: boolean
}

const DEFAULT_HIGHLIGHT_ICON_COLOR: HighlightOptionsReference = 'foreground'
const DEFAULT_HIGHLIGHT_RULER_COLOR: HighlightOptionsReference = 'foreground'

interface Configuration {
  highlight?: HighlightOptions
  userHighlight?: HighlightOptions
  tags: Record<
    string,
    {
      aliases?: string[]
      highlight: HighlightOptions
    }
  >
}

const parseHighlightOptions = ({
  iconColour = DEFAULT_HIGHLIGHT_ICON_COLOR,
  rulerColour = DEFAULT_HIGHLIGHT_RULER_COLOR,
  ...options
}: HighlightOptions) => {
  const parsedOptions = { ...options }

  if (iconColour in options) {
    Object.assign(parsedOptions, {
      iconColour: removeAlphaFromColor(options[iconColour] as HexColor),
    })
  }

  if (rulerColour in options) {
    Object.assign(parsedOptions, {
      rulerColour: removeAlphaFromColor(options[rulerColour] as HexColor),
    })
  }

  return parsedOptions
}

export const tagGroups = (config: Configuration) => {
  const tags = [
    ...Object.keys(config.tags),
    ...Object.values(config.tags).flatMap(({ aliases = [] }) => aliases),
  ]

  const tagGroups = Object.fromEntries(
    Object.entries(config.tags).map(([tag, { aliases = [] }]) => [
      tag,
      [tag, ...aliases],
    ])
  )

  const defaultHighlight = config.highlight || {}

  const customHighlight = Object.fromEntries(
    Object.entries(config.tags).map(([tag, { highlight = {} }]) => [
      tag,
      parseHighlightOptions(highlight),
    ])
  )

  if (config.userHighlight) {
    const { tag, firstname, lastname, alias } = user

    const names = [
      tag,
      firstname,
      lastname,
      `${firstname}${lastname}`,
      `${firstname}.${lastname}`,
      `${firstname[0]}${lastname}`,
      `${firstname[0]}.${lastname}`,
      `${firstname}${lastname[0]}`,
      `${firstname}.${lastname[0]}`,
      `${firstname[0]}${lastname[0]}`,
    ]

    if (alias) {
      names.push(alias)
    }

    const personalTags = [
      ...names.map((mention) => `@${mention}`),
      ...tags.flatMap((tag) => names.map((mention) => `${tag} @${mention}`)),
    ]

    const tagMention = `@${tag}`
    tags.push(...personalTags)
    tagGroups[tagMention] = personalTags
    customHighlight[tagMention] = parseHighlightOptions(config.userHighlight)
  }

  return {
    'todo-tree.general.tags': tags,
    'todo-tree.general.tagGroups': tagGroups,
    'todo-tree.highlights.defaultHighlight': defaultHighlight,
    'todo-tree.highlights.customHighlight': customHighlight,
    'todo-tree.regex.regexCaseSensitive': false,
    'todo-tree.regex.regex':
      '(//|#|<!--|/[*]+|  \\*|^ \\*)\\s*($TAGS)([^a-zA-Z0-9\\[\\(])',
  }
}
