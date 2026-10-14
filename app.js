/**
 * Linear-style Portfolio Core Engine
 * Fully reactive: ANY change in PORTFOLIO_DATA immediately updates all UI elements.
 * Pure Clickable UI without confusing single-letter shortcut hijacking.
 */

// Sound FX Synthesis using Web Audio API (Zero external audio files required)
class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  playOpen() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, this.ctx.currentTime + 0.07);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.07);
    } catch (e) {}
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      osc.frequency.setValueAtTime(780, this.ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.07, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.16);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.16);
    } catch (e) {}
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

const sound = new SoundFX();

// =============================================================================
// PORTFOLIO DATASET — All fields here directly drive the website interface!
// Edit any text, link, stat, or project below, and it will update the website.
// =============================================================================
const PORTFOLIO_DATA = {
  profile: {
    name: "Sulthan Rafif Surya Ananta",
    handle: "@sulthanananta",
    role: "System Analyst & Project Manager",
    location: "Kota Bekasi / Remote",
    status: "Open for Internship",
    cycle: "Cycle 1",
    velocity: "80%",
    email: "Sulthanrafif41@gmail.com",
    github: "https://github.com/sulthanananta",
    twitter: "https://x.com",
    linkedin: "https://www.linkedin.com/in/sulthan-ananta",
    bio: "Junior Systems Analyst & Developer | Transforming complex business workflows into scalable technical solutions through system modeling, data architecture, and software development."
  },

  hero: {
    headlineMain: "Built with precision.",
    headlineSub: "Shipped for high velocity.",
    stats: [
      { label: "EXECUTION VELOCITY", value: "80%", status: "On Track" },
      { label: "SYSTEM ANALYSIS ACCURACY", value: "99.8%", status: "Optimal" },
      { label: "ARCHITECTURAL SPECS", value: "14+ Models", status: "Verified" },
      { label: "ACTIVE SPRINT", value: "Cycle 1", status: "In Progress" }
    ]
  },

  projects: [
    {
      id: "PRF-101",
      title: "Enterprise ERP & Workflow Modeling",
      summary: "End-to-end system analysis, BPMN process modeling, and normalized relational schema design for enterprise logistics.",
      category: "System Analysis",
      status: "completed",
      priority: "urgent",
      cycle: "Cycle 1",
      tech: ["BPMN 2.0", "UML", "PostgreSQL", "Database Normalization", "Figma"],
      metrics: "45% reduction in workflow bottlenecks",
      demoUrl: "https://github.com/sulthanananta",
      githubUrl: "https://github.com/sulthanananta",
      description: "Comprehensive business process re-engineering and technical architecture specification. Analyzed inventory replenishment, order fulfillment, and automated invoice reconciliation workflows with formal BPMN models and 3NF database architecture.",
      architecture: "Event-driven asynchronous workflow engine with microservices integration and role-based access control (RBAC) security matrix.",
      highlights: [
        "Modeled 20+ comprehensive UML use-case, sequence, and activity diagrams",
        "Designed optimal database schema with indexed queries and zero data redundancy",
        "Delivered full Software Requirements Specification (SRS) document according to IEEE standards"
      ]
    },
    {
      id: "PRF-102",
      title: "Agile Project Tracking & Sprint Dashboard",
      summary: "Modern Kanban & Scrum project management workspace with real-time sprint burndown telemetry.",
      category: "Project Management",
      status: "completed",
      priority: "high",
      cycle: "Cycle 1",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Linear API", "Supabase"],
      metrics: "Sprint velocity tracked across 6 squads",
      demoUrl: "https://github.com/sulthanananta",
      githubUrl: "https://github.com/sulthanananta",
      description: "An intuitive, keyboard-first issue management platform tailored for high-velocity software engineering squads. Integrates sprint retrospectives, story point estimation, and velocity charts.",
      architecture: "Reactive server-side rendered UI with optimistic mutations and WebSocket live collaboration channels.",
      highlights: [
        "Automated sprint report generation saving 4 hours of management time weekly",
        "Granular milestone tracker with cycle-time analytics and dependency mapping"
      ]
    },
    {
      id: "PRF-103",
      title: "HyperScale Vector & Data Engine",
      summary: "Distributed high-concurrency vector database indexing engine with zero-overhead quantization.",
      category: "Full-Stack",
      status: "completed",
      priority: "high",
      cycle: "Cycle 1",
      tech: ["Rust", "WASM", "Raft", "gRPC", "SIMD"],
      metrics: "12x faster retrieval · 0.4ms p99",
      demoUrl: "https://github.com/sulthanananta",
      githubUrl: "https://github.com/sulthanananta",
      description: "A distributed vector indexing service engineered for low-latency similarity queries. Implements an optimized HNSW graph index with product quantization and SIMD acceleration.",
      architecture: "Distributed Raft consensus cluster with lock-free memory buffers, custom memory allocator, and WebAssembly boundary bindings.",
      highlights: [
        "Sub-millisecond query latency across 50M 1536-dimensional vectors",
        "Zero-copy deserialization using FlatBuffers and memory mapping"
      ]
    },
    {
      id: "PRF-104",
      title: "Kite Design System & Token Compiler",
      summary: "Multi-brand, token-driven headless design system powering 38 production applications.",
      category: "Design Systems",
      status: "completed",
      priority: "medium",
      cycle: "Cycle 1",
      tech: ["Tailwind CSS", "Radix UI", "TypeScript", "Figma API", "Storybook"],
      metrics: "38 Apps powered · 100% WCAG AAA",
      demoUrl: "https://github.com/sulthanananta",
      githubUrl: "https://github.com/sulthanananta",
      description: "An enterprise-grade headless UI component library and automated token pipeline. Synchronizes token definitions from Figma directly into typed CSS variables and React wrappers.",
      architecture: "Automated GitHub Actions AST compiler translating Figma variables into multi-platform themes.",
      highlights: [
        "Adopted by 45+ engineers across distributed product squads",
        "Reduced new interface feature turnaround time by 65%"
      ]
    },
    {
      id: "PRF-105",
      title: "Synapse Local-First Agent Studio",
      summary: "Local-first execution environment for deterministic workflow orchestration and testing.",
      category: "AI & Systems",
      status: "in-progress",
      priority: "urgent",
      cycle: "Cycle 1",
      tech: ["Tauri", "Next.js", "SQLite", "ONNX Runtime", "TypeScript"],
      metrics: "Zero cloud telemetry · 100% Local execution",
      demoUrl: "https://github.com/sulthanananta",
      githubUrl: "https://github.com/sulthanananta",
      description: "A privacy-first developer workspace for crafting, debugging, and running multi-step agent chains locally. Features persistent time-travel debugging and visual state machine inspectors.",
      architecture: "Tauri v2 native shell with Rust IPC bridge and embedded SQLite vector storage.",
      highlights: [
        "Time-travel workflow replay engine with deterministic state snapshots",
        "Graph-based visual DAG editor for parallelized task execution"
      ]
    },
    {
      id: "PRF-106",
      title: "Aether Edge Reverse Proxy & Rate Limiter",
      summary: "Zero-latency edge routing middleware, token-bucket rate limiter, and real-time tracing daemon.",
      category: "Infrastructure",
      status: "backlog",
      priority: "low",
      cycle: "Cycle 1",
      tech: ["Go", "Cloudflare Workers", "Redis", "OpenTelemetry"],
      metrics: "5M+ req/sec capacity · Sub-1ms overhead",
      demoUrl: "https://github.com/sulthanananta",
      githubUrl: "https://github.com/sulthanananta",
      description: "High-throughput edge reverse proxy and token-bucket rate limiter engineered to protect microservice APIs from traffic surges.",
      architecture: "Go proxy daemon running alongside Envoy sidecars with Redis cluster state synchronization.",
      highlights: [
        "Memory footprint under 18MB per worker process",
        "Automatic anomaly mitigation and dynamic IP reputation scoring"
      ]
    }
  ],

  stack: {
    "System Analysis & Modeling": ["UML Diagramming", "BPMN 2.0", "ERD & Relational Schemas", "Use-Case Specs", "Functional Requirements (SRS)", "Business Process Re-engineering"],
    "Project Management & Agile": ["Scrum & Kanban", "Sprint Planning", "Linear & Jira", "Trello", "Risk Assessment", "Stakeholder Communication"],
    "Programming & Web Technologies": ["JavaScript / TypeScript", "Python", "SQL (PostgreSQL / MySQL)", "HTML5 & Tailwind CSS", "React & Next.js", "Node.js"],
    "Design & Collaboration Tools": ["Figma", "Draw.io / Miro", "Git & GitHub", "Notion", "Postman", "VS Code"]
  },

  changelog: [
    {
      version: "v1.2",
      date: "2025 – Present",
      role: "System Analyst & Project Lead",
      company: "Academic & Client Projects",
      badge: "Current",
      summary: "Leading software requirement gathering, systems modeling, and agile sprint delivery for web-based enterprise applications.",
      commits: [
        "Analyzed and documented comprehensive SRS and business process workflows for enterprise software.",
        "Coordinated agile development sprints, backlog grooming, and user acceptance testing (UAT).",
        "Modeled normalized relational database architectures with optimized indexing and constraints."
      ]
    },
    {
      version: "v1.0",
      date: "2024",
      role: "Junior Web Developer & Analyst",
      company: "Independent Projects",
      badge: "Shipped",
      summary: "Designed and implemented interactive frontend web systems and database integration layers.",
      commits: [
        "Engineered responsive user interfaces with Tailwind CSS and modern JavaScript.",
        "Collaborated on API design and data validation schema specifications."
      ]
    }
  ],

  testimonials: [
    {
      name: "Budi Santoso",
      title: "Senior Technical Architect",
      company: "Enterprise Solutions",
      avatar: "BS",
      quote: "Sulthan possesses a rare clarity in translating complex client requirements into structured, actionable UML diagrams and clean database models. A fantastic collaborator."
    },
    {
      name: "Rina Kusuma",
      title: "Agile Project Lead",
      company: "Tech Sprint Studio",
      avatar: "RK",
      quote: "Working with Sulthan on sprint planning and system modeling always ensures tasks are delivered on-schedule without ambiguity. Highly recommended for any engineering team."
    },
    {
      name: "Marcus Vance",
      title: "Lead Engineer",
      company: "Apex Systems Labs",
      avatar: "MV",
      quote: "Sulthan's documentation rigor and attention to software craft set a high standard. He bridges business needs and technical architecture effortlessly."
    }
  ]
};

// =============================================================================
// RENDERING ENGINES — Keep DOM 100% in sync with PORTFOLIO_DATA
// =============================================================================

// Priority & Status formatting helpers
function getPriorityBadge(priority) {
  switch (priority) {
    case 'urgent':
      return `<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono text-red-400 bg-red-950/40 border border-red-800/40">
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> Urgent
      </span>`;
    case 'high':
      return `<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono text-amber-400 bg-amber-950/40 border border-amber-800/40">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> High
      </span>`;
    case 'medium':
      return `<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono text-blue-400 bg-blue-950/40 border border-blue-800/40">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Medium
      </span>`;
    default:
      return `<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800">
        <span class="w-1.5 h-1.5 rounded-full bg-zinc-500"></span> Low
      </span>`;
  }
}

function getStatusBadge(status) {
  switch (status) {
    case 'completed':
      return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-800/40">
        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Done
      </span>`;
    case 'in-progress':
      return `<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium text-[#828fff] bg-[#5e6ad2]/15 border border-[#5e6ad2]/30">
        <span class="w-1.5 h-1.5 rounded-full bg-[#5e6ad2] animate-ping"></span> In Progress
      </span>`;
    default:
      return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800">
        <span class="w-1.5 h-1.5 rounded-full bg-zinc-500"></span> Backlog
      </span>`;
  }
}

// 1. Render Profile, Hero, Stats (1-column layout requested by user), and Global Meta
function renderProfile() {
  const p = PORTFOLIO_DATA.profile;
  const h = PORTFOLIO_DATA.hero || {};

  // Browser Tab Title & Meta Description
  const pageTitle = document.getElementById('page-title');
  if (pageTitle) {
    pageTitle.textContent = `${p.name} — ${p.role}`;
  }
  const metaDesc = document.getElementById('meta-description');
  if (metaDesc) {
    metaDesc.setAttribute('content', `${p.name} (${p.role}). ${p.bio}`);
  }

  // Initial letter
  const initial = (p.name || 'S').trim().charAt(0).toUpperCase();

  // Navbar elements
  const navInitial = document.getElementById('nav-logo-initial');
  if (navInitial) navInitial.textContent = initial;

  const navName = document.getElementById('nav-profile-name');
  if (navName) navName.textContent = p.name;

  const navStatus = document.getElementById('nav-status-text');
  if (navStatus) navStatus.textContent = p.status;

  // Hero Section
  const heroEyebrow = document.getElementById('hero-eyebrow');
  if (heroEyebrow) {
    heroEyebrow.textContent = `${p.cycle} · ${p.role}`;
  }

  const heroHeadline = document.getElementById('hero-headline');
  if (heroHeadline && h.headlineMain) {
    heroHeadline.innerHTML = `${h.headlineMain}<br /><span class="text-zinc-500">${h.headlineSub || ''}</span>`;
  }

  const heroBio = document.getElementById('hero-bio');
  if (heroBio) {
    heroBio.textContent = p.bio;
  }

  // Dashboard Breadcrumbs
  const cleanHandle = (p.handle || p.name).replace('@', '').toLowerCase().replace(/[^a-z0-9]/g, '-');
  const breadcrumb = document.getElementById('dashboard-breadcrumb');
  if (breadcrumb) {
    breadcrumb.textContent = `workspace / ${cleanHandle} / telemetry-monitor`;
  }

  const velocityBadge = document.getElementById('dashboard-velocity-badge');
  if (velocityBadge) {
    velocityBadge.textContent = `Velocity ${p.velocity}`;
  }

  // Stats Strip (Clean 1-column vertical hierarchy per card, green status UNDER white text)
  const statsStrip = document.getElementById('stats-strip');
  if (statsStrip) {
    const statsList = h.stats || [
      { label: "EXECUTION VELOCITY", value: p.velocity, status: "On Track" },
      { label: "SYSTEM ANALYSIS ACCURACY", value: "99.8%", status: "Optimal" },
      { label: "ARCHITECTURAL SPECS", value: "14+ Models", status: "Verified" },
      { label: "ACTIVE SPRINT", value: p.cycle, status: "In Progress" }
    ];

    statsStrip.innerHTML = statsList.map(st => `
      <div class="p-4 rounded-xl bg-surface-1 border border-hairline specular-top flex flex-col justify-between">
        <div>
          <div class="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">${st.label}</div>
          <div class="text-xl sm:text-2xl font-semibold font-mono text-white tracking-tight">${st.value}</div>
        </div>
        <div class="mt-3 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 inline-block"></span>
          <span>${st.status}</span>
        </div>
      </div>
    `).join('');
  }

  // Intake Section
  const intakeAvailability = document.getElementById('intake-availability-text');
  if (intakeAvailability) {
    intakeAvailability.textContent = `NEXT AVAILABILITY: ${p.status.toUpperCase()}`;
  }

  const intakeGithub = document.getElementById('intake-github-link');
  if (intakeGithub) {
    intakeGithub.href = p.github;
  }

  // Footer
  const footerInitial = document.getElementById('footer-logo-initial');
  if (footerInitial) footerInitial.textContent = initial;

  const footerText = document.getElementById('footer-text');
  if (footerText) {
    footerText.textContent = `${p.name} · Crafted with Linear aesthetic discipline`;
  }

  const footerGithub = document.getElementById('footer-github');
  if (footerGithub) footerGithub.href = p.github;

  const footerTwitter = document.getElementById('footer-twitter');
  if (footerTwitter) footerTwitter.href = p.twitter;

  const footerLinkedin = document.getElementById('footer-linkedin');
  if (footerLinkedin) {
    const cleanUrl = p.linkedin.startsWith('http') ? p.linkedin : `https://${p.linkedin}`;
    footerLinkedin.href = cleanUrl;
  }
}

// Global App State
let currentCategory = 'all';
let currentSearch = '';
let currentView = 'list'; // 'list' | 'grid'
let selectedProjectIndex = 0;
let filteredProjects = [...PORTFOLIO_DATA.projects];

// 2. Render Category Filter Tabs Dynamically from actual projects
function renderCategoryTabs() {
  const container = document.getElementById('category-tabs-container');
  if (!container) return;

  const uniqueCategories = ['all', ...new Set(PORTFOLIO_DATA.projects.map(p => p.category))];

  container.innerHTML = uniqueCategories.map(cat => {
    const isAll = cat.toLowerCase() === 'all';
    const isSelected = currentCategory.toLowerCase() === cat.toLowerCase();
    const label = isAll ? 'All' : cat;

    return `
      <button data-category-tab="${cat}" 
              class="px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${isSelected ? 'bg-surface-2 text-white border border-hairline-strong' : 'text-zinc-400 hover:text-white'}">
        ${label}
      </button>
    `;
  }).join('');

  const tabButtons = container.querySelectorAll('[data-category-tab]');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playClick();
      currentCategory = btn.getAttribute('data-category-tab');
      selectedProjectIndex = 0;
      renderCategoryTabs();
      renderProjects();
    });
  });
}

// 3. Render Projects List & Grid (Clickable)
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  // Filter
  filteredProjects = PORTFOLIO_DATA.projects.filter(project => {
    const matchesCategory = currentCategory === 'all' || 
      project.category.toLowerCase().trim() === currentCategory.toLowerCase().trim();
    const matchesSearch = currentSearch === '' || 
      project.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      project.summary.toLowerCase().includes(currentSearch.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(currentSearch.toLowerCase())) ||
      project.id.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const countBadge = document.getElementById('project-count-badge');
  if (countBadge) {
    countBadge.textContent = `${filteredProjects.length} issue${filteredProjects.length !== 1 ? 's' : ''}`;
  }

  if (filteredProjects.length === 0) {
    container.innerHTML = `
      <div class="py-20 text-center text-zinc-500 border border-hairline rounded-xl bg-surface-1">
        <p class="text-sm">No issues match the active filter query.</p>
        <button onclick="resetFilters()" class="mt-3 text-xs text-[#828fff] hover:underline">Reset filters</button>
      </div>
    `;
    return;
  }

  if (currentView === 'list') {
    // Linear Issue Table View
    let html = `
      <div class="border border-hairline rounded-xl overflow-hidden bg-surface-1 specular-top shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
        <!-- Table Header -->
        <div class="hidden md:grid grid-cols-12 gap-3 px-4 py-2.5 text-xs font-mono text-zinc-500 border-b border-hairline bg-surface-2/60">
          <div class="col-span-2">ISSUE ID</div>
          <div class="col-span-5">TITLE & ARCHITECTURE</div>
          <div class="col-span-2">PRIORITY</div>
          <div class="col-span-2">STATUS</div>
          <div class="col-span-1 text-right">INSPECT</div>
        </div>
        <div class="divide-y divide-hairline">
    `;

    filteredProjects.forEach((proj, idx) => {
      const isSelected = idx === selectedProjectIndex;
      html += `
        <div class="issue-row px-4 py-3.5 cursor-pointer flex flex-col md:grid md:grid-cols-12 md:gap-3 md:items-center ${isSelected ? 'selected' : ''}"
             onclick="openProjectModal('${proj.id}')"
             onmouseenter="setSelectedProject(${idx})">
          <div class="col-span-2 flex items-center gap-2 mb-1 md:mb-0">
            <span class="font-mono text-xs text-zinc-400 font-medium">${proj.id}</span>
            <span class="text-[11px] text-zinc-500 hidden sm:inline">· ${proj.cycle}</span>
          </div>
          
          <div class="col-span-5 pr-2 mb-2 md:mb-0">
            <div class="font-medium text-sm text-[#f7f8f8] flex items-center gap-2">
              <span>${proj.title}</span>
            </div>
            <p class="text-xs text-zinc-400 mt-0.5 line-clamp-1">${proj.summary}</p>
            <div class="flex flex-wrap gap-1 mt-1.5">
              ${proj.tech.slice(0, 3).map(t => `<span class="px-1.5 py-0.2 bg-white/[0.04] text-[10px] font-mono text-zinc-400 rounded border border-white/5">${t}</span>`).join('')}
              ${proj.tech.length > 3 ? `<span class="text-[10px] text-zinc-500 font-mono">+${proj.tech.length - 3}</span>` : ''}
            </div>
          </div>

          <div class="col-span-2 mb-2 md:mb-0 flex items-center">
            ${getPriorityBadge(proj.priority)}
          </div>

          <div class="col-span-2 mb-2 md:mb-0 flex items-center">
            ${getStatusBadge(proj.status)}
          </div>

          <div class="col-span-1 flex items-center justify-end">
            <button class="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-white/5 transition" title="Inspect Project Details">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      `;
    });

    html += `</div></div>`;
    container.innerHTML = html;
  } else {
    // High-Fidelity Grid Card View
    let html = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">`;
    filteredProjects.forEach((proj, idx) => {
      html += `
        <div class="linear-glow-card specular-top p-5 flex flex-col justify-between cursor-pointer group"
             onclick="openProjectModal('${proj.id}')">
          <div>
            <!-- Card Header -->
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs text-[#828fff]">${proj.id}</span>
                <span class="text-[11px] text-zinc-500 font-mono">${proj.cycle}</span>
              </div>
              <div>${getPriorityBadge(proj.priority)}</div>
            </div>

            <!-- Card Title -->
            <h3 class="text-base font-semibold text-white group-hover:text-[#828fff] transition-colors mb-1.5">
              ${proj.title}
            </h3>
            <p class="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
              ${proj.summary}
            </p>

            <!-- Metrics Highlight -->
            <div class="p-2.5 rounded-lg bg-black/40 border border-hairline mb-4 font-mono text-xs text-zinc-300 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span class="truncate">${proj.metrics}</span>
            </div>
          </div>

          <!-- Bottom Meta -->
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4">
              ${proj.tech.map(t => `<span class="px-2 py-0.5 bg-white/[0.04] text-[11px] font-mono text-zinc-400 rounded border border-white/5">${t}</span>`).join('')}
            </div>

            <div class="pt-3 border-t border-hairline flex items-center justify-between text-xs">
              ${getStatusBadge(proj.status)}
              <span class="text-zinc-400 group-hover:text-white flex items-center gap-1 transition-colors">
                Inspect Specs
                <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      `;
    });
    html += `</div>`;
    container.innerHTML = html;
  }
}

// 4. Render Changelog
function renderChangelog() {
  const container = document.getElementById('changelog-container');
  if (!container) return;

  let html = ``;
  PORTFOLIO_DATA.changelog.forEach((item, index) => {
    html += `
      <div class="relative pl-8 pb-10 border-l border-hairline last:pb-0">
        <!-- Milestone Node -->
        <div class="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#5e6ad2] ring-4 ring-[#010102]"></div>

        <div class="flex flex-wrap items-center gap-2 mb-1.5">
          <span class="font-mono text-xs font-semibold text-[#828fff]">${item.version}</span>
          <span class="text-xs text-zinc-400">·</span>
          <span class="text-xs text-zinc-400 font-mono">${item.date}</span>
          <span class="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.05] border border-white/10 text-zinc-300">${item.badge}</span>
        </div>

        <h3 class="text-base font-semibold text-white mb-0.5">
          ${item.role} <span class="text-zinc-500 font-normal">at</span> <span class="text-[#f7f8f8]">${item.company}</span>
        </h3>
        <p class="text-sm text-zinc-400 mb-3">${item.summary}</p>

        <ul class="space-y-1.5 text-xs text-zinc-300">
          ${item.commits.map(c => `
            <li class="flex items-start gap-2">
              <span class="text-zinc-500 mt-0.5 font-mono">↳</span>
              <span>${c}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  });

  container.innerHTML = html;
}

// 5. Render Testimonials
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  let html = `<div class="grid grid-cols-1 md:grid-cols-3 gap-5">`;
  PORTFOLIO_DATA.testimonials.forEach(t => {
    html += `
      <div class="linear-glow-card specular-top p-6 flex flex-col justify-between">
        <p class="text-sm text-zinc-300 italic leading-relaxed mb-6">
          "${t.quote}"
        </p>
        <div class="flex items-center gap-3 pt-4 border-t border-hairline">
          <div class="w-8 h-8 rounded-full bg-[#5e6ad2]/20 border border-[#5e6ad2]/40 text-[#828fff] flex items-center justify-center font-mono text-xs font-semibold">
            ${t.avatar}
          </div>
          <div>
            <h4 class="text-xs font-semibold text-white">${t.name}</h4>
            <p class="text-[11px] text-zinc-500">${t.title}, ${t.company}</p>
          </div>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// 6. Render Skills Stack Dynamically from ANY keys in PORTFOLIO_DATA.stack
function renderStack() {
  const container = document.getElementById('stack-container');
  if (!container) return;

  const icons = ["⚡", "📊", "🖥️", "🖧", "☁️", "🛠️", "⚙️", "🔒"];
  const stackEntries = Object.entries(PORTFOLIO_DATA.stack);

  let html = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">`;
  stackEntries.forEach(([categoryName, items], index) => {
    const icon = icons[index % icons.length];
    html += `
      <div class="p-4 rounded-xl bg-surface-1 border border-hairline specular-top">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-sm">${icon}</span>
          <h4 class="text-xs font-semibold text-zinc-200 tracking-wide uppercase font-mono">${categoryName}</h4>
        </div>
        <div class="flex flex-wrap gap-1.5">
          ${items.map(item => `
            <span class="px-2 py-1 text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/5 rounded hover:border-white/20 transition-colors">
              ${item}
            </span>
          `).join('')}
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// Global Re-render Function
window.renderAll = function() {
  renderProfile();
  renderCategoryTabs();
  renderProjects();
  renderChangelog();
  renderTestimonials();
  renderStack();
};

// DOM Initializer
document.addEventListener('DOMContentLoaded', () => {
  window.renderAll();
  setupEventListeners();
  setupCommandPalette();
  setupKeyboardAccessibility();
});

// Event Listeners for Filters & Interactions
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('project-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      selectedProjectIndex = 0;
      renderProjects();
    });
  }

  // View switchers
  const btnListView = document.getElementById('view-list-btn');
  const btnGridView = document.getElementById('view-grid-btn');

  if (btnListView && btnGridView) {
    btnListView.addEventListener('click', () => {
      sound.playClick();
      currentView = 'list';
      btnListView.classList.add('bg-white/10', 'text-white');
      btnGridView.classList.remove('bg-white/10', 'text-white');
      renderProjects();
    });

    btnGridView.addEventListener('click', () => {
      sound.playClick();
      currentView = 'grid';
      btnGridView.classList.add('bg-white/10', 'text-white');
      btnListView.classList.remove('bg-white/10', 'text-white');
      renderProjects();
    });
  }

  // Sound FX toggle button
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const active = sound.toggle();
      soundBtn.setAttribute('title', active ? 'Sound FX: Enabled' : 'Sound FX: Muted');
      soundBtn.innerHTML = active ? `
        <svg class="w-4 h-4 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ` : `
        <svg class="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      `;
      showToast(active ? "Audio feedback enabled" : "Audio feedback muted");
    });
  }
}

function setSelectedProject(idx) {
  selectedProjectIndex = idx;
  const rows = document.querySelectorAll('.issue-row');
  rows.forEach((r, i) => {
    if (i === idx) {
      r.classList.add('selected');
    } else {
      r.classList.remove('selected');
    }
  });
}

function resetFilters() {
  currentCategory = 'all';
  currentSearch = '';
  const searchInput = document.getElementById('project-search-input');
  if (searchInput) searchInput.value = '';
  renderCategoryTabs();
  renderProjects();
}

// Project Details Inspector Modal
function openProjectModal(projectId) {
  sound.playOpen();
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById('project-inspector-modal');
  const content = document.getElementById('project-inspector-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <!-- Modal Header -->
    <div class="px-6 py-4 border-b border-hairline flex items-center justify-between bg-surface-2/60">
      <div class="flex items-center gap-3">
        <span class="font-mono text-sm font-semibold text-[#828fff]">${proj.id}</span>
        <span class="text-zinc-500 font-mono text-xs">/</span>
        <span class="text-xs text-zinc-400 font-mono">${proj.cycle}</span>
        ${getPriorityBadge(proj.priority)}
        ${getStatusBadge(proj.status)}
      </div>
      <button onclick="closeProjectModal()" class="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-white/5 transition" title="Close">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Modal Body -->
    <div class="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
      <div>
        <h2 class="text-2xl font-bold text-white mb-2">${proj.title}</h2>
        <p class="text-sm text-zinc-300 leading-relaxed">${proj.description}</p>
      </div>

      <!-- Key Performance Benchmark Strip -->
      <div class="p-4 rounded-xl bg-black/60 border border-hairline flex items-center justify-between">
        <div>
          <span class="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">Production Metrics</span>
          <span class="text-sm font-mono text-emerald-400 font-medium">${proj.metrics}</span>
        </div>
        <div class="text-right">
          <span class="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">Category</span>
          <span class="text-xs font-mono text-zinc-300">${proj.category}</span>
        </div>
      </div>

      <!-- Architecture Specification -->
      <div>
        <h3 class="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">Systems Architecture</h3>
        <div class="p-4 rounded-xl bg-surface-2 border border-hairline text-xs font-mono text-zinc-300 leading-relaxed">
          ${proj.architecture}
        </div>
      </div>

      <!-- Engineering Highlights -->
      <div>
        <h3 class="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">Engineering Highlights</h3>
        <ul class="space-y-2 text-sm text-zinc-300">
          ${proj.highlights.map(h => `
            <li class="flex items-start gap-2.5">
              <span class="text-[#828fff] mt-0.5 font-bold">✓</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Technologies -->
      <div>
        <h3 class="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">Tech Stack</h3>
        <div class="flex flex-wrap gap-2">
          ${proj.tech.map(t => `<span class="px-2.5 py-1 text-xs font-mono text-zinc-200 bg-white/[0.04] border border-white/10 rounded-md">${t}</span>`).join('')}
        </div>
      </div>
    </div>

    <!-- Modal Footer Actions (Clean, Pure Clickable) -->
    <div class="px-6 py-4 border-t border-hairline bg-surface-2/40 flex items-center justify-between">
      <div class="text-xs font-mono text-zinc-500">
        Project Architectural Specifications
      </div>
      <div class="flex items-center gap-3">
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary text-xs">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          View Source Code
        </a>
        <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs">
          <span>Live Deployment</span>
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeProjectModal() {
  sound.playClick();
  const modal = document.getElementById('project-inspector-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Linear Issue Intake Modal ("Hire Me / Contact")
function openIntakeModal() {
  sound.playOpen();
  const modal = document.getElementById('intake-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
      const input = document.getElementById('intake-title');
      if (input) input.focus();
    }, 50);
  }
}

function closeIntakeModal() {
  sound.playClick();
  const modal = document.getElementById('intake-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function submitIntake(event) {
  if (event) event.preventDefault();
  sound.playSuccess();

  const title = document.getElementById('intake-title')?.value || 'New Project';
  const email = document.getElementById('intake-email')?.value || 'client@example.com';
  const desc = document.getElementById('intake-desc')?.value || '';

  closeIntakeModal();
  showToast(`Issue created: "${title}". Opening email client...`);

  // Trigger mailto fallback
  const subject = encodeURIComponent(`[Linear Intake] ${title}`);
  const body = encodeURIComponent(`From: ${email}\n\nProject Scope:\n${desc}`);
  setTimeout(() => {
    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;
  }, 700);
}

// Command Palette (Clickable search and jump menu, No shortcut badges)
function setupCommandPalette() {
  const palette = document.getElementById('command-palette-modal');
  const input = document.getElementById('command-palette-input');
  const resultsContainer = document.getElementById('command-palette-results');
  if (!palette || !input || !resultsContainer) return;

  const actions = [
    { type: 'action', title: 'File New Issue / Contact', run: () => openIntakeModal() },
    { type: 'action', title: 'Copy Email Address', run: () => copyEmail() },
    { type: 'action', title: 'View GitHub Profile', run: () => window.open(PORTFOLIO_DATA.profile.github, '_blank') },
    { type: 'action', title: 'Download Resume (CV)', run: () => downloadResume() },
    { type: 'action', title: 'Toggle Audio Feedback', run: () => document.getElementById('sound-toggle-btn')?.click() },
    { type: 'nav', title: 'Scroll to Active Issues (Projects)', target: '#projects' },
    { type: 'nav', title: 'Scroll to Systems Changelog', target: '#changelog' },
    { type: 'nav', title: 'Scroll to Tech Stack Matrix', target: '#stack' },
    { type: 'nav', title: 'Scroll to Peer Testimonials', target: '#testimonials' }
  ];

  PORTFOLIO_DATA.projects.forEach(p => {
    actions.push({
      type: 'project',
      title: `${p.id}: ${p.title}`,
      subtitle: p.summary,
      run: () => openProjectModal(p.id)
    });
  });

  let paletteIndex = 0;
  let currentFilteredActions = [...actions];

  function renderPaletteItems() {
    if (currentFilteredActions.length === 0) {
      resultsContainer.innerHTML = `
        <div class="p-8 text-center text-xs text-zinc-500 font-mono">
          No matching items found.
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = currentFilteredActions.map((item, idx) => {
      const isSelected = idx === paletteIndex;
      return `
        <div class="px-4 py-2.5 rounded-lg flex items-center justify-between cursor-pointer transition ${isSelected ? 'bg-[#5e6ad2]/20 text-white border-l-2 border-[#5e6ad2]' : 'text-zinc-300 hover:bg-white/5'}"
             onclick="executePaletteItem(${idx})"
             onmouseenter="setPaletteIndex(${idx})">
          <div class="flex items-center gap-3">
            <span class="text-zinc-500 font-mono text-xs">
              ${item.type === 'action' ? '⚡' : item.type === 'nav' ? '↗' : '📦'}
            </span>
            <div>
              <div class="text-xs font-medium text-white">${item.title}</div>
              ${item.subtitle ? `<div class="text-[11px] text-zinc-400 line-clamp-1">${item.subtitle}</div>` : ''}
            </div>
          </div>
          <span class="text-zinc-500 text-xs">→</span>
        </div>
      `;
    }).join('');
  }

  window.setPaletteIndex = (idx) => {
    paletteIndex = idx;
    renderPaletteItems();
  };

  window.executePaletteItem = (idx) => {
    sound.playClick();
    const item = currentFilteredActions[idx];
    closeCommandPalette();
    if (!item) return;

    if (item.run) {
      item.run();
    } else if (item.target) {
      const el = document.querySelector(item.target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    currentFilteredActions = actions.filter(a => {
      return a.title.toLowerCase().includes(q) || 
             (a.subtitle && a.subtitle.toLowerCase().includes(q));
    });
    paletteIndex = 0;
    renderPaletteItems();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      paletteIndex = (paletteIndex + 1) % currentFilteredActions.length;
      renderPaletteItems();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      paletteIndex = (paletteIndex - 1 + currentFilteredActions.length) % currentFilteredActions.length;
      renderPaletteItems();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      window.executePaletteItem(paletteIndex);
    } else if (e.key === 'Escape') {
      closeCommandPalette();
    }
  });

  window.openCommandPalette = () => {
    sound.playOpen();
    palette.classList.remove('hidden');
    palette.classList.add('flex');
    input.value = '';
    currentFilteredActions = [...actions];
    paletteIndex = 0;
    renderPaletteItems();
    setTimeout(() => input.focus(), 40);
  };

  window.closeCommandPalette = () => {
    sound.playClick();
    palette.classList.add('hidden');
    palette.classList.remove('flex');
  };
}

// Accessible Escape key to close modals (No single-letter shortcuts)
function setupKeyboardAccessibility() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeIntakeModal();
      window.closeCommandPalette?.();
    }
    // Allow Ctrl+K or Cmd+K as standard power-user search
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      window.openCommandPalette?.();
    }
  });
}

// Utility: Copy Email & Toast Notification
function copyEmail() {
  sound.playSuccess();
  navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email).then(() => {
    showToast(`Copied ${PORTFOLIO_DATA.profile.email} to clipboard!`);
  }).catch(() => {
    showToast(`Email: ${PORTFOLIO_DATA.profile.email}`);
  });
}

function downloadResume() {
  sound.playSuccess();
  showToast("Opening GitHub profile...");
  setTimeout(() => {
    window.open(PORTFOLIO_DATA.profile.github, "_blank");
  }, 600);
}

function showToast(message) {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast-slide-up px-4 py-2.5 rounded-lg bg-[#0f1011] border border-[#34343a] text-xs font-mono text-white shadow-2xl flex items-center gap-2.5';
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-[#5e6ad2]"></span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}
