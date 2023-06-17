import React from 'react'
import './Landing.scss'
import Background from '../../Components/Background/Background'
import Navbar from '../../Components/Navbar/Navbar'

const Landing = () => {
  return (
    <div id='landing'>
        <Background />

        <div id="landing-content">
            <Navbar />
        </div>
    </div>
  )
}

export default Landing