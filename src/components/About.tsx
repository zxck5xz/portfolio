"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React / Next.js", percent: 95 },
  { name: "TypeScript", percent: 92 },
  { name: "Tailwind CSS / SCSS", percent: 90 },
  { name: "JavaScript (ES6+)", percent: 90 },
  { name: "Redux / Zustand / React Query", percent: 88 },
  { name: "Micro Frontend (Module Federation)", percent: 80 },
  { name: "Node.js / Express BFF", percent: 70 },
  { name: "Docker / CI/CD / AWS", percent: 65 },
];

const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive, high-performance web applications with React.js, Next.js, and TypeScript — from UI/UX conversion through production deployment.",
    icon: "/icons/service-dev.svg",
  },
  {
    title: "AI-Adjacent Engineering",
    desc: "Integrating LLM APIs (Google Gemini, OpenAI) with streaming responses, conversation management, and edge computing deployment on Cloudflare Workers.",
    icon: "/icons/service-ui.svg",
  },
  {
    title: "Performance Optimization",
    desc: "Optimizing Core Web Vitals through code splitting, lazy loading, memoization, and bundle analysis — delivering fast, smooth user experiences.",
    icon: "/icons/service-content.svg",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="title">About Me</h2>

        <div className="about-row">
          <div className="about-content">
            <p className="about-descr">
              Frontend Developer with <strong>4+ years of React.js/Next.js expertise</strong> and growing AI-adjacent engineering skills. Proven track record of working directly with international remote teams (Japan, Korea) to deliver full-cycle feature development — from UI/UX design conversion through integration testing, UAT, and maintenance. Strong expertise in responsive web design, reusable component libraries, and frontend performance optimization.
            </p>
            <div className="about-download-btn">
              <a href="#!" className="btn btn-white">Download CV</a>
            </div>
          </div>

          <div className="about-skills">
            {skills.map((s) => (
              <SkillBar key={s.name} name={s.name} percent={s.percent} />
            ))}
          </div>
        </div>

        <div className="services-row">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <img className="service-card-img" src={s.icon} alt="" />
              <h3 className="service-card-title">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, percent }: { name: string; percent: number }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="skill">
      <span className="skill-title">{name}</span>
      <span className="skill-percent">{percent}%</span>
      <div className="skill-bar__progress">
        <div
          className="skill-bar__fill"
          style={{ width: inView ? `${percent}%` : "0%" }}
        />
      </div>
    </div>
  );
}
