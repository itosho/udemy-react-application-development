import React from 'react'
import PropTypes from 'prop-types'

const App= () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 8},
    {name: "Test", age: 100}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App
