import React, { useEffect, useState } from 'react'

function IntervalHook() {
    const[count,setCount]=useState(0)

    const tick=()=>{
        setCount(count+1)
        // setCount(prev=>prev+1) // []
    }

    useEffect(()=>{
        console.log("useEffect")
       const interval= setInterval(tick,1000)

       return ()=>{
        clearInterval(interval)
       }
    },[count])
  return (
    <div>
        <h2>{count}</h2>
      
    </div>
  )
}

export default IntervalHook
