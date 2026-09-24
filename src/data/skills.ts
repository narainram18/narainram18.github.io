import { SkillCategory } from '@/types/skills';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Core languages used for systems engineering, backend services, and algorithms.',
    skills: [
      { name: 'Java', focus: 'Backend, Spring Boot, OOP' },
      { name: 'Python', focus: 'AI/ML, ROS, Scripting' },
      { name: 'C++', focus: 'Systems, Concurrency, Algorithms' },
      { name: 'C', focus: 'Low-Level Systems, Memory' },
      { name: 'JavaScript', focus: 'Full-Stack, Web' },
      { name: 'SQL', focus: 'PostgreSQL, SQL Server, Joins' },
    ],
  },
  {
    title: 'Backend & Systems',
    description: 'Server architecture, RESTful APIs, security models, and concurrency.',
    skills: [
      { name: 'Spring Boot 3', focus: 'Enterprise Services, DI, JPA' },
      { name: 'Spring Security', focus: 'Filter Chains, RBAC' },
      { name: 'REST APIs', focus: 'Contract Design, Status Codes' },
      { name: 'JWT Authentication', focus: 'Stateless Token Security' },
      { name: 'Node.js', focus: 'Basics, Asynchronous I/O' },
      { name: 'SSE Streaming', focus: 'Server-Sent Events for LLM streams' },
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Modern, responsive client architectures and state orchestration.',
    skills: [
      { name: 'React', focus: 'Components, Hooks, Context' },
      { name: 'Vite', focus: 'Bundling, ES Modules' },
      { name: 'TypeScript', focus: 'Strict Typing, Interfaces' },
      { name: 'Tailwind CSS', focus: 'Design Tokens, Responsive Layouts' },
      { name: 'HTML5 & CSS3', focus: 'Semantic Markup, A11y' },
    ],
  },
  {
    title: 'Databases & Storage',
    description: 'Relational data modeling, vector embeddings, and indexing strategies.',
    skills: [
      { name: 'PostgreSQL', focus: 'Relational Schemas, FTS, Indexing' },
      { name: 'Microsoft SQL Server', focus: 'Enterprise Data, Parameterized Queries' },
      { name: 'MySQL', focus: 'Relational Operations' },
      { name: 'Qdrant', focus: 'Dense Vector Search, HNSW, Payload Filtering' },
    ],
  },
  {
    title: 'Systems & Core CS',
    description: 'Foundational computer science principles applied in software design.',
    skills: [
      { name: 'Operating Systems', focus: 'Processes, Threads, Virtual Memory' },
      { name: 'Concurrency & Multithreading', focus: 'Locks, Mutexes, Race Prevention' },
      { name: 'Data Structures & Algorithms', focus: 'Complexity, Trees, Graphs' },
      { name: 'Computer Networks', focus: 'TCP/IP, HTTP/HTTPS, Sockets' },
      { name: 'DBMS', focus: 'ACID Properties, Normalization' },
      { name: 'System Design', focus: 'Scalability, Decoupling, Caching' },
    ],
  },
  {
    title: 'Robotics & AI',
    description: 'Autonomous systems, local model orchestration, and retrieval intelligence.',
    skills: [
      { name: 'ROS', focus: 'Robot Operating System, Nodes, Topics' },
      { name: 'Autonomous Navigation', focus: 'Costmaps, Path Planning, Waypoints' },
      { name: 'Local LLMs (Ollama)', focus: 'Self-Hosted Inference, Embeddings' },
      { name: 'RAG Pipelines', focus: 'Retrieval-Augmented Generation' },
      { name: 'Semantic Search', focus: 'Vector Space, Hybrid Scoring' },
    ],
  },
  {
    title: 'Tooling & Workflow',
    description: 'Development, debugging, testing, and collaboration environments.',
    skills: [
      { name: 'Git & GitHub', focus: 'Version Control, Code Review' },
      { name: 'Maven', focus: 'Java Build Lifecycle, Dependencies' },
      { name: 'Postman', focus: 'API Endpoint Validation & Testing' },
      { name: 'Swagger / OpenAPI', focus: 'API Documentation' },
      { name: 'IntelliJ IDEA & VS Code', focus: 'Primary IDEs' },
      { name: 'Docker', focus: 'Local Containerization' },
    ],
  },
];
