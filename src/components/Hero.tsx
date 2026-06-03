import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="section-wrapper hero-section fade-in-up delay-1">
      <div className="hero-content">
        <h3 className="hero-greeting">Hello, I am</h3>
        <h1 className="hero-title">DO TUONG VAN</h1>
        <h2 className="hero-subtitle">Senior ReactJS<br />Developer.</h2>
        <p className="hero-description">
          Results-driven Senior ReactJS Developer with 5+ years of frontend experience and 3+ years of hands-on ReactJS expertise, specializing in building scalable, high-performance web applications. Deep proficiency in TypeScript, Next.js, Redux, Zustand, and TanStack Query.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/resume.pdf" download="Do_Tuong_Van_Resume.pdf" className="btn-secondary">Download CV</a>
          <a href="mailto:tuongvan92@gmail.com" className="btn-secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-box glass-panel">
          <Image src="/images/hero.png" alt="Hero" fill sizes="(max-width: 768px) 100vw, 50vw" priority={true} style={{ objectFit: 'cover' }} />
        </div>
        <div className="hero-visual-glow"></div>
      </div>
    </section>
  );
}
