import React from 'react';
import './Footer.css';

// import faceIcon from '../images/face-icon.png';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <div id="footer">
            <div className="socialmedia">
                <FaFacebookSquare />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
            </div>
            <div className="links-list">
                <ul>
                    <li><a href="/#idioma">Idioma e legendas</a></li>
                    <li><a href="/#audiodescricao">Audiodescrição</a></li>
                </ul>
                <ul>
                    <li><a href="/#preferencias">Preferências</a></li>
                    <li><a href="/#avisos">Avisos legais</a></li>
                </ul>
                <ul>
                    <li><a href="/#ajuda">Centro de ajuda</a></li>
                    <li><a href="/#contato">Entre em contato</a></li>
                </ul>
                <ul>
                    <li><a href="/#cartao">Cartão pré-pago</a></li>
                    <li><a href="/#termos">Termos de uso</a></li>
                </ul>
            </div>

            <div className="copyright">
                © Netflix, inc. - Projeto 'netflix-clone' by <strong>Patricia Felix</strong>.
            </div>
        </div>
    )

}

export default Footer;
