import React, { useState } from 'react'
import OptParent from './OptParent'
import OptChild from './OptChild'

function OptGrand() {
    const[count,setCount]=useState(0)
    console.log("Grand Component")
  return (
    <div>
      Grand Count -{count}
      <button onClick={()=>setCount(prev=>prev+1)}>Count-{count}</button>
      <OptParent>
        <OptChild/>
      </OptParent>
    </div>
  )
}

export default OptGrand
