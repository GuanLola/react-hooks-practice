import { debounce } from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { Input } from 'antd'

function DebounceUseCallback () {
  const [val, setVal] = useState('')

  const onSearch = useCallback(
    debounce((val) => { 
      console.log('搜索', val || '全部')
    }, 500),
    []
  )
  // const onSearch = debounce((val) => { 
  //   console.log('搜索', val || '全部')
  // }, 500)

  const useDebounceFn = (fn, options) => {
    return useCallback()
  }

  useEffect(() => {
    onSearch(val)
  }, [val])

  return <div>
    <h6 style={{ color: 'white' }}>为了优化性能，我们可以在搜索数据时，加入防抖的逻辑，只有当输入操作停顿指定时间后，才发起搜索数据的请求。</h6>
    <Input value={val} placeholder="请输入" onChange={e => setVal(e.target.value)} allowClear />
  </div>
}

export default DebounceUseCallback