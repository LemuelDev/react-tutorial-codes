import { useContext, useRef } from "react"
import ThemeContext from "../context/ThemeContext"


const ComponentUseRef = () => {

    const inputRef = useRef()
    const secondRef = useRef()
    const handleFocus = () => {
        inputRef.current.focus()
    }
    

    const handleLog = () => {
       const value = secondRef.current.value
       console.log(value);
    }

    const {theme} = useContext(ThemeContext)


  return (
    <div>
        <h4>UseRef....</h4>
        <input type="text" ref={inputRef} placeholder="This is inputRef" />
        <button onClick={handleFocus}>Focus on inputRef</button>
        <p>When the button is click, it will focus on the inputRef...</p>

        <h6>Getting a value of a input using useRef and log to the console.</h6>
        <input type="text" ref={secondRef} placeholder="This is inputRef" />
        <button onClick={handleLog}>Log the secondRef</button>
        <hr />
        <p>This is an example of useContext to the diff component...</p>
        <h1>Current Theme: {theme}</h1>
        <br />
        <br />
    </div>
  )
}

export default ComponentUseRef