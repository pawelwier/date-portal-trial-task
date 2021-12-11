import create from 'zustand'
import {DetailDisplayMode, UserStoreState} from '../types/UserStoreState'

export const useStore = create<UserStoreState>(set => ({
  showDetailPopup: false,
  selectedUserData: {selectedUserId: 0, selectedUserName: '', selectedUserImg: ''},
  detailDisplayMode: 'CARD',
  toggleDetailPopup: () => set((state) => ({showDetailPopup: !state.showDetailPopup})),
  setSelectedUser: (selectedUserData: {selectedUserId: number, selectedUserName: '', selectedUserImg: string}) => set({selectedUserData}),
  setDetailDisplayMode: (detailDisplayMode: DetailDisplayMode) => set({detailDisplayMode}),
}))
