import style from './NavbarComponent.module.css'

const NavbarComponent = () => {
  return (
   <>
    <nav className={style.navbar}>
        <div className={style.logo}>
            <h2>LOGO</h2>
        </div>
        <ul className={style["nav-items"]}>
            <li><a href="" style={{borderBottom: "2px solid black"}}>Home</a></li>
            <li><a href="" style={{borderBottom: "2px solid black"}}>About</a></li>
            <li><a href="" style={{borderBottom: "2px solid black"}}>Contact</a></li>
        </ul>
    </nav>
   </>
  )
}

export default NavbarComponent