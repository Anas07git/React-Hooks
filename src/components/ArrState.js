import React, { useState } from 'react'

function ArrState() {
    const[items,setItems]=useState([])

    const addItems=()=>{
      console.log(items)
        setItems([...items,{
          id:items.length,
          value: Math.floor(Math.random()*10)+1
        }])
    }
    console.log(items)
  return (
    <div>
        <button onClick={addItems}>Add Items</button>
        <ul>
        {
            items.map(item=> <li key={item.id}>{item.value}</li>)
            
        }
        </ul>
    </div>
  )
}

export default ArrState
