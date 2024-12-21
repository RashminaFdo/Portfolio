import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/RashminaFdo',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rashminafernando',
      icon: FaLinkedin,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rashmina.fernando',
      icon: FaInstagram,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/rashminaf',
      icon: FaTwitter,
    },
  ];

  return (
    <footer className="bg-navy py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-slate hover:text-theme-green transition-colors"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
          <p className="text-light-slate text-sm">
            © 2024 Rashmina Fernando. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
