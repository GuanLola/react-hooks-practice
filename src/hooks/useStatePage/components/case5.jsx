import { useState } from "react"

const Case5 = () => {
  const [count, setCount] = useState(0)

  /* 
    在这个例子中，3秒内连续点击5次，页面上的数字会从0增加到1

    分析：这主要是引用和闭包的区别

    类组件：class 组件里面可以通过 this.state 引用到 count, 所以每次 setTimeout 的时候都能通过引用拿到上一次的最新的count, 所以点击多少次最后就加了多少。

    函数组件：
    里面每次更新都是重新执行当前函数，也就是说setTimeout里面读取到的count是通过闭包获取的，而这个count实际上只是初始值，并不是上次执行完成后的最新值，所以最后只加了一次。

  */
  const incrementCount = () => {
    setTimeout(() => {
      setCount(count + 1) // 这个过了3秒之后count+1, count = 1
      // setCount(count => count + 1) // 这个过了3秒之后count+1 * 5, count = 5
    }, 3000)
  }

  return (
    <>
      <h1>{ count }</h1>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default Case5