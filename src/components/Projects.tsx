import React from 'react';

const projects = [
  {
    title: 'Agent Platform',
    role: 'Senior ReactJS Developer | Jul 2020 – Mar 2025',
    description: 'Led end-to-end frontend architecture of agent.asoview.com, a large-scale B2B platform. Built a scalable reusable component library using React, Redux, and Ant Design. Engineered complex filterable data tables with React Query.',
    tech: ['React', 'Redux', 'Ant Design', 'React Query']
  },
  {
    title: 'Kabu&Peace (Japan)',
    role: 'Golang Backend + React Integration | Aug 2024 – Jun 2025',
    description: 'Built high-throughput REST APIs using Golang consumed by React frontends — providing full-stack insight into API integration and frontend-backend collaboration.',
    tech: ['Golang', 'React', 'REST APIs']
  },
  {
    title: 'Poly Educations Mobile Apps',
    role: 'Frontend Developer | Jul 2019 – Jul 2020',
    description: 'Built cross-platform apps with real-time event tracking, secure payment gateway integration, and push notification pipelines.',
    tech: ['React Native', 'Real-time', 'Mobile']
  },
  {
    title: 'ITportal (VNG)',
    role: 'Full-stack Contributor | Jan 2018 – Jul 2019',
    description: 'Delivered web (PHP/KnockoutJS) and mobile (Cordova) versions of an internal IT portal, gaining experience in scalable internal tooling and enterprise-grade UX flows.',
    tech: ['PHP', 'KnockoutJS', 'Cordova']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper projects-section">
      <h2 className="section-title fade-in-up">Key Projects.</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card glass-panel fade-in-up delay-${(index % 3) + 1}`}>
            <div className="project-header">
               <h3>{project.title}</h3>
               <span className="project-role">{project.role}</span>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
