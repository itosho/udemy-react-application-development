import React from 'react'

const App= () => {
  const greeting = "Hello, Component"
  const dom = <h1 className="foo">{greeting}</h1>
  return (
    <React.Fragment>
      <Why />
      <Why />
      <Why />
    </React.Fragment>
  )
}

const Why= () => {
  return (
    <p>Why?</p>
  )
}

export default App
