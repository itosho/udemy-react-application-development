import React from 'react'

function App() {
  const greeting = "Hello, itosho!"
  const dom = <h1 className="foo">{greeting}</h1>
  return (
    <React.Fragment>
      {dom}
      <input type="text" onClick={() => {console.log("Clocked!")}} />
    </React.Fragment>
  )
}

export default App
