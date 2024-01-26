import React, { useContext } from 'react'
import { CountContext } from './ContextParent'

export const ChildA=()=>{
    console.log("child A")
    return(
    <ChildB/>
    )
}
export const MemoA= React.memo(ChildA)


export const ChildB=()=>{
    console.log("child b")
    return(
    <ChildC/>
    )
}

export const ChildC=()=>{
    const count= useContext(CountContext)

    console.log("child c")
    return(
        <div>
     Child C -{count}
    </div>
    )
}