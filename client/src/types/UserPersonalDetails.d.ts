import { BodyHair, BodyType, Ethnicity, Relationship, Smoker } from './Personal'

export interface UserPersonalDetails {
  age: number
  body_hair: BodyHair
  body_type: BodyType
  ethnicity: Ethnicity
  eye_color: string
  height: {
    cm: number
  }
  relationship: Relationship
  smoker: Smoker
  weight: {
    kg: number
  }
}
