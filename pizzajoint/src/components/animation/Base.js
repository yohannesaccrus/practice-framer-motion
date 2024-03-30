const baseContainer = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  end: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      opacity: {
        duration: 2,
      },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const baseButton = {
  initial: {
    opacity: 0,
    y: "5vh",
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      opacity: {
        duration: 1,
      },
    },
  },
  hover: {
    scale: 1.08,
    backgroundColor: "#ffffff",
    color: "rgb(100,0,123)",
  },
};

const baseOptions = {
  initial: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const baseOption = {
  initial: {
    opacity: 0,
    x: "8vh",
  },
  end: {
    opacity: 1,
    x: 0,
  },
  hover: {
    scale: 1.05,
    originX: 0,
  },
};

export { baseContainer, baseButton, baseOptions, baseOption };
