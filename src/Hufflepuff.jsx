import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import "./Hufflepuff.css";

function Hufflepuff() {
    return (
        <div>
            <Header />
            <Navigation />


            <div id="main-content" className="hufflepuff-container">
                <div className="hufflepuff-intro">
                    <h2>Hufflepuff, do your stuff!</h2>
                    <p>Hufflepuff valued hard work, dedication, patience, loyalty, and fair play. Its emblematic animal was the badger, it's representative gemstone was yellow diamonds, and yellow and black were its colours. Pomona Sprout was the Head of Hufflepuff during 1991–1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017. The Fat Friar was its ghost. The founder of the House was Helga Hufflepuff. Hufflepuff corresponded to the element of earth.</p>                </div>
            </div>


            <div className="hufflepuff-text-content">
                <h2>Hufflepuff Traits and Strengths</h2>
                <ul>
                    <li><strong>Loyalty: </strong>Hufflepuffs make the most loyal friends a person can find. They also identify strongly with their House, as seen in The Goblet of Fire where the majority of Hufflepuffs turn against Harry because they think he's trying to undermine one of their own, Cedric Diggory.</li>
                    <li><strong>Dedication: </strong>Hufflepuffs are some of the most hard-working students and employees in the Wizarding World. While they may not have a Ravenclaw's natural love of learning and knowledge or a Slytherin's cunning and ambition, Hufflepuffs try their hardest in everything they do... and are rewarded for it.</li>
                    <li><strong>Honesty: </strong>Hufflepuffs feel a strong desire to speak the truth and behave honestly in everything that they do. Gryffindors also value this trait, which is part of what makes Hufflepuff-Gryffindor friendships so strong.</li>
                    <li><strong>Humbleness: </strong>Unlike the other houses, which are all prone to arrogance, Hufflepuffs rarely display this trait. They are modest and humble in everything they do and tend to avoid those who exude self-importance.</li>
                </ul>
                <h2>Hufflepuff Weaknesses</h2>
                <ul>
                    <li><strong>Naivety: </strong>Hufflepuffs are generally optimists and are able to find the good in everything, but this does mean that they can be naive. If they're not careful, they can be easily tricked and taken advantage of.</li>
                    <li><strong>Low Self-Esteem: </strong>Because Hufflepuffs have a tendency towards modesty, they can sometimes fail to see their own worth. At best, this can cause them to simply underestimate themselves, but at worst, it can cause severe problems with a lack of confidence and self-worth.</li>
                    <li><strong>Lack of Ambition: </strong>Hufflepuffs are the antithesis of Slytherins. They struggle with ambition and can become stuck in situations that are beneath their capabilities or don't challenge them enough.</li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default Hufflepuff;
