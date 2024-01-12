import { useState } from 'react'

function useInput(intialState="") {
const[value,setVal]=useState(intialState)

const reset =()=> setVal(intialState)

const bind={
    value,
    onChange:e=>setVal(e.target.value)
}
return[value,bind,reset]
}

export default useInput
