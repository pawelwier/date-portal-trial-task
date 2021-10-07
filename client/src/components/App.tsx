import React, {useState} from 'react'
import Header from './header/Header'
import UserList from './users/UserList'
import './App.css'
import {SortingType} from '../types/SortingType'
import ResultLimitButton from './header/ResultLimitButton'
import UserDetailsPopup from './users/UserDetailsPopup'
import {useStore} from "../store/user";

const RESULT_LIMIT = 8
const SORTING_TYPE = 'ACTIVITY'

function App() {
  const [sortingType, setSortingType] = useState<SortingType>(SORTING_TYPE)
  const [resultLimit, setResultLimit] = useState<number>(RESULT_LIMIT)

  const id = useStore(state => state.selectedUserId)

  return (
    <>
      <UserDetailsPopup id={id} />
      <Header setSortingType={setSortingType}/>
      <UserList sortingType={sortingType} resultLimit={resultLimit}/>
      <ResultLimitButton setResultLimit={setResultLimit} resultLimit={resultLimit} />
    </>
  )
}

export default App;
