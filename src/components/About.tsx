"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", percent: 95, color: "#61DAFB" },
  { name: "TypeScript", percent: 92, color: "#3178C6" },
  { name: "Tailwind CSS / SCSS", percent: 90, color: "#06B6D4" },
  { name: "JavaScript (ES6+)", percent: 90, color: "#F7DF1E" },
  { name: "Redux / Zustand / React Query", percent: 88, color: "#764ABC" },
  { name: "Micro Frontend (Module Federation)", percent: 80, color: "#FF6B6B" },
  { name: "Node.js / Express BFF", percent: 70, color: "#339933" },
  { name: "Docker / CI/CD / AWS", percent: 65, color: "#FF9900" },
];

const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive, high-performance web applications with React.js, Next.js, and TypeScript — from UI/UX conversion through production deployment.",
    icon: "🚀",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "AI-Adjacent Engineering",
    desc: "Integrating LLM APIs (Google Gemini, OpenAI) with streaming responses, conversation management, and edge computing deployment on Cloudflare Workers.",
    icon: "🤖",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "Performance Optimization",
    desc: "Optimizing Core Web Vitals through code splitting, lazy loading, memoization, and bundle analysis — delivering fast, smooth user experiences.",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="title">About Me</h2>
        </motion.div>

        <div className="about-row">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="about-descr">
              Frontend Developer with <strong>4+ years of React.js/Next.js expertise</strong> and growing AI-adjacent engineering skills. Proven track record of working directly with international remote teams (Japan, Korea) to deliver full-cycle feature development — from UI/UX design conversion through integration testing, UAT, and maintenance.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Countries Worked</span>
              </div>
            </div>
            <div className="about-download-btn">
              <a href="#!" className="btn btn-white">
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about-skills"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {skills.map((s, i) => (
              <motion.div key={s.name} variants={itemVariants}>
                <SkillBar name={s.name} percent={s.percent} color={s.color} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="services-row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((s, i) => (
            <motion.div key={i} variants={itemVariants}>
              <div className="service-card" style={{ background: s.gradient }}>
                <span className="service-icon">{s.icon}</span>
                <h3 className="service-card-title">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({
  name,
  percent,
  color,
  index,
}: {
  name: string;
  percent: number;
  color: string;
  index: number;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="skill">
      <div className="skill-header">
        <span className="skill-title">{name}</span>
        <span className="skill-percent" style={{ color }}>
          {percent}%
        </span>
      </div>
      <div className="skill-bar__progress">
        <div
          className="skill-bar__fill"
          style={{
            width: inView ? `${percent}%` : "0%",
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            transitionDelay: `${index * 0.1}s`,
          }}
        />
      </div>
    </div>
  );
}
