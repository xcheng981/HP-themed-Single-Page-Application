import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import "./Intro.css";

function Intro() {
    const [currentPage, setCurrentPage] = useState('/');

    const handleCardClick = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="house">
            <Header />
            <Navigation />

            <div className="house-container">
                <div className="house-image"></div>
                <div className="house-text">
                    <h2>You choose us, so do we.</h2>
                    <p>Adorn the Sorting Hat to be placed into your rightful Hogwarts house. The Sorting Hat's decision is final. </p>
                </div>
            </div>


            <div id="main-content" className="cards-container">
                <div
                    onClick={() => handleCardClick('/Gryffindor')}
                    className="card-gryffindor"
                >
                    <div className="card-inner">

                        <Link to="/Gryffindor" className="house-link">
                            <div className="card-header">
                                <h3>Gryffindor House</h3>
                            </div>
                        </Link>
                        <div className="card-content">
                            <ul>
                                <li><strong>Founder:</strong> Godric Gryffindor</li>
                                <li><strong>Head of House:</strong> Professor Minerva McGonagall</li>
                                <li><strong>Ghost:</strong> Nearly Headless Nick</li>
                                <li><strong>House Colours:</strong> Red and gold</li>
                            </ul>
                            <Link to="/Gryffindor" className="house-link">
                                <img
                                    src="
https://images.unsplash.com/photo-1632266484284-a11d9e3a460a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=allison-batley-9Rmmgj3wsJU-unsplash.jpg"
                                    alt="Gryffindor House Emblem"
                                    className="house-emblem"
                                /></Link>
                        </div>

                    </div>
                </div>


                <div
                    onClick={() => handleCardClick('/Hufflepuff')}
                    className="card-hufflepuff"
                >
                    <div className="card-inner">

                        <Link to="/Hufflepuff" className="house-link">
                            <div className="card-header">
                                <h3>Hufflepuff House</h3>
                            </div>
                        </Link>
                        <div className="card-content">
                            <ul>
                                <li><strong>Founder:</strong> Helga Hufflepuff</li>
                                <li><strong>Head of House:</strong> Professor Pomona Sprout</li>
                                <li><strong>House Ghost:</strong> The Fat Friar</li>
                                <li><strong>House Colours:</strong> Black and yellow</li>
                            </ul>
                            <Link to="/Hufflepuff" className="house-link">
                                <img
                                    src="https://images.unsplash.com/photo-1533591380348-14193f1de18f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rhii-photography-nK1nJ3eA3eA-unsplash.jpg"
                                    alt="Hufflepuff House Emblem"
                                    className="house-emblem"
                                /></Link>
                        </div>

                    </div>
                </div>



                <div
                    onClick={() => handleCardClick('/Ravenclaw')}
                    className="card-ravenclaw"
                >
                    <div className="card-inner">

                        <Link to="/Ravenclaw" className="house-link">
                            <div className="card-header">
                                <h3>Ravenclaw House</h3>
                            </div>
                        </Link>
                        <div className="card-content">
                            <ul>
                                <li><strong>Founder:</strong> Rowena Ravenclaw</li>
                                <li><strong>Head of House:</strong> Professor Filius Flitwick</li>
                                <li><strong>House Ghost:</strong> The Grey Lady</li>
                                <li><strong>House Colours:</strong> Blue and bronze</li>
                            </ul>
                            <Link to="/Ravenclaw" className="house-link">
                                <img
                                    src="
https://images.unsplash.com/photo-1594399429950-3bc814d4081c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rhii-photography-8Dpi2Mb1-PM-unsplash.jpg"
                                    alt="Ravenclaw House Emblem"
                                    className="house-emblem"
                                /></Link>
                        </div>

                    </div>
                </div>



                <div onClick={() => handleCardClick('/Slytherin')} className="card-slytherin">
                    <div className="card-inner">

                        <Link to="/Slytherin" className="house-link">
                            <div className="card-header">
                                <h3>Slytherin House</h3>
                            </div>
                        </Link>
                        <div className="card-content">
                            <ul>
                                <li><strong>Founder:</strong> Salazar Slytherin</li>
                                <li><strong>Head of House:</strong> Professor Severus Snape</li>
                                <li><strong>House Ghost:</strong> The Bloody Baron</li>
                                <li><strong>House Colours:</strong> Green and silver</li>
                            </ul>
                            <Link to="/Slytherin" className="house-link">
                                <img
                                    src="https://images.unsplash.com/photo-1594384151968-e1616fa703ea?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rhii-photography-rn8-b1naYlw-unsplash.jpg"
                                    alt="Slytherin House Emblem"
                                    className="house-emblem"
                                /></Link>
                        </div>

                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
}

Intro.propTypes = {
};

export default Intro;
