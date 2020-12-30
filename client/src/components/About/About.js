import React from 'react'
import { Link } from 'react-router-dom';
import './About.css'; 
import AboutPhoto from './isa-milena.PNG';

const About = props => {
    return (
        <div>
          <section id={'section1'} className="About">
                    <h2>About
                        </h2>
                    
                    <div id="yogateacher">

                        <div className="container">
                            <h3>Isa</h3>
                            <p>Hi, my name is Isa...</p>
                        </div>

                        <div className="container">
                            <img src={AboutPhoto}/>
                        </div>

                        <div className="container">
                            <h3>Milena</h3>
                            <p>Hi, my name is Milena...</p>
                        </div>
                    
                    </div>
            </section>
        </div>
    )
}
export default About;