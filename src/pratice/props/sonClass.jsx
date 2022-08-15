import React from 'react'

class Son extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <h1>这是从父那里传过来的值: { this.props.name }</h1>
    )
  }
}

export default Son
