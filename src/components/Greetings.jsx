import React from 'react'

function Greetings({ lang, children }) {

    return (
      <div>
        <p>{children}</p>
      </div>  
    )
  }
  
  export default Greetings