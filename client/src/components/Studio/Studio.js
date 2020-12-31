import React from 'react'
import { Link } from 'react-router-dom';
import './Studio.css'; 


const Studio = props => {
    return (
        <div className="studio">
          <section className="studio-container">
            <h2>Studio</h2>
            <div className="coming-soon-text">
            <p>Our studio webpage is</p>
            <p className="soon">coming soon</p>
            <p>Meanwhile check out our</p> 
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/yogamesoftly/"><i className="fa fa-instagram"></i>  Instagram</a>
            <p>page.</p>
            </div>
          </section>
          
        </div>
    )
}
export default Studio;