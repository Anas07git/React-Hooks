import React, { useReducer } from 'react'

const intialState={
    currCount1:0,
    currCount2:10,

}

const reducer=(state,action)=>{
    switch(action.type){
        case "inc": return {...state,currCount1:state.currCount1+action.value}
        case "inc2": return {...state,currCount2:state.currCount2+action.value}
        case "dec": return {...state,currCount1:state.currCount1-action.value}
        case "dec2": return {...state,currCount2:state.currCount2-action.value}
        case "reset": return intialState
        default: return state
    }

}

function ReduceTwo() {
    const[count,dispatch]=useReducer(reducer,intialState)
    
  return (
    
    <div>
        <h3>Count1 -: {count.currCount1} </h3>
        <h3>Count2 -: {count.currCount2} </h3>
      <button onClick={()=>dispatch({type:"inc",value:1})}>Inc</button>
      <button onClick={()=>dispatch({type:"inc2",value:1})}>Inc Two</button>
      <button onClick={()=>dispatch({type:"inc",value:5})}>Inc 5</button>
      <button onClick={()=>dispatch({type:"dec",value:1})}>Dec</button>
      <button onClick={()=>dispatch({type:"dec2",value:1})}>Dec Two</button>
      <button onClick={()=>dispatch({type:"dec",value:5})}>Dec 5</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default ReduceTwo
