import React, { useRef } from 'react';
import './LightSide.scss';
import ProfileCard from '../ProfileCard/ProfileCard';
import light from '../../assets/ligthme.png';
import Atropos from 'atropos/react';
import ltmusic from '../../assets/lt-music.mp3';

const LightSide = ({ toggleTheme }) => {
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    audioRef.current.play();
  };

  const handleMouseLeave = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <Atropos
      className='atropos'
      shadow={false}
    >
      <div
        id="lightside"
        className="light-theme"
        onClick={toggleTheme}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

      <audio ref={audioRef} src={ltmusic} />

        <ProfileCard
          className={'light-profile'}
          title={"WELCOME TO THE LIGHT"}
          image={light}
          />
      </div>
    </Atropos>
  );
};

export default LightSide;
