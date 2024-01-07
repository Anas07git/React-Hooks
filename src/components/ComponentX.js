import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentX() {
    const countContext= useContext(CountContext)
  return (
    <div>
      ComponentX
      <button onClick={()=>countContext.dispatch("inc")}>Inc</button>
      <button onClick={()=>countContext.dispatch("dec")}>Dec</button>
      <button onClick={()=>countContext.dispatch("reset")}>Reset</button>

    </div>
  )
}

export default ComponentX
