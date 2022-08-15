import { Input, Button } from 'antd'
import { useEffect, useState } from 'react'
import Father from './cases/case-01'
import DebounceUseCallback from './debounce-useCallback'

function UseEffectPage () {
  const [val, setVal] = useState('')
  const [caseKey, setCaseKey] = useState(1)

  const onSearch = val => {
    console.log('搜索', val || '全部')
  }

  /* 检测到值变化，就触发搜索动作 */
  useEffect(() => {
    onSearch(val)
  }, [val])

  return <div>

    <div className="use-context-page">
      <div className="case-a-button">
        <a href="#" onClick={() => setCaseKey(1)}>case 1</a>
      </div>
      
      {caseKey === 1 && <Father />}
    </div>

    <Input value={val} placeholder="请输入" onChange={e => setVal(e.target.value)} allowClear />

    <div>--------------------</div>

    <DebounceUseCallback />
  </div>
}

export default UseEffectPage