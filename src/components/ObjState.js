import React, { useState } from 'react'

function ObjState() {
    const[name,setName]=useState({first:"", last:""})
  return (
    <div>
      <input name={name.first} onChange={e=> setName({...name, first:e.target.value})}/>
      <input name={name.last} onChange={e=> setName({...name, last:e.target.value})}/>

      <h2>Firstname : {name.first}</h2>
      <h2>Lastname : {name.last}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default ObjState
