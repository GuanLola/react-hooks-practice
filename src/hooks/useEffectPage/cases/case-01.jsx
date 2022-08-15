import React, { useCallback, useState } from "react"

const PageA = (props) => {
  const { onClick, children } = props
  return <div onClick={onClick}>
    { children }
  </div>
}

const PageB = ({ onClick, name }) => {
  
  return <div onClick={onClick}>{ name }</div>
}

const Case01 = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  /* 当触发handleClick1, PageB组件也会重新渲染 */
  /* const handleClick1 = () => {
    setA(a + 1)
  }

  const handleClick2 = () => {
    setB(b + 1)
  } */

  const handleClick1 = useCallback(() => {
    console.log(111)
    setA(a + 1)
  }, [a])

  const handleClick2 = useCallback(() => {
    console.log(222)
    setB(b + 1)
  }, [b])

  return (
    <>
      <PageA onClick={handleClick1}> { a } </PageA>
      <PageB onClick={handleClick2} name={ b } />
    </>
  )
}

/*
使用useCallback进行处理
1、点击事件handleClick1触发时，PageB组件也会重新渲染，当PageB组件比较耗时时，就会造成性能问题
2、PageB组件重新渲染的原因在于每次重新渲染，onClick都会重新定义，即上次的雨这次的不一致
3、思路：通过useCallback包裹onClick来达到缓存的效果，即useCallback的依赖项不变时不重新生成
4、用过memo方法包裹PageB组件，并且通过useCallback包裹PageB组件的onClick方法，memo与pureComponent比较类似，
前者是对Function Component的优化，后者是对Class Component的优化，都会对传入组件的数据进行浅层次比较，useCallBack则会保证handleClick2不会发生变化
*/

export default Case01