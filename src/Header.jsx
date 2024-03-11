import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import Skiplink from './Skiplink';
function Header() {
    const handleKeyPress = (event, path) => {
        if (event.key === 'Enter') {
            window.location.href = path;
        }
    };

    return (
        <header>
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://images.unsplash.com/photo-1598153346810-860daa814c4b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=tuyen-vo-tS-jh0M6JoA-unsplash.jpg"
                    alt="Hogwarts Crest"
                    title="Hogwarts Crest"
                    onKeyPress={(e) => handleKeyPress(e, '/')}
                />
            </Link>
            <Skiplink targetId="main-content" label="Skip to main content" />
            <h1 className="header__title">Hogwarts School of Witchcraft and Wizardry</h1>
            <ThemeSwitcher />
        </header>
    );
}

export default Header;
