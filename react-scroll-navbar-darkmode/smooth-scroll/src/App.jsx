import {Element} from 'react-scroll'
import Navbar from './components/Navbar';
import './App.css'
import { createContext } from 'react';
import { useState } from 'react';
import ReactSwitch from 'react-switch'
export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark': 'light'))
  }

   return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='main-page' id={theme}>
      <p>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</p>
      <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
        <Navbar/>
        <Element name="home">
        <section>
            <h4>Homepage</h4>
        </section>
      </Element>
      <Element name="about">
        <section>
            <h4>About Section</h4>
        </section>
      </Element>
      <Element name="services">
        <section>
            <h4>Services Section</h4>
        </section>
      </Element>
      <Element name="projects">
        <section>
            <h4>Project Section</h4>
        </section>
      </Element>
      <Element name="contact">
        <section>
            <h4>Contact Section</h4>
        </section>
      </Element>
    </div>
    </ThemeContext.Provider>
    )
}

export default App;