import React, { useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(0)

    const clickdec = () => {
        setCount(count - 1)
    }

    const clickinc = () => {
        setCount(count + 1)
    }

  return (

    <div>
        <button onClick={clickinc}>increment</button>
        <div>{count}</div>
        <button onClick={clickdec}>decrement</button>
    </div>
  )
}

export default Counter