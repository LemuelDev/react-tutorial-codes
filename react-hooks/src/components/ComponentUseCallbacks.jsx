import { useCallback, useState } from "react"


const ComponentUseCallbacks = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

  return (
    <div>
        <hr /> 
        <h1>UseCallbacks just like regular functionss...</h1>
        <h3>Count: {count}</h3>
        <button className="btn btn-success" onClick={handleIncrement}>Increment</button>

    </div>
  )
}

export default ComponentUseCallbacks