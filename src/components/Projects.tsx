"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "client" | "chat" | "rag" | "agents" | "eval" | "voice" | "multimodal" | "search";

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "client", label: "Client Work" },
  { key: "chat", label: "Chat & UI" },
  { key: "rag", label: "RAG & Search" },
  { key: "agents", label: "Agents" },
  { key: "eval", label: "Eval & Safety" },
  { key: "voice", label: "Voice AI" },
  { key: "multimodal", label: "Multi-Modal" },
  { key: "search", label: "Search Engine" },
];

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  href: string | null;
  tags: string[];
  color: string;
  icon: string;
  phase: string;
};

const projects: Project[] = [
  {
    id: 14,
    title: "HIS — Hospital Information System",
    category: "client",
    description: "Outpatient clinic platform for Nguyen Phuong Clinic, built fullstack: reception with BHYT/BHXH lookup, examination with ICD-10, lab & imaging result approval and printing, realtime LCD patient calling (SSE + WebSocket + TTS), staff management, RBAC.",
    href: null,
    tags: ["React 18", "TypeScript", "Ant Design", "Spring Boot", "PostgreSQL", "SSE / WebSocket"],
    color: "#0EA5E9",
    icon: "🏥",
    phase: "Sep 2026 – Now",
  },
  {
    id: 1,
    title: "AI Chat UI",
    category: "chat",
    description: "Streaming chat with Gemini, conversation CRUD + persistence, sources panel, edit/regenerate/stop, responsive mobile, keyboard shortcuts.",
    href: "https://ai-chat-ui-theta.vercel.app",
    tags: ["Next.js", "Gemini", "SSE", "Cloudflare"],
    color: "#667eea",
    icon: "💬",
    phase: "Phase 1",
  },
  {
    id: 2,
    title: "RAG Q&A Visualization",
    category: "rag",
    description: "Embed query → retrieve top-k chunks (Qdrant + Gemini embedding) → stream answer with sources panel, expandable chunks + scores, document upload.",
    href: "https://ai-chat-ui-theta.vercel.app",
    tags: ["Qdrant", "RAG", "Embeddings", "Streaming"],
    color: "#10B981",
    icon: "📚",
    phase: "Phase 2",
  },
  {
    id: 3,
    title: "Multi-Agent Orchestrator",
    category: "agents",
    description: "Planner → Designer → Coder → Reviewer agent pipeline with progress bar, timeline log, and human-in-the-loop approval.",
    href: "https://ai-chat-ui-theta.vercel.app/orchestrator",
    tags: ["Gemini", "Multi-Agent", "SSE", "HITL"],
    color: "#8B5CF6",
    icon: "🔄",
    phase: "Phase 2",
  },
  {
    id: 4,
    title: "Eval Dashboard & Safety Gates",
    category: "eval",
    description: "Dashboard with eval metrics over time, confidence scores, failure cases, model/prompt filters, safety gates to block deploys.",
    href: "https://ai-chat-ui-theta.vercel.app/eval",
    tags: ["Metrics", "Safety Gates", "Deploy Approvals"],
    color: "#EF4444",
    icon: "📊",
    phase: "Phase 3",
  },
  {
    id: 5,
    title: "AI Code Review Bot",
    category: "agents",
    description: "GitHub webhook → HMAC-SHA256 verification → fetch PR diff → Gemini structured output → post inline comments on PRs.",
    href: "https://ai-chat-ui-theta.vercel.app/code-review",
    tags: ["GitHub API", "HMAC", "Gemini", "Webhooks"],
    color: "#F97316",
    icon: "🔍",
    phase: "Phase 4",
  },
  {
    id: 6,
    title: "Custom RAG + Hybrid Search",
    category: "rag",
    description: "BM25 + Vector search with RRF fusion, Cohere reranker, 4 chunking strategies, A/B testing, embedding cache (LRU + TTL).",
    href: "https://ai-chat-ui-theta.vercel.app/hybrid-search",
    tags: ["BM25", "Cohere", "Reranking", "A/B Test"],
    color: "#06B6D4",
    icon: "🔗",
    phase: "Phase 4",
  },
  {
    id: 7,
    title: "AI Agent with Tool Use",
    category: "agents",
    description: "Gemini function calling + ReAct reasoning loop with web search, HTTP, calculator tools. Multi-step reasoning with SSE streaming.",
    href: "https://ai-chat-ui-theta.vercel.app/tool-agent",
    tags: ["Function Calling", "ReAct", "Tool Loop", "Jina"],
    color: "#EC4899",
    icon: "🛠️",
    phase: "Phase 4",
  },
  {
    id: 8,
    title: "AI Observability Platform",
    category: "eval",
    description: "Trace viewer, cost tracker (per-model), latency profiler (p50/p95/p99), token usage dashboard, anomaly + drift detection.",
    href: "https://ai-chat-ui-theta.vercel.app/observability",
    tags: ["Tracing", "Cost Tracking", "Latency", "Alerts"],
    color: "#14B8A6",
    icon: "👁️",
    phase: "Phase 5",
  },
  {
    id: 9,
    title: "Fine-tuning Pipeline",
    category: "eval",
    description: "Dataset curation, LoRA/QLoRA training, model eval (base vs fine-tuned), A/B testing, loss curves, CI/CD auto-retrain.",
    href: "https://ai-chat-ui-theta.vercel.app/fine-tuning",
    tags: ["LoRA", "PEFT", "Model Eval", "A/B Test"],
    color: "#A855F7",
    icon: "🧪",
    phase: "Phase 5",
  },
  {
    id: 10,
    title: "Voice AI Agent",
    category: "voice",
    description: "Whisper STT → LLM → ElevenLabs TTS with WebSocket real-time streaming, push-to-talk, waveform visualization, interruption handling.",
    href: "https://ai-chat-ui-theta.vercel.app/voice-agent",
    tags: ["Whisper", "ElevenLabs", "WebSocket", "TTS"],
    color: "#F59E0B",
    icon: "🎙️",
    phase: "Phase 5",
  },
  {
    id: 11,
    title: "Multi-Modal AI",
    category: "multimodal",
    description: "Vision + text, document understanding, image analysis, cross-modal RAG, OCR text replacement with Gemini image generation.",
    href: "https://ai-chat-ui-theta.vercel.app/multi-modal",
    tags: ["Gemini Vision", "OCR", "Image Gen", "Cross-Modal"],
    color: "#D946EF",
    icon: "🖼️",
    phase: "Phase 5",
  },
  {
    id: 12,
    title: "AI-Powered Search Engine",
    category: "search",
    description: "Query classification, HyDE/decomposition/step-back expansion, conversational rewriting, search analytics (CTR, MRR).",
    href: "https://ai-chat-ui-theta.vercel.app/search",
    tags: ["Query Routing", "HyDE", "Analytics", "CTR"],
    color: "#3B82F6",
    icon: "🔎",
    phase: "Phase 6",
  },
  {
    id: 13,
    title: "MCP Server & Client",
    category: "agents",
    description: "Expose tools via Model Context Protocol, consume external MCP servers (GitHub, filesystem), tool usage dashboard.",
    href: "https://ai-chat-ui-theta.vercel.app/mcp",
    tags: ["MCP", "Tool Protocol", "Integration"],
    color: "#64748B",
    icon: "🔌",
    phase: "Phase 6",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
};

export default function Projects() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all"
    ? projects
    : projects.filter((p) => p.category === active);

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
            <h2 className="title">Projects</h2>
            <p className="projects-subtitle">
              Production client work plus 13 AI systems — from a hospital information system to streaming chat and eval dashboards
            </p>
          </div>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${active === cat.key ? "active" : ""}`}
              onClick={() => setActive(cat.key)}
            >
              {cat.label}
              {cat.key !== "all" && (
                <span className="filter-count">
                  {projects.filter((p) => p.category === cat.key).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                exit="exit"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="projects-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="summary-card">
            <div className="summary-icon">🏗️</div>
            <div className="summary-text">
              <span className="summary-label">Architecture</span>
              <span className="summary-value">Next.js + Hono + Cloudflare Workers + D1</span>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🤖</div>
            <div className="summary-text">
              <span className="summary-label">AI Stack</span>
              <span className="summary-value">Gemini + OpenAI + Cohere + Qdrant</span>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🚀</div>
            <div className="summary-text">
              <span className="summary-label">Deployed</span>
              <span className="summary-value">Vercel (FE) + Cloudflare Workers (BE)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      <div className="project-card-header" style={{ background: `linear-gradient(135deg, ${project.color}cc, ${project.color}88)` }}>
        <span className="project-icon">{project.icon}</span>
        <span className="project-phase">{project.phase}</span>
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-card-footer">
          {project.href ? (
            <span className="project-live-link">
              Live Demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </span>
          ) : (
            <span className="project-private-note">Client project · Private repo</span>
          )}
        </div>
      </div>
    </>
  );

  if (!project.href) {
    return (
      <motion.div
        className="project-card project-card--static"
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        {body}
      </motion.div>
    );
  }

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="project-card"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {body}
    </motion.a>
  );
}
