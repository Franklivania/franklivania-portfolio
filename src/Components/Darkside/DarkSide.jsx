import React, {useRef} from 'react';
import './DarkSide.scss';
import ProfileCard from '../ProfileCard/ProfileCard';
import dark from '../../assets/darkme.png'
// import darkbg from '../../assets/darkbg.jpg'
import dkmusic from '../../assets/dk-music.mp3'
import Atropos from 'atropos/react';

const DarkSide = ({ toggleTheme }) => {
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
        id="darkside" 
        className="dark-theme" 
        onClick={toggleTheme}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <audio ref={audioRef} src={dkmusic} />
        <ProfileCard
          className={'dark-profile'}
          title={"GIVE IN TO THE DARK SIDE"}
          image={dark}
          />
      </div>
    </Atropos>
  );
};

export default DarkSide;
