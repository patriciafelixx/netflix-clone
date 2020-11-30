import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css'
import userIcon from '../images/user-icon.jpg'

function Navbar() {

    const [classBlack, setClassBlack] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setClassBlack(true)
            } else {
                setClassBlack(false)
            }
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, [])

    return (
        <div id="navbar" className={classBlack ? 'blacknav' : ''}>
            <div className="navbar-left">
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" />
                <ul>
                    <li><a href="/#inicio">Início</a></li>
                    <li><a href="/#series">Séries</a></li>
                    <li><a href="/#filmes">Filmes</a></li>
                    <li><a href="/#bombando">Bombando</a></li>
                    <li><a href="/#lista">Minha lista</a></li>
                </ul>
            </div>

            <div className="navbar-right">
                <img src={userIcon} alt="" />
                <div className="menu-icon">
                    <FaBars />
                </div>
            </div>
        </div>
    )
}

export default Navbar;