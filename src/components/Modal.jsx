import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariant = {
  hiddne: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariant = {
  hiddne: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};
const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariant}
          initial="hiddne"
          animate="visible"
          exit="hiddne"
        >
          <motion.div className="modal" variants={modalVariant}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Make Another</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
