import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { 
  toppingsContainer,
  toppingsButton,
  toppingsOptions,
  toppingsOption
} from './animation/Toppings';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div 
      className="toppings container"
      variants={toppingsContainer}
      initial="initial"
      animate="end"
      exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <motion.ul
        variants   = {toppingsOptions}
        initial    = "initial"
        animate    = "end"
      >
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li 
              key={topping} 
              onClick={() => addTopping(topping)}
              variants   = {toppingsOption}
              whileHover = {toppingsOption.hover}
              >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </motion.ul>

      <Link to="/order">
        <motion.button
         variants   = {toppingsButton}
         initial    = "initial"
         animate    = "end"
         whileHover = {toppingsButton.hover}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;