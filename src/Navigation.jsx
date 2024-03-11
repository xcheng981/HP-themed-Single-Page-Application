import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item"><Link to="/">Home</Link></li>
                <li className={`menu__item dropdown__item ${showSubMenu ? 'active' : ''}`}>
                    <div className="menu__item-content" onClick={toggleSubMenu}>
                        <span>About Houses</span>
                        <span className={`menu__item-triangle ${showSubMenu ? 'rotate' : ''}`}>&#9662;</span>
                    </div>
                    {showSubMenu && (
                        <ul className="submenu" onClick={stopPropagation}>
                            <li className="submenu__intro"><Link to="/Intro">Introduction</Link></li>
                            <li className="submenu__gryffindor"><Link to="/Gryffindor">Gryffindor</Link></li>
                            <li className="submenu__hufflepuff"><Link to="/Hufflepuff">Hufflepuff</Link></li>
                            <li className="submenu__ravenclaw"><Link to="/Ravenclaw">Ravenclaw</Link></li>
                            <li className="submenu__slytherin"><Link to="/Slytherin">Slytherin</Link></li>
                        </ul>
                    )}

                </li>
                <li className="menu__item"><Link to="/Course">About Courses</Link></li>
                <li className="menu__item"><Link to="/Faculty">Meet the Faculty</Link></li>
                <li className="menu__item"><Link to="/Apply">Apply</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;