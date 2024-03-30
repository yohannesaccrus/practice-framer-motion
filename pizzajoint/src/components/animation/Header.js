const headerContainer = {
  initial: {
    opacity : 0,
    y       : '-5vw' 
  },
  end:  {
    opacity    : 1,
    y          : 0,
    transition : {
      type      : 'spring',
      stiffness : 60,
      opacity   : {
        duration : 2
      }
    }
  },
}

const headerLogo = {
  initial: {
    opacity: 0,
    rotate: 30
  },
  end: {
    scale: [1, 1.05, .9, 1],
    opacity: 1,
    rotate: 0,
    transition: {
      delay: .6,
      rotate: {
        duration: 2
      },
      opacity: {
        duration: 1
      },
      scale: {
        delay: 2.5
      }
    }
  }
}

const headerPath = {
  initial: {
    opacity: 0,
    pathLength: 0
  },
  end: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: .5,
      duration: 2,
      ease: 'easeInOut'
    }
  },
}

export { headerContainer, headerLogo, headerPath }