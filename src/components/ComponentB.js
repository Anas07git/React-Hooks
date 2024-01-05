import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { ChannelContext, UserContext } from '../App'

function ComponentB() {
    const user= useContext(UserContext)
    const channel= useContext(ChannelContext)
  return (
    <div>
        <h2>{user} - {channel}</h2>
      <ComponentC/>

    </div>
  )
}

export default ComponentB
