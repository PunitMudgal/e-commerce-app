import React from 'react'
import './errorPage.css'
import errorPng from '../../assets/404.jpg'

export default function ErrorPage() {
  return (
    <div className='errorpage'>
      <img src={errorPng} alt="404" />
    </div>
  )
}
