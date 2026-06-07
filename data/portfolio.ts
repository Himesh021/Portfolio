import { Project, Experience, SkillGroup, StatCard as StatCardType } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "FinSight AI — Multi-Agent Financial Analytics Platform",
    description: "Architected multi-agent AI system with specialized agents for news summarization, sentiment analysis, and investment reasoning. Integrated real-time stock data with interactive Recharts dashboards.",
    techs: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Recharts", "Tailwind CSS"],
    github: "https://github.com/Himesh021/financial-ai-agent",
    live: "#"
  },
  {
    id: 2,
    number: "02",
    title: "car2scrap — Vehicle Scrap Management & CRM Platform",
    description: "Full-stack CRM for vehicle scrap workflow with type-safe form validation, optimistic updates via React Query, deployed on Vercel.",
    techs: ["React 18", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS", "Shadcn/UI", "React Query", "Zod"],
    github: "https://github.com/Himesh021/CarScrap",
    live: "https://car-scrap-seven.vercel.app/"
  },
  {
    id: 3,
    number: "03",
    title: "HireNest — Multi-Tenant Job Portal",
    description: "12+ RESTful API endpoints, JWT auth with HTTP-only cookies, normalized MongoDB schema with indexing, role-gated dashboards.",
    techs: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/Himesh021/HireNest",
    live: "https://hirenest-9bnu.onrender.com/"
  },
  {
    id: 4,
    number: "04",
    title: "CricInsight.AI — AI-Powered Cricket Analytics",
    description: "AI-powered sports analytics, using Machine Learning models for predicting match outcomes, identifying key plays and player performances.",
    techs: ["React.js", "Node.js", "Express.js", "MongoDB", " JWT", "Tailwind CSS"],
    github: "https://github.com/Himesh021/CricInsight",
    live: "https://cric-insight-pi.vercel.app/"
  },
  {
    id: 5,
    number: "05",
    title: "Elementum — Modern Landing Page",
    description: "A fast, modern React-based landing page built with Vite and TypeScript, featuring custom CSS styling, smooth typography, and responsive design.",
    techs: ["React", "TypeScript", "Vite", "CSS"],
    github: "https://github.com/Himesh021/Elementum",
    live: "https://elementum-two-silk.vercel.app/"
  },
  {
    id: 6,
    number: "06",
    title: "Expense Tracker — Financial Management App",
    description: "A responsive expense tracking application with real-time total calculation, category-wise breakdown using Recharts, and live currency conversion via ExchangeRate-API.",
    techs: ["React", "Vite", "JavaScript", "Recharts", "CSS"],
    github: "https://github.com/Himesh021/ExpenseTracker",
    live: "https://expense-tracker-azure-iota.vercel.app"
  }
];

export const experiences: Experience[] = [
  {
    date: "Jan 2026",
    role: "Open Source Contributor",
    org: "ApiDash (FOSS42) & Uramaki Lab — GSoC-affiliated",
    points: [
      "Explored TypeScript & Dart codebases (1000+ stars); submitted PRs across ApiDash & Uramaki Lab, engaging in maintainer code review and iterating on feedback"
    ],
    color: "cyan"
  },
  {
    date: "Jan–Feb 2026",
    role: "Web Development Intern",
    org: "CodSoft",
    points: [
      "Delivered HireNest in 4 weeks; shipped 12+ REST endpoints with JWT + RBAC; managed full lifecycle from schema to deployment"
    ],
    color: "violet"
  },
  {
    date: "2023–2027",
    role: "B.Tech (Undergraduate)",
    org: "GGSIPU Delhi — CGPA 7.77/10",
    points: [
      "DSA, OS, DBMS, Computer Networks, OOP"
    ],
    color: "violet"
  }
];

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    color: "violet",
    skills: ["JavaScript", "React.js", "Next.js 13", "Redux Toolkit", "Tailwind CSS", "TypeScript"]
  },
  {
    category: "Backend",
    color: "cyan",
    skills: ["Node.js", "Express.js", "TypeScript", "REST APIs", "JWT Auth"]
  },
  {
    category: "Database",
    color: "violet",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"]
  },
  {
    category: "DevOps",
    color: "cyan",
    skills: ["Docker", "AWS", "GitHub Actions", "Git", "Postman"]
  },
  {
    category: "AI Competencies",
    color: "violet",
    skills: ["Gemini API", "OpenAI API", "LangChain", "RAG", "Prompt Engineering", "Multi-Agent Systems"]
  }
];

export const stats: StatCardType[] = [
  { value: "300+", label: "LeetCode Problems" },
  { value: "6+", label: "Production Projects" },
  { label: "Open Source Contributor" }
];
