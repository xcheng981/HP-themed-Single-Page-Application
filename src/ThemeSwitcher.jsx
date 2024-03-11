import React from 'react';
import './ThemeSwitcher.css';

function ThemeSwitcher() {
    const handleToggle = () => {
        document.querySelector('.toggle').classList.toggle('active');
        document.body.classList.toggle('muggle');
    };

    return (
        <div className="toggle" onClick={handleToggle}>

        </div>
    );
}

export default ThemeSwitcher;
