import create from 'zustand'
import {DetailDisplayMode, UserStoreState} from '../types/UserStoreState'

export const useStore = create<UserStoreState>(set => ({
  showDetailPopup: false,
  selectedUserId: 0,
  detailDisplayMode: 'CARD',
  toggleDetailPopup: () => set((state) => ({showDetailPopup: !state.showDetailPopup})),
  setSelectedUser: (selectedUserId: number) => set({selectedUserId}),
  setDetailDisplayMode: (detailDisplayMode: DetailDisplayMode) => set({detailDisplayMode}),
}))
