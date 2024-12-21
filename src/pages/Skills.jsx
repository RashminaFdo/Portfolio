import { motion } from 'framer-motion';
import { FaCode, FaTools, FaLaptopCode } from 'react-icons/fa';
import SEO from '../components/shared/SEO';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode className="text-theme-green text-2xl" />,
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "HTML/CSS", level: 90 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaLaptopCode className="text-theme-green text-2xl" />,
      skills: [
        { name: "React", level: 80 },
        { name: "Spring Boot", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Node.js", level: 70 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools className="text-theme-green text-2xl" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Figma", level: 75 },
        { name: "Unreal Engine", level: 70 },
        { name: "MATLAB", level: 65 },
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Skills & Expertise - Rashmina Fernando"
        description="Proficient in JavaScript, Python, Java, React, and more. Experienced in web development, game development, and various modern technologies."
        name="Rashmina Fernando"
        type="website"
      />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Skills & Expertise</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-light-navy p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h2 className="text-xl font-semibold text-theme-green">
                    {category.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-light-slate mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-lightest-navy rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-theme-green"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills; 