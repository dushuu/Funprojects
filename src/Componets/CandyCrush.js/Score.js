import React from 'react'

const Score = ({score}) => {
  return (
    <div className='score-board'>
        <h1 style = {{marginTop:"15px"}}>Your score: {score}</h1>
    </div>
  )
}

export default Score