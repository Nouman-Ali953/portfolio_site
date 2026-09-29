export const me = {
  name: "Nauman Mukhtar",
  role: "Full Stack AI Engineer",
  email: "nauman.mukhtar.cs@gmail.com",
  linkedin: "https://linkedin.com/in/nauman-cs",
  github: "https://github.com/Nouman-Ali953",
  location: "Lahore, Pakistan",
  summary:
    "4+ years building scalable web applications, AI products and cloud-native systems. I own work end to end: architecture, backend, AI integration, infrastructure, deployment and production operations, combining LLMs, RAG and agentic workflows with dependable engineering.",
};
export const jobs = [
  {
    when: "Mar 2024 – Present",
    role: "Full Stack AI Engineer",
    org: "ShopeX",
    points: [
      "Design and deliver AI-powered and full-stack applications across RAG, multi-agent AI and business apps, supporting 5+ specialized AI workflows.",
      "Built a real-time AI surveillance system linking edge devices to a central platform: 17 detection classes, 30-second device health polling.",
      "Cut bug incidence by 30% through root-cause analysis and targeted fixes.",
      "Turned business requirements into technical solutions with cross-functional teams, improving turnaround by 25%.",
    ],
  },
  {
    when: "Jan 2023 – Feb 2024",
    role: "Full Stack Developer",
    org: "Bytibits",
    points: [
      "Enhanced Next.js and NestJS applications, improving scalability and performance by 35%.",
      "Built NestJS APIs, business logic, authentication and database integrations alongside existing systems.",
      "Used SSR and performance optimization to reduce load times by 25%.",
    ],
  },
  {
    when: "Mar 2022 – Jan 2023",
    role: "MERN Stack Developer",
    org: "Codezbit",
    points: [
      "Designed REST APIs with Node.js and Express.js, improving data transfer performance by 25%.",
      "Implemented secure MongoDB CRUD workflows, reducing data-related issues by 30%.",
      "Built responsive React interfaces, improving UI responsiveness by 20%.",
    ],
  },
];
export const projects = [
  {
    t: "RAG & Multi-Agent Platform",
    d: "Intelligent routing to specialized agents for document analysis, image processing, memory, general queries and sizing calculations.",
    tags: ["LangGraph", "RAG", "MCP"],
    big: true,
  },
  {
    t: "AI Surveillance & Worker Safety",
    d: "Edge devices and central services that monitor worker safety, automate video analysis, detect violations and raise real-time alerts.",
    tags: ["OpenCV", "Edge", "Python"],
    big: true,
  },
  {
    t: "Multi-Tenant Omnichannel Platform",
    d: "Centralized services with tenant isolation and omnichannel workflows.",
    tags: ["Multi-tenant", "Microservices"],
  },
  {
    t: "High-Availability PostgreSQL",
    d: "Resilient database architecture and production-oriented operations.",
    tags: ["PostgreSQL", "HA"],
  },
  {
    t: "Smart Glasses (IoT)",
    d: "Computer-vision glasses using OpenCV, Arduino and Bluetooth for workplace security.",
    tags: ["OpenCV", "Arduino"],
  },
];
export const skills: Record<string, string[]> = {
  "Languages & frameworks": [
    "Python",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "Express.js",
    "Next.js",
    "React",
    "FastAPI",
  ],
  "AI & agents": [
    "LLMs",
    "RAG",
    "Multi-agent systems",
    "Agent memory",
    "MCP",
    "A2A",
    "Google ADK",
    "LangGraph",
    "OpenCV",
  ],
  "Backend & data": [
    "Microservices",
    "REST",
    "GraphQL",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Prisma",
  ],
  "Cloud & DevOps": [
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Argo CD",
    "GitOps",
  ],
  Observability: ["Prometheus", "Grafana", "OpenTelemetry"],
};

export const stats = [
  { n: 4, s: "+", l: "years shipping software" },
  { n: 20, s: "+", l: "production solutions" },
  { n: 5, s: "+", l: "specialized AI workflows" },
];
export const slides = [
  {
    src: "/images/rag-architecture.webp",
    fit: "contain",
    tag: "AI architecture",
    title: "Multi-agent RAG platform",
    desc: "Intent recognition routes each message to specialized agents (memory, image, chat, sizing) alongside a PDF pipeline with chunking, embeddings and Elasticsearch retrieval.",
  },
  {
    src: "/images/falconstor-clarity.webp",
    fit: "cover",
    tag: "Multi Agent - RAG System",
    title: "FalconStor Clarity",
    desc: "AI-powered RAG and multi-agent platform developed for Thomas, featuring intelligent query routing and specialized agents for document and image analysis, conversational memory, technical calculations, and business queries. Built with a modular architecture for scalable agent orchestration, tool integration, context-aware retrieval, and multi-turn interactions.",
  },
  {
    src: "/images/neurolearn-home.webp",
    fit: "cover",
    tag: "AI Powered Learning Platform",
    title: "NeuroLearn: IB tutoring",
    desc: "AI-powered IB learning and tutoring platform built with Next.js, NestJS, PostgreSQL, Google Calendar, and Google Meet, enabling students to discover verified tutors, book live sessions, access learning resources and past papers, and track their academic progress.",
  },
  {
    src: "/images/ms-signin.webp",
    fit: "cover",
    tag: "Security platform",
    title: "MS Surveillance",
    desc: "Enterprise surveillance and security platform built with Next.js, NestJS, PostgreSQL, GraphQL, Docker, AWS, and AI-powered video analytics, providing real-time camera monitoring, automated alerts, site management, and role-based access control for organizations.",
  },
  {
    src: "/images/ha-postgres.webp",
    fit: "cover",
    tag: "Infrastructure",
    title: "High Availability PostgreSQL Server",
    desc: "High-Availability PostgreSQL cluster built with Patroni, HAProxy, Docker, and Ubuntu, using replication, automated leader election, and failover to maintain database availability. HAProxy routes client traffic to the active PostgreSQL leader, while Patroni manages cluster health and promotes a replica during node failure.",
  },
  {
    src: "/images/social.webp",
    fit: "cover",
    tag: "Multi Tenant Platform",
    title: "Multi Tenant Omni Channel Platform",
    desc: "Multi-tenant omnichannel engagement platform integrating Yeastar PBX, WebRTC, APIs, Kubernetes, Prometheus, and Grafana for real-time voice, messaging, ticketing, and customer engagement. Built event-driven workflows with webhooks, scalable microservices, monitoring, alerting, and analytics dashboards for reliable, observable operations.",
  },
  {
    src: "/images/teacheasy.webp",
    fit: "cover",
    tag: "AI Learning Platform",
    title: "AI-Powered Learning Platform",
    desc: "AI-powered learning platform that combines LLM-based learning assistance with interactive teacher rooms, enabling students to ask questions, explore concepts, receive personalized guidance, and collaborate with teachers in a unified learning environment.",
  },
];
