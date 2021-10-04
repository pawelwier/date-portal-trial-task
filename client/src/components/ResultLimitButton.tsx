import React from 'react'

type ResultLimitButtonProps = {
  resultLimit: number
  setResultLimit: React.Dispatch<React.SetStateAction<number>>
}

function ResultLimitButton({resultLimit, setResultLimit}: ResultLimitButtonProps) {
  const showMoreResults = () => {
    setResultLimit(resultLimit + 8)
    console.log(resultLimit + 8)
  }

  return (
    <div className='result-limit-container'>
      <button className="more-results-button btn" onClick={showMoreResults}>More results</button>
    </div>
  )
}

export default ResultLimitButton
