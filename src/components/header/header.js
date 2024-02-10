import React, { useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPhone, FaSun, FaMoon } from "react-icons/fa";
import darkModeImage from '../../dependecies/images/islamicDark.jpg';
import lightModeImage from '../../dependecies/images/islamicLight.jpg';
import logoFinal from '../../dependecies/images/logoSolo.png';
import logoTxt from '../../dependecies/images/logoText.png'


import { useDarkMode } from "./useTheme";
// import { ThemeContext } from "./useTheme";



export default function Header() {



    const [scrolling, setScrolling] = useState(false);
    const [isChecked, setIsChecked] = useState(localStorage.getItem('darkMode') === 'true');
    const { darkMode, toggleDarkMode } = useDarkMode();
    const location = useLocation();

    const Href = ['/home', '/'];
    const Sref = ['/stadium', '/stadium/Morocco', '/stadium/Spain', '/stadium/Portugal'];
    const Eref = ['/pays/3', '/pays/2', 'pays/1'];

    useEffect(function () {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    })



    const toogleMode = () => {
        const darkModeEnabled = !isChecked;
        localStorage.setItem('darkMode', darkModeEnabled.toString());
        setIsChecked(darkModeEnabled);
        // console.log(localStorage.getItem('darkMode'));
        if (darkModeEnabled) {
            document.body.setAttribute('data-bs-theme', 'dark');
        } else {
            document.body.setAttribute('data-bs-theme', 'light');
        }
        const backgroundElement = document.getElementById('Explore'); // Replace 'yourBackgroundId' with the actual ID of your background element
        // Replace 'yourBackgroundId' with the actual ID of your background element
        if (backgroundElement) {
            backgroundElement.style.backgroundImage = `url(${darkModeEnabled ? darkModeImage : lightModeImage})`;
        }
        const textLinkItems = document.querySelectorAll('.text-link-item');

        // Ajoutez ou retirez la classe 'active' en fonction du mode sombre
        textLinkItems.forEach((item) => {
            if (darkModeEnabled) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        // Ajoutez ou retirez la classe 'active' en fonction du mode sombre
        textLinkItems.forEach((item) => {
            if (darkModeEnabled) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        toggleDarkMode(!isChecked);
    }

    useEffect(() => {
        if (darkMode) {
            document.body.setAttribute('data-bs-theme', 'dark');
        } else {
            document.body.setAttribute('data-bs-theme', 'light');
        }
    }, [darkMode]);


    useEffect(() => {

        const backgroundElement = document.getElementById('Explore'); // Replace 'yourBackgroundId' with the actual ID of your background element
        if (backgroundElement) {
            backgroundElement.style.backgroundImage = `url(${darkMode ? darkModeImage : lightModeImage})`;
        }

    }, []);


    return (
        <>

            <nav className={`navbar navbar-expand-sm fixed-top p-0 ${(scrolling || location.pathname.includes('/localisation')) ? 'bg-gold' : ''}`}>

                <div className="mini-nav bg-dark fixed-top d-flex align-items-start justify-content-end" style={{ height: "30px", paddingRight: '100px' }}>
                    <div className="appel">
                        <FaPhone size='0.98em' color="goldenrod" /> <span>+ 05 00 00 00 00</span>
                    </div>

                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="Button r" id="button-3">
                                <input type="checkbox" class="checkbox" onChange={toogleMode} checked={isChecked} />

                                <div class="knobs">
                                    <FaSun className="sun" />
                                    <FaMoon className="moon" />
                                </div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="container mt-4 pt-2">
                    <Link to='/home' className="navbar-brand">

                        <img src={`${logoFinal}`} className="logoSolo" />
                        <img src={`${logoTxt}`} className="logoTxt" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" >
                        <span> <AiOutlineMenu color="goldenrod" /></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                        <ul className="navbar-nav text-center ">
                            <li className="nav-item mx-3">
                                <Link to='/home' className={`${Href.includes(location.pathname) ? ' nav-link text-gold' : 'nav-link'}`} >HOME</Link>
                            </li>
                           
                            <li class="nav-item dropdown mx-3">
                                <a class="nav-link dropdown-toggle" className={`nav-link dropdown-toggle ${Eref.includes(location.pathname) ? 'text-gold' : ''}`}href="#" role="button" data-bs-toggle="dropdown">Explore</a>
                                <ul class={`dropdown-menu ${darkMode ? 'bg-dark' : ''}`}>
                                    <li><Link to="/pays/3" className={`dropdown-item ${location.pathname === "/pays/3" ? ' text-gold' : darkMode ? 'text-light' : 'text-dark'}`}>Morroco</Link></li>
                                    <li><Link to="/pays/1" className={`dropdown-item ${location.pathname === "/pays/1" ? ' text-gold' : darkMode ? 'text-light' : 'text-dark'}`}>Spain</Link></li>
                                    <li><Link to="/pays/2" className={` dropdown-item ${location.pathname === "/pays/2" ? 'text-gold' : darkMode ? 'text-light' : 'text-dark'}`}>Portugal</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown mx-3">
                                <a class="nav-link dropdown-toggle" className={`nav-link dropdown-toggle ${Sref.includes(location.pathname) ? 'text-gold' : ''}`}href="#" role="button" data-bs-toggle="dropdown">Stadiums</a>
                                <ul class= {`dropdown-menu ${darkMode ? 'bg-dark' : ''}`}>
                                    <li><Link to="/stadium/Morocco" className={`dropdown-item ${location.pathname === "/stadium/Morocco" ? 'text-gold' : darkMode ? 'text-light' : 'text-dark' }`}>Morroco</Link></li>
                                    <li><Link to="/stadium/Spain" className={`dropdown-item ${location.pathname === "/stadium/Spain" ? 'text-gold' : darkMode ? 'text-light' : 'text-dark'}`}>Spain</Link></li>
                                    <li><Link to="/stadium/Portugal" className={`dropdown-item ${location.pathname === "/stadium/Portugal" ? 'text-gold' : darkMode ? 'text-light' : 'text-dark'}`}>Portugal</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )

}