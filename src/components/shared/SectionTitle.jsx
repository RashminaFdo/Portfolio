const SectionTitle = ({ children, className = "" }) => {
  return (
    <h2 className={`text-3xl font-bold mb-6 text-gray-900 dark:text-lightest-slate ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle; 