import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import './Course.css';

function Course() {
    const subjects = [

    ];

    return (
        <>
            <Header />
            <Navigation />

            <div id="main-content" className="course-container">
                <div className="course-card">
                    <div className="course-card-header">
                        <h3>Astronomy</h3>
                    </div>
                    <div className="course-card-content">
                        <img src="https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=nasa--hI5dX2ObAs-unsplash.jpg"
                            alt="Astronomy Course"
                            className="course-img"
                        />
                        <ul>
                            <li>Student work activities include learning the names of the stars, stars and constellations, as well as the locations, orbits and environments.</li>
                            <li><strong>Instructor:</strong> Aurora Sinistra</li>
                            <li>Category: Compulsory course</li>
                        </ul>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-card-header">
                        <h3>Defence Against the Dark Arts</h3>
                    </div>
                    <div className="course-card-content">
                        <img src="https://images.unsplash.com/flagged/photo-1595579469890-289f2a0ec220?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=marina-loucaides-VmziYgps3Tw-unsplash.jpg"
                            alt="Defence Against the Dark Arts Course"
                            className="course-img"
                        />
                        <ul>
                            <li>Teaches students how to defend themselves against all aspects of the Dark Arts including curses, hexes, jinxes and studying Dark magical creatures.</li>
                            <li><strong>Instructor:</strong> Severus Snape</li>
                            <li>Category: Compulsory course</li>
                        </ul>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-card-header">
                        <h3>History of Magic</h3>
                    </div>
                    <div className="course-card-content">
                        <img src="https://images.unsplash.com/photo-1491841651911-c44c30c34548?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=chris-lawton-9T346Ij4kGk-unsplash.jpg"
                            alt="History of Magic Course"
                            className="course-img"
                        />
                        <ul>
                            <li>This is a study of the history of magic, with lectures on major events in wizarding history, whose topics include the Goblin Rebellion, the Giant Wars, and the origins of wizard secrecy.
                            </li>
                            <li><strong>Instructor:</strong> Cuthbert Binns</li>
                            <li>Category: Compulsory course</li>
                        </ul>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-card-header">
                        <h3>Transfiguration</h3>
                    </div>
                    <div className="course-card-content">
                        <img src="https://images.unsplash.com/photo-1633151188217-7c4c512f7a76?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=zack-walker-GM-FgNYBuo0-unsplash.jpg"
                            alt="Transfiguration Course"
                            className="course-img"
                        />
                        <ul>
                            <li>Teaches various shapeshifting spells, such as changing an object into another object, or even an animal. Transfiguration is a theory-based subject that includes, for example, changing only a part of an object.
                            </li>
                            <li><strong>Instructor:</strong> Minerva McGonagall</li>
                            <li>Category: Compulsory course</li>
                        </ul>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-card-header">
                        <h3>Charms</h3>
                    </div>
                    <div className="course-card-content">
                        <img src="https://images.unsplash.com/photo-1527380992061-b126c88cbb41?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=javardh-FL6rma2jePU-unsplash.jpg"
                            alt="Charms Course"
                            className="course-img"
                        />
                        <ul>
                            <li>It is a course that teaches how to develop magic and use spells.</li>
                            <li><strong>Instructor:</strong> Filius Flitwick</li>
                            <li>Category: Compulsory course</li>
                        </ul>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-card-header">
                        <h3>Potions</h3>
                    </div>
                    <div className="course-card-content">
                        <img src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=artem-maltsev-3n7DdlkMfEg-unsplash.jpg"
                            alt="Potions Course"
                            className="course-img"
                        />
                        <ul>
                            <li>It is the art of making magic potions, which requires the correct mixing and stirring of ingredients at the correct time and temperature.</li>
                            <li><strong>Instructor:</strong> Horace Slughorn</li>
                            <li>Category: Compulsory course</li>
                        </ul>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-card-header">
                        <h3>Herbology</h3>
                    </div>
                    <div className="course-card-content">
                        <img src="https://images.unsplash.com/photo-1630419544962-97655e1e88c9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=madalyn-cox-jmo9pMqK2lE-unsplash.jpg"
                            alt="Herbology Course"
                            className="course-img"
                        />
                        <ul>
                            <li>It is the study of magical plants and how to recognize, care for, utilize and fight them.</li>
                            <li><strong>Instructor:</strong> Neville Longbottom</li>
                            <li>Category: Compulsory course</li>
                        </ul>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-card-header">
                        <h3>Care of Magical Creatures</h3>
                    </div>
                    <div className="course-card-content">
                        <img src="https://images.unsplash.com/photo-1623973792500-d2fa0aad9723?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=paul-bill-U2TjtLJe4Z0-unsplash.jpg"
                            alt="Care of Magical Creatures Course"
                            className="course-img"
                        />
                        <ul>
                            <li>This course teaches students how to recognize and care for magical animals.The lessons take place outside the castle at Hogwarts. The lessons take place outside the castle at Hogwarts.</li>
                            <li><strong>Instructor:</strong> Rubeus Hagrid</li>
                            <li>Category: Elective course</li>
                        </ul>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-card-header">
                        <h3>Muggle Studies</h3>
                    </div>
                    <div className="course-card-content">
                        <img src="https://images.unsplash.com/photo-1513682121497-80211f36a7d3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ryoji-iwata-X53e51WfjlE-unsplash.jpg"
                            alt="Muggle Studies Course"
                            className="course-img"
                        />
                        <ul>
                            <li>A course that examines Muggle culture from a wizard's point of view.</li>
                            <li><strong>Instructor:</strong> Quirinus Quirrell</li>
                            <li>Category: Elective course</li>
                        </ul>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-card-header">
                        <h3>Divination</h3>
                    </div>
                    <div className="course-card-content">
                        <img src="https://images.unsplash.com/photo-1587330936967-5a220aa6e575?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=michael-dziedzic-X0UrDOiHaS0-unsplash.jpg"
                            alt="Astronomy Course"
                            className="course-img"
                        />
                        <ul>
                            <li>The art of predicting the future. Among the different methods described are tea leaf divination, fire omens, crystal balls, palmistry, card divination (including reading traditional playing cards and tarot cards), astrology, and dream interpretation.</li>
                            <li><strong>Instructor:</strong> Sybill Trelawney</li>
                            <li>Category: Elective course</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Course;
