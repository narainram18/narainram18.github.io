import { EngineeringEntry } from '@/types/engineering';

export const ENGINEERING_ENTRIES: EngineeringEntry[] = [
  {
    slug: 'multithreaded-concurrency-file-io',
    title: 'Worker Thread Pool Sizing & Resource Synchronization in C++',
    category: 'Systems',
    summary:
      'Evaluating the performance cliff between thread-per-task models and bounded worker pools during high-volume filesystem traversals. Explores lock contention, condition variable wakeups, and operating system file descriptor limits.',
    abstract:
      'Evaluating the performance cliff between thread-per-task models and bounded worker pools during high-volume filesystem traversals. Explores lock contention, condition variable wakeups, and operating system file descriptor limits.',
    status: 'Completed',
    date: '2024',
    readTime: '6 min read',
    topics: ['C++', 'Concurrency', 'Operating Systems', 'POSIX', 'Mutex Synchronization'],
    tags: ['C++', 'Concurrency', 'Operating Systems', 'POSIX'],
    featured: true,
    relatedProjectSlug: 'system-file-manager',
    isPlaceholder: false,
    context:
      'During the implementation of the Multithreaded System File Manager in C++, scanning large directory trees with thousands of nested entries showed significant performance divergence depending on thread allocation strategy.',
    question:
      'How does an unbounded thread-per-task model compare against a bounded worker thread pool matched to hardware concurrency, and how can mutex contention on shared directory queues be minimized?',
    approach:
      'Evaluated a fixed worker thread pool sized to std::thread::hardware_concurrency() paired with condition variables against spawning threads on-demand. Implemented scoped lock guards and a thread-safe task queue to decouple directory discovery from file metadata extraction.',
    observations: [
      'Spawning a thread per file or directory quickly leads to thread exhaustion and significant kernel context-switching latency.',
      'A bounded worker pool eliminates thread creation overhead and maintains CPU cache locality across multi-core architectures.',
      'Coarse-grained locking on the entire queue created a bottleneck for fast-running tasks; decoupling task production from consumption with condition variables eliminated busy-waiting.',
    ],
    results: [
      'Avoided thread explosion and CPU thrashing during deep recursive directory scans.',
      'Demonstrated linear throughput scaling up to physical core count with zero race conditions, validated using ThreadSanitizer.',
    ],
    keyInsights: [
      'Disk I/O bound tasks and CPU bound tasks require different thread sizing strategies; more threads do not automatically yield faster disk reads.',
      'Condition variables prevent high CPU utilization during queue idle phases.',
      'Safe task cancellation requires atomic exit flags checked before thread blocking calls.',
    ],
    codeSnippet: {
      language: 'cpp',
      caption: 'Thread-safe worker loop with std::condition_variable and graceful shutdown',
      code: `void WorkerPool::workerLoop() {
    while (true) {
        std::function<void()> task;
        {
            std::unique_lock<std::mutex> lock(queueMutex_);
            cv_.wait(lock, [this] {
                return stopRequested_.load() || !taskQueue_.empty();
            });

            if (stopRequested_.load() && taskQueue_.empty()) {
                return; // Graceful worker termination
            }

            task = std::move(taskQueue_.front());
            taskQueue_.pop();
        }

        // Execute task outside the lock to minimize contention
        task();
    }
}`,
    },
  },
  {
    slug: 'hybrid-retrieval-rrf-vs-dense',
    title: 'Reciprocal Rank Fusion vs Score Normalization in Hybrid Vector Retrieval',
    category: 'Algorithms',
    summary:
      'An analysis of retrieval failure modes in semantic-only vector spaces when dealing with alphanumeric serial numbers, exact acronyms, and technical codes, demonstrating why reciprocal rank fusion with sparse BM25 indices provides higher recall stability.',
    abstract:
      'An analysis of retrieval failure modes in semantic-only vector spaces when dealing with alphanumeric serial numbers, exact acronyms, and technical codes, demonstrating why reciprocal rank fusion with sparse BM25 indices provides higher recall stability.',
    status: 'Completed',
    date: '2024',
    readTime: '5 min read',
    topics: ['Information Retrieval', 'RRF', 'Algorithms', 'Vector Search', 'PostgreSQL FTS'],
    tags: ['RAG', 'Information Retrieval', 'RRF', 'Algorithms'],
    featured: false,
    relatedProjectSlug: 'enterprise-ai-workspace',
    isPlaceholder: false,
    context:
      'While engineering the Enterprise AI Workspace retrieval pipeline, queries containing technical part numbers or acronyms failed to retrieve relevant chunks when using pure dense vector embeddings.',
    question:
      'Can Reciprocal Rank Fusion (RRF) reliably merge dense vector similarity ranks (from Qdrant) with sparse BM25 scores (from PostgreSQL FTS) without requiring fragile score calibration?',
    approach:
      'Evaluated the RRF formula RRF_Score(d) = sum(1 / (k + rank(d))) against linear weighted score combinations across enterprise technical documents.',
    observations: [
      'Cosine similarity scores from dense embeddings and BM25 scores have incompatible distributions, making linear combination sensitive to outlier query lengths.',
      'RRF operates solely on ordinal rank positions, inherently normalizing scoring across both search engines without requiring score calibration.',
    ],
    results: [
      'Eliminated semantic blindness on exact alphanumeric codes without degrading conceptual queries.',
      'Integrated into the Spring Boot retrieval pipeline with configurable k=60 parameter.',
    ],
    keyInsights: [
      'Rank-based fusion eliminates the need to recalibrate similarity thresholds across model updates.',
      'Sparse keyword indices remain an indispensable complement to dense semantic vectors.',
      'Combining Qdrant HNSW indexing with PostgreSQL GIN indices gives predictable sub-50ms hybrid lookups.',
    ],
  },
  {
    slug: 'ros-costmap-inflation-dwa',
    title: 'Costmap Inflation Layers & DWA Trajectory Planning in Constrained Corridors',
    category: 'Robotics',
    summary:
      'Tuning 2D costmap inflation layers, raytrace clearing distances, and trajectory velocity sampling for autonomous mobile bases traversing narrow aisles with transient obstacle interference.',
    abstract:
      'Tuning 2D costmap inflation layers, raytrace clearing distances, and trajectory velocity sampling for autonomous mobile bases traversing narrow aisles with transient obstacle interference.',
    status: 'Completed',
    date: '2024',
    readTime: '5 min read',
    topics: ['ROS', 'Autonomous Navigation', 'Kinematics', 'Robotics', 'Path Planning'],
    tags: ['ROS', 'Autonomous Navigation', 'Kinematics', 'Robotics'],
    featured: false,
    relatedProjectSlug: 'autonomous-grocery-navigator',
    isPlaceholder: false,
    context:
      'When modeling indoor autonomous mobile navigation in ROS, mobile robots traveling down narrow passages often triggered false collision halts or oscillated between alternative paths.',
    question:
      'What are the optimal configuration parameters for 2D local costmap inflation radius and Dynamic Window Approach (DWA) velocity sampling when navigating narrow aisles?',
    approach:
      'Tuned local costmap inflation decay curves, raytrace clearance distances, and differential drive velocity limits in the ROS navigation stack.',
    observations: [
      'Overly conservative inflation radii caused the local planner to treat narrow paths as completely untraversable.',
      'DWA velocity sampling required balancing forward linear velocity against angular acceleration limits to prevent jerky rotational oscillations.',
    ],
    results: [
      'Achieved smooth, collision-free waypoint sequencing in simulated narrow indoor corridors.',
      'Established clear separation between local obstacle avoidance and global path generation.',
    ],
    keyInsights: [
      'Inflation layers must reflect the physical footprint rather than arbitrary safety margins in tight corridors.',
      'Recovery behaviors must be isolated from the high-frequency trajectory evaluation loop.',
    ],
  },
  {
    slug: 'sse-vs-websockets-streaming',
    title: 'Server-Sent Events vs WebSockets for Unidirectional Token Streaming',
    category: 'Distributed Systems',
    summary:
      'A protocol-level evaluation comparing HTTP Server-Sent Events (SSE) and full-duplex WebSockets for streaming tokenized outputs from local LLM backends to client browsers.',
    abstract:
      'A protocol-level evaluation comparing HTTP Server-Sent Events (SSE) and full-duplex WebSockets for streaming tokenized outputs from local LLM backends to client browsers.',
    status: 'Completed',
    date: '2024',
    readTime: '4 min read',
    topics: ['Networking', 'HTTP', 'SSE', 'Streaming', 'WebSockets'],
    tags: ['Networking', 'HTTP', 'SSE', 'Streaming'],
    featured: false,
    relatedProjectSlug: 'enterprise-ai-workspace',
    isPlaceholder: false,
    context:
      'Evaluating network transport protocols for streaming generative LLM tokens from a Spring Boot backend to a React frontend.',
    question:
      'Is the bidirectional capability of WebSockets necessary for conversational token streaming, or does HTTP Server-Sent Events provide better simplicity and security alignment?',
    approach:
      'Compared protocol overhead, proxy compatibility, reconnection behavior, and integration with Spring Security JWT filter chains.',
    observations: [
      'WebSockets carry connection state overhead, complex keepalive management, and proxy traversal hurdles in corporate networks.',
      'SSE operates over standard HTTP/1.1 or HTTP/2, automatically handling network reconnection and event IDs natively in browser APIs.',
    ],
    results: [
      'Implemented an EventSource client with abort controllers in React, delivering resilient token streaming.',
      'Maintained stateless authentication using standard HTTP Bearer headers.',
    ],
    keyInsights: [
      'Unidirectional streaming aligns naturally with LLM generation cycles.',
      'Avoid complex transport protocols when standard HTTP streaming satisfies the communication model.',
    ],
  },
  {
    slug: 'tcp-congestion-control-dynamics',
    title: 'Packet Latency & TCP Congestion Dynamics under Synthetic Throttling',
    category: 'Networking',
    summary:
      'Planned laboratory investigation analyzing TCP window scaling, slow-start behavior, and socket buffer sizes over constrained network topologies.',
    abstract:
      'Planned laboratory investigation analyzing TCP window scaling, slow-start behavior, and socket buffer sizes over constrained network topologies.',
    status: 'Planned Experiment',
    date: 'Planned',
    readTime: 'Lab Plan',
    topics: ['Networking', 'TCP/IP', 'Congestion Control', 'Socket Mechanics'],
    tags: ['Networking', 'TCP/IP', 'Sockets'],
    featured: false,
    isPlaceholder: true,
    context:
      'Investigating low-level transport layer dynamics to understand bufferbloat and latency variance in distributed systems.',
    question:
      'How do socket buffer sizing and TCP pacing affect throughput stability and latency variance under high-jitter synthetic links?',
    approach:
      'Upcoming experiment utilizing raw socket APIs and packet capture tools (Wireshark/tcpdump) on virtual network namespaces.',
    keyInsights: [
      '[Planned] Benchmarks and socket metrics will be documented here as experimental runs are executed.',
      'Study framework established around Linux netem network emulation tools.',
    ],
  },
  {
    slug: 'mmap-vs-posix-io-benchmarks',
    title: 'Zero-Copy Memory-Mapped Files vs POSIX Read/Write for Large File Traversal',
    category: 'Systems',
    summary:
      'Planned benchmark comparing mmap kernel page faults against buffered sequential read system calls in C++ during concurrent disk inspection.',
    abstract:
      'Planned benchmark comparing mmap kernel page faults against buffered sequential read system calls in C++ during concurrent disk inspection.',
    status: 'Planned Experiment',
    date: 'Planned',
    readTime: 'Lab Plan',
    topics: ['Operating Systems', 'Memory Management', 'mmap', 'POSIX I/O'],
    tags: ['Systems', 'POSIX', 'mmap'],
    featured: false,
    isPlaceholder: true,
    context:
      'Evaluating kernel I/O boundary transitions during high-volume directory indexing.',
    question:
      'At what file size threshold does memory mapping outperform standard OS buffered I/O during concurrent hashing operations?',
    approach:
      'Upcoming test harness measuring user vs kernel CPU time, minor page faults, and cache miss rates.',
    keyInsights: [
      '[Planned] Memory allocation traces, page fault counts, and throughput benchmarks will be recorded once test suites are completed.',
    ],
  },
];

// Backward-compatibility export for existing components
export const ENGINEERING_NOTES = ENGINEERING_ENTRIES;
