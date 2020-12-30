import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'; 
import Email from './email.png';

const Footer = props => {
    return (
        <footer className="Footer">
            <ul className="other-links">
                <li>© 2020 |</li>
                <li><a href="/imprint">Imprint</a></li>
                <li><a href="/dataprotection">Data Protection</a></li>
                {/* <li><a href="#">FAQ</a></li> */}
            </ul>
            <ul className="social-icons">
              <li><a target="_blank" rel="noopener noreferrer" title="Check us out on Instagram" className="instagram" href="https://www.instagram.com/yogamesoftly/"><i className="fa fa-instagram"></i></a></li>
              <li><a target="_blank" rel="noopener noreferrer" title="Contact us via email"className="email" href="#"><i className="fa fa-envelope"></i></a></li>
            </ul>
            
        </footer>
    )
}
export default Footer;