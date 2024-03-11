import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import "./Gryffindor.css";

function Gryffindor() {
    return (
        <div>
            <Header />
            <Navigation />

            <div id="main-content" className="gryffindor-container">
                <div className="gryffindor-intro">
                    <h2>Gryffindor, where dwell the brave at heart!</h2>
                    <p>Gryffindor valued bravery, daring, nerve, and chivalry. Its emblematic animal was the lion, it's representative gemstone was rubies, and its colours were scarlet and gold. Minerva McGonagall was the most recent Head of Gryffindor. Sir Nicholas de Mimsy-Porpington, also known as "Nearly Headless Nick", was the House Ghost. The founder of the House was Godric Gryffindor. Gryffindor corresponded to the element of fire.</p>
                </div>
            </div>


            <div className="gryffindor-text-content">
                <h2>Gryffindor Traits and Strengths</h2>
                <ul>
                    <li><strong>Courage: </strong>Gryffindors stand strong in the face of adversity and show bravery in everything they do. This can be overt (as in the case of Harry's bravery when facing Voldemort) or subtle (as in the case of Neville, who continues to persevere even as he struggles with intense fear).</li>
                    <li><strong>Daring: </strong>Gryffindors aren't reluctant to put themselves in physical danger when they feel there's a good reason. Harry, Ron, and Hermione run unflinchingly into danger time and time again.</li>
                    <li><strong>Chivalry: </strong>Gryffindors feel a strong sense of responsibility to protect the weak and will act nobly, putting others before themselves. This trait makes them highly charismatic and popular with others.</li>
                    <li><strong>Strong moral compass: </strong>Gryffindors tend to see the world as being split into right and wrong and will go to great lengths to pursue and defend the good while fighting the bad.</li>
                </ul>
                <h2>Gryffindor Weaknesses</h2>
                <ul>
                    <li><strong>Hot-headedness: </strong>Because they're brave and daring, Gryffindors can sometimes react instinctively and ignore logic, leading to them being hot-headed and occasionally short-tempered. In The Philosopher's Stone, Harry chases Draco Malfoy into the sky on his broom over a fairly mild insult, despite the fact that he's never flown before and is putting himself in serious danger.</li>
                    <li><strong>Recklessness: </strong>In addition to being hot-headed, many Gryffindors can be reckless in the pursuit of their goals. This happens when their daring and courage are misused or taken too far.</li>
                    <li><strong>Arrogance: </strong>Gryffindors tend to be popular, charismatic, and good at most things that they do. Because of this, some Gryffindors can develop inflated senses of themselves and become arrogant.</li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default Gryffindor;
