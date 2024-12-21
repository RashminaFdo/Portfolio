import { motion } from 'framer-motion';
import { FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import SEO from '../components/shared/SEO';
import studyhiveImg from '../assets/images/projects/studyhive.jpg';
import logoImg from '../assets/logo/logo.png';

const Projects = () => {
  const projects = [
    {
      title: "StudyHive",
      description: "StudyHive is a collaborative learning platform developed during my second year at IIT. The platform facilitates peer-to-peer learning through interactive study sessions, resource sharing, and real-time collaboration features. It helps students connect with peers, form study groups, and enhance their learning experience.",
      technologies: ["React", "Spring Boot", "MySQL", "Docker", "AWS"],
      image: studyhiveImg,
      logo: logoImg,
      linkedin: "https://www.linkedin.com/company/studyhive/",
      live: "https://www.facebook.com/profile.php?id=61570160061839this",
      role: "Full Stack Developer - Responsible for frontend development, API integration, and implementing real-time collaboration features."
    }
  ];

  return (
    <>
      <SEO
        title="Projects - Rashmina Fernando"
        description="Explore StudyHive - a collaborative learning platform developed as part of the Software Development Group Project at IIT University."
        name="Rashmina Fernando"
        type="website"
      />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Featured Project</h1>
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-light-navy rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className="order-2 md:order-1">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={project.logo} 
                        alt={`${project.title} logo`} 
                        className="w-12 h-12 rounded-full"
                      />
                      <h2 className="text-2xl font-bold text-theme-green">
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-light-slate mb-4">
                      {project.description}
                    </p>
                    <p className="text-light-slate mb-4 italic">
                      {project.role}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-lightest-navy px-3 py-1 rounded-full text-sm text-theme-green"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-slate hover:text-theme-green transition-colors"
                        aria-label="LinkedIn Page"
                      >
                        <FaLinkedin size={24} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light-slate hover:text-theme-green transition-colors"
                          aria-label="Live Demo"
                        >
                          <FaExternalLinkAlt size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      className="rounded-lg w-full h-full object-cover shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects; 