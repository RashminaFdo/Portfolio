import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/shared/SEO';
import { validateEmail } from '../utils/validation';
import { sendEmail } from '../utils/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add floating label effect
  const [focusedField, setFocusedField] = useState(null);

  // Add character count for message
  const maxMessageLength = 500;
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      if (!validateEmail(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      const response = await sendEmail(formData);
      
      setStatus({
        type: 'success',
        message: response.message || 'Message sent successfully!'
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = (fieldName) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);

  // Success animation timeout
  useEffect(() => {
    if (status.type === 'success') {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      <SEO
        title="Contact - Rashmina Fernando"
        description="Get in touch with me for photography services, collaborations, or any inquiries."
        name="Rashmina Fernando"
        type="website"
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-lightest-slate">
              Get in Touch
            </h1>
            <p className="text-gray-700 dark:text-light-slate max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
          
          <div className="bg-white dark:bg-light-navy rounded-lg p-8 shadow-xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className={`peer w-full bg-gray-50 dark:bg-navy border-2 border-gray-200 dark:border-lightest-navy 
                              rounded-md px-4 py-3 text-gray-800 dark:text-lightest-slate 
                              focus:outline-none focus:border-theme-green transition-colors duration-300
                              placeholder-transparent ${focusedField === 'name' ? 'border-theme-green' : ''}`}
                    placeholder="Your Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 -top-2.5 bg-white dark:bg-light-navy px-1 text-sm transition-all duration-300
                              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-light-slate 
                              peer-placeholder-shown:top-3.5
                              peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-theme-green
                              ${focusedField === 'name' ? 'text-theme-green' : 'text-gray-600 dark:text-light-slate'}`}
                  >
                    Name *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={`peer w-full bg-gray-50 dark:bg-navy border-2 border-gray-200 dark:border-lightest-navy 
                              rounded-md px-4 py-3 text-gray-800 dark:text-lightest-slate 
                              focus:outline-none focus:border-theme-green transition-colors duration-300
                              placeholder-transparent ${focusedField === 'email' ? 'border-theme-green' : ''}`}
                    placeholder="Your Email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 -top-2.5 bg-white dark:bg-light-navy px-1 text-sm transition-all duration-300
                              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-light-slate 
                              peer-placeholder-shown:top-3.5
                              peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-theme-green
                              ${focusedField === 'email' ? 'text-theme-green' : 'text-gray-600 dark:text-light-slate'}`}
                  >
                    Email *
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  className={`peer w-full bg-gray-50 dark:bg-navy border-2 border-gray-200 dark:border-lightest-navy 
                            rounded-md px-4 py-3 text-gray-800 dark:text-lightest-slate 
                            focus:outline-none focus:border-theme-green transition-colors duration-300
                            placeholder-transparent ${focusedField === 'subject' ? 'border-theme-green' : ''}`}
                  placeholder="Subject"
                />
                <label
                  htmlFor="subject"
                  className={`absolute left-4 -top-2.5 bg-white dark:bg-light-navy px-1 text-sm transition-all duration-300
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-light-slate 
                            peer-placeholder-shown:top-3.5
                            peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-theme-green
                            ${focusedField === 'subject' ? 'text-theme-green' : 'text-gray-600 dark:text-light-slate'}`}
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  rows="5"
                  maxLength={maxMessageLength}
                  className={`peer w-full bg-gray-50 dark:bg-navy border-2 border-gray-200 dark:border-lightest-navy 
                            rounded-md px-4 py-3 text-gray-800 dark:text-lightest-slate 
                            focus:outline-none focus:border-theme-green transition-colors duration-300
                            placeholder-transparent ${focusedField === 'message' ? 'border-theme-green' : ''}`}
                  placeholder="Your Message"
                  required
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 -top-2.5 bg-white dark:bg-light-navy px-1 text-sm transition-all duration-300
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-light-slate 
                            peer-placeholder-shown:top-3.5
                            peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-theme-green
                            ${focusedField === 'message' ? 'text-theme-green' : 'text-gray-600 dark:text-light-slate'}`}
                >
                  Message *
                </label>
                <div className="text-right mt-1 text-sm text-gray-500 dark:text-light-slate">
                  {formData.message.length}/{maxMessageLength}
                </div>
              </div>

              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-md ${
                      status.type === 'success' 
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 border border-green-500/50' 
                        : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400 border border-red-500/50'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-theme-green text-gray-900 font-semibold py-3 px-6 rounded-md 
                         hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50
                         hover:shadow-lg hover:shadow-theme-green/20"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-700 dark:text-light-slate">You can also reach me directly at:</p>
            <a
              href="mailto:fdo.rashmina@gmail.com"
              className="text-theme-green hover:text-opacity-80 transition-colors inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              fdo.rashmina@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;