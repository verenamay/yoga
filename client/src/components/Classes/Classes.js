import React from 'react'
import { Link } from 'react-router-dom';
import './Classes.css'; 


const Classes = props => {
    return (
      <div className="classes">
      <section className="classes-container">
        <h2>Classes</h2>
        <div className="coming-soon-text">
        <p>Our classes webpage is</p>
        <p className="soon">coming soon</p>
        <p>Meanwhile check out our</p> 
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/yogamesoftly/"><i className="fa fa-instagram"></i>  Instagram</a>
        <p>page.</p>
        </div>
      </section>
      
    </div>
    )
}
export default Classes;