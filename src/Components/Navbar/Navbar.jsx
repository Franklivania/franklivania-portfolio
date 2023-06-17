import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import ToggleButton from '../ToggleButton/ToggleButton';
import PageButton from '../PageButton/PageButton';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [closingNav, setClosingNav] = useState(false);

  function openNavClick() {
    setOpenNav((prevOpenNav) => !prevOpenNav);
    setClosingNav(false);
  }

  function closeNav() {
    setOpenNav(false);
    setClosingNav(true);
  }

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openNav]);

  return (
    <div id="navbar">
      <div id="top-nav">
        <PageButton link={'/'} title={'CFO'} />

        <ToggleButton
          className={`nav-btn ${openNav ? 'active' : ''}`}
          onClick={openNavClick}
        >
          <div
            id="icon"
            className={`icon ${openNav ? 'active' : ''}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ToggleButton>

        <ThemeToggler />
      </div>

      <nav className={`${openNav ? 'active' : ''} ${closingNav ? 'closing' : ''}`}>
        <PageButton dataBeforeContent={'HOME'} title={'HOME'} link={'/'} className={'link'} />
        <PageButton dataBeforeContent={'ABOUT'} title={'ABOUT'} link={'/about'} className={'link'} />
        <PageButton dataBeforeContent={'PROJECTS'} title={'PROJECTS'} link={'/porjects'} className={'link'} />
      </nav>
    </div>
  );
};

export default Navbar;
