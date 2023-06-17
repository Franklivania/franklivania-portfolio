import React from 'react'
import './PageButton.scss'
import { Link } from 'react-router-dom'

const PageButton = ( {link, className, title, children, dataBeforeContent} ) => {
  return (
    <Link id='page' className={`animate__animated ${className}`} to={link} data-before-content={dataBeforeContent}>
        <h4>{title}</h4>
        {children}
    </Link>
  )
}

export default PageButton