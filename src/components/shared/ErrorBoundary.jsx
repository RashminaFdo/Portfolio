import { Component } from 'react';
import { motion } from 'framer-motion';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center min-h-screen p-4"
        >
          <h1 className="text-4xl font-bold text-theme-green mb-4">Oops!</h1>
          <p className="text-light-slate mb-6">Something went wrong.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-theme-green text-navy px-6 py-3 rounded-lg font-medium hover:bg-opacity-80 transition-colors"
          >
            Refresh Page
          </button>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 