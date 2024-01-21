import {useState,useEffect} from "react";
import '../styles/NavBar.css';
import {Link} from "react-scroll";
export default function Navbar() {
    const [navActive,setNavActive] = useState(false);
    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize",handleResize);

        return () => {
            window.removeEventListener("resize",handleResize);
        };
    },[])

    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu();
        }
    },[]);

    return (
        <nav className={`navbar ${navActive ? "active":""}`}>
            <a className={`nav__hamburger ${navActive ? "active":""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active":""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Hero"
                        className="navbar--content">
                            Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Skill"
                        className="navbar--content">
                            Skill</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Experience"
                        className="navbar--content">
                            Experience</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Portfolio"
                        className="navbar--content">
                            Portfolio</Link>
                    </li>
                </ul>
            </div>
            <div className="contact" >
            <svg  className="contact--svg" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 41 41" fill="none">
                <path d="M3.63672 33.3344H36.9701V20.8344V8.33444H20.3034H3.63672V20.8344V33.3344Z" stroke="#333333" stroke-width="2" stroke-linejoin="round"/>
                <path d="M3.63672 8.33444L20.3034 20.8344L36.9701 8.33444" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.3034 8.33444H3.63672V20.8344" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M36.97 20.8344V8.33444H20.3033" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <a href="mailto:zzseeqdez@outlook.com">Contact Me </a>
            </div>
        </nav>
    )
}