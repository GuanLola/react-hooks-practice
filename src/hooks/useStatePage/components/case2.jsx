import { useState } from 'react';

function Case2 () {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  function A () {
    setCount(count + 1)
    setCount(count + 1)
  }

  function B () {
    setCount1(pre => pre + 1)
    setCount1(pre => pre + 1)
  }

  return <div>
    <h1>double click</h1>
    <h2>count + 1</h2>
    <p>You clicked {count} times</p>
    <button onClick={() => A()}>click</button>
    <div>--------------------------</div>
    <h2>prev => prev + 1</h2>
    <p>You clicked {count1} times</p>
    <button onClick={() => B()}>click</button>
  </div>
}

export default Case2;