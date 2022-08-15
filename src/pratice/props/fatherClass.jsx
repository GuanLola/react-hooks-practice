import React from 'react'
import Son from './sonClass'

class Father extends React.Component {
  render () {
    return(
      <div>
        <Son name="父传子" />
      </div>
    )
    
  }
}

export default Father