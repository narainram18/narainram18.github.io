import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const routes = [
  {
    path: 'about',
    title: 'About — Narain Ram R M',
    description: 'Background, engineering philosophy, technical capability map, credentials, and active laboratory focus of Narain Ram R M, Software Engineer.',
  },
  {
    path: 'projects',
    title: 'Projects — Narain Ram R M',
    description: 'Catalog of software systems, distributed architectures, OS utilities, and robotics platforms built by Narain Ram R M.',
  },
  {
    path: 'projects/enterprise-ai-workspace',
    title: 'Enterprise AI Workspace — Narain Ram R M',
    description: 'A full-stack enterprise platform integrating local LLM execution, hybrid vector-relational retrieval (Reciprocal Rank Fusion), and zero-trust RBAC vector filtering.',
  },
  {
    path: 'projects/system-file-manager',
    title: 'Multithreaded System File Manager — Narain Ram R M',
    description: 'A multithreaded C++ utility performing asynchronous file operations, concurrency synchronization, and low-level directory traversal using operating-system primitives.',
  },
  {
    path: 'projects/autonomous-grocery-navigator',
    title: 'Autonomous Grocery Navigator — Narain Ram R M',
    description: 'An autonomous mobile robot simulation built on ROS and Gazebo utilizing costmap inflation and Dynamic Window Approach (DWA) local trajectory planning.',
  },
  {
    path: 'projects/vessel-api-system',
    title: 'Enterprise Vessel API System — Narain Ram R M',
    description: 'A high-performance enterprise data retrieval service engineered with Spring Boot 3, PostgreSQL, and Spring Security.',
  },
  {
    path: 'engineering',
    title: 'Engineering Notebook — Narain Ram R M',
    description: 'Technical investigations, performance benchmarks, concurrency analysis, and systems experiments by Narain Ram R M.',
  },
  {
    path: 'engineering/multithreaded-concurrency-file-io',
    title: 'Worker Thread Pool Sizing & Resource Synchronization in C++ — Narain Ram R M',
    description: 'Evaluating the performance cliff between thread-per-task models and bounded worker pools during high-volume filesystem traversals in C++.',
  },
  {
    path: 'engineering/rrf-hybrid-search-retrieval',
    title: 'Hybrid Search Mechanics: Dense Embeddings vs Sparse FTS — Narain Ram R M',
    description: 'Reciprocal Rank Fusion (RRF) algorithm analysis for combining disparate retrieval scores across dense vector spaces and keyword indices.',
  },
  {
    path: 'engineering/ros-costmap-inflation-tuning',
    title: 'Costmap Inflation & Path Planning Latency in Mobile Robotics — Narain Ram R M',
    description: 'Analysis of navigation latency and obstacle avoidance clearance under varied costmap inflation radii in ROS.',
  },
  {
    path: 'engineering/sse-streaming-pipeline',
    title: 'Server-Sent Events vs WebSockets for Unidirectional LLM Streams — Narain Ram R M',
    description: 'Comparing protocol overhead, reconnect mechanics, and client buffer management between SSE and WebSockets for generative AI token streaming.',
  },
  {
    path: 'engineering/tcp-congestion-socket-buffer',
    title: 'TCP Socket Buffer Sizing & Congestion Window Scaling — Narain Ram R M',
    description: 'Benchmarking the impact of TCP receive and send buffer sizing on stream throughput under synthetic latency and packet jitter.',
  },
  {
    path: 'engineering/mmap-vs-buffered-io',
    title: 'Memory-Mapped Files (mmap) vs Buffered POSIX I/O — Narain Ram R M',
    description: 'Comparative latency and page fault benchmark comparing mmap against read/write system calls for high-throughput binary logs.',
  },
];

console.log('Generating static HTML entrypoints for direct GitHub Pages routing...');

for (const route of routes) {
  const targetDir = path.join(distDir, route.path);
  fs.mkdirSync(targetDir, { recursive: true });

  let pageHtml = baseHtml;

  // Replace Title
  pageHtml = pageHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${route.title}</title>`
  );

  // Replace Description
  pageHtml = pageHtml.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace OG / Twitter Titles & Descriptions
  pageHtml = pageHtml.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${route.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${route.description}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  // Replace Canonical URL
  const canonicalUrl = `https://narainram18.github.io/${route.path}`;
  pageHtml = pageHtml.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, pageHtml, 'utf8');
  console.log(`  ✓ Generated /${route.path}/index.html`);
}

console.log('Static route entrypoints generated successfully.');
