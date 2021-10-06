import {UserDetails} from "./UserDetails";

export type DetailDisplayMode = 'CARD' | 'POPUP'

export interface UserStoreState {
  showDetailPopup: boolean
  selectedUserDetails: UserDetails | null
  detailDisplayMode: DetailDisplayMode
  toggleShowDetailPopup: () => void
  setSelectedUser: (selectedUserDetails: UserDetails) => void
  setDetailDisplayMode: (mode: DetailDisplayMode) => void
}
