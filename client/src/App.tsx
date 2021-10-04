import React, {useState} from 'react'
import Header from './components/Header'
import UserList from './components/UserList'
import './App.css'
import {SortingType} from "./types/SortingType";
import ResultLimitButton from "./components/ResultLimitButton";

const RESULT_LIMIT = 8
const SORTING_TYPE = 'ACTIVITY'

function App() {
  const [sortingType, setSortingType] = useState<SortingType>(SORTING_TYPE)
  const [resultLimit, setResultLimit] = useState<number>(RESULT_LIMIT)

  return (
    <>
      <Header setSortingType={setSortingType}/>
      <UserList sortingType={sortingType} resultLimit={resultLimit}/>
      <ResultLimitButton setResultLimit={setResultLimit} resultLimit={resultLimit} />
    </>
  )
}

export default App;
