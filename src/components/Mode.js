import React from 'react';

import { useState } from 'react';

function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
        document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
    };

    return (
        <div className="fs-4" onClick={toggleDarkMode} >
                {isDarkMode ? '☀️' : <i class="fa-solid fa-moon"></i>}       
        </div>
    );
}

export default DarkModeToggle;