import { colors } from '~/config'

import type { HexColor } from '~/types'

export const color = (key: string, alpha?: number): HexColor => {
  if (!(key in colors)) {
    throw new Error(`Color not found: ${key}`)
  }

  const baseColor = colors[key]

  if (!baseColor) {
    throw new Error(`Empty color: ${key}`)
  }

  if (baseColor in colors) {
    return color(baseColor, alpha)
  }

  if (
    !baseColor ||
    baseColor[0] !== '#' ||
    baseColor.length > 9 ||
    baseColor.length === 6 ||
    baseColor.length === 8
  ) {
    throw new Error(`Invalid color: ${baseColor} (${key})`)
  }

  if (!alpha && alpha !== 0) {
    return baseColor
  }

  if (alpha < 0 || alpha > 1) {
    throw new Error(`Invalid alpha: ${alpha}`)
  }

  const hexAlpha = Math.round(255 * alpha)
    .toString(16)
    .padStart(2, '0')

  if (baseColor.length < 6) {
    const { 1: r, 2: g, 3: b } = baseColor
    return `#${r}${r}${g}${g}${b}${b}${hexAlpha}`
  }

  const { 1: r1, 2: r2, 3: g1, 4: g2, 5: b1, 6: b2 } = baseColor
  return `#${r1}${r2}${g1}${g2}${b1}${b2}${hexAlpha}`
}

export const removeAlphaFromColor = (value: HexColor): HexColor =>
  value.slice(0, value.length < 6 ? 4 : 7)
