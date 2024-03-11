import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MainArea.css';
import { initializeBanner } from './mainAreaBanner';


function MainArea() {
    useEffect(() => {
        initializeBanner();
    }, []);

    return (
        <main className="main">

            <div id="main-content" className="main-container">
                <div className="main-image"></div>
                <div className="main-text">
                    <h2>Welcome to Hogwarts</h2>
                    <p>Magic happens here...</p>
                </div>
            </div>

            <div className="home__main">
                <p className="home__text">
                    Hogwarts School of Witchcraft and Wizardry is a boarding school for young witches and wizards, located
                    several hours north of London by train. It is over a thousand years old and was founded by Godric
                    Gryffindor, Helga Hufflepuff, Rowena Ravenclaw and Salazar Slytherin, after whom the school's <Link to="/Intro" className="custom-link">four
                        houses</Link> are named. The Headmaster is <Link to="/Faculty" className="custom-link">Professor Dumbledore</Link>, and the Deputy
                    Headmistress is <Link to="/Faculty" className="custom-link">Professor McGonagall</Link>.
                </p>
            </div>

            <div className="banner">
                <div className="banner__title">
                    <h3>Hogwarts At a Glance</h3>
                </div>
                <div className="warp">
                    <div className="item"><img
                        src="
https://images.unsplash.com/photo-1571832171852-c1fd14f0446d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=soyoung-han-eA5eMchbNEw-unsplash.jpg"
                        alt="" /></div>
                    <div className="item"><img
                        src="
https://images.unsplash.com/photo-1583997052103-b4a1cb974ce5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jules-marvin-eguilos-cKFJqwYoFeQ-unsplash.jpg"
                        alt="" /></div>
                    <div className="item"><img
                        src="
https://images.unsplash.com/photo-1641937660918-a7e2d34a99d5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jonny-gios-MY2rapDvkPM-unsplash.jpg"
                        alt="" /></div>
                    <div className="item"><img
                        src="
https://images.unsplash.com/photo-1689573979695-80f241a37e9c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jeffrey-zhang-6_leu6AnMM8-unsplash.jpg"
                        alt="" /></div>
                    <div className="item"><img
                        src="
https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=giammarco-boscaro-zeH-ljawHtg-unsplash.jpg"
                        alt="" /></div>
                </div>
                <div className="div1">&lt;</div>
                <div className="div2 ">&gt;</div>
                <div className="pagenation">
                    <div id="pagenation-item0"></div>
                    <div id="pagenation-item1"></div>
                    <div id="pagenation-item3"></div>
                    <div id="pagenation-item4"></div>
                    <div id="pagenation-item5"></div>
                </div>
            </div>
        </main>
    );
}

export default MainArea;
