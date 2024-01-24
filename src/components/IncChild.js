import React from 'react'

function IncChild({children,name}) {
    console.log("Child Component")
  return (
    <div>

        Child Component {children} {name}
    </div>
  )
}

export default React.memo(IncChild)
