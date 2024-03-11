import React, { useEffect } from 'react';
import './Skiplink.css';

const Skiplink = ({ targetId, label }) => {
    useEffect(() => {
        const skiplink = document.getElementById('skiplink');
        const targetElement = document.getElementById(targetId);

        if (skiplink && targetElement) {
            skiplink.addEventListener('click', () => {
                targetElement.focus();
            });
        }
    }, [targetId]);

    return (
        <a href="#main-content" className="skiplink" id="skiplink">
            {label}
        </a>
    );
};

export default Skiplink;