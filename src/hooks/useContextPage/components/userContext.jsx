import { useState, createContext } from 'react';

export const UserContext = createContext(null)

export const UserContextProvider = ({ children }) => {
  const [ userInfo, setUserInfo ] = useState(null)
  const [ isAuth, setIsAuth ] = useState(false)

  const login = () => {
    setUserInfo({
      username: "jack",
    })
    setIsAuth(true)
  }

  const logout = () => {
    setUserInfo(null)
    setIsAuth(false)
  }

  return <UserContext.Provider value={{ userInfo, isAuth, login, logout }}>
    { children }
  </UserContext.Provider>
}

