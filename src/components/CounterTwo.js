import React, { useState } from 'react'
import useCounter from './useCounter'

function CounterTwo() {
 const[inc,dec,reset,count]=useCounter(0,10)
  return (
    <div>
        Count -{count}
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo
