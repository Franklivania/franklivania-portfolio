import React, {useState} from 'react'
import './ThemeToggler.scss'

const ThemeToggler = ( { toggleTheme } ) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleToggle = () => {
        setIsDarkTheme(!isDarkTheme);
        toggleTheme(!isDarkTheme);
    };

  return (
    <div id='theme' onClick={handleToggle}>
        ThemeToggler
    </div>
  )
}

export default ThemeToggler