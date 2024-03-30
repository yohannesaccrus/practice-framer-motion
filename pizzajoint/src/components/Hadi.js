import React from "react";
import { motion } from "framer-motion";

import { baseContainer } from "./animation/Base";
import { baseHadiMenus, baseHadiMenu } from "./animation/Hadi";
import gulugulu from "../static/logo.webp";

const Hadi = () => {
  const bases = ["Hazelnut Choco", "Lemon Alamonde", "Coffee Cream"];

  return (
    <motion.div
      className="base container"
      variants={baseContainer}
      initial="initial"
      animate="end"
      exit="exit"
    >
      <motion.img
        src={gulugulu}
        alt="gulugulu"
        className="gulu"
        animate={{
          scale: [1, 1.1, 0.8, 100],
          opacity: [1, 0],
        }}
        transition={{
          delay: 3,
          duration: 1,
          ease: "easeInOut",
        }}
      />
      <motion.ul variants={baseHadiMenus} initial="initial" animate="end">
        {bases.map((base) => {
          return (
            <motion.li
              key={base}
              variants={baseHadiMenu}
              whileHover={baseHadiMenu.hover}
            >
              <span>{base}</span>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default Hadi;
