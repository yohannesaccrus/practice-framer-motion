const ease = [0.62, 0.05, 0.01, 0.98]

const homeContainer = {
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  }
}

const homeTitle = {
  initial: {
    opacity : 0,
  },
  end:  {
    opacity : 1,
  },
  transition: {
    type      : 'tween',
    duration  : 1.5,
    delay     : .5
  }
}

const homeButton = {
  initial: {
    opacity : 0,
    y       : '100%' 
  },
  end:  {
    opacity : 1,
    y       : 0
  },
  transition: {
    ease,
    duration : 2,
    opacity  : {
      duration : 2
    }
  },
  hover: {
    scale : 1.05,
    backgroundColor: '#fff',
    color: 'rgb(100,0,123)',
    transition: {
      yoyo: Infinity,
      duration: 1
    }
  }
}

export { homeContainer, homeTitle, homeButton }