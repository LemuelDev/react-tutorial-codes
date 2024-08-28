import { useContext, useEffect, useRef, useState } from "react"
import ThemeContext from "../context/ThemeContext"


const ComponentUseEffect = () => {

    const inputRef = useRef()
    // useEffect(() => {
    //     inputRef.current.focus()
    // })

    const [listNames, setListNames] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setListNames(json))
    })

    const [count, setCount] = useState(0)
    
    useEffect(() => {
        console.log(`Count is ${count}`);
    }, [count])

    const {theme} = useContext(ThemeContext)

  return (

    <div>
        
        <h4>UseEffect....</h4>
        <input type="text" placeholder="Input Ref" ref={inputRef} className="form-control w-25" />
        <button className="btn btn-primary" >Matik Focus</button>
        <p>The useeffect will focus automatically to the useRef which is the inputRef..</p>

        <h6>UseEffect and useState combination plus fetching api...</h6>
        <ul>
            {listNames.map((todo) => (
                <li key={todo.id}>{todo.name}</li>
            ))}
        </ul>
        <br />

        <h6>useEffect and useState combinations when the state is updated and effect will too...</h6>
        <button className="btn btn-success" onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
        <p> The count will be logged to the console..</p>
        <p>This is an example of useContext to the diff component...</p>
        <h1>Current Theme: {theme}</h1>
        <br />
        <hr />

    </div>
  )
}

export default ComponentUseEffect