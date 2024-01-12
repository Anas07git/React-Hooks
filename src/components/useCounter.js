import { useState } from "react"


function useCounter(intialState=0,valur) {
    const[count,setCount]=useState(intialState)

    const inc=()=>{
        setCount(count+valur)
    }

    const dec=()=>{
        setCount(count-valur)
    }
    const reset=()=>{
        setCount(intialState)

    }
    return [inc,dec,reset,count]
}

export default useCounter
