import React, { useState } from 'react'
import ContextChild from './ContextChild'

export const CountContext= React.createContext()

function ContextParent() {
    const[count,setCount]=useState(0)

  return (
    <>
      <button onClick={()=> setCount(count+1)}>Count -{}</button>
      <CountContext.Provider value={count}>
        <ContextChild/>
      </CountContext.Provider>
    </>
  )
}

export default ContextParent
