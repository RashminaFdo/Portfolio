import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SEO from '../components/shared/SEO';
import profilePhoto from '../assets/images/profile/profile-photo.jpg';

const Home = () => {
  return (
    <>
      <SEO
        title="Rashmina Fernando - Computer Science Undergraduate"
        description="Personal portfolio of Rashmina Fernando, a computer science undergraduate at University of Westminster."
        name="Rashmina Fernando"
        type="website"
      />
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="absolute inset-0 rounded-full border-2 border-theme-green animate-pulse"></div>
            <img
              src={profilePhoto}
              alt="Rashmina Fernando"
              className="rounded-full w-full h-full object-cover border-4 border-theme-green"
            />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-lightest-slate mb-4">
            Rashmina Fernando
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-theme-green">
            Computer Science Undergraduate
          </h2>
          
          <p className="text-gray-700 dark:text-light-slate max-w-2xl mx-auto text-lg">
            I'm a passionate developer studying at the University of Westminster. 
            I love creating web applications and exploring new technologies.
          </p>

          <div className="flex gap-4 justify-center mt-8">
            <Link
              to="/projects"
              className="bg-theme-green text-gray-900 hover:bg-opacity-90 px-6 py-3 rounded-md font-medium 
                       transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              to="/contact"
              className="border-2 border-theme-green text-theme-green hover:bg-theme-green/10 
                       px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;