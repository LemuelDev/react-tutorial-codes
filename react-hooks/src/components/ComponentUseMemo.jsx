import { useMemo, useState } from "react"


const ComponentUseMemo = () => {

    const [count, setCount] = useState(0);

    const doubledNumber = useMemo(() => {
        return count * 2
    }, [count])

  return (
    <div>
        <hr />
        <h1>UseMemo for computations...</h1>
        <h4>Doubled Number : {doubledNumber}</h4>
        <button className="btn btn-primary" onClick={() => setCount(prevState => prevState + 1)}>Double </button>
    </div>
  )
}

export default ComponentUseMemo