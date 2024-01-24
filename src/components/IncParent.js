import React, { useState } from 'react'
import IncChild from './IncChild'

function IncParent () {
    const[count,setCount]=useState(0)
    const[name,setName]=useState("abc")


    console.log("Parent Component")
  return (
    <div>
        <button onClick={()=>setCount(prev=>prev+1)}>Count-{count}</button>
        <button onClick={()=>setName("Xzy")}>Change Name</button>

        <IncChild name={name}>
            <strong>Hello</strong>
        </IncChild>
    </div>
  )
}

export default IncParent
