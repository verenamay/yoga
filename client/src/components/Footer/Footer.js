import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'; 
import Email from './email.png';

const Footer = props => {
    return (
        <footer className="Footer">
            <ul className="other-links">
                <li><a href="#">Impressum</a></li>
                <li><a href="#">Datenschutz</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
            <ul className="social-icons">
              <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a className="email" href="#"><i className="fa fa-envelope"></i></a></li>
            </ul>
            
        </footer>
    )
}
export default Footer;