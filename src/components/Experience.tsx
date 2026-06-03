import React from 'react';

const experiences = [
  {
    company: 'LIG Technologies Viet Nam',
    role: 'Senior ReactJS Developer',
    date: 'Jul 2021 – Sep 2025',
    bullets: [
      'Designed and led frontend development of enterprise-scale, scalable web applications using React.js, Next.js, TypeScript, and Tailwind CSS, achieving a 30% improvement in page load performance.',
      'Built and maintained a reusable component library that standardized UI across multiple product teams.',
      'Managed complex server-state using TanStack Query (React Query) and Zustand, enabling optimistic updates, live dashboard data.',
      'Integrated RESTful APIs and GraphQL services with backend engineers, ensuring seamless data flow.',
    ],
  },
  {
    company: 'ASOVIEW VIET NAM',
    role: 'Frontend ReactJS Developer',
    date: 'Jul 2020 – Jun 2021',
    bullets: [
      'Architected responsive, localized UIs for a high-traffic B2B platform serving Japanese markets, built with React, TypeScript, and Ant Design.',
      'Established global state management using Redux and a reusable component library.',
      'Integrated complex data flows with REST APIs using React Query.',
    ],
  },
  {
    company: 'IES VietNam Company',
    role: 'Frontend Developer',
    date: 'Jul 2019 – Jul 2020',
    bullets: [
      'Built interactive, responsive web interfaces using HTML5, CSS3, and JavaScript, integrated into LMS platforms.',
      'Optimized frontend asset delivery for tablet and desktop environments, improving load performance.',
    ],
  },
  {
    company: 'VNG Corporation',
    role: 'Software Development Collaborator',
    date: 'Jan 2018 – Jul 2019',
    bullets: [
      'Developed high-performance internal portals using KnockoutJS, improving UI execution efficiency by 20%.',
      'Contributed full-stack capabilities (PHP + web/mobile frontend via Cordova), building scalable UX flows.',
    ],
  },
  {
    company: 'VNG Corporation',
    role: 'IT Helpdesk',
    date: 'Jun 2016 – Jan 2018',
    bullets: [
      'Reduced average user downtime by 30% through implementation of remote diagnostic tools and self-service documentation systems.',
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper experience-section">
      <h2 className="section-title fade-in-up">Experience.</h2>
      
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item fade-in-up delay-${(index % 3) + 1}`}>
            <div className="timeline-marker"></div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="timeline-date">{exp.date}</span>
              </div>
              <h4 className="timeline-company">{exp.company}</h4>
              <ul className="timeline-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
