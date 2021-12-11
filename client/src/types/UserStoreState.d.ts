export type DetailDisplayMode = 'CARD' | 'POPUP'

export interface UserStoreState {
  showDetailPopup: boolean
  selectedUserData: {selectedUserId: number, selectedUserName: string, selectedUserImg: string}
  detailDisplayMode: DetailDisplayMode
  toggleDetailPopup: () => void
  setSelectedUser: ({selectedUserId: number, selectedUserName: string, selectedUserImg: string}) => void
  setDetailDisplayMode: (mode: DetailDisplayMode) => void
}
