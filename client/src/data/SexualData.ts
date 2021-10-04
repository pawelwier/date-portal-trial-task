import {AnalPosition, SaferSex, Sm} from "../types/Sexual";

export const analPosition: Record<AnalPosition, string> = {
  TOP_ONLY: 'top only',
  BOTTOM_ONLY: 'bottom only',
  MORE_TOP: 'more bottom',
  MORE_BOTTOM: 'more top',
  VERSATILE: 'versatile',
  NOENTRY: '-',
}

export const saferSex: Record<SaferSex, string> = {
  NEEDS_DISCUSSION: 'needs discussion',
  ALWAYS: 'always',
  NEVER: 'never',
  NOENTRY: '-',
}

export const isSm: Record<Sm, string> = {
  YES: 'yes',
  NO: 'no',
  SOFT: 'soft',
  NOENTRY: '-',
}
