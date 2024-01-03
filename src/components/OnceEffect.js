import React, { useEffect, useState } from 'react'

function OnceEffect() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

    const mouseHandle=e=>{
        console.log("Mouse event")
         setX(e.clientX)
         setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect Mount")
        window.addEventListener("mousemove",mouseHandle)
        
        return ()=>{
            console.log(" useEffect Unmount")
            
            window.removeEventListener("mousemove",mouseHandle)
        }
    },[])
  return (
    <div>
      Hooks X-{x},Y-{y}
    </div>
  )
}

export default OnceEffect
