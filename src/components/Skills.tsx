import React from 'react';

const skillCategories = [
  {
    title: 'Core Stack',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: 'Frontend & UI',
    skills: ['Responsive Design', 'Ant Design', 'Framer Motion', 'Sass / SCSS', 'Storybook', 'Figma', 'Accessibility (WCAG)']
  },
  {
    title: 'State & APIs',
    skills: ['Redux', 'Zustand', 'React Query / SWR', 'RESTful APIs', 'GraphQL', 'NextAuth.js']
  },
  {
    title: 'Architecture & Tools',
    skills: ['Component Design Systems', 'Micro-Frontend', 'Jest', 'Cypress', 'CI/CD', 'Git', 'Webpack']
  },
  {
    title: 'Backend & DevOps',
    skills: ['Golang', 'Node.js', 'PHP', 'Docker', 'Vercel', 'PostgreSQL']
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper skills-section">
      <h2 className="section-title fade-in-up">Skills.</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className={`skill-category glass-panel fade-in-up delay-${(index % 3) + 1}`}>
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
