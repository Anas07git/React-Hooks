import React, { useState } from 'react'
import  { MemoA } from './ContextChild'

export const CountContext= React.createContext()

function ContextParent() {
    const[count,setCount]=useState(0)
   console.log("Parent Context")
  return (
    <>
      <button onClick={()=> setCount(count+1)}>Count -{count}</button>
      <CountContext.Provider value={count}>
        <MemoA/>
      </CountContext.Provider>
    </>
  )
}

export default ContextParent
