import {BodyHair, BodyType, Ethnicity, Relationship, Smoker} from "../types/Personal";

export const bodyHair: Record<BodyHair, string> = {
  SMOOTH: 'smooth',
  SHAVED: 'shaved',
  LITTLE: 'little',
  AVERAGE: 'average',
  VERY_HAIRY: 'very hairy',
  NOENTRY: '-',
}

export const bodyType: Record<BodyType, string> = {
  BELLY: 'belly',
  SLIM: 'slim',
  STOCKY: 'stocky',
  AVERAGE: 'average',
  MUSCULAR: 'muscular',
  ATHLETIC: 'athletic',
  NOENTRY: '-',
}

export const userEthnicity: Record<Ethnicity, string> =  {
  MIXED: 'mixed',
  CAUCASIAN: 'Caucasian',
  LATIN: 'Latin',
  INDIAN: 'Indian',
  BLACK: 'Black',
  ASIAN: 'Asian',
  ARAB: 'Arab',
  NOENTRY: '-',
}

export const userRelationship: Record<Relationship, string> = {
  OPEN: 'open',
  SINGLE: 'single',
  MARRIED: 'married',
  PARTNER: 'partner',
  NOENTRY: '-',
}

export const isSmoker: Record<Smoker, string> = {
  YES: 'yes',
  NO: 'no',
  NOENTRY: '-',
}
