import React, {Component} from "react"; 
import './Home.css'; 
import HomePhoto from './IMG_0219.JPG';
import AboutPhoto from './isa-milena.PNG';


export default class Home extends Component {
    render() {
        return (
        <div className="landing-all">

                <div className="main-wrapper">  

                            <div className="intro">
                            {/* <p className="intro-1">Isa & Milena <br/>______</p> */}
                            <p className="intro-2"> Join us on our <br/>yoga journey.</p>
                            </div>
                </div> 
            


            <section className="About">
                    <h2 id={'#section1'}>About</h2>
                    
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

            <section className="section2">
                    <h2 id={'#section2'}>Our philosophy</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    
            </section>


        </div>
        )
    }
}