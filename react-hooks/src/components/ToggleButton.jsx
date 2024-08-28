import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"


const ToggleButton = () => {

    const {toggleTheme, theme} = useContext(ThemeContext)

  return (
    <div>
        <h1>useContext.....</h1>
        <p>In short, the useContext hook in React is used to access and consume shared data, functions, or state that are provided by a 
        parent component using the Context API. It allows you to avoid prop-drilling (passing data through multiple layers of components) and 
        provides a more efficient and organized way to manage and share state or functionality across different parts of your application.
         This can help make your code cleaner, more maintainable, and easier to work with.</p>
        <h4>Current Theme: {theme}</h4>
        <button onClick={toggleTheme} className="btn btn-primary">Toggle Theme</button>
    </div>
  )
}

export default ToggleButton