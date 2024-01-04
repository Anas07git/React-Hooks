import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetch() {
    const[posts,setPosts]=useState([])
    const[id,setId]=useState(1)
    const[idP,setIdP]=useState(1)


// GET REQUEST

//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then((res)=>{
//             console.log(res)
//             setPosts(res.data)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
// },[])

// useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>{
//         return res.json()
//     })
//     .then((res)=>{
//         setPosts(res)
//         console.log(res)
//     })
//     .catch((err)=>[
//         console.log(err)
//     ])
// },[])

// POST REQUEST
const handleClick=()=> setIdP(id)
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idP}`)
    .then((res)=>{
        console.log(res)
        setPosts(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[idP])

  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
      {/* <ul>
        {
          posts.map(post=> <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
      <h3>{posts.title}</h3>
      <button onClick={handleClick}>Fetch Post</button>
    </div>
  )
}

export default DataFetch
