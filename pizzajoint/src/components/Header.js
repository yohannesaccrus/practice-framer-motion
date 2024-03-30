import React from 'react';
import { motion } from 'framer-motion';

import { 
  headerContainer,
  headerLogo,
  headerPath
} from './animation/Header'

const Header = () => {
  return (
    <motion.header
      variants = {headerContainer}
      initial  = "initial"
      animate  = "end"
    >
      <div className="logo">
        <motion.svg 
          className="pizza-svg" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100"
          variants={headerLogo}
          initial="initial"
          animate="end"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={headerPath}
            initial="initial"
            animate="end"
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={headerPath}
            initial="initial"
            animate="end"
          />
        </motion.svg>
      </div>
      <div className="title">
        <h1>Pizza Joint</h1>
      </div>
    </motion.header>
  )
}

export default Header;