import React, {useState} from 'react'
import Header from './components/Header'
import UserList from './components/UserList'
import './App.css'
import {SortingType} from "./types/SortingType";

function App() {
  const [sortingType, setSortingType] = useState<SortingType>('ACTIVITY')

  return (
    <>
      <Header setSortingType={setSortingType}/>
      <UserList sortingType={sortingType} />
    </>
  )
}

export default App;
