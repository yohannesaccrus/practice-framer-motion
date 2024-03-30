const orderContainer = {
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

const orderSubTitle = {
  initial: {
    opacity : 0,
    y       : '5vw' 
  },
  end:  {
    opacity : 1,
    y       : 0,
    transition: {
      type: 'spring',
      staggerChildren: .2,
      when: 'beforeChildren',
      stiffness : 50,
      opacity: {
        duration: .5
      }
    }
  }
}

const orderToppings = {
  initial: {
    opacity : 0,
    x       : '8vh',
  },
  end:  {
    opacity : 1,
    x       : 0,
  },
  hover: {
    scale: 1.02,
    originX: 0
  }
}


export { orderContainer, orderSubTitle, orderToppings }