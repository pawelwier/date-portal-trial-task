import {UserLocationDetails} from './UserLocationDetails';
import {UserPersonalDetails} from './UserPersonalDetails';
import {UserSexualDetails} from './UserSexualDetails';

export interface UserDetails {
  headline: string
  id: number
  location: UserLocationDetails
  personal: UserPersonalDetails
  sexual: UserSexualDetails
  is_plus: boolean
}
