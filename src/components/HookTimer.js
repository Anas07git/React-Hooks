import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {
    const[timer,setTimer]=useState(0)
    const timeRef= useRef(null)

    useEffect(()=>{
        timeRef.current= setInterval(()=>{
            setTimer(prev=> prev+1)
        },1000)
        return ()=>{
            clearInterval(timeRef.current)
        }
    },[])
  return (
    <div>
        Hook Timer - {timer}
        <button onClick={()=> clearInterval(timeRef.current)}>Clear </button>
      
    </div>
  )
}

export default HookTimer
