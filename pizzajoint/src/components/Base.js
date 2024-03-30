import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  baseContainer,
  baseButton,
  baseOptions,
  baseOption,
} from "./animation/Base";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={baseContainer}
      initial="initial"
      animate="end"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <motion.ul variants={baseOptions} initial="initial" animate="end">
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              variants={baseOption}
              whileHover={baseOption.hover}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </motion.ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={baseButton}
          initial="initial"
          animate="end"
        >
          <Link to="/toppings">
            <motion.button whileHover={baseButton.hover}>Next</motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
