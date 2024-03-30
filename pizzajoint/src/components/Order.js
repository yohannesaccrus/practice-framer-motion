import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { orderContainer, orderSubTitle, orderToppings } from './animation/Order'

const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 2000)
  }, [setShowModal])

  return (
    <motion.div
      className="container order"
      variants={orderContainer}
      initial="initial"
      animate="end"
      exit="exit"
    >
      <h2>
        Thank you for your order :
      </h2>
      <motion.p
        variants={orderSubTitle}
        initial="initial"
        animate="end"
      >
        You ordered a {pizza.base} pizza with:
        {pizza.toppings.map(topping => <motion.div
          key={topping}
          variants={orderToppings}
          whileHover={orderToppings.hover}
        >
          {topping}
        </motion.div>)}
      </motion.p>

    </motion.div>
  )
}

export default Order;