import React from 'react'
import { Link } from 'react-router-dom';
import { Component } from 'react';
import Scroll from 'react-scroll';
// const ScrollLink = Scroll.ScrollLink;
import './Navbar.css'; 

const Navbar = props => {
    return (
      <nav>
        <div className="Logo">
          <h1>yogamesoftly</h1>
        </div>
            <>
            <div className="Links">
                <Link to ="/"><button className="button">HOME</button></Link>
                
                <Link to ={"/#section1"}><button className="button">ABOUT</button></Link>
                
                <Link to ="/studio"><button className="button">STUDIO</button></Link>
                <Link to ="/classes"><button className="button">CLASSES</button></Link>
                </div>
            </>
      </nav>
    )
}
export default Navbar;