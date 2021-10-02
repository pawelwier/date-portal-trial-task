export interface UserDetails {
  headline: string,
  id: number,
  location: LocationDetails,
  personal: PersonalDetails,
  sexual: SexualDetails,
  is_plus: boolean
}

type LocationDetails = {
  area: string,
  city: string,
  country: string,
  distance: number,
  name: string

}
type PersonalDetails = {
  age: number,
  body_hair: string,
  body_type: string,
  ethnicity: string,
  eye_color: string,
  height: {
    cm: number
  },
  relationship: string,
  smoker: string,
  weight: {
    "kg": number
  }
}

type SexualDetails = {
  anal_position: string,
  safer_sex: string,
  sm: string
}
