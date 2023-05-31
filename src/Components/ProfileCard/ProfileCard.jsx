import React, { useState } from 'react';
import './ProfileCard.scss';
import Atropos from 'atropos/react';

const ProfileCard = ({ className, title, image, children, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Atropos className="atropos"
        rotateXMax={15}
        rotateYMax={15}
        shadow={false}
    >
        <div
            id="profile"
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            // data-atropos-offset="-3"
        >
            <img
                src={image}
                alt=""
                className={`${className} ${isHovered ? 'hovered' : ''}`}
                />
            <h2 data-atropos-offset="-3">{title}</h2>
            <p>{text}</p>
            {children}
        </div>
    </Atropos>
  );
};

export default ProfileCard;
