const modalContainer = {
  initial: {
    opacity: 0
  },
  end: {
    opacity: 1
  }
}

const modalCard = {
  initial: {
    y: '-50vh',
    opacity: 0
  },
  end: {
    y: '35vh',
    opacity: 1,
    transition: {
      delay: .5
    }
  }
}

export { modalContainer, modalCard }