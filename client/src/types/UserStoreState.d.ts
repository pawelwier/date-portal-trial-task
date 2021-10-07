export type DetailDisplayMode = 'CARD' | 'POPUP'

export interface UserStoreState {
  showDetailPopup: boolean
  selectedUserId: number
  detailDisplayMode: DetailDisplayMode
  toggleDetailPopup: () => void
  setSelectedUser: (selectedUserId: number) => void
  setDetailDisplayMode: (mode: DetailDisplayMode) => void
}
