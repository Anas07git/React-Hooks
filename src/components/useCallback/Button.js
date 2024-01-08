import React from 'react'

function Button({handleInc,children}) {
    console.log(`Rendering ${children}`)
  return (
    <div>
      <button onClick={handleInc}>{children}</button>
    </div>
  )
}

export default React.memo(Button)
