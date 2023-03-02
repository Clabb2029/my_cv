import React from 'react';
import '../styles/App.css';
import Typewriter from "typewriter-effect";

import HTMLlogo from "../images/logos/html_logo.png";
import CSSlogo from "../images/logos/css_logo.png";
import JSlogo from "../images/logos/javascript_logo.png";
import NODEJSlogo from "../images/logos/nodejs_logo.png";
import REACTlogo from "../images/logos/react_logo.png";
import JQUERYlogo from "../images/logos/jquery_logo.png";
import PHPlogo from "../images/logos/php_logo.png";
import MYSQLlogo from "../images/logos/mysql_logo.png";
import MONGODBlogo from "../images/logos/mongodb_logo.png";
import BOOTSTRAPlogo from "../images/logos/bootstrap_logo.png";
import GITHUBlogo from "../images/logos/github_logo.png";
import HEROKUlogo from "../images/logos/heroku_logo.png";

const Home = () => {
    return (
        <div>

            <section className='section section1'>
                <div className='typewriter'>
                    <h1>My name is Clara !</h1>
                    <br></br>
                    <Typewriter
                        onInit={(typewriter)=> {
                            typewriter
                            .pauseFor(4000)
                            .typeString("A FullStack Developer")
                            .start();
                        }}
                    />                    
                </div>
            </section>

            <section className='section section2'>
                <div className='quoteContainer'>
                    <p className='quote'>"You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity."</p> 
                    <p className='author'>– John Romero</p>
                </div>
            </section>

            <section className='section section3'>
                <h2>My Skills</h2>
                <div className='skillsGrid'>

                    <div className='card'>
                        <img className="logo" src={HTMLlogo} alt="HTML logo"/>
                        <p className='logo_name'>HTML</p>
                    </div>

                    <div className='card'>
                        <img className="logo" src={CSSlogo} alt="CSS logo"/>
                        <p className='logo_name'>CSS</p>
                    </div>

                    <div className='card'>
                        <img className="logo" src={JSlogo} alt="JavaScript logo"/>
                        <p className='logo_name'>JAVASCRIPT</p>
                    </div>

                    <div className='card'>
                        <img className="logo" src={NODEJSlogo} alt="NOdeJS logo"/>
                        <p className='logo_name'>NODEJS</p>
                    </div>

                    <div className='card'>
                        <img className="logo" src={REACTlogo} alt="React logo"/>
                        <p className='logo_name'>REACT - REACT NATIVE</p>
                    </div>

                    <div className='card'>
                        <img className="logo" src={JQUERYlogo} alt="jQuery logo"/>
                        <p className='logo_name'>JQUERY</p>
                    </div>

                    <div className='card'>
                        <img className="logo" src={PHPlogo} alt="PHP logo"/>
                        <p className='logo_name'>PHP</p>
                    </div>

                    <div className='card'>
                        <img className="logo" src={MYSQLlogo} alt="MySQL logo"/>
                        <p className='logo_name'>MYSQL</p>
                    </div>

                    <div className='card'>
                        <img className="logo" src={MONGODBlogo} alt="MongoDB logo"/>
                        <p className='logo_name'>MONGODB</p>
                    </div>

                    <div className='card'>
                        <img className="logo" src={BOOTSTRAPlogo} alt="Bootstrap logo"/>
                        <p className='logo_name'>BOOTSTRAP</p>
                    </div>

                    <div className='card'>
                        <img className="logo" src={GITHUBlogo} alt="GitHub logo"/>
                        <p className='logo_name'>GITHUB</p>
                    </div>

                    <div className='card'>
                        <img className="logo" src={HEROKUlogo} alt="Heroku logo"/>
                        <p className='logo_name'>HEROKU</p>
                    </div>

                </div> 
            </section>



        </div>
    );
};

export default Home;