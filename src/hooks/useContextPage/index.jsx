import { useState, createContext, useContext } from "react";
import UserContextProvider from "./components/userContextProvider";

const UserContext = createContext(null)

const UseContextPage = () => {
  const [caseKey, setCaseKey] = useState(1)
  return (
    <div className="use-context-page">
      <div className="case-a-button">
        <a href="#" onClick={() => setCaseKey(1)}>case 1</a>
        <a href="#" onClick={() => setCaseKey(2)}>case 2</a>
      </div>
      
      {caseKey === 1 && <Parent />}
      {caseKey === 2 && <UserContextProvider />}
    </div>
  )
}

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <UserContext.Provider value={{ count, setCount }}>
      <h1>parent</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div>--------------------</div>
      <Child />
    </UserContext.Provider>
  )
}

const Child = () => {
  const { count, setCount } = useContext(UserContext)
  return (
    <div>
      <h1>child</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div>--------------------</div>
      <GrandChild />
    </div>
  )
}

const GrandChild = () => {
  const { count, setCount } = useContext(UserContext)
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

export default UseContextPage;
