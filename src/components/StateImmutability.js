import React, { useState } from 'react'


const init={
    fname:"Anas",
    lname:"Karatela"
}
const init2=["A","K"]
function StateImmutability() {

    const[name,setName]=useState(init)
    const[name2,setName2]=useState(init2)

    const change=()=>{
        // Wouldnt re-render
        // name.fname="A"
        // name.lname="K"
        // setName(name)
 
        // Will re-render
        // const newNames={...name}
        // newNames.fname="A"
        // newNames.lname="K"
        // setName(newNames)

        setName({...name,fname:"A",lname:"K"})
    }
    const change2=()=>{
        setName2([...name2,"C","D"])
    }

    console.log("Rendering")
  return (
    <div>
      <button onClick={change}>{name.fname} {name.lname}</button>
      <button onClick={change2}>Click</button>
      {
       name2.map(name=> <div key={name}>
            {name}
       </div>)
      }
    </div>
  )
}

export default StateImmutability
