import React from 'react';

const projects = [
  {
    category: 'Full-Stack',
    items: [
      {
        title: 'Horizon D’or',
        description: 'Jewelry e-commerce website built with React, Tailwind, and Formspree.',
        tags: ['React', 'Tailwind', 'Formspree'],
      },
      {
        title: 'MagentaTech',
        description: 'Internal management platform developed with Java Spring Boot + Angular.',
        tags: ['Java', 'Spring Boot', 'Angular'],
      },
      {
        title: 'TerangaLabo',
        description: 'Medical laboratory management system with Angular frontend and Spring API.',
        tags: ['Angular', 'Spring Boot'],
      },
      {
        title: 'Budget Management',
        description: 'Simple JavaScript app to track personal expenses.',
        tags: ['JavaScript', 'HTML/CSS'],
      },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      {
        title: 'Static Website Deployment',
        description: 'Hosting on AWS S3 and CloudFront with monitoring.',
        tags: ['AWS S3', 'CloudFront', 'Monitoring'],
      },
      {
        title: 'Hybrid Cloud Setup',
        description: 'Implementation of an automated backup system on AWS.',
        tags: ['Microsoft Azure', 'Veeam Backup', 'Virtualization'],
      },
    ],
  },
  {
    category: 'Networking & Mail',
    items: [
      {
        title: 'Roundcube Webmail',
        description: 'Configuration of Roundcube with a mail server on VPS.',
        tags: ['Roundcube', 'Postfix', 'DNS'],
      },
      {
        title: 'Mail Server',
        description: 'Complete setup of a professional email service (SMTP, IMAP).',
        tags: ['Mail Server', 'DNS', 'TLS'],
      },
    ],
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects & Achievements</h2>

        {projects.map((section, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 border-l-4 border-blue-500 pl-4">
              {section.category}
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all"
                >
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-green-400 to-blue-500 text-white 
                        hidden md:inline transform transition-transform duration-300 
                        hover:scale-105 px-4 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
