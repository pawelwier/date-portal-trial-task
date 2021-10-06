import create from 'zustand'
import {UserDetails} from '../types/UserDetails'
import {DetailDisplayMode, UserStoreState} from '../types/UserStoreState'

export const useStore = create<UserStoreState>(set => ({
  showDetailPopup: false,
  selectedUserDetails: null,
  detailDisplayMode: 'CARD',
  toggleShowDetailPopup: () => set((state) => ({showDetailPopup: !state.showDetailPopup})),
  setSelectedUser: (selectedUserDetails: UserDetails) => set({selectedUserDetails}),
  setDetailDisplayMode: (detailDisplayMode: DetailDisplayMode) => set({detailDisplayMode}),
}))
