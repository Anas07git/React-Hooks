import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentZ() {
    const countContext= useContext(CountContext)
  return (
    <div>
      ComponentZ
      <button onClick={()=>countContext.dispatch("inc")}>Inc</button>
      <button onClick={()=>countContext.dispatch("dec")}>Dec</button>
      <button onClick={()=>countContext.dispatch("reset")}>Reset</button>

    </div>
  )
}

export default ComponentZ
