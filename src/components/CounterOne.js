import React, { useState } from 'react'
import useCounter from './useCounter'

function CounterOne() {
  const[inc,dec,reset,count]=useCounter(0,5)
  return (
    <div>
        COUNT -{count}
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne
