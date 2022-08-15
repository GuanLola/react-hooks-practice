
const Son = (props) => {

  function sonPassToFather (value) {
    props.click(value)
  }

  return (
    <div>
      <h2>{ props.msg }</h2>
      <button onClick={() => { sonPassToFather(2) }}>传给父</button>
    </div>
  )
}

export default Son