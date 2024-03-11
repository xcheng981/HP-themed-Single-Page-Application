
import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import "./Ravenclaw.css";

function Ravenclaw() {
    return (
        <div>
            <Header />
            <Navigation />


            <div id="main-content" className="ravenclaw-container">

                <div className="ravenclaw-intro">
                    <h2>Wit Beyond Measure Is Man's Greatest Treasure</h2>
                    <p>Ravenclaw valued intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal was the eagle, it's representative gemstone was sapphires, and its colours were blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw was the Grey Lady, who was the daughter of Rowena Ravenclaw, the House's founder. Ravenclaw corresponded to the element of air.</p>
                </div>
            </div>


            <div className="ravenclaw-text-content">
                <h2>Ravenclaw Traits and Strengths</h2>
                <ul>
                    <li><strong>Intelligence: </strong>While not all Ravenclaws are naturally intelligent, all members of the House have a strong thirst for knowledge and learning that places them among the best students in the Wizarding World, and this quality adds up to a generally high level of intelligence and knowledge among members of the House.</li>
                    <li><strong>Curiosity: </strong>One of the main traits that defines the Ravenclaw House is a desire for exploration, inquiry, and learning. Ravenclaws are generally highly curious about the world around them and are constantly asking questions to expand their understanding.</li>
                    <li><strong>Creativity: </strong>Ravenclaws tend to be "out-of-the-box" thinkers and as such can be highly creative. This creativity affects their spell-work and their way of relating to others and also means that many Ravenclaws are artistic and have unique approaches to solving problems.</li>
                    <li><strong>Individuality:  </strong>Ravenclaws are highly individualistic and don't tend to follow the crowd or succumb to peer pressure. In essence, they do what they want to do. This is most obviously exemplified by Luna Lovegood, who wears radish-like fruits as earrings and is fiercely true to her own identity, even when people tease her for it.</li>
                </ul>
                <h2>Ravenclaw Weaknesses</h2>
                <ul>
                    <li><strong>Disconnection From the Outside World: </strong>Because Ravenclaws tend to live inside their own heads, they can come across as vague, disconnected, or uninterested. Some are genuinely disdainful of others and the outside world, but most simply don't understand that their constant daydreaming is inappropriate in certain situations.</li>
                    <li><strong>Arrogance: </strong>Ravenclaws can be arrogant about their own intelligence and use it as a justification to view themselves as being better than others.</li>
                    <li><strong>Isolation: </strong>Some Ravenclaws purposefully isolate themselves from others... even from their fellow Ravenclaws. This isolation can occur for innocent reasons—for example, if they want to be alone to study for an upcoming test or read a good book—but it can also be a byproduct of arrogance. They may view themselves as being better than others and may be unwilling to associate with inferiors.</li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default Ravenclaw;
