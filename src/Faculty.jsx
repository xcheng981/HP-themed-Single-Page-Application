import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import './Faculty.css';


const facultyList = [
    { name: 'Professor Dumbledore', house: 'Gryffindor', specialty: 'Transfiguration', title: 'Deputy Headmaster' },
    { name: 'Professor Snape', house: 'Slytherin', specialty: 'Potions', position: 'Headmaster' },
    { name: 'Professor McGonagall', house: 'Gryffindor', specialty: 'Transfiguration', title: 'Deputy Headmistress', position: 'Head of Gryffindor House' },
    { name: 'Professor Binns', house: 'Ravenclaw', specialty: 'History of Magic' },
    { name: 'Professor Flitwick', house: 'Ravenclaw', specialty: 'Charms', postion: 'Head of Ravenclaw House' },
    { name: 'Professor Lockhart', house: 'Ravenclaw', specialty: 'Defence Against the Dark Arts' },
    { name: 'Professor Slughorn', house: 'Slytherin', specialty: 'Potions', position: 'Head of Slytherin House' },
    { name: 'Professor Sprout', house: 'Hufflepuff', specialty: 'Herbology', position: 'Head of Hufflepuff House' },
    { name: 'Professor Moody', house: 'Hufflepuff', specialty: 'Defence Against the Dark Arts' },
    { name: 'Professor Lupin', house: 'Gryffindor', specialty: 'Defence Against the Dark Arts' },
    { name: 'Professor Hagrid', house: 'Gryffindor', specialty: 'Care of Magical Creatures' },
    { name: 'Professor Trelawney', house: 'Ravenclaw', specialty: 'Divination' },
];

const Faculty = () => {
    const [selectedHouseFilter, setSelectedHouseFilter] = useState('All');
    const [selectedSpecialtyFilter, setSelectedSpecialtyFilter] = useState('All');

    const houseOptions = ['All', 'Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
    const specialtyOptions = [
        'All',
        'Transfiguration',
        'Potions',
        'Charms',
        'History of Magic',
        'Defence Against the Dark Arts',
        'Herbology',
        'Care of Magical Creatures',
        'Divination',
    ];

    const filteredFaculty = facultyList.filter((member) =>
        (selectedHouseFilter === 'All' || member.house === selectedHouseFilter) &&
        (selectedSpecialtyFilter === 'All' || member.specialty === selectedSpecialtyFilter)
    );

    return (
        <>

            <Header />
            <Navigation />

            <div id="main-content" className="faculty-container">
                <div className="faculty-title">
                    <p>Hogwarts Faculty</p>
                </div>
                <div className="filter-section">
                    <div className="filter-group">
                        <span className="filter-label">Filter by House: </span>
                        <select
                            value={selectedHouseFilter}
                            onChange={(e) => setSelectedHouseFilter(e.target.value)}
                        >
                            <option value="All">All Houses</option>
                            {houseOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <span className="filter-label">Filter by Specialty: </span>
                        <select
                            value={selectedSpecialtyFilter}
                            onChange={(e) => setSelectedSpecialtyFilter(e.target.value)}
                        >
                            <option value="All">All Specialties</option>
                            {specialtyOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>


                <div className="faculty-gallery">
                    {filteredFaculty.map((facultyMember, index) => (
                        <div key={index} className="faculty-card">
                            <h3>{facultyMember.name}</h3>
                            <ul>
                                <li>House: {facultyMember.house}</li>
                                <li>Specialty: {facultyMember.specialty}</li>
                                <li>Position: {facultyMember.position}</li>
                                <li>Title: {facultyMember.title}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Faculty;