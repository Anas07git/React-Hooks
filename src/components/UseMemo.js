import React, { useMemo, useState } from 'react'

function UseMemo() {
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)

    const countOne=()=>{
        setCount1(count1+1)
    }
    const countTwo=()=>{
        setCount2(count2+1)
    }
    const isEven=useMemo(() => {
        let i=0
        while(i<2000000000) i++
        return count1%2===0
    },[count1])
  return (
    <div>
      <div>
        <button onClick={countOne}>Count - {count1}</button>
        <span>{isEven?"Even":"Odd"}</span>
      </div>
      <div>
        <button onClick={countTwo}>Count - {count2}</button>

      </div>
    </div>
  )
}

export default UseMemo
