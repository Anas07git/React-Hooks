import React from 'react'
import { ChannelContext, UserContext } from '../App'

function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {
            (name)=>{
                return(
                    <ChannelContext.Consumer>
                        {
                            (val)=>{
                                return <div> name:{name} stack:{val}</div>
                            }
                        }
                    </ChannelContext.Consumer>
                )
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentC
