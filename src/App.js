import React from 'react'

const App= () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 8},
    {name: "Nanashi"}
  ]
  return (
    <React.Fragment>
      {
      profiles.map((profile, index) => {
        return <User key={index} name={profile.name} age={profile.age} />
      })
      }
    </React.Fragment>
  )
}

const User = (props) => {
  return (
    <p>Hi, I am {props.name} and {props.age} years old!</p>
  )
}

User.defaultProps = {
  age: 1
}

export default App
