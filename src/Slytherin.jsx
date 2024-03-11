
import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import "./Slytherin.css";

function Slytherin() {
    return (
        <div>
            <Header />
            <Navigation />


            <div id="main-content" className="slytherin-container">

                <div className="slytherin-intro">
                    <h2>Slytherin will help you on the way to greatness.</h2>
                    <p>Slytherin valued ambition, leadership, self-preservation, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal was the serpent, it's representative gemstone was emeralds, and its colours were emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997–1998 school year. The Bloody Baron was the House ghost. The founder of the House was Salazar Slytherin. Slytherin corresponded roughly to the element of water.</p>
                </div>
            </div>


            <div className="slytherin-text-content">
                <h2>Slytherin Traits and Strengths</h2>
                <ul>
                    <li><strong>Ambition: </strong>A trait that nearly all Slytherins have in common is ambition. They want to be the best: the smartest in the class, the most popular in a group of friends, the boss at work. Because of their strong drive and work ethic, they often achieve these heights, too, becoming invaluable members of society and powerful in the work world.</li>
                    <li><strong>Cunning: </strong>Slytherins are highly intelligent, but not in the same way as Ravenclaws. Rather than seeking to expand their knowledge, Slytherins simply find ways to use their existing skills to their advantage. This makes them clever and cunning and can aid them in their quest for fame and power.</li>
                    <li><strong>Resourcefulness: </strong>Slytherins are able to make the best of any situation. They're highly adaptable and resourceful and can find ways to turn even the worst situations to their advantage.</li>
                    <li><strong>Determination:  </strong>Slytherins are highly determined. Their determination, however, is more self-focused. They will use their strong work ethic to fulfill their ambition and advance their own position. While this may seem self-absorbed, Slytherins recognise that by focusing on self-improvement, they can become better friends and family members and be more useful to society as a whole.</li>
                </ul>
                <h2>Slytherin Weaknesses</h2>
                <ul>
                    <li><strong>Machiavellian Tendencies: </strong>"The end justifies the means" might as well be the Slytherin house motto. Slytherins will often do morally ambiguous things to achieve their goals. This can be positive (as they're willing to get their hands dirty to get things done while members of other houses may shy away), but it can also make them seem cold and calculating.</li>
                    <li><strong>Power Hunger: </strong>When Slytherins don't place any checks and balances on their natural ambition, it can have disastrous consequences. They can become obsessed with gaining power. This can cause them to be fixated on surrounding themselves with powerful people, as in the case of Professor Slughorn. At worst, it can cause them to abandon all morality in their obsession with power and do horrific and depraved things, as seen in the case of Lord Voldemort's quest for power over the Wizarding World.</li>
                    <li><strong>Isolation: </strong>Over the course of the books, time and time again, the reader witnesses Slytherins attack those wizards who aren't pure-blood and bully others who they perceive as being weak even if they are pure of blood, such in the case of Malfoy's torment of Neville. Some Slytherins have a tendency towards arrogance and can insult and demean those who they see as being inferior.</li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default Slytherin;
