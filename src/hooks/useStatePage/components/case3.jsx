import { useState } from 'react';
import './case3.css'

function Case3 () {
  
  function init () {
    return 1
  }

  const [count, setCount] = useState(() => init());

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  return <div className="container">
    <button className="chevron chevron-up" onClick={ decrease } />
    <h1>{ count }</h1>
    <button className="chevron chevron-down" onClick={ increase } />
  </div>
}

export default Case3