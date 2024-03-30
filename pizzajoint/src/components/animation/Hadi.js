const baseHadiMenus = {
  initial: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      delay: 4,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const baseHadiMenu = {
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

export { baseHadiMenu, baseHadiMenus };
