import React, { useEffect, useReducer } from 'react'
import axios from 'axios'


const intialState={
    load:true,
    err:"",
    post:{}
}

const reducer=(state,action)=>{
    switch(action.type){
        case "Success":
            return{ 
                load:false,
                post: action.payload,
                err:""
            }

        case "Failure":{
            return{
                load:false,
                post:{},
                err:"Something went wrong"
            }
        }
        default: return state

    }
}

function RedFetchTwo() {
    const[state,dispatch]=useReducer(reducer,intialState)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then((res)=>{
            dispatch({type:"Success",payload:res.data})
        })
        .catch((err)=>{
           dispatch({type:"Failure"})
        })

    },[])
  return (
    <div>
      {state.load?"Loading":state.post.title}
      {state.err?state.err:null}
    </div>
  )
}

export default RedFetchTwo
