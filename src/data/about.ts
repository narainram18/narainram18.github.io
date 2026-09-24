export interface EngineeringPrinciple {
  number: string;
  title: string;
  statement: string;
  rationale: string;
}

export interface CapabilityArea {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export interface WorkflowStage {
  id: string;
  number: string;
  title: string;
  summary: string;
  details: string;
  deliverables: string[];
}

export interface ExplorationTopic {
  id: string;
  label: string;
  title: string;
  description: string;
  status: 'EXPLORING' | 'BENCHMARKING' | 'STUDYING';
}

export interface AboutContent {
  identity: {
    lead: string;
    paragraphs: string[];
    metadata: {
      location: string;
      institution: string;
      graduation: string;
      degree: string;
      cgpa: string;
      focus: string;
    };
  };
  principles: EngineeringPrinciple[];
  capabilities: CapabilityArea[];
  workflow: WorkflowStage[];
  exploring: ExplorationTopic[];
  profile: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    pillars: {
      label: string;
      detail: string;
    }[];
  };
  cta: {
    heading: string;
    statement: string;
  };
}

export const ABOUT_DATA: AboutContent = {
  identity: {
    lead: 'Building software systems that are meant to be understood, tested, and pushed further.',
    paragraphs: [
      'I am an undergraduate in Computer Science and Engineering specializing in AI and Robotics at VIT Chennai (Class of 2027). While my academic coursework bridges intelligent algorithms and autonomous machines, my primary positioning and daily engineering practice are centered on software engineering, systems, and backend architecture.',
      'I approach software engineering with a commitment to looking beneath high-level frameworks. Rather than treating runtimes, networks, and databases as opaque black boxes, I focus on how threads synchronize over shared resources, how streaming protocols transport bytes across networks, and how distributed pipelines handle partial failure.',
    ],
    metadata: {
      location: 'Chennai, India',
      institution: 'VIT Chennai',
      graduation: 'Class of 2027',
      degree: 'B.Tech CSE (AI & Robotics)',
      cgpa: '7.9 / 10',
      focus: 'Software Engineering / Systems',
    },
  },

  principles: [
    {
      number: '01',
      title: 'Understand the system before choosing the abstraction',
      statement: 'Every high-level framework conceals operating system scheduling, memory management, and network round-trips.',
      rationale:
        'When systems face concurrency bottlenecks, high latency, or memory bloat, debugging requires reasoning about what the runtime, kernel, and hardware are executing underneath rather than stacking more dependencies.',
    },
    {
      number: '02',
      title: 'Prefer measurable behavior over assumptions',
      statement: 'Thread pool sizes, network streaming protocols, and cache efficiency should never be decided by guesswork.',
      rationale:
        'Software must be grounded in empirical profiling, reproducible benchmarks, and stress testing. Real measurements reveal the precise trade-offs between throughput, CPU utilization, and memory boundaries.',
    },
    {
      number: '03',
      title: 'Build for failure, not just the happy path',
      statement: 'Sockets disconnect, worker threads encounter unhandled exceptions, and downstream services degrade.',
      rationale:
        'Resilient software treats timeouts, network partitions, and resource exhaustion as normal operational states. Explicit failure boundaries, idempotent operations, and graceful degradation prevent cascading collapses.',
    },
    {
      number: '04',
      title: 'Keep complexity visible and intentional',
      statement: 'Unnecessary microservices, premature abstractions, and hidden state multiply the surface area for defects.',
      rationale:
        'The cleanest software architectures maintain clear ownership of data, keep critical execution paths obvious, and introduce architectural complexity only when concrete scale or isolation requirements demand it.',
    },
  ],

  capabilities: [
    {
      id: 'systems',
      title: 'Systems Engineering',
      description: 'Low-level execution, process lifecycles, and concurrent resource synchronization.',
      topics: [
        'Multithreading & thread pool sizing',
        'Mutexes, locks & condition variables',
        'Process management & scheduling',
        'File systems & memory-mapped I/O',
        'Resource synchronization & deadlock prevention',
      ],
    },
    {
      id: 'networking',
      title: 'Networking & Protocols',
      description: 'Transport protocols, unidirectional streaming, and secure API boundaries.',
      topics: [
        'HTTP/1.1 & HTTP/2 mechanics',
        'Server-Sent Events (SSE) streaming',
        'TCP socket dynamics & buffer tuning',
        'RESTful contract architecture',
        'Stateless JWT authentication & RBAC',
      ],
    },
    {
      id: 'distributed',
      title: 'Distributed Systems',
      description: 'Decoupled services, asynchronous workflows, and resilient data coordination.',
      topics: [
        'Service boundary isolation',
        'Asynchronous queueing & background workers',
        'Hybrid information retrieval pipelines',
        'Fault isolation, timeouts & retry policies',
        'Zero-trust data access control',
      ],
    },
    {
      id: 'robotics',
      title: 'Robotics & Autonomous Systems',
      description: 'Sensor-driven state estimation, spatial costmaps, and path planning.',
      topics: [
        'ROS & ROS 2 node architecture',
        'Costmap inflation & obstacle expansion',
        'Dynamic Window Approach (DWA) local planner',
        'Odometry & 2D LiDAR navigation',
        'Gazebo physical robot simulation',
      ],
    },
    {
      id: 'ai-ml',
      title: 'Applied AI & Information Retrieval',
      description: 'Dense vector search, hybrid scoring, and local inference orchestration.',
      topics: [
        'Retrieval-Augmented Generation (RAG)',
        'Qdrant vector indexing & payload filtering',
        'Reciprocal Rank Fusion (RRF)',
        'Local model serving (Ollama)',
        'Context window budgeting & SSE streaming',
      ],
    },
    {
      id: 'algorithms',
      title: 'Algorithms & Data Structures',
      description: 'Computational complexity analysis, graph traversals, and indexing structures.',
      topics: [
        'Time & space complexity analysis',
        'Graph search & topological sorting',
        'Spatial indices & inverted lists',
        'Tree traversals & heap structures',
        'Dynamic programming & optimization',
      ],
    },
  ],

  workflow: [
    {
      id: 'problem',
      number: '01',
      title: 'Problem Framing',
      summary: 'Define operational constraints, throughput requirements, and failure modes.',
      details:
        'Before selecting frameworks or writing code, I isolate the core engineering requirements: What are the latency bounds? What data needs to be preserved? Where will the network or CPU bottleneck emerge?',
      deliverables: [
        'Clear input/output boundary definitions',
        'Latency & throughput target metrics',
        'Identification of hard physical constraints',
      ],
    },
    {
      id: 'model',
      number: '02',
      title: 'System Modeling',
      summary: 'Map data lifecycles, service boundaries, and concurrency semantics.',
      details:
        'I sketch out subsystem interactions, message formats, and data ownership models. I evaluate whether threads, processes, or independent services best serve the isolation and performance needs.',
      deliverables: [
        'Interface contracts & serialization schemas',
        'Concurrency & synchronization models',
        'Threat and error propagation boundaries',
      ],
    },
    {
      id: 'implement',
      number: '03',
      title: 'Focused Implementation',
      summary: 'Write disciplined, strongly typed, modular software with explicit error handling.',
      details:
        'I write minimal, readable code adhering to idiomatic patterns in Java, C++, TypeScript, or Python. Dependencies are kept lean, and critical mechanisms are implemented with clear, self-documenting interfaces.',
      deliverables: [
        'Strictly typed components and services',
        'Explicit error handling and fallback paths',
        'Clean separation of concerns',
      ],
    },
    {
      id: 'measure',
      number: '04',
      title: 'Empirical Profiling',
      summary: 'Collect latency histograms, thread utilization, and memory metrics.',
      details:
        'I measure performance against the original targets. I verify whether thread pools saturate, analyze database execution plans, and check how memory allocations scale under concurrent requests.',
      deliverables: [
        'Benchmark timing & throughput profiles',
        'Resource utilization inspections',
        'Bottleneck isolation & verification',
      ],
    },
    {
      id: 'test',
      number: '05',
      title: 'Defensive Testing',
      summary: 'Stress test edge cases, socket disconnects, and concurrent access.',
      details:
        'Testing goes beyond sunny-day assertions. I test how the system reacts when downstream services disconnect, payloads are malformed, or threads contend simultaneously for shared resources.',
      deliverables: [
        'Unit test suites (JUnit, Mockito)',
        'API contract verification (Postman)',
        'Concurrency & thread safety validation',
      ],
    },
    {
      id: 'iterate',
      number: '06',
      title: 'Refinement & Documentation',
      summary: 'Refactor bottlenecks, document design trade-offs, and solidify interfaces.',
      details:
        'Once behavior is verified, I eliminate dead code, document non-obvious engineering decisions, and record why specific trade-offs were chosen so the system remains maintainable over time.',
      deliverables: [
        'Technical trade-off documentation',
        'API & system architecture specifications',
        'Production-ready code artifacts',
      ],
    },
  ],

  exploring: [
    {
      id: 'sys-concurrency',
      label: 'SYSTEMS',
      title: 'Lock-Free Queues & Concurrency Primitives',
      description:
        'Studying atomic operations, compare-and-swap (CAS) mechanics, and memory ordering barriers in multi-core CPU architectures.',
      status: 'STUDYING',
    },
    {
      id: 'net-pacing',
      label: 'NETWORKING',
      title: 'TCP Congestion & Socket Buffer Pacing',
      description:
        'Analyzing TCP window dynamics, socket buffer autosizing, and head-of-line blocking characteristics across varied network conditions.',
      status: 'BENCHMARKING',
    },
    {
      id: 'dist-consensus',
      label: 'DISTRIBUTED',
      title: 'Distributed Consensus & Replication Logs',
      description:
        'Studying write-ahead logging (WAL), leader election invariants, and partition tolerance trade-offs in distributed data stores.',
      status: 'STUDYING',
    },
    {
      id: 'ros2-dds',
      label: 'ROBOTICS',
      title: 'ROS 2 DDS Middleware & Real-Time Topologies',
      description:
        'Investigating Data Distribution Service (DDS) QoS reliability profiles, executor scheduling loops, and pub/sub latency in robotics.',
      status: 'EXPLORING',
    },
    {
      id: 'kernel-io',
      label: 'PERFORMANCE',
      title: 'Kernel I/O Boundaries & Memory Mapping',
      description:
        'Benchmarking memory-mapped file access (mmap) against traditional buffered read/write system calls for large binary data files.',
      status: 'BENCHMARKING',
    },
  ],

  profile: {
    heading: 'What Kind of Engineer Am I Becoming?',
    subheading: 'A disciplined software engineer who understands the foundation beneath the stack.',
    paragraphs: [
      'I am deliberately shaping my trajectory around foundational engineering rather than superficial framework adoption. Modern tooling makes it easy to assemble functional prototypes quickly, but long-term engineering excellence requires understanding how systems behave when they are pushed to their limits.',
      'My goal is to be an engineer who can operate with equal fluency across system layers: from designing reliable backend APIs and relational data schemas down to diagnosing thread contention, socket behavior, and memory bounds in operating system primitives.',
      'I believe the most reliable engineers are those who stay curious, build working systems from first principles, measure before concluding, and respect the physical limits of hardware and networks.',
    ],
    pillars: [
      {
        label: 'Systems Thinking',
        detail: 'Viewing applications as interconnected pipelines of memory, threads, networks, and storage rather than isolated blocks of UI or logic.',
      },
      {
        label: 'Implementation Grounding',
        detail: 'Solidifying theoretical computer science through concrete, runnable codebases that can be built, executed, and benchmarked.',
      },
      {
        label: 'Enduring Fundamentals',
        detail: 'Investing in operating systems, networking protocols, algorithms, and concurrency models that outlive fleeting framework trends.',
      },
      {
        label: 'Intellectual Honesty',
        detail: 'Documenting real bottlenecks, acknowledging trade-offs, and refusing to make unverified performance or scalability claims.',
      },
    ],
  },

  cta: {
    heading: 'Have a System Worth Building?',
    statement:
      'I am eager to contribute to engineering teams solving challenging software problems across systems, networking, distributed services, and intelligent platforms.',
  },
};
