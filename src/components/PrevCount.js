import React, { useState } from 'react'


function PrevCount() {
    const intialCount =0
    const[count,setCount]=useState(intialCount)

    const incFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prev=>prev+1)
        }
    }

  return (
    <div>
        Count :{count}
       <button onClick={()=>setCount(intialCount)}>Reset</button>
       <button onClick={()=>setCount(prev=>prev+1)}>Inc</button>
       <button onClick={()=>setCount(prev=>prev-1)}>Dec</button>
       <button onClick={incFive}>Inc 5</button>
    </div>
  )
}

export default PrevCount
