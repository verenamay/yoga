import React, {Component} from "react"; 
import './Home.css'; 
import HomePhoto from './IMG_0219.JPG';
import AboutPhoto from './isa-milena.PNG';


export default class Home extends Component {
    render() {
        return (
        <div className="landing-all">
            <section className="home">    
                <div>   
                    <p className="Heading"> Join us on our <br/>yoga journey.</p>
                </div> 
            </section>
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
        </div>
        )
    }
}