"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", percent: 95, color: "#61DAFB" },
  { name: "TypeScript", percent: 92, color: "#3178C6" },
  { name: "Gemini / OpenAI APIs", percent: 90, color: "#8B5CF6" },
  { name: "RAG & Vector Search", percent: 88, color: "#10B981" },
  { name: "Cloudflare Workers", percent: 85, color: "#F97316" },
  { name: "AI Agent Orchestration", percent: 85, color: "#EC4899" },
  { name: "Streaming & SSE", percent: 88, color: "#06B6D4" },
  { name: "Eval & Observability", percent: 80, color: "#EF4444" },
];

const services = [
  {
    title: "AI-Powered Frontends",
    desc: "Streaming LLM UIs with Vercel AI SDK, real-time token rendering, abort/retry logic, and multi-state conversation UX.",
    icon: "🚀",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "RAG & Search Systems",
    desc: "Full RAG pipelines with query classification, HyDE expansion, cross-encoder reranking, hybrid BM25+Vector search, and embedding caching.",
    icon: "🤖",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "Multi-Agent & Voice AI",
    desc: "Agent orchestration with function calling, tool-use loops, voice pipelines (Whisper STT → LLM → TTS), and multi-modal vision.",
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
              AI-Adjacent React Engineer with <strong>4+ years building production web apps</strong> and a deep focus on AI systems — from streaming chat UIs to RAG pipelines, multi-agent orchestration, voice AI, and eval dashboards. I&apos;ve shipped <strong>13 end-to-end AI projects</strong> deployed on Vercel + Cloudflare Workers. Currently building a <strong>Hospital Information System (HIS)</strong> end-to-end — React/TypeScript frontend and Spring Boot/PostgreSQL backend — for a private clinic.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">13</span>
                <span className="stat-label">AI Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Experience</span>
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
