import { useState } from "react"
import ThemeContext from "../context/ThemeContext"


const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevState => prevState === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider