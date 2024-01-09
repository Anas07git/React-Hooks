import React, { useCallback, useEffect, useState } from 'react'
import Button from './Button'
import Title from './TItle'
import Count from './Count'

function Parent() {
    const[age,setAge]=useState(10)
    const[money,setMoney]=useState(20000)


    const incAge=useCallback(()=>{
        setAge(age+1)
    },[age])

    const incMoney=useCallback(()=>{
        setMoney(money+1)
    },[money])
  

  return (
    <div>
        <Title/>
      <Count text="Age" count={age}/>
      <Button handleInc={incAge}>Inc Age</Button>
      <Count text="Money" count={money}/>
      <Button handleInc={incMoney}>Inc Money</Button>
    </div>
  )
}

export default Parent
