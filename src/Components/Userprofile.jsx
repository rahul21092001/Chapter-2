import React from 'react'

const Userprofile = (props) => {
  return (
    <div>
        <h1>USERPROFILE</h1>
        <h5>My name is {props.name}</h5>
        <h5>My age is {props.age}</h5>
    </div>
  )
}

export default Userprofile