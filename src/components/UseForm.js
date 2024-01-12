import React, { useState } from 'react'
import useInput from './useInput'

function UseForm() {
    const[f,bindF,setF]=useInput("")
    const[l,bindL,setL]=useInput("")

    const submit=(e)=>{
       e.preventDefault()
       alert(`Hello ${f}  ${l}`)
       setF()
       setL()
    }
  return (
    <div>
        <form onSubmit={submit}> 
      <div>
        <label>First Name</label>
        <input type='text'{...bindF}/>
      </div>
      <div>
        <label>Last Name</label>
        <input type='text' {...bindL}/>
      </div>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UseForm
