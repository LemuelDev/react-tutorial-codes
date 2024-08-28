import {Link} from 'react-scroll'
import '../App.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <h4>React-Scroll</h4>
        </div>
        <nav className="nav-links">
            <Link className="links" to="home" smooth={true}>Home</Link>
            <Link className="links" to="about" smooth={true}>About</Link>
            <Link className="links" to="services" smooth={true}>Services</Link>
            <Link className="links" to="projects" smooth={true}>Projects</Link>
            <Link className="links" to="contact" smooth={true}>Contact Me</Link>
           
        </nav>
    </div>
  )
}

export default Navbar