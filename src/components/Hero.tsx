"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container container-lg">
        <div className="hero-row">
          <div className="hero-content">
            <span className="hero-greeting">Hello, I am</span>
            <h1 className="hero-heading">Do Tuong Van</h1>
            <span className="hero-heading-subtitle">Frontend Developer (ReactJS / NextJS)</span>

            <div className="about-social-list">
              <div className="social-links-row">
                <a href="https://github.com/zxck5xz" target="_blank" rel="noreferrer"><img src="/icons/github.svg" alt="GitHub" /></a>
                <a href="https://linkedin.com/in/dotuongvan" target="_blank" rel="noreferrer"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
              </div>
            </div>

            <div>
              <a href="#projects" className="btn">My Portfolio</a>
              <a href="#contact" className="btn btn-white">Contact Me</a>
            </div>
          </div>

          <div className="hero-img">
            <Image
              src="/images/hero.png"
              alt="Do Tuong Van"
              width={420}
              height={500}
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
