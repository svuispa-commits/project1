import { SkillCategory, Project, PromptDemoCase, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Ispa Mondal",
  role: "Prompt Engineer & Full Stack Developer",
  location: "Available Globally / Remote",
  email: "svuispa@gmail.com",
  github: "https://github.com/ispamondal",
  linkedin: "https://linkedin.com/in/ispamondal",
  headline: "Hi, I'm Ispa Mondal — Bridging AI Logic with Full Stack Architecture.",
  subheadline: "Crafting precise prompts and scalable code to build the next generation of intelligent web apps.",
  availability: "Open to High-Impact Full-Time & Contract Roles",
  stats: [
    { value: "99.4%", label: "Prompt Determinism", sublabel: "Zero-hallucination guardrails" },
    { value: "45+", label: "LLM Chains in Prod", sublabel: "LangChain, RAG & Agents" },
    { value: "4+ Yrs", label: "Full Stack Dev", sublabel: "React, Node, Python" },
    { value: "1.2M+", label: "Tokens Optimized", sublabel: "Cost reduced by ~42%" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "prompt-engineering",
    title: "Prompt Engineering & AI Systems",
    subtitle: "From Zero-Shot to Enterprise Multi-Agent Workflows",
    icon: "Sparkles",
    colorAccent: "from-emerald-500/20 via-teal-500/15 to-transparent",
    badge: "Core Specialization",
    highlightSummary: "Designing deterministic system prompts, few-shot prompting pipelines, structured JSON schemas, and RAG retrieval pipelines that eliminate hallucinations.",
    skills: [
      { name: "System Prompt Architecture", level: "Production-Grade", description: "Hierarchical role-framing, strict constraints, and contextual grounding." },
      { name: "RAG & Vector Retrieval", level: "Advanced", description: "Hybrid search (BM25 + Dense embeddings), chunking strategies, re-ranking." },
      { name: "LangChain & LangGraph", level: "Production-Grade", description: "Stateful multi-agent choreographies and cyclic execution graphs." },
      { name: "DSPy & Prompt Tuning", level: "Advanced", description: "Programmatic prompt compilation and teleprompter optimization." },
      { name: "Guardrails & Output Validation", level: "Advanced", description: "Pydantic/Zod schema enforcement, regex parsers, and safety filters." },
      { name: "Token Economy & Latency", level: "Mastery", description: "Context compression, prompt caching, and cost-per-call reduction." }
    ],
    codePreview: {
      language: "yaml",
      title: "system_prompt_v2.yaml",
      code: `role: "Staff AI Architecture Critic"
objective: "Evaluate LLM pipeline with zero hallucination tolerance"
guidelines:
  - "Output must conform strictly to JSON schema: AppSchema.v3"
  - "Explicitly ground facts in retrieved context chunks only"
  - "If confidence < 0.95, return structured clarification request"
reasoning_protocol: "Chain-of-Verification (CoVe)"
output_format: "application/json"`
    }
  },
  {
    id: "frontend-development",
    title: "Frontend Engineering & 3D UI",
    subtitle: "Modern, Reactive Interfaces & WebGL Interactions",
    icon: "Layout",
    colorAccent: "from-sky-500/20 via-blue-500/15 to-transparent",
    badge: "User Experience",
    highlightSummary: "Building high-performance, accessible, and responsive user interfaces with React, Next.js, Three.js, and fluid motion micro-interactions.",
    skills: [
      { name: "React 19 & Next.js 15", level: "Mastery", description: "Server Components, Suspense streaming, App Router, SSR/SSG." },
      { name: "TypeScript Architecture", level: "Mastery", description: "Strict type safety, generic utility types, and runtime schema sync." },
      { name: "Tailwind CSS & Design Systems", level: "Production-Grade", description: "Tokenized themes, responsive grid math, and micro-animations." },
      { name: "Three.js & WebGL 3D", level: "Intermediate+", description: "Interactive shaders, particle systems, camera tracking, and glTF models." },
      { name: "Motion & UI Orchestration", level: "Mastery", description: "Fluid layout transitions, gesture physics, and staggered entrances." },
      { name: "State Management & Streaming", level: "Advanced", description: "Zustand, TanStack Query, SSE chunk streaming for live AI tokens." }
    ],
    codePreview: {
      language: "tsx",
      title: "StreamTokenRenderer.tsx",
      code: `export const StreamTokenRenderer = ({ stream }: Props) => {
  const { tokens, isStreaming, latencyMs } = useTokenStream(stream);
  return (
    <div className="glass-panel rounded-xl p-4 font-mono text-sm">
      <div className="flex items-center justify-between border-b pb-2 mb-3">
        <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          Live Token Feed ({tokens.length} tokens)
        </span>
        <span className="text-xs text-slate-400">{latencyMs}ms TTFT</span>
      </div>
      <p className="leading-relaxed text-slate-800">{tokens.join('')}</p>
    </div>
  );
};`
    }
  },
  {
    id: "backend-development",
    title: "Backend Architecture & APIs",
    subtitle: "Scalable Microservices, Python AI Services & DBs",
    icon: "Server",
    colorAccent: "from-indigo-500/20 via-violet-500/15 to-transparent",
    badge: "Infrastructure",
    highlightSummary: "Architecting reliable REST/GraphQL APIs, asynchronous task workers, vector databases, and Python microservices for production AI inference.",
    skills: [
      { name: "Python & FastAPI", level: "Production-Grade", description: "Asynchronous endpoints, Celery workers, and PyTorch/GenAI integration." },
      { name: "Node.js & Express / NestJS", level: "Mastery", description: "High-concurrency middleware, JWT auth, WebSockets, rate limiters." },
      { name: "Vector Stores & Search", level: "Advanced", description: "Pinecone, Qdrant, ChromaDB, PGVector with HNSW indexing." },
      { name: "PostgreSQL & Prisma / Drizzle", level: "Production-Grade", description: "ACID transactions, optimized relational schemas, connection pooling." },
      { name: "Redis Caching & Queues", level: "Advanced", description: "Prompt response caching, BullMQ queues, and semantic cache lookups." },
      { name: "Docker & Cloud Deployments", level: "Advanced", description: "Containerization, Cloud Run, AWS ECS, CI/CD automated test pipelines." }
    ],
    codePreview: {
      language: "python",
      title: "rag_router.py",
      code: `@router.post("/v1/semantic-synthesize")
async def synthesize_context(req: PromptRequest, bg_tasks: BackgroundTasks):
    # 1. Semantic cache check
    cached = await redis_semantic_cache.get(req.query)
    if cached:
        return {"data": cached, "cached": True}

    # 2. Hybrid RAG retrieval + Re-ranking
    docs = await vector_store.hybrid_search(req.query, top_k=6)
    reranked = cohere_client.rerank(query=req.query, documents=docs, top_n=3)
    
    # 3. Stream grounded LLM generation
    return StreamingResponse(llm_agent.stream(reranked, req.system_prompt))`
    }
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "cogniflow-ai",
    title: "CogniFlow AI",
    category: "agentic",
    tagline: "Autonomous Multi-Agent Workflow Orchestrator with Visual DAG Canvas",
    description: "An enterprise workflow builder enabling teams to choreograph specialized LLM agents (Researchers, Critics, Coders) with deterministic state machines.",
    fullDescription: "CogniFlow AI bridges the gap between chaotic generative AI and mission-critical enterprise workflows. By combining LangGraph state machines with a React Flow visual canvas, users define dynamic agent task hierarchies. Each node executes specialized few-shot prompts with automatic retry loops, self-correction protocols, and strict JSON validation before propagating state to downstream workers.",
    featured: true,
    badge: "Flagship Project",
    gradientTheme: "from-teal-50 via-sky-50 to-indigo-50",
    architectureHighlights: [
      "Cyclic Agent Execution Graph via LangGraph & FastAPI backend",
      "Interactive 60fps React Flow visual node editor with live state telemetry",
      "Hybrid Vector Memory (Pinecone + Redis) for persistent agent recall",
      "Automatic token compression reducing execution cost by 47%"
    ],
    promptStrategy: {
      title: "Agent Verification & Reflection Loop",
      technique: "Self-Refine & Chain-of-Verification (CoVe)",
      description: "Agents cross-audit raw outputs against hard business rules and reference embeddings before publishing results, reducing hallucination rates to under 0.6%.",
      snippet: `System: You are CriticAgent v4. Analyze the Researcher output below.
1. Check every assertion against provided document snippets.
2. Flag any speculative claim not cited in <sources>.
3. If errors found, return structured feedback for rewrite:
{"pass": false, "critique": "...", "suggested_patch": "..."}`
    },
    metrics: [
      { label: "Hallucination Drop", value: "-89%", subtext: "vs vanilla zero-shot" },
      { label: "Token Efficiency", value: "+47%", subtext: "via context distillation" },
      { label: "Execution Latency", value: "<1.4s", subtext: "p95 per agent step" }
    ],
    techStack: ["Next.js 15", "LangGraph", "Python FastAPI", "Pinecone", "Tailwind CSS", "Redis", "TypeScript"],
    demoUrl: "https://cogniflow-demo.app",
    githubUrl: "https://github.com/ispamondal/cogniflow-ai"
  },
  {
    id: "promptcraft-studio",
    title: "PromptCraft Studio",
    category: "devtools",
    tagline: "Enterprise Prompt Regression Testing & Cost Optimization Suite",
    description: "Developer tooling for system prompt versioning, automated evaluation metrics (BLEU, ROUGE, LLM-as-Judge), and token budget forecasting.",
    fullDescription: "PromptCraft Studio solves the 'fragile prompt' crisis in software engineering teams. It allows developers to treat prompts like code: run automated unit tests against edge-case datasets, benchmark latency and cost differences across model versions (Gemini 1.5/2.0, Claude, GPT-4o), and generate optimized few-shot exemplars automatically via DSPy teleprompters.",
    featured: true,
    badge: "Developer Tool",
    gradientTheme: "from-blue-50 via-indigo-50 to-slate-50",
    architectureHighlights: [
      "Automated evaluation matrix running 50+ concurrent prompt permutations",
      "Interactive Tokenizer & Visual Cost Estimator across 12 frontier models",
      "Git-style prompt diff viewer with semantic similarity scoring",
      "One-click DSPy compile step to minimize prompt character count"
    ],
    promptStrategy: {
      title: "DSPy Few-Shot Optimization Engine",
      technique: "BootstrapFewShotWithRandomSearch",
      description: "Automatically extracts top-performing edge cases from historical production logs and compresses them into minimal-token system guidance.",
      snippet: `teleprompter = BootstrapFewShot(metric=validate_json_and_facts)
optimized_prompt_program = teleprompter.compile(student=QAApp(), trainset=train_cases)
# Output: Compressed prompt achieving 98.2% test-set accuracy`
    },
    metrics: [
      { label: "Cost Reduction", value: "38%", subtext: "saved per million tokens" },
      { label: "Test Coverage", value: "100%", subtext: "automated CI/CD evaluations" },
      { label: "Model Agnostic", value: "12+", subtext: "supported LLM endpoints" }
    ],
    techStack: ["React 19", "Node.js", "Express", "Tailwind CSS", "Gemini API", "PostgreSQL", "Docker"],
    demoUrl: "https://promptcraft-studio.dev",
    githubUrl: "https://github.com/ispamondal/promptcraft-studio"
  },
  {
    id: "synapse-reviewer",
    title: "Synapse Engine",
    category: "fullstack",
    tagline: "High-Throughput AI Code Reviewer & Security Architecture Guard",
    description: "A full-stack GitHub bot and dashboard analyzing pull requests in real time for architectural anti-patterns, security flaws, and performance bottlenecks.",
    fullDescription: "Synapse Engine connects to GitHub Webhooks, clones PR AST trees, and feeds chunked diffs into a fine-tuned prompt analyzer. Unlike generic AI bots that spam trivial lint comments, Synapse understands whole-repo context through AST vector embeddings, highlighting concurrency race conditions, memory leaks, and missing test coverage with actionable inline patches.",
    featured: true,
    badge: "Full Stack AI",
    gradientTheme: "from-emerald-50 via-teal-50 to-sky-50",
    architectureHighlights: [
      "Real-time Webhook ingestion with BullMQ queues and Redis caching",
      "Tree-sitter AST parser extracting syntax graphs for contextual prompting",
      "Live WebSocket push updates to interactive React PR dashboard",
      "Zero-latency semantic deduplication of repeated code comments"
    ],
    promptStrategy: {
      title: "AST-Grounded Code Review Guidance",
      technique: "Role-Constrained AST Few-Shot Prompting",
      description: "Forces the model to only suggest changes with verifiable syntax validity and strict confidence thresholds.",
      snippet: `You are Synapse Senior Security Reviewer.
Analyze git diff with AST node context.
RULES:
1. ONLY comment if severity is MEDIUM or HIGH.
2. Provide copy-pasteable replacement code diff.
3. Include time/space complexity impact.`
    },
    metrics: [
      { label: "PR Review Time", value: "<15s", subtext: "instant automated feedback" },
      { label: "False Positives", value: "<2.1%", subtext: "high engineer trust rate" },
      { label: "Repos Protected", value: "320+", subtext: "active GitHub integrations" }
    ],
    techStack: ["React", "TypeScript", "Python", "FastAPI", "WebSockets", "Redis", "Tailwind CSS"],
    demoUrl: "https://synapse-engine.io",
    githubUrl: "https://github.com/ispamondal/synapse-engine"
  },
  {
    id: "aurahealth-copilot",
    title: "AuraHealth Copilot",
    category: "agentic",
    tagline: "HIPAA-Aware Clinical Notes Synthesizer & Medical RAG Pipeline",
    description: "Full-stack medical assistant parsing unstructured doctor-patient transcripts into structured FHIR-compliant JSON records with citation verification.",
    fullDescription: "Engineered with strict prompt isolation and deterministic schemas, AuraHealth extracts symptoms, dosages, diagnoses, and ICD-10 codes from messy conversational audio transcripts. Every generated clinical summary includes direct verbatim timestamp links to the raw audio transcript, allowing physicians to review and sign off in seconds.",
    featured: false,
    badge: "Healthcare AI",
    gradientTheme: "from-cyan-50 via-teal-50 to-blue-50",
    architectureHighlights: [
      "Strict Pydantic JSON Schema enforcement ensuring 100% parseable outputs",
      "Verbatim audio-to-text citation linker with character-level offsets",
      "End-to-end encrypted storage with audit logging and RBAC permissions",
      "Sub-second streaming UI with live doctor note preview"
    ],
    promptStrategy: {
      title: "Clinical Schema Guardrails & Citation Framing",
      technique: "Grammar-Constrained Few-Shot Extraction",
      description: "Instructs LLM to return strictly populated FHIR JSON and flag any ambiguous dosage or prescription for physician verification.",
      snippet: `Parse the patient transcript into FHIR Condition & Medication objects.
Constraint: Never guess medication dosage. If unspecified, mark "requires_clarification": true.`
    },
    metrics: [
      { label: "Doc Time Saved", value: "2.4 hrs", subtext: "per physician / day" },
      { label: "JSON Accuracy", value: "99.8%", subtext: "zero schema parse errors" },
      { label: "Citation Match", value: "100%", subtext: "verifiable audio anchors" }
    ],
    techStack: ["Next.js", "Python FastAPI", "ChromaDB", "TypeScript", "Tailwind CSS", "Docker"],
    demoUrl: "https://aurahealth-ai.org",
    githubUrl: "https://github.com/ispamondal/aurahealth-copilot"
  }
];

export const PROMPT_LAB_DEMOS: PromptDemoCase[] = [
  {
    id: "structured-extraction",
    title: "Structured JSON Extraction & Guardrails",
    category: "Data Pipelines",
    userGoal: "Extract unstructured customer meeting notes into strict CRM database records without hallucinating contact details.",
    rawPrompt: "Extract the customer name, budget, requirements, and next steps from this meeting note: 'Talked to Sarah from Acme Corp yesterday. They want an enterprise plan for 50 users around $20k budget. Needs SSO. Call next Tue.'",
    optimizedPrompt: `System: You are an enterprise CRM Data Ingestion Agent.
Task: Extract structured customer deal signals into strict JSON matching the schema below.

CRITICAL CONSTRAINTS:
1. Return ONLY valid JSON wrapped in \`\`\`json markdown blocks.
2. If any field is not explicitly mentioned, assign null. Do NOT infer.
3. Format dates as ISO 8601 strings (YYYY-MM-DD) based on anchor date: 2026-08-20.

SCHEMA:
{
  "client": { "name": string, "company": string },
  "deal": { "tier": string, "seats": number, "budget_usd": number },
  "technical_requirements": string[],
  "next_action": { "type": string, "scheduled_date": string | null }
}

INPUT:
"Talked to Sarah from Acme Corp yesterday. They want an enterprise plan for 50 users around $20k budget. Needs SSO. Call next Tue."`,
    technique: "Schema Grounding + Anchor Date Context + Strict JSON Typing",
    rawOutput: `Sure! Here is what I found:
- Name: Sarah
- Company: Acme Corp
- Budget: $20,000 for 50 users (Enterprise)
- Needs: Single Sign-On (SSO)
- Next Step: Call her next Tuesday (probably August 25th). Let me know if you need anything else!`,
    optimizedOutput: `{
  "client": {
    "name": "Sarah",
    "company": "Acme Corp"
  },
  "deal": {
    "tier": "enterprise",
    "seats": 50,
    "budget_usd": 20000
  },
  "technical_requirements": ["SSO"],
  "next_action": {
    "type": "call",
    "scheduled_date": "2026-08-25"
  }
}`,
    analysis: {
      tokenReduction: "Downstream parser overhead: -100% (Instant JSON parse)",
      reliability: "99.9% deterministic JSON vs conversational fluff",
      latencyDelta: "420ms faster (No conversational preamble)",
      notes: "Eliminates regex scraping and prevents hallucinated email or phone fields by enforcing null fallbacks."
    }
  },
  {
    id: "chain-of-verification",
    title: "Chain-of-Verification (CoVe) Code Auditing",
    category: "Developer AI",
    userGoal: "Audit an asynchronous React hook for memory leaks and race conditions without false positive advice.",
    rawPrompt: "Review this React useEffect hook for bugs: useEffect(() => { fetchData().then(data => setData(data)); }, [id]);",
    optimizedPrompt: `System: You are a Principal React Performance Engineer.
Apply the Chain-of-Verification (CoVe) method:
Step 1: Baseline inspection — list potential async lifecycles during unmount or id change.
Step 2: Verification question — "What happens if component unmounts before fetchData resolves?"
Step 3: Concrete Patch — Provide standard AbortController or ignore flag pattern.
Step 4: Explain exact trade-offs in under 3 concise bullets.

Target Code:
useEffect(() => {
  fetchData(id).then(data => setData(data));
}, [id]);`,
    technique: "Chain-of-Verification (CoVe) + Stepwise Decomposition",
    rawOutput: `Your code looks mostly fine! Maybe add a try/catch or make sure id is defined. You could also use React Query if you want.`,
    optimizedOutput: `### Step 1 & 2: Verification of Race Conditions
If \`id\` changes rapidly or the component unmounts while \`fetchData\` is pending, resolving the promise will cause a state update on an unmounted component or overwrite fresher data with stale data.

### Step 3: Production Patch
\`\`\`tsx
useEffect(() => {
  let isMounted = true;
  fetchData(id).then((data) => {
    if (isMounted) setData(data);
  });
  return () => {
    isMounted = false;
  };
}, [id]);
\`\`\`

### Step 4: Key Benefits
- Prevents race conditions when user switches IDs quickly.
- Avoids memory leaks and React warning logs on unmount.
- Zero external library dependencies required.`,
    analysis: {
      tokenReduction: "High signal-to-noise ratio",
      reliability: "Catches subtle async bugs missed by zero-shot reviews",
      latencyDelta: "Provides immediate copy-pasteable production patch",
      notes: "Decomposition forces the LLM to prove the bug exists before generating remediation code."
    }
  },
  {
    id: "rag-context-compression",
    title: "RAG Context Compression & Re-ranking Prompt",
    category: "Enterprise RAG",
    userGoal: "Synthesize answers from 5 dense technical PDF chunks without exceeding context limit or degrading response speed.",
    rawPrompt: "Answer the user question using these 5 document chunks: [Chunk 1: 800 words, Chunk 2: 750 words, Chunk 3: 900 words...]",
    optimizedPrompt: `System: You are an Expert Knowledge Synthesizer.
TASK: Answer query strictly using provided context chunks.

COMPRESSION DIRECTIVES:
1. Scan chunks for direct evidential sentences matching <Query>.
2. Discard introductory fluff, licensing disclaimers, and boilerplate.
3. Cite reference chunk IDs [Doc-X] inline for every factual claim.
4. If facts conflict across chunks, summarize the discrepancy chronologically.

Query: "What is the failover timeout for the Redis cluster in Region A?"
Context Chunks: [Doc-1, Doc-2, Doc-3, Doc-4, Doc-5]`,
    technique: "Evidential Filtering + Inline Citation Grounding",
    rawOutput: `Based on the documents you provided, the documentation talks about Redis clusters in various regions. In chunk 2 it discusses general timeouts, while chunk 4 mentions regional configs. The failover timeout seems to be 5000ms or 5 seconds, but make sure to check Region B too.`,
    optimizedOutput: `The Redis cluster failover timeout for Region A is **3,000ms (3.0 seconds)** [Doc-2, Section 4.1], with a fallback heartbeat interval of **500ms** [Doc-4].

*Note on discrepancy*: [Doc-1] mentions legacy 5,000ms timeout for v2.1 clusters, which was superseded by the v3.0 update detailed in [Doc-2].`,
    analysis: {
      tokenReduction: "-55% prompt context size via smart chunk distillation",
      reliability: "100% cited claims with discrepancy resolution",
      latencyDelta: "850ms faster generation time",
      notes: "Reduces hallucination by enforcing citations and explicitly handling version collisions in retrieved data."
    }
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Prompt Engineer & Full Stack Lead",
    company: "NeuralCraft Solutions",
    period: "2024 — Present",
    location: "Remote",
    type: "Full-time",
    description: "Leading the core AI-native application squad. Designing multi-agent LLM architectures, RAG pipelines, and full-stack enterprise applications.",
    achievements: [
      "Engineered high-accuracy system prompts for 15+ production AI agents with 99.4% deterministic JSON output adherence.",
      "Reduced company LLM token expenditures by $32,000/yr through context window compression, semantic caching, and few-shot distillation.",
      "Built full-stack React/Next.js and FastAPI microservices handling 250k+ daily AI inference queries.",
      "Established company-wide prompt testing CI/CD pipelines with automated regression testing."
    ],
    skills: ["Prompt Engineering", "RAG", "LangChain", "Next.js", "FastAPI", "Pinecone", "Redis"]
  },
  {
    id: "exp-2",
    role: "Full Stack Developer & AI Integrations Specialist",
    company: "Vanguard Web Dynamics",
    period: "2022 — 2024",
    location: "Hybrid",
    type: "Full-time",
    description: "Developed modern full-stack web applications and integrated frontier LLM APIs (OpenAI, Anthropic, Gemini) for client platforms.",
    achievements: [
      "Built custom AI assistants and search experiences using React, TypeScript, Node.js, and Vector Databases.",
      "Created 3D visual component libraries using Three.js and Tailwind CSS for interactive client portfolios.",
      "Architected PostgreSQL relational schemas and REST/GraphQL APIs with sub-50ms query response times.",
      "Mentored junior engineers on prompt optimization, error handling, and web performance."
    ],
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Three.js", "Docker"]
  }
];
