import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg hover:bg-light-navy transition-colors"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-slate" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 