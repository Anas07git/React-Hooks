import React, { useEffect, useState } from 'react'
import axios from 'axios'

function RedFetchOne() {
    const[load,setLoad]=useState(true)
    const[err,setError]=useState("")
    const[post,setPost]=useState({})

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.tpicode.com/posts/1`)
        .then((res)=>{
            setLoad(false)
            setPost(res.data)
            setError("")
        })
        .catch((err)=>{
            setLoad(false)
            setError("Something went wrong")
            setPost({})

        })

    },[])
  return (
    <div>
       {load?"Loading":post.title}
       {err?err:null}
    </div>
  )
}

export default RedFetchOne
