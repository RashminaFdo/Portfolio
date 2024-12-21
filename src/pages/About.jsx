import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';
import profilePhoto from '../assets/images/profile/profile-photo.jpg';
import westminsterImg from '../assets/images/education/westminster.jpg';
import iitImg from '../assets/images/education/iit.jpg';
import esoftImg from '../assets/images/education/esoft.jpg';
import sthomasImg from '../assets/images/education/sthomas.jpg';

const About = () => {
  const education = [
    {
      school: "University of Westminster",
      degree: "BSc Computer Science",
      period: "2023 - 2027",
      location: "IIT Campus - Full-time",
      description: "Currently pursuing Computer Science degree at Informatics Institute of Technology (IIT Campus) in collaboration with the University of Westminster.",
      grade: "Level 5",
      images: [
        {
          src: westminsterImg,
          alt: "University of Westminster",
          link: "https://www.westminster.ac.uk/"
        },
        {
          src: iitImg,
          alt: "IIT Campus",
          link: "https://www.iit.ac.lk/"
        }
      ],
      websiteUrl: "https://www.westminster.ac.uk/"
    },
    {
      school: "ESOFT Metro Campus",
      degree: "Diploma in Computer Software Engineering",
      period: "Feb 2020 - Feb 2021",
      location: "Colombo, Sri Lanka",
      grade: "Batch 141",
      images: [{ 
        src: esoftImg, 
        alt: "ESOFT Metro Campus",
        link: "https://esoft.lk/"
      }],
      websiteUrl: "https://esoft.lk/"
    },
    {
      school: "S.Thomas' College, Mount Lavinia",
      period: "Jan 2009 - Dec 2022",
      images: [{ 
        src: sthomasImg, 
        alt: "S.Thomas' College",
        link: "https://www.stcmount.edu.lk/"
      }],
      websiteUrl: "https://www.stcmount.edu.lk/"
    }
  ];

  return (
    <>
      <SEO
        title="About - Rashmina Fernando"
        description="Learn more about Rashmina Fernando, a software developer and computer science student."
        name="Rashmina Fernando"
        type="website"
      />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center">
            <img
              src={profilePhoto}
              alt="Rashmina Fernando"
              className="w-48 h-48 mx-auto rounded-full border-4 border-theme-green mb-8"
            />
            <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-lightest-slate">
              About Me
            </h1>
            <p className="text-gray-700 dark:text-light-slate text-lg mb-8">
              Hi! I'm Rashmina Fernando, a Computer Science undergraduate at the Informatics Institute of Technology
              (IIT), in collaboration with the University of Westminster.
            </p>
            <p className="text-gray-700 dark:text-light-slate text-lg">
              I'm passionate about exploring new technologies and enhancing my skills in software development and
              problem-solving.
            </p>
          </div>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-theme-green">
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-light-navy rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex gap-4 justify-center md:justify-start">
                      {edu.images.map((image, imgIndex) => (
                        <a
                          key={imgIndex}
                          href={image.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-24 h-24 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-contain bg-white"
                          />
                        </a>
                      ))}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-lightest-slate mb-2">
                        <a
                          href={edu.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-theme-green transition-colors duration-200"
                        >
                          {edu.school}
                        </a>
                      </h3>
                      {edu.degree && (
                        <p className="text-theme-green font-medium mb-1">
                          {edu.degree}
                        </p>
                      )}
                      <p className="text-gray-700 dark:text-light-slate mb-2">
                        {edu.period}
                      </p>
                      {edu.location && (
                        <p className="text-gray-600 dark:text-light-slate mb-1">
                          {edu.location}
                        </p>
                      )}
                      {edu.description && (
                        <p className="text-gray-700 dark:text-light-slate">
                          {edu.description}
                        </p>
                      )}
                      {edu.grade && (
                        <p className="text-gray-600 dark:text-light-slate mt-2">
                          {edu.grade}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};

export default About; 