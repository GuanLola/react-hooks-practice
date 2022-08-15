import { useState, useEffect } from 'react'

function Case4 () {
  const [state, setState] = useState({ count: 0, name: 'jack' })

  function A () {
    setState(prevState => ({...prevState, count: prevState.count + 1}))
  }

  function B () {
    setState(prevState => prevState.count + 1)
  }

  useEffect(() => {
    console.log(state)
  })

  return <div>
    <h3>{ state.count }</h3>
    <h3>{ state.name }</h3>
    <h2>corret set</h2>
    <button onClick={() => A()}>set</button>
    <h2>wrong set</h2>
    <button onClick={() => B()}>set</button>
  </div>
}

export default Case4