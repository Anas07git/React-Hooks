import React, { useState } from 'react'

function OptParent({children}) {
    const[count,setCount]=useState(0)
    const[name,setName]=useState("")


    console.log("Parent Component")
  return (
    <div>
        <button onClick={()=>setCount(prev=>prev+1)}>Count-{count}</button>
        {/* <button onClick={()=>setName("Xzy")}>Change Name</button> */}

        {children}
    </div>
  )
}

export default OptParent
