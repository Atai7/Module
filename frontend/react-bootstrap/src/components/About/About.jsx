import React from 'react'
import './About.css'

import { motion } from "framer-motion"

//photo//
import million from './omks.jpg'
import iconomks from './omks-icon.jpg'



function About() {
  return (
    <div className='container'>
      <div className="about">
        <motion.h2 className="main-title">
        "omks"
        </motion.h2>
        <h4 className='title'>
          Самое популярное сетевое сообщество Кыргызстана 
          <img className='iconomks' src={iconomks} alt="icon" /></h4>
          <img className='image' src={million} alt="image" />
        
      </div>
    </div>
  )
}

export default About