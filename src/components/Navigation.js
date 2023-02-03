import { Link, NavLink } from "react-router-dom"
import classes from "./Navigation.module.css"
import menu from "../images/menu.png"
import close from "../images/close.png"
import { useState } from "react"

const Navigation = () =>
{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    function showMobileMenu()
    {
        setIsMobileMenuOpen((prevState)=>
        {
            return !prevState
        })
    }

    return <>
        <nav className={classes.mainNav}>
            <h1 className={classes.logo}>
                <Link to="/">Michał Bajda</Link>
            </h1>
            <ul>
                <li><NavLink to="/about" className={({isActive})=> isActive ? classes.active :undefined}>About</NavLink></li>
                <li><NavLink to="/portfolio" className={({isActive})=> isActive ? classes.active :undefined}>Portfolio</NavLink></li>
                <li className={classes.hamburger} onClick = {showMobileMenu}>
                    <img src={menu} alt="menu icon"></img>
                </li>
            </ul>
        </nav>

        {isMobileMenuOpen && <div className={classes.mobileMenu}>
            <div className={classes.closeMenu}>
                <img src={close} alt="close icon" onClick = {showMobileMenu}></img>
            </div>
             <h1 className={classes.logo}>
                <Link to="/" onClick = {showMobileMenu}>Michał Bajda</Link>
            </h1>
            <ul>
                <li>
                    <Link onClick = {showMobileMenu} className={classes.mobileMenuItem} to="/about">About</Link>
                </li>
                <li>
                    <Link onClick = {showMobileMenu} className={classes.mobileMenuItem} to="/portfolio">Portfolio</Link>
                </li>
            </ul>

            <h3>
                E-mail: michal.bajda94@gmail.com
                <br/>
                Tel: 794-341-888
            </h3>
    
        </div>}
    </>
}

export default Navigation