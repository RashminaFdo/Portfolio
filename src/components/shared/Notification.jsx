import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Notification = ({ type, message, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
          type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white flex items-center space-x-2`}
      >
        {type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
        <span>{message}</span>
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification; 