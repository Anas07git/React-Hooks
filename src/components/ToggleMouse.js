import React, { useState } from 'react'
import OnceEffect from './OnceEffect'

function ToggleMouse() {
    const[display,setDisplay]=useState(true)
  return (
    <div>
      <button onClick={()=> setDisplay(!display)}>Toggle</button>
      {display && <OnceEffect/>}
    </div>
  )
}

export default ToggleMouse
