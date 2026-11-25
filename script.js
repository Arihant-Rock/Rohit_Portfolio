const projects = [
  {
    title: "TNM Cancer Staging Decision Support",
    category: "rag",
    icon: "✚",
    description:
      "An AI-powered clinical decision-support platform that extracts TNM values from structured inputs or medical narratives, retrieves AJCC guidance, and combines deterministic staging rules with grounded clinical guidance.",
    tags: ["Generative AI", "RAG", "Pinecone", "FastAPI", "AWS ECS"],
    details: [
      "Built LLM-based agents to extract tumor size (T), lymph node involvement (N), and metastasis (M) from clinical narratives.",
      "Indexed AJCC guideline PDFs and oncology references in Pinecone for traceable retrieval-augmented responses.",
      "Combined retrieved guidance with a rule-based engine to compute AJCC stage groups deterministically.",
      "Generated stage-specific clinical considerations and follow-up guidance grounded in retrieved references.",
      "Exposed staging, guidance, and chatbot workflows through FastAPI REST endpoints for structured and unstructured inputs.",
      "Added role-based authentication and administrative controls for sensitive clinical workflows.",
      "Containerized services with Docker and deployed on AWS ECS using EC2."
    ]
  },
  {
    title: "AI-Powered Database Migration with AWS Bedrock",
    category: "agents",
    icon: "⇄",
    description:
      "A serverless migration solution that analyzes MySQL and PostgreSQL schemas, recommends source-to-target column mappings using semantic matching and RAG, and runs migrations after human approval.",
    tags: ["Amazon Bedrock", "Strands Agents", "AWS DMS", "S3 Vectors", "AWS Lambda"],
    details: [
      "Built a serverless workflow to analyze schemas and automate source-to-target column mapping between MySQL and PostgreSQL.",
      "Created a Strands agent with Amazon Bedrock AgentCore, Claude Sonnet, and Titan Text Embeddings v2.",
      "Combined embedding similarity (35%), column-name similarity (45%), and data-type compatibility (20%) to rank mapping recommendations.",
      "Used Amazon Bedrock Knowledge Bases and Amazon S3 Vectors to retrieve schema context.",
      "Developed Python Lambda functions and API Gateway endpoints for schema ingestion, review, validation, migration jobs, and reporting.",
      "Integrated AWS DMS Serverless to execute migrations after human approval.",
      "Used Cognito, IAM, KMS, and Secrets Manager for authentication and credential management.",
      "Automated infrastructure deployment and validation with AWS SAM and CloudFormation."
    ]
  },
  {
    title: "AI Assistant for Home Insurance Claims",
    category: "agents",
    icon: "⌂",
    description:
      "An AI-assisted platform for insurance brokers that analyzes homeowner policy documents, answers coverage questions, and streamlines claim workflows for tornado, hail, and wind events.",
    tags: ["IBM watsonx.ai", "watsonx Orchestrate", "Document AI", "IBM IAM", "API Connect"],
    details: [
      "Generated concise coverage summaries from unstructured policy PDFs using watsonx.ai and watsonx Orchestrate.",
      "Built an 'Ask' chatbot interface for broker questions grounded in policy document analysis.",
      "Orchestrated policy upload, analysis, question answering, and export workflows.",
      "Implemented Admin, Editor, and Viewer access controls with MFA using IBM IAM and API Connect.",
      "Bundled Smart Sheets, PDFs, and conversation logs into downloadable ZIP exports.",
      "Integrated Twilio and SendGrid for email and SMS notifications."
    ]
  },
  {
    title: "AI-Powered Lease Management Platform",
    category: "agents",
    icon: "▤",
    description:
      "A proof of concept for a real-time speech-to-speech lease assistant, prototyping lease processing and negotiation workflows with conversational AI and a simulated customer database.",
    tags: ["LangGraph", "LangChain", "WebSockets", "NLP", "Speech AI"],
    details: [
      "Prototyped a real-time speech-to-speech chatbot for lease processing and negotiation.",
      "Used WebSockets, LangChain, and NLP to support interactive lease discussions and streamlined workflows.",
      "Integrated a simulated customer database to validate end-to-end system components.",
      "Researched real-time speech recognition, natural language understanding, and dynamic data integration."
    ]
  },
  {
    title: "MedBot - Conversational AI for Healthcare",
    category: "agents",
    icon: "✚",
    description:
      "A personalized voice-enabled healthcare assistant that uses conversation context to answer questions and support tasks such as appointment scheduling.",
    tags: ["LangGraph", "LangChain", "Deepgram", "MongoDB", "Redis", "Groq"],
    details: [
      "Built personalized responses using user profile data and conversation history.",
      "Used asynchronous processing to improve responsiveness in real-time conversations.",
      "Optimized LLM performance with Redis and Momento Cache.",
      "Persisted conversation history across sessions with SQLite and MongoDB.",
      "Added pause detection to make spoken interactions feel more natural.",
      "Created LangGraph and LangChain pipelines for appointment scheduling and query resolution, with a supervisor agent to validate responses.",
      "Designed prompt and memory management for contextual, personalized conversations.",
      "Improved response latency with caching, asynchronous flows, and real-time audio transcription."
    ]
  },
  {
    title: "Intelligent QnA System with Azure AI",
    category: "rag",
    icon: "⌕",
    description:
      "A Retrieval-Augmented Generation system using Azure AI Foundry to answer natural-language questions across large document collections with contextual, relevant responses.",
    tags: ["Azure AI Foundry", "Azure AI Search", "Azure Cognitive Search", "RAG", "Azure Blob Storage"],
    details: [
      "Stored source documents in Azure Blob Storage and created vector indices with Azure Cognitive Search.",
      "Implemented semantic search with Azure AI Search to retrieve relevant document passages.",
      "Built a RAG pipeline that supplies retrieved context to an Azure-hosted language model.",
      "Tuned retrieval and chunking strategies to improve answer relevance and reduce latency.",
      "Designed the system to support scalable question answering across enterprise knowledge bases."
    ]
  },
  {
    title: "AI Appointment Scheduling Agent",
    category: "agents",
    icon: "✳",
    description:
      "A healthcare scheduling workflow coordinated by LangGraph agents, with secure sign-in, live availability lookups, and voice input and response.",
    tags: ["LangGraph", "GPT-4o", "FastAPI", "Multi-Agent"]
  },
  {
    title: "AI Scribe Platform",
    category: "rag",
    icon: "◉",
    description:
      "An audio-to-notes application that transcribes recordings, creates useful summaries with language models, and provides a React interface with role-based access.",
    tags: ["Assembly AI", "LLMs", "React", "FastAPI"]
  },
  {
    title: "RAG Document Intelligence Chatbot",
    category: "rag",
    icon: "⌕",
    description:
      "A document question-answering tool that indexes PDF content, retrieves relevant passages from a vector store, and generates responses with an LLM.",
    tags: ["LangChain", "ChromaDB", "RAG", "Mistral"]
  },
  {
    title: "Footfall Counting & Motion Detection",
    category: "vision",
    icon: "◎",
    description:
      "A real-time people-counting pipeline using object detection and tracking, tuned to run with low latency on Raspberry Pi edge hardware.",
    tags: ["YOLO", "OpenCV", "Edge AI", "Raspberry Pi"]
  },
  {
    title: "ANPR System",
    category: "vision",
    icon: "▣",
    description:
      "A number-plate recognition workflow combining vehicle detection and OCR for dependable processing in challenging, real-world conditions.",
    tags: ["YOLO", "PaddleOCR", "Computer Vision", "Edge AI"]
  }
];

const projectsGrid = document.querySelector("#projectsGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const moreProjectsButton = document.querySelector("#moreProjects");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#primary-navigation");
const navLinks = navMenu.querySelectorAll('a[href^="#"]');
const navSections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const skillsSearch = document.querySelector("#skillsSearch");
const clearSkillsSearchButton = document.querySelector("#clearSkillsSearch");
const skillsSearchStatus = document.querySelector("#skillsSearchStatus");
const skillCards = document.querySelectorAll("#skillsGrid .skill-card");

let activeFilter = "all";
let showAllProjects = false;

function setActiveNavLink(sectionId) {
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${sectionId}`) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

const initialSectionId = window.location.hash.slice(1);
setActiveNavLink(
  navSections.some((section) => section.id === initialSectionId)
    ? initialSectionId
    : "home"
);

if ("IntersectionObserver" in window) {
  const sectionVisibility = new Map();
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        sectionVisibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
      });

      const activeSection = [...sectionVisibility.entries()]
        .filter(([, ratio]) => ratio > 0)
        .sort((first, second) => second[1] - first[1])[0];

      if (activeSection) setActiveNavLink(activeSection[0]);
    },
    { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
  );

  navSections.forEach((section) => sectionObserver.observe(section));
}

const scrollProgress = document.querySelector("#scrollProgress");
let scrollProgressFrame = null;

function updateScrollProgress() {
  if (scrollProgressFrame !== null) return;

  scrollProgressFrame = window.requestAnimationFrame(() => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    scrollProgress.style.transform = `scaleX(${progress})`;
    scrollProgressFrame = null;
  });
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

const hero = document.querySelector(".hero");
const heroMountains = document.querySelector(".hero-mountains");
const supportsParallax =
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (hero && heroMountains && supportsParallax) {
  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * -10;
    const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;
    heroMountains.style.setProperty("--mountain-offset-x", `${offsetX.toFixed(1)}px`);
    heroMountains.style.setProperty("--mountain-offset-y", `${offsetY.toFixed(1)}px`);
  });

  hero.addEventListener("pointerleave", () => {
    heroMountains.style.setProperty("--mountain-offset-x", "0px");
    heroMountains.style.setProperty("--mountain-offset-y", "0px");
  });
}

function filterSkills() {
  const query = skillsSearch.value.trim().toLocaleLowerCase();
  let visibleCategories = 0;
  let visibleSkills = 0;

  skillCards.forEach((card) => {
    const categoryMatches = card.querySelector("h3").textContent.toLocaleLowerCase().includes(query);
    let matchedSkills = 0;

    card.querySelectorAll(".chip-list span").forEach((skill) => {
      const matches = !query || categoryMatches || skill.textContent.toLocaleLowerCase().includes(query);
      skill.hidden = !matches;
      if (matches) matchedSkills += 1;
    });

    card.hidden = query.length > 0 && matchedSkills === 0;
    if (!card.hidden) visibleCategories += 1;
    visibleSkills += matchedSkills;
  });

  clearSkillsSearchButton.hidden = query.length === 0;
  skillsSearchStatus.textContent = query
    ? `${visibleSkills} matching ${visibleSkills === 1 ? "skill" : "skills"} in ${visibleCategories} ${visibleCategories === 1 ? "category" : "categories"}`
    : "";
}

skillsSearch.addEventListener("input", filterSkills);
clearSkillsSearchButton.addEventListener("click", () => {
  skillsSearch.value = "";
  filterSkills();
  skillsSearch.focus();
});
skillsSearch.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && skillsSearch.value) {
    skillsSearch.value = "";
    filterSkills();
  }
});

function renderProjects() {
  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );
  const visibleProjects =
    activeFilter === "all" && !showAllProjects
      ? filteredProjects.slice(0, 3)
      : filteredProjects;

  projectsGrid.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card reveal is-visible">
          <div class="project-art" aria-hidden="true"><span>${project.icon}</span></div>
          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");

  const canExpand = activeFilter === "all" && filteredProjects.length > 3;
  moreProjectsButton.hidden = !canExpand;
  moreProjectsButton.textContent = showAllProjects
    ? "Show fewer projects"
    : `View ${filteredProjects.length - 3} more projects`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    showAllProjects = false;

    filterButtons.forEach((filterButton) => {
      const selected = filterButton === button;
      filterButton.classList.toggle("is-active", selected);
      filterButton.setAttribute("aria-pressed", String(selected));
    });

    renderProjects();
  });
});

moreProjectsButton.addEventListener("click", () => {
  showAllProjects = !showAllProjects;
  renderProjects();
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
  navMenu.classList.toggle("is-open", !isExpanded);
});

navMenu.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (link) {
    setActiveNavLink(link.getAttribute("href").slice(1));
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navMenu.classList.remove("is-open");
  }
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelector("#year").textContent = new Date().getFullYear();
renderProjects();
