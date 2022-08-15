import { Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useState, useEffect, useRef, forwardRef, createRef } from 'react';
import UseStatePage from './hooks/useStatePage';
import UseContextPage from './hooks/useContextPage';
import UseEffectPage from './hooks/useEffectPage';
import PropsClass from './pratice/props/fatherClass';
import PropsFunction from './pratice/props/fatherFunction';

const setActive = (path) => {
  return path === useLocation().pathname ? 'active' : '';
}

const Menu = forwardRef((props, ref) => {

  return (
    <div className='menu' ref={ ref }>
      <Link className={ setActive('/') } to="/">useState</Link>
      <Link className={ setActive('/useContextPage') } to="/useContextPage">useContextPage</Link>
      <Link className={ setActive('/useEffectPage') } to="/useEffectPage">useEffectPage</Link>
      <Link className={ setActive('/propsClass') } to="/propsClass">propsClass</Link>
      <Link className={ setActive('/propsFunction') } to="/propsFunction">propsFunction</Link>
    </div>
  );
})

export function App() {
  const { pathname } = useLocation();

  const menuRef = createRef() // menuRef 的初始值

  const getWindowSize = () => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth
  })

  const getMenuHeight = () => ({
    clientHeight: 100
  })

  const [windowSize, setWindowSize] = useState(getWindowSize())

  const [menuHeight, setMenuHeight] = useState(getMenuHeight())

  const handleResize = () => {
    setWindowSize(getWindowSize())

    setMenuHeight(prevState =>({ clientHeight: menuRef.current.clientHeight }))
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <>
      <Menu ref={ menuRef } />
      <div className="main-content" style={{ 'paddingTop': menuHeight.clientHeight + 'px' }}>
        <Routes>
          <Route path='/' element={<UseStatePage />}></Route>
          <Route path='/useContextPage' element={<UseContextPage />}></Route>
          <Route path='/useEffectPage' element={<UseEffectPage />}></Route>
          <Route path='/propsClass' element={<PropsClass />}></Route>
          <Route path='/propsFunction' element={<PropsFunction />}></Route>
        </Routes>
      </div>
    </>
  )
}
