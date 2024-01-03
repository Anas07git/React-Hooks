import React, { useEffect, useState } from 'react'

function EffectHook() {
    const[count,setCount]=useState(0)
    const[name,setName]=useState("")

    useEffect(()=>{
        console.log("useEffect Called")
        document.title= `You clicked ${count} times`
    },[count])
  return (
    <div>
        <input name={name} onChange={e=>setName(e.target.value)}/>
      <button onClick={()=>setCount(count+1)}>Count {count}</button>
    </div>
  )
}

export default EffectHook
