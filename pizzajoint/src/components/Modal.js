import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import { 
  modalContainer,
  modalCard
} from './animation/Modal'

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {
        showModal && (
          <motion.div 
            className="backdrop"
            variants={modalContainer}
            initial="initial"
            animate="end"
            exit="initial"
          >
            <motion.div
              className="modal"
              variants={modalCard}
              initial="initial"
              animate="end"
            >
              <p>Want to make another ?</p>
              <Link to="/">
                <button
                  onClick={() => setShowModal(false)}
                >Start</button>
              </Link>
            </motion.div>
          </motion.div>
        )
      }
    </AnimatePresence>
  )
}

export default Modal