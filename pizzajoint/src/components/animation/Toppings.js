const toppingsContainer = {
  initial: {
    opacity : 0,
    x       : '100vw' 
  },
  end:  {
    opacity : 1,
    x       : 0,
    transition: {
      type: 'spring',
      stiffness : 50,
      opacity: {
        duration: 2
      }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  }
}

const toppingsButton = {
  initial: {
    opacity : 0,
    y       : '5vh',
  },
  end:  {
    opacity : 1,
    y       : 0,
    transition: {
      delay: 1,
      type: 'spring',
      opacity: {
        duration: 4
      }
    }
  },
  hover: {
    scale: 1.08,
    backgroundColor: '#ffffff',
    color: 'rgb(100,0,123)',
  }
}

const toppingsOptions = {
  initial: {
    opacity : 0,
  },
  end:  {
    opacity : 1,
    transition: {
      delay: .3,
      staggerChildren: .2,
      when: 'beforeChildren'
    }
  },
}

const toppingsOption = {
  initial: {
    opacity : 0,
    x       : '8vh',
  },
  end:  {
    opacity : 1,
    x       : 0,
  },
  hover: {
    scale: 1.05,
    originX: 0
  }
}


export { toppingsContainer, toppingsButton, toppingsOptions, toppingsOption }