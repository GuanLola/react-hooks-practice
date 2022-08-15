import { useContext, createContext, useState } from "react"
import './userContextProvider.css'
import { UserContextProvider, UserContext } from "./userContext"

// const UserContext = createContext(null)

const UserContextProviderPage = () => {
  return <>
    <UserContextProvider>
      <Main />
    </UserContextProvider>
  </>
}

const Main = () => {
  const { userInfo, isAuth, login, logout } = useContext(UserContext)

  // const [ userInfo, setUserInfo ] = useState(null)
  // const [ isAuth, setIsAuth ] = useState(false)

  // const login = () => {
  //   setUserInfo({
  //     username: "jack",
  //   })
  //   setIsAuth(true)
  // }

  // const logout = () => {
  //   setUserInfo(null)
  //   setIsAuth(false)
  // }

  return <>
    <div className="user-context-provider-main">
      {
        isAuth ?
          <>
            <header>
              hello, {userInfo.username}
              <button className="logout-button" onClick={() => logout()}>logout</button>
            </header>
            <Content />
            <Footer />
          </>
          :
          <button onClick={() => login()}>login</button>
      }
    </div>
  </>
}

const Content = () => {
  return <>
    <h1>content</h1>
  </>
}

const Footer = () => {
  return <>
    <h1>footer</h1>
  </>
}

export default UserContextProviderPage