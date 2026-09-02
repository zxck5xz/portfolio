"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "AI Chat UI",
    category: "Next.js · TypeScript · Gemini API · Cloudflare Workers",
    img: "/images/ai-chat.png",
    href: "https://ai-chat-ui-theta.vercel.app",
    description:
      "Full-stack AI chat application with streaming LLM responses, conversation management, and source visualization.",
    tags: ["Next.js", "TypeScript", "Gemini", "Cloudflare"],
    color: "#667eea",
  },
  {
    title: "Fraud Risk Dashboard",
    category: "React · TypeScript · GraphQL · Node BFF",
    img: "/images/fraud.png",
    href: "https://fraud-dashboard-zck5xz.vercel.app",
    description:
      "End-to-end fraud-monitoring dashboard with rule-based detection engine, real-time alerts, and 30+ Jest tests.",
    tags: ["React", "TypeScript", "GraphQL", "Node.js"],
    color: "#f5576c",
  },
  {
    title: "Agent Platform (Japan)",
    category: "React · Next.js · Redux · Tailwind CSS",
    img: "/images/agent.png",
    href: "#!",
    description:
      "Large-scale B2B platform for Japanese clients with analytics dashboards, booking management, and multi-tenant architecture.",
    tags: ["Next.js", "Redux", "Tailwind", "AWS"],
    color: "#4facfe",
  },
  {
    title: "Kabu & Peace (Japan)",
    category: "Golang · React · Azure DevOps",
    img: "/images/kabup.png",
    href: "#!",
    description:
      "Stock trading platform with REST APIs built with Golang, consumed by React frontends for real-time market data.",
    tags: ["Golang", "React", "Azure", "REST API"],
    color: "#43e97b",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container container-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="projects-title">
            <h2 className="title">Featured Work</h2>
            <p className="projects-subtitle">
              A selection of projects I've built or contributed to
            </p>
          </div>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="project-card"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-card-image">
        <Image
          src={project.img}
          alt={project.title}
          width={510}
          height={300}
          style={{ objectFit: "cover" }}
        />
        <div
          className="project-card-overlay"
          style={{
            background: `linear-gradient(135deg, ${project.color}cc, ${project.color}88)`,
          }}
        />
        <div className="project-card-content">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-desc">{project.description}</p>
          <div className="project-card-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
