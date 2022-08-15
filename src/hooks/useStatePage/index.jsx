import { useState } from 'react';
import Case2 from './components/case2';
import Case3 from './components/case3';
import Case4 from './components/case4';
import Case5 from './components/case5';
import '../../assets/css/global.css';

const UseStatePage = () => {
  const [caseKey, setCaseKey] = useState(1)
  return (
    <div className="use-context-page">
      <div className="case-a-button">
        <a href="#" onClick={() => setCaseKey(1)}>case 1</a>
        <a href="#" onClick={() => setCaseKey(2)}>case 2</a>
        <a href="#" onClick={() => setCaseKey(3)}>case 3</a>
        <a href="#" onClick={() => setCaseKey(4)}>case 4</a>
        <a href="#" onClick={() => setCaseKey(5)}>case 5</a>
      </div>
      
      {caseKey === 1 && <Parent />}
      {caseKey === 2 && <Case2 />}
      {caseKey === 3 && <Case3 />}
      {caseKey === 4 && <Case4 />}
      {caseKey === 5 && <Case5 />}
    </div>
  )
}

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>parent</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div>--------------------</div>
      <Child count={count} setCount={setCount} />
    </div>
  )
}

const Child = ({ count, setCount }) => {
  return (
    <div>
      <h1>child</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div>--------------------</div>
      <GrandChild count={count} setCount={setCount} />
    </div>
  )
}

const GrandChild = ({ count, setCount }) => {
  return (
    <div>
      <h1>grandChild</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default UseStatePage;