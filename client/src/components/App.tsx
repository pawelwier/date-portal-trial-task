import React, {useState} from 'react'
import Header from './header/Header'
import UserList from './users/UserList'
import './App.css'
import {SortingType} from '../types/SortingType'
import ResultLimitButton from './header/ResultLimitButton'
import UserDetailsPopupContent from './users/UserDetailsPopupContent'
import {useStore} from "../store/user";
import Popup from "./ui/Popup";

const RESULT_LIMIT = 8
const SORTING_TYPE = 'ACTIVITY'

function App() {
  const [sortingType, setSortingType] = useState<SortingType>(SORTING_TYPE)
  const [resultLimit, setResultLimit] = useState<number>(RESULT_LIMIT)

  const {selectedUserId, selectedUserName, selectedUserImg} = useStore(state => state.selectedUserData)
  const displayDetailsPopup = useStore(state => state.showDetailPopup)
  const toggleDetailPopup = useStore(state => state.toggleDetailPopup)
  const setSelectedUser = useStore(state => state.setSelectedUser)

  const addToFavorites = () => {
    // TODO: favorites
    console.log('added')
  }

  const closeDetailPopup = () => {
    toggleDetailPopup()
    setSelectedUser({selectedUserId: 0, selectedUserName: '', selectedUserImg: ''})
  }

  return (
    <>
      {displayDetailsPopup && (
        <Popup
          headerText={'Selected user details'}
          submitText={'Add to favorites'}
          onSubmit={addToFavorites}
          onCancel={closeDetailPopup}
        >
          <UserDetailsPopupContent
            id={selectedUserId}
            userName={selectedUserName}
            userImg={selectedUserImg}
          />
        </Popup>
      )}
      <Header setSortingType={setSortingType}/>
      <UserList sortingType={sortingType} resultLimit={resultLimit}/>
      <ResultLimitButton setResultLimit={setResultLimit} resultLimit={resultLimit} />
    </>
  )
}

export default App;
