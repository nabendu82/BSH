import React, { useContext } from 'react'
import { CountContext } from '../App'

const Parent1 = () => {
  const countContext = useContext(CountContext)
  return (
    <div>
      <h1>Parent1 - {countContext.countState}</h1>
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default Parent1