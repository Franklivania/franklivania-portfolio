import React from 'react'
import './Navigator.scss'
import Link, { useNavigate } from 'react-router-dom'

const Navigator = ( {className, link , text, children} ) => {

  const navigate = useNavigate()

  function handleClick() {
    navigate(link)
  }

  return (
    <Link to={link} className={className} onClick={handleClick} id="link">
        {text}
        {children}
    </Link>
  )
}

export default Navigator