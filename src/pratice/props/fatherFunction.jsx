import { useState } from 'react'
import Son from './sonFunction'

const FatherFunction = () => {

  const [count, setCount] = useState(1)

  const onclick = (value) => {
    console.log('获取子组件传递过来的值', value)
    setCount(previous => previous + value)
  }

  return (
    <div>
      <h1>Father</h1>
      <h2>{ count }</h2>
      <Son msg="这是父组件传递过来的信息" click={ onclick } />
    </div>
  )
}

export default FatherFunction