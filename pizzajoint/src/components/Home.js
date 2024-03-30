import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { homeContainer, homeTitle, homeButton } from "./animation/Home";

const ease = [0.62, 0.05, 0.01, 0.98];

const Home = () => {
  return (
    <motion.div className="home container" variants={homeContainer} exit="exit">
      <motion.h2
        initial={homeTitle.initial}
        animate={homeTitle.end}
        transition={homeTitle.transition}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          initial={homeButton.initial}
          animate={homeButton.end}
          transition={homeButton.transition}
          whileHover={homeButton.hover}
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Link to="/hadi">
        <motion.button
          initial={homeButton.initial}
          animate={homeButton.end}
          transition={homeButton.transition}
          whileHover={homeButton.hover}
        >
          Hadi's Request
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
