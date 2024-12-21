import { useState } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      <motion.img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-light-navy animate-pulse rounded-lg" />
      )}
    </div>
  );
};

export default LazyImage; 