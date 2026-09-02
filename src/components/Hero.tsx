"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-gradient" />
      <div className="container container-lg">
        <div className="hero-row">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="hero-greeting"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hello, I am
            </motion.span>

            <motion.h1
              className="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Do Tuong Van
            </motion.h1>

            <motion.div
              className="hero-subtitle-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <span className="hero-heading-subtitle">
                Frontend Developer
              </span>
              <span className="hero-tagline">|</span>
              <TypingText />
            </motion.div>

            <motion.div
              className="hero-tech-stack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {["React", "Next.js", "TypeScript", "Tailwind", "Redux"].map(
                (tech, i) => (
                  <span key={tech} className="tech-badge" style={{ animationDelay: `${i * 0.1}s` }}>
                    {tech}
                  </span>
                )
              )}
            </motion.div>

            <motion.div
              className="hero-social-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className="social-links-row">
                <a href="https://github.com/zxck5xz" target="_blank" rel="noreferrer">
                  <img src="/icons/github.svg" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/dotuongvan" target="_blank" rel="noreferrer">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <a href="#projects" className="btn">
                View Work
              </a>
              <a href="#contact" className="btn btn-white">
                Let's Talk
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-img"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-img-wrapper">
              <Image
                src="/images/hero.png"
                alt="Do Tuong Van"
                width={420}
                height={500}
                priority
                style={{ objectFit: "cover" }}
              />
              <div className="hero-img-blob" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TypingText() {
  const roles = [
    "React / Next.js",
    "TypeScript",
    "UI/UX Development",
    "AI-Adjacent Engineering",
  ];

  return (
    <span className="typing-text">
      {roles.map((role, i) => (
        <motion.span
          key={role}
          className="typing-role"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.0 + i * 2,
            duration: 0.5,
          }}
        >
          {role}
        </motion.span>
      ))}
    </span>
  );
}
