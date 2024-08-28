

const PropsComponent = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <>

    <h3>Count : {count}</h3>
    <button className="btn btn-success" onClick={() => handleIncrement()}>Increment</button>
    <button className="btn btn-danger" onClick={() => handleDecrement()}>Decrement</button>
    </>
  )
}

export default PropsComponent