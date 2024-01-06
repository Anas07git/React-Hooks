import React, { useReducer } from 'react'

const intialState=0
const reducer=(state,action)=>{
    // console.log(state)
    // console.log(action)
    // console.log('reducer')
    switch(action){
        case "inc": return state+1
        case "dec": return state-1
        case "reset": return intialState
        default: return state
    }

}

function ReduceOne() {
    const[count,dispatch]=useReducer(reducer,intialState)
  return (
    <div>
        <h3>Count -: {count} </h3>
      <button onClick={()=>dispatch("inc")}>Inc</button>
      <button onClick={()=>dispatch("dec")}>Dec</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default ReduceOne
