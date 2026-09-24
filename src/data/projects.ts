import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    slug: 'enterprise-ai-workspace',
    title: 'Enterprise AI Workspace',
    subtitle: 'Local-first RAG pipeline & multi-tier conversational intelligence platform',
    category: 'AI & Systems',
    year: '2024',
    featured: true,
    status: 'Complete',
    summary:
      'A full-stack enterprise platform integrating local LLM execution, hybrid vector-relational retrieval (Reciprocal Rank Fusion), and zero-trust RBAC vector filtering to deliver grounded, privacy-preserving document intelligence.',
    technologies: [
      'Java 21',
      'Spring Boot 3',
      'PostgreSQL',
      'Qdrant',
      'React',
      'Ollama',
      'JWT',
      'Spring Security',
      'SSE',
      'Docker',
    ],
    githubUrl: 'https://github.com/narainram18',
    overview:
      'Enterprise AI Workspace is an end-to-end platform built with Java 21, Spring Boot 3, and React. It solves the enterprise challenge of deploying generative AI without leaking proprietary documents to external cloud APIs. By pairing local LLMs (via Ollama) with a hybrid retrieval pipeline combining Qdrant dense vector search and PostgreSQL full-text search (FTS), the system provides verifiable document question answering with strict role-based access control.',
    problem:
      'Corporate environments need intelligent search and document synthesis but face two critical barriers: privacy risks when streaming internal documents to external cloud APIs, and retrieval failures when using vector-only semantic search on technical codes, serial numbers, and exact acronyms. Furthermore, document access must be governed by strict multi-tenant authorization down to the individual vector chunk.',
    architecture: {
      overview:
        'A decoupled multi-tier architecture isolating client interactions, API orchestration, hybrid retrieval, and local inference execution.',
      layers: [
        {
          layer: 'Client Layer',
          title: 'React 18 / TypeScript SPA',
          components: ['EventSource SSE Stream Handler', 'Conversation State Cache', 'Context Pruning Controller'],
          description: 'Renders streaming AI responses in real time with abort signals, response cancellation, and conversation persistence.',
        },
        {
          layer: 'Gateway & Security',
          title: 'Spring Boot 3 REST API',
          components: ['Spring Security', 'JWT Filter Chain', 'Hierarchical RBAC (USER / ADMIN / SUPER_ADMIN)'],
          description: 'Validates claims, terminates client requests, and enforces zero-trust token extraction for downstream services.',
        },
        {
          layer: 'Service Layer',
          title: 'Orchestration & Hybrid Retrieval Engine',
          components: ['RRF Reranker', 'Document Ingestion Pipeline', 'SSRF-Hardened Web Agent', 'Metrics Interceptor'],
          description: 'Executes concurrent dense and sparse queries, synthesizes context, and enforces document versioning.',
        },
        {
          layer: 'Data & Engine Layer',
          title: 'PostgreSQL + Qdrant + Ollama',
          components: ['PostgreSQL (FTS + Metadata)', 'Qdrant (Vector Collection)', 'Ollama (Local Llama 3 / Embeddings)'],
          description: 'Dynamic ConditionFactory vector filtering, relational document state management, and high-throughput local inference.',
        },
      ],
      dataFlow: [
        'Client issues query with JWT bearer token via SSE endpoint.',
        'Spring Security validates authentication and extracts tenant / role claims.',
        'Hybrid Retrieval queries Qdrant for semantic chunks and PostgreSQL for BM25-equivalent keyword hits.',
        'Reciprocal Rank Fusion (RRF) merges candidate lists and applies vector-level RBAC filters.',
        'Synthesized prompt is dispatched to local Ollama inference service.',
        'Token stream is emitted over Server-Sent Events with heartbeat monitoring.',
      ],
      asciiDiagram: `[ Client: React + SSE ]
           │
     (HTTP/SSE with JWT)
           ▼
[ API Gateway: Spring Boot 3 ]
   ├── Authentication & RBAC Filter
   └── Ingestion & Search Orchestrator
           │
     ┌─────┴───────────────┐
     ▼                     ▼
[ PostgreSQL ]        [ Qdrant Vector DB ]
 (FTS & State)        (Dense Embeddings)
     └─────┬───────────────┘
           ▼
   [ RRF Reranker ]
           │
           ▼
[ Local LLM: Ollama ] (Llama 3 + mxbai-embed)`,
    },
    implementation: [
      {
        title: 'Authentication & Stateless Token Lifecycle',
        description:
          'Constructed a robust security perimeter using Spring Security 6, custom JWT authentication filters, and refresh token rotation stored with explicit revocation flags in PostgreSQL.',
        highlights: [
          'Hierarchical role authorization: USER, ADMIN, and SUPER_ADMIN',
          'Database-persisted refresh token rotation with expiration cleanup',
          'Stateless request verification with zero session state overhead',
        ],
      },
      {
        title: 'Hybrid Retrieval via Reciprocal Rank Fusion (RRF)',
        description:
          'Combines dense semantic vector search from Qdrant with sparse keyword matching from PostgreSQL Full-Text Search. Computes reciprocal rank scores to ensure both exact keyword hits (part numbers, acronyms) and conceptual context are weighted accurately.',
        highlights: [
          'Dense + Sparse scoring eliminates pure vector blindspots on technical terms',
          'Reciprocal Rank Fusion algorithm eliminates manual score normalization hurdles',
          'Configurable k-parameter for balance tuning across diverse document corpora',
        ],
      },
      {
        title: 'Zero-Trust RBAC Vector Filtering',
        description:
          'Implements security at the vector storage tier. Instead of retrieving vectors and filtering in memory, dynamic ConditionFactory filters compile user permissions into the native Qdrant query payload.',
        highlights: [
          'Prevents unauthorized vector leakage at the database engine level',
          'Supports PUBLIC, PRIVATE, and hierarchical workspace boundaries',
          'Automated garbage collection of orphaned vector points on document update',
        ],
      },
      {
        title: 'Real-time SSE Streaming & Resilient Conversation Engine',
        description:
          'Developed a 7-operation persistent conversation engine supporting creation, pagination, title auto-generation, message storage, context truncation, and stale-response protection with client-side abort controls.',
        highlights: [
          'Server-Sent Events for lightweight unidirectional token streaming',
          'Automatic stream abort and resource cleanup on client disconnect',
          'TokenBudgetManager pruning historical turns to fit LLM context limits',
        ],
      },
      {
        title: 'SSRF-Hardened Autonomous Research Agent',
        description:
          'Integrated an autonomous enterprise research engine capable of retrieving live external context while enforcing strict SSRF defenses.',
        highlights: [
          'Disabled redirect tracing to prevent traversal into internal VPC subnets',
          'Strict IP filtering blocking loopback (127.0.0.1) and cloud metadata services',
          'Synthesizes external web information with internal knowledge bases',
        ],
      },
    ],
    technicalDecisions: [
      {
        topic: 'Local LLMs (Ollama) vs External Cloud APIs',
        problem: 'Enterprise privacy compliance strictly forbids transmitting internal documents over public internet endpoints.',
        optionsConsidered: ['OpenAI / Anthropic Cloud APIs', 'Local Self-Hosted LLMs via Ollama', 'Self-hosted vLLM on cloud GPU instances'],
        chosenOption: 'Local Ollama Instance with Llama 3 & mxbai-embed-large',
        rationale: 'Guarantees complete data sovereignty, zero API call costs, offline operational capability, and predictable latencies.',
        tradeoffs: 'Constrained by local hardware capacity, requiring quantized models and memory management.',
      },
      {
        topic: 'Hybrid Search (RRF) vs Dense Vector Only',
        problem: 'Semantic embeddings alone frequently fail on exact alphanumeric codes, file IDs, and domain-specific abbreviations.',
        optionsConsidered: ['Dense vector search only', 'BM25 keyword search only', 'Hybrid search via Reciprocal Rank Fusion'],
        chosenOption: 'Hybrid Reciprocal Rank Fusion combining Qdrant + PostgreSQL FTS',
        rationale: 'RRF provides robust rank fusion without requiring calibrated score normalization between disparate scoring functions.',
        tradeoffs: 'Requires dual query execution and indexing overhead on both PostgreSQL and Qdrant.',
      },
      {
        topic: 'Streaming Protocol: Server-Sent Events vs WebSockets',
        problem: 'Token-by-token LLM output requires real-time streaming without excessive protocol overhead.',
        optionsConsidered: ['WebSockets', 'Server-Sent Events (SSE)', 'HTTP Long-Polling'],
        chosenOption: 'Server-Sent Events (SSE)',
        rationale: 'LLM streaming is inherently unidirectional (server to client). SSE runs cleanly over standard HTTP/1.1 and HTTP/2, traverses enterprise proxies, and natively supports automatic reconnection.',
        tradeoffs: 'Unidirectional only; client requests (e.g. cancellation) require separate HTTP calls.',
      },
      {
        topic: 'Vector DB Selection: Qdrant vs Pgvector',
        problem: 'Selecting vector store that provides high-dimensional vector search alongside native payload filtering for RBAC.',
        optionsConsidered: ['PostgreSQL pgvector extension', 'Milvus', 'Qdrant'],
        chosenOption: 'Qdrant (via gRPC & REST)',
        rationale: 'Qdrant offers native HNSW graph indexing with dynamic payload filter compilation (ConditionFactory) without competing with relational OLTP locks in PostgreSQL.',
        tradeoffs: 'Requires operating a dedicated vector database service alongside PostgreSQL.',
      },
    ],
    challenges: [
      {
        challenge: 'Preventing Server-Side Request Forgery (SSRF) in automated web research agent',
        resolution:
          'Implemented hardened HTTP client interceptors with disabled redirect tracing, restricted IP schemes (blocking loopback 127.0.0.1, link-local, and AWS metadata addresses), and strict domain allowlists.',
      },
      {
        challenge: 'Ensuring transactional consistency between PostgreSQL metadata and Qdrant vectors',
        resolution:
          'Constructed a two-phase transactional outbox pattern where document chunk states are staged in PostgreSQL before asynchronous vector sync, with automated reconciliation scripts for failed indexing attempts.',
      },
      {
        challenge: 'Managing token budget limits during long multi-turn conversations',
        resolution:
          'Implemented TokenBudgetManager to dynamically calculate rolling turn token counts, pruning oldest non-system turns while retaining system instructions and retrieved context.',
      },
    ],
    results: [
      'Engineered a complete local-first enterprise platform eliminating recurring third-party API costs',
      'Achieved robust hybrid search accuracy across exact code references and conceptual language queries',
      'Enforced zero-trust vector-level role-based isolation verified across 160+ unit and integration tests',
      'Delivered seamless real-time SSE streaming with client cancellation and stale-response protection',
    ],
    screenshots: [
      {
        url: '/projects/enterprise-ai-workspace/dashboard-overview.png',
        caption: 'Enterprise AI Workspace — Conversational interface with streaming response state and document workspace selector',
        alt: 'Enterprise AI Workspace conversational UI interface and document selector',
      },
    ],
    lessonsLearned: [
      'Hybrid retrieval is non-negotiable for real enterprise documentation where exact strings matter as much as semantics.',
      'Vector databases must participate in application security boundaries, not act as unauthenticated data pools.',
      'Building with clean architectural separation allows LLM backends to be swapped with zero frontend alterations.',
      'Unidirectional streaming protocols like SSE significantly reduce connection complexity compared to WebSockets.',
    ],
  },
  {
    slug: 'system-file-manager',
    title: 'Multithreaded System File Manager',
    subtitle: 'Low-level concurrent filesystem utility with thread synchronization',
    category: 'Systems',
    year: '2024',
    featured: false,
    status: 'Complete',
    summary:
      'A multithreaded C++ utility performing asynchronous file operations, concurrency synchronization, and low-level directory traversal using operating-system primitives.',
    technologies: ['C++', 'Multithreading', 'Concurrency', 'Operating Systems', 'POSIX / Win32 APIs'],
    githubUrl: 'https://github.com/narainram18',
    overview:
      'Developed a high-performance system utility in C++ to explore operating-system mechanics, multithreaded task scheduling, and concurrent file management. Focuses on safe resource sharing, lock granularity, and non-blocking disk I/O coordination.',
    problem:
      'Standard single-threaded file operations cause UI blocking and underutilize modern multicore processor architectures during bulk directory operations.',
    architecture: {
      overview: 'Thread-pool driven task scheduler coordinating worker threads over decoupled disk queues.',
      layers: [
        {
          layer: 'Interface Layer',
          title: 'Command Line / Terminal Controller',
          components: ['Argument Parser', 'Progress Reporter', 'Signal Handler'],
          description: 'Parses file operations and coordinates graceful task cancellation.',
        },
        {
          layer: 'Concurrency Layer',
          title: 'Worker Thread Pool',
          components: ['Task Queue', 'Mutex / Lock Guards', 'Condition Variables'],
          description: 'Schedules file scan, copy, and hashing tasks across concurrent threads.',
        },
        {
          layer: 'Filesystem Engine',
          title: 'OS System Call Wrapper',
          components: ['File Descriptor Pool', 'Directory Iterator', 'Error Handler'],
          description: 'Executes atomic filesystem operations and manages buffer caching.',
        },
      ],
      dataFlow: [
        'Main thread enqueues target directory operations into thread-safe priority queue.',
        'Worker threads dequeue tasks and acquire non-blocking file handles.',
        'Data chunks are streamed through memory-mapped or buffered buffers.',
        'Condition variables notify parent of completion and error states.',
      ],
    },
    implementation: [
      {
        title: 'Thread-Safe Task Queue & Worker Synchronization',
        description: 'Implemented a thread pool with condition variables to minimize lock contention during high-frequency file checks.',
        highlights: ['Fine-grained mutex locking', 'Zero busy-waiting thread coordination', 'Graceful shutdown on interrupt'],
      },
    ],
    technicalDecisions: [
      {
        topic: 'Thread Pool vs Thread-per-File Model',
        problem: 'Spawning a thread per file leads to thread-exhaustion and severe context switching penalties.',
        optionsConsidered: ['Thread-per-task', 'Fixed worker thread pool', 'Async futures'],
        chosenOption: 'Fixed Worker Thread Pool (matching CPU core count)',
        rationale: 'Prevents thread explosion and maintains optimal cache locality under thousands of files.',
        tradeoffs: 'Requires explicit queue sizing and backlog management.',
      },
    ],
    challenges: [
      {
        challenge: 'Race conditions during simultaneous directory scans and file mutations',
        resolution: 'Implemented read-write locks allowing concurrent readers while serializing write mutations.',
      },
    ],
    results: [
      'Demonstrated linear speedup across multi-core systems compared to single-threaded sequential scans',
      'Clean memory-safe execution with zero memory leaks verified with sanitizers',
    ],
    lessonsLearned: [
      'Disk I/O and CPU concurrency require careful balance; more threads do not necessarily equal faster disk reads.',
    ],
  },
  {
    slug: 'autonomous-grocery-navigator',
    title: 'Autonomous Grocery Navigator',
    subtitle: 'ROS-based autonomous indoor navigation & robotic item retrieval',
    category: 'Robotics',
    year: '2024',
    featured: false,
    status: 'Complete',
    summary:
      'A ROS-based autonomous navigation solution modeling indoor mapping, waypoint trajectory planning, and automated item retrieval for robotic platforms.',
    technologies: ['Python', 'ROS', 'Autonomous Navigation', 'Robotics', 'Path Planning'],
    githubUrl: 'https://github.com/narainram18',
    overview:
      'Designed a robotics navigation pipeline utilizing the Robot Operating System (ROS) to model autonomous indoor mobile robot traversal, obstacle avoidance, and target waypoint navigation in constrained environments.',
    problem:
      'Indoor automated logistics require dynamic obstacle avoidance, consistent localization, and predictable waypoint navigation without reliance on external GPS signals.',
    architecture: {
      overview: 'Node-based publish/subscribe architecture coordinating sensor input, costmaps, and motor commands.',
      layers: [
        {
          layer: 'Perception Layer',
          title: 'Sensor Input & Odometry',
          components: ['Laser Scan Topic', 'Wheel Odometry', 'IMU Integration'],
          description: 'Captures spatial distance measurements and publishes odometric state updates.',
        },
        {
          layer: 'Navigation & Planning',
          title: 'ROS Navigation Stack',
          components: ['Global Costmap', 'Local Costmap', 'DWA Local Planner'],
          description: 'Calculates collision-free trajectories around dynamic obstacles.',
        },
        {
          layer: 'Actuation Layer',
          title: 'Motor Controller Interface',
          components: ['cmd_vel Publisher', 'Velocity Smoother', 'Feedback Loop'],
          description: 'Translates velocity vectors into hardware actuation commands.',
        },
      ],
      dataFlow: [
        'Sensors publish range scans to ROS topic bus.',
        'Costmap nodes inflate detected obstacles in real time.',
        'Global planner calculates optimal trajectory from current pose to goal waypoint.',
        'Local planner issues velocity commands to /cmd_vel while avoiding dynamic obstacles.',
      ],
    },
    implementation: [
      {
        title: 'Dynamic Obstacle Avoidance & Path Cost Optimization',
        description: 'Configured local costmaps with dynamic inflation layers to preserve safety margins around transient obstacles.',
        highlights: ['Real-time 2D costmap inflation', 'Waypoint queue with recovery behaviors', 'Kinematic safety constraints'],
      },
    ],
    technicalDecisions: [
      {
        topic: 'Trajectory Planner Selection',
        problem: 'Navigating narrow aisles requires smooth rotation without sharp jerky movements.',
        optionsConsidered: ['Trajectory Rollout', 'Dynamic Window Approach (DWA)'],
        chosenOption: 'Dynamic Window Approach (DWA)',
        rationale: 'DWA efficiently samples velocity space and handles acceleration limits for differential drive kinematics.',
        tradeoffs: 'Sensitive to local minima in complex dead-end layouts.',
      },
    ],
    challenges: [
      {
        challenge: 'Sensor noise causing false obstacle inflation in narrow corridors',
        resolution: 'Tuned raytrace and obstacle clearance ranges alongside sensor filtering thresholds.',
      },
    ],
    results: [
      'Reliably navigated simulated retail aisle environments with autonomous waypoint sequencing',
      'Modeled collision-free trajectory execution under dynamic pedestrian interference',
    ],
    lessonsLearned: [
      'Decoupling global strategic path planning from local reactive obstacle avoidance is essential for robotic autonomy.',
    ],
  },
  {
    slug: 'enterprise-vessel-api',
    title: 'Enterprise Vessel Information & API System',
    subtitle: 'High-throughput relational service for maritime vessel operations',
    category: 'Distributed Systems',
    year: '2024',
    featured: false,
    status: 'Complete',
    summary:
      'Enterprise API functionality for retrieving and processing vessel movement and operational information stored across related relational database tables.',
    technologies: ['REST APIs', 'SQL Server', 'React', 'Postman', 'Enterprise Architecture'],
    githubUrl: 'https://github.com/narainram18',
    overview:
      'Engineered an enterprise-grade backend service and API interface for managing commercial maritime fleet data, port calls, and operational logs with parameterized SQL Server procedures and structured JSON endpoints.',
    problem:
      'Fragmented operational records across legacy relational schemas led to slow reporting queries and inconsistent data representation across frontend portals.',
    architecture: {
      overview: 'N-tier relational architecture separating data access, business validation, and REST API serialization.',
      layers: [
        {
          layer: 'API Gateway',
          title: 'REST Controller Layer',
          components: ['Route Handlers', 'Input Validators', 'JSON Serializer'],
          description: 'Exposes clean RESTful endpoints with standardized status codes and error models.',
        },
        {
          layer: 'Business Logic',
          title: 'Data Access Layer',
          components: ['Query Builder', 'Connection Pool', 'Transaction Guard'],
          description: 'Orchestrates parameterized multi-table joins and aggregations.',
        },
        {
          layer: 'Persistence',
          title: 'Microsoft SQL Server',
          components: ['Indexed Tables', 'Foreign Key Constraints', 'Stored Queries'],
          description: 'Maintains referential integrity across vessels, voyages, cargo, and port logs.',
        },
      ],
      dataFlow: [
        'Frontend application queries vessel operational timeline via REST endpoint.',
        'Backend constructs parameterized SQL query filtering by date, status, and port ID.',
        'Results are transformed into typed JSON records and transmitted to client.',
      ],
    },
    implementation: [
      {
        title: 'Multi-Table SQL Optimization & JSON Serialization',
        description: 'Constructed efficient SQL queries utilizing indexed joins, filtering, and distinct data retrieval to aggregate fleet logs.',
        highlights: ['Zero SQL injection vulnerability via parameterization', 'Clean relational data modeling', 'Validated via Postman'],
      },
    ],
    technicalDecisions: [
      {
        topic: 'Query Strategy: Parameterized Queries vs Dynamic SQL',
        problem: 'Preventing injection attacks while maintaining high cache hit rates for query plans.',
        optionsConsidered: ['Dynamic string concatenation', 'Parameterized SQL', 'ORM abstraction'],
        chosenOption: 'Parameterized SQL Queries',
        rationale: 'Guarantees execution safety, allows SQL Server query optimizer to reuse plans, and delivers predictable latency.',
        tradeoffs: 'Requires explicit type binding for complex dynamic filtering.',
      },
    ],
    challenges: [
      {
        challenge: 'Handling complex relational queries across large vessel movement logs',
        resolution: 'Optimized index coverage on composite keys and normalized frequently queried voyage attributes.',
      },
    ],
    results: [
      'Delivered reliable end-to-end API integration between SQL Server and React UI interfaces',
      'Systematically verified all endpoints using Postman collection test suites',
    ],
    lessonsLearned: [
      'Well-structured relational database schemas and parameterized queries form the backbone of reliable enterprise applications.',
    ],
  },
];
