"use client";

import Image from "next/image";

const projects = [
  {
    title: "AI Chat UI",
    category: "Next.js · TypeScript · Gemini API · Cloudflare Workers",
    img: "/images/ai-chat.png",
    href: "https://ai-chat-ui-theta.vercel.app",
    description: "Full-stack AI chat with streaming LLM responses, conversation management, and source visualization.",
  },
  {
    title: "Fraud Risk Dashboard",
    category: "React · TypeScript · GraphQL · Node BFF",
    img: "/images/fraud.png",
    href: "https://fraud-dashboard-zck5xz.vercel.app",
    description: "End-to-end fraud-monitoring dashboard with rule-based detection engine and 30+ Jest tests.",
  },
  {
    title: "Agent Platform (Japan)",
    category: "React · Next.js · Redux · Tailwind CSS",
    img: "/images/agent.png",
    href: "#!",
    description: "Large-scale B2B platform for Japanese clients with analytics dashboards and booking management.",
  },
  {
    title: "Kabu & Peace (Japan)",
    category: "Golang · React · Azure DevOps",
    img: "/images/kabup.png",
    href: "#!",
    description: "REST APIs built with Golang consumed by React frontends for stock trading platform.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container container-lg">
        <div className="projects-title">
          <h2 className="title">Works</h2>
        </div>

        <div className="projects-row">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-box"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <a href={project.href} target="_blank" rel="noreferrer">
                <Image
                  className="project-img"
                  src={project.img}
                  alt={project.title}
                  width={510}
                  height={380}
                />
                <div className="project-mask">
                  <div className="project-caption">
                    <h5 className="white">{project.title}</h5>
                    <p className="white">{project.category}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
