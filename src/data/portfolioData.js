export const personalInfo = {
  name: "Varun Behl",
  title: "Tech Lead & Senior Software Engineer",
  tagline: "Tech Lead and Senior Software Engineer with 10+ years designing high-throughput distributed systems, developer tooling, RESTful services and RPCs for customers, and observability infrastructure across AWS, Kafka, and Java/Python ecosystems.",
  location: "Cambridge, MA",
  relocation: "Open to Relocation to New York, NY",
  locationFull: "Cambridge, MA • Open to Relocation: New York, NY",
  phone: "(347) 968-2643",
  email: "BehlV10@gmail.com",
  linkedin: "https://linkedin.com/in/behlv10",
  linkedinDisplay: "linkedin.com/in/behlv10",
  github: "https://github.com/BehlV10",
  githubDisplay: "github.com/BehlV10",
  summary:
    "Senior Backend / Full Stack Engineer with 10+ years of experience designing high-throughput distributed systems, developer tooling, RESTful services and RPCs for customers, and observability infrastructure across AWS, Kafka, and Java/Python ecosystems.",
  stats: [
    { label: "Engineering Experience", value: "10+ Yrs" },
    { label: "Recent Tech Lead Role", value: "HubSpot" },
    { label: "Venues Scraped Real-Time", value: "660+" },
    { label: "Graduate Degree", value: "Georgia Tech M.S." },
  ]
};

export const flagshipProjects = [
  {
    id: "borohop",
    title: "BoroHop",
    badge: "Flagship Web App",
    tagline: "Modern, Fast, Zero-Tracking NYC Events Finder for Borough Hoppers",
    liveUrl: "https://borohop.org/",
    githubUrl: "https://github.com/BehlV10/borohop",
    image: "./images/borohop-icon.png",
    category: "Full Stack & Scrapers",
    overview:
      "A fast, privacy-first NYC event directory built for the Borough Hoppers community. Features automated Meetup synchronization, PWA offline subway support, interactive Leaflet maps, and 1-click calendar exports.",
    architecture: [
      "Zero-API-key Meetup scraper directly parsing __NEXT_DATA__ server cache with auto-categorization into Food, Board Games, Nature, and Arts",
      "PWA Service Worker caching app shell and events database for offline browsing underground on NYC subways",
      "Interactive Leaflet / OpenStreetMap view with custom emoji pins, venue jump links, and Haversine 'Near Me' geolocation",
      "100% client-side privacy: zero tracking, URL query parameter state sharing, and 1-click Google / Apple (.ics) calendar generation"
    ],
    tech: ["JavaScript (ESNext)", "Python Scraper", "PWA / Service Workers", "Leaflet / OSM", "GitHub Actions CI/CD", "RFC 5545 .ics"]
  },
  {
    id: "boston-housing-aggregator",
    title: "Boston Housing Aggregator",
    badge: "Housing Aggregator",
    tagline: "Multi-Source Rental Housing Aggregator with Automated Broker Fee Classification",
    liveUrl: "https://behlv10.github.io/boston-housing-aggregator/",
    githubUrl: "https://github.com/BehlV10/boston-housing-aggregator",
    category: "Full Stack & Scrapers",
    overview:
      "An open-source rental housing aggregator uniting listings across Craigslist, Zillow, and Facebook Marketplace with automated broker fee extraction and interactive map discovery for Boston renters.",
    architecture: [
      "Automated Python scraper extracting coordinates, rent prices, and photo carousels from Boston rental forums",
      "Regex NLP heuristic classifying 'No Broker Fee' vs 'Broker Fee' from raw listing descriptions",
      "Interactive Leaflet / OpenStreetMap interface with custom price badge markers and multi-faceted client-side filters",
      "$0 server architecture: flat-file JSON datastore compiled and refreshed via GitHub Actions every 6 hours"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Python", "Leaflet / CartoDB", "GitHub Actions", "Regex Heuristics"]
  },
  {
    id: "tight-pants-comedy",
    title: "Tight Pants Comedy",
    badge: "Production Client",
    tagline: "NYC's Premier Independent Stand-Up Comedy Showcase at St. Marks Comedy Club",
    liveUrl: "https://tightpantscomedy.com/",
    githubUrl: "https://github.com/BehlV10/tight-pants-comedy",
    image: "./images/tight-pants-live.jpg",
    secondaryImage: "./images/tight-pants-room.jpg",
    category: "Production Web App",
    overview:
      "A high-converting, modern web application for NYC's premier indie stand-up comedy showcase at St. Marks Comedy Club in the East Village. Features direct-to-fan branding, embedded Eventbrite checkout, and comedian line-ups.",
    architecture: [
      "Frictionless ticketing integration with embedded Eventbrite checkout overlays",
      "Mobile-optimized design built for high-tempo nightlife traffic and social media discovery",
      "Dynamic performer rosters, venue directions, and countdowns for upcoming showcases",
      "Custom domain setup with 100% uptime and sub-second load times"
    ],
    tech: ["React 18", "Vite", "Tailwind CSS v4", "Eventbrite API", "Cloudflare DNS / CNAME", "Mobile-First UX"]
  },
  {
    id: "wicked-boston-events",
    title: "Wicked Boston Events",
    badge: "Event Discovery",
    tagline: "Dynamic Nightlife & Concert Discovery Platform for Greater Boston",
    liveUrl: "https://www.wickedbostonevents.com/",
    fallbackUrl: "https://behlv10.github.io/boston_events/",
    githubUrl: "https://github.com/BehlV10/boston_events",
    image: "./images/boston-events-banner.jpg",
    category: "Full Stack & Scrapers",
    overview:
      "A curated discovery calendar and scraping engine indexing 160+ venues throughout Greater Boston. Delivers instant filtering for concerts, indie comedy, nightlife, and arts.",
    architecture: [
      "Automated multi-threaded scraping pipeline indexing 160+ Boston concert halls, indie clubs, and community hubs",
      "Zero-latency static builds rendering thousands of upcoming events with sub-millisecond client filtering",
      "Calendar integration (.ics / Google Calendar) enabling 1-tap export to mobile calendars",
      "Automated CI/CD workflows continuously synchronizing venue websites and ticketing feeds"
    ],
    tech: ["Python", "Web Scraping", "HTML5 / CSS3", "Dynamic State Management", "Google Calendar Sync", "GitHub Actions"]
  },
  {
    id: "nyc-events",
    title: "NYC Events Aggregator",
    badge: "Event Discovery",
    tagline: "5-Borough Event Discovery Platform Scraping 500+ NYC Venues",
    liveUrl: "https://behlv10.github.io/nyc_events/",
    githubUrl: "https://github.com/BehlV10/nyc_events",
    category: "Full Stack & Scrapers",
    overview:
      "A real-time, ultra-fast 5-borough calendar aggregating concerts, nightlife, theater, and comedy across 500+ venues. Features an interactive dark map and secondary ticket price comparisons.",
    architecture: [
      "Continuous ingestion engine scraping 500+ venues and community calendars across Manhattan, Brooklyn, Queens, Bronx, and Staten Island",
      "Interactive OpenStreetMap / Leaflet dark theme map with jump navigation to individual venue schedules",
      "Real-time 2-hour epoch cutoff filter ensuring users only browse active and upcoming happenings",
      "Commercial ticket price comparison engine comparing StubHub and Gametime listings"
    ],
    tech: ["Python Scrapers", "Leaflet / GeoJSON", "Ticket Arbitrage (StubHub & Gametime)", "GitHub Actions CI/CD", "REST APIs"]
  },
  {
    id: "draculas-masquerade",
    title: "Dracula's Masquerade Companion",
    badge: "Game Utility",
    tagline: "Real-Time Interactive Host Utility for Tabletop Deduction Sessions",
    liveUrl: "https://behlv10.github.io/DraculasMasqueradeCompanionApp/",
    githubUrl: "https://github.com/BehlV10/DraculasMasqueradeCompanionApp",
    image: "./images/dracula-icon.svg",
    category: "Web & Mobile App",
    overview:
      "A dedicated companion web app designed for game masters of Dracula's Masquerade. Eliminates manual paper tracking by coordinating hidden roles, whisper actions, accusation history, and turn timers.",
    architecture: [
      "Complex reactive state machine orchestrating secret role assignments and deduction logs",
      "Zero-latency offline-first web application designed for tablet and mobile game sessions",
      "Atmospheric dark-mode UI with custom SVG iconography and role validation checks",
      "Packaged with Capacitor for cross-platform desktop and mobile operation"
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Capacitor", "State Machine / Reducer"]
  }
];

export const enterpriseProjects = [
  {
    id: "hubspot-catalog-engine",
    company: "HubSpot",
    role: "Tech Lead & Senior Backend Engineer",
    period: "2022 – 2026",
    title: "Monolithic Catalog Decomposition & Multi-Entity Schema Microservices",
    tagline: "Decomposed legacy monolithic catalog into decoupled microservices unifying Apps, AI Agents, and Workflow Templates.",
    impact: [
      "Led engineering team to decompose a decade-old monolithic catalog engine into modular, domain-driven microservices: Products, Listings, URLs, and Schemata.",
      "Engineered a multi-entity schema system that unified discovery, lifecycle state transitions, and validation rules across 3rd-party apps, AI agents, and workflow templates.",
      "Established strict API contracts and backward-compatible data schemas serving millions of HubSpot portal visits daily.",
      "Empowered partner ecosystem developers to define custom metadata and automated lifecycle validation rules."
    ],
    tech: ["Java", "Microservices", "Domain-Driven Design", "REST APIs", "JSON Schema", "Distributed Transactions", "Kafka"]
  },
  {
    id: "hubspot-publishing-engine",
    company: "HubSpot",
    role: "Tech Lead & Senior Backend Engineer",
    period: "2022 – 2026",
    title: "Asynchronous Listing Publishing Engine & Listing Editor",
    tagline: "High-throughput asynchronous publish/unpublish engine with transactional rollback and eventual consistency reconciliation.",
    impact: [
      "Architected an asynchronous listing publish/unpublish engine powering the HubSpot App Marketplace Listing Editor.",
      "Utilized queue-based worker pools, parallelized RPC execution, and consumer-side timestamp reconciliation to guarantee eventual consistency across distributed databases.",
      "Designed transactional rollback modes to safely abort partial publication failures and preserve catalog integrity.",
      "Dramatically reduced partner publish latency and eliminated race conditions during rapid concurrent listing updates."
    ],
    tech: ["Java", "Kafka", "RPC Frameworks", "Eventual Consistency", "Concurrency / Multithreading", "Distributed Systems"]
  },
  {
    id: "hubspot-asset-migration",
    company: "HubSpot",
    role: "Tech Lead",
    period: "2022 – 2026",
    title: "Cross-Portal Asset Migration & Sandbox Portability Service",
    tagline: "Automated replication of workflows, contacts, and marketing assets from sandbox environments to customer production portals.",
    impact: [
      "Led team to architect automated asset migration services replicating complex CRM objects, workflows, contacts, and marketing templates.",
      "Constructed graph-based dependency resolution algorithms to migrate deeply nested assets in the correct foreign-key sequence.",
      "Cut enterprise client manual onboarding overhead from hours to minutes with automated verification passes.",
      "Delivered self-service developer portability tooling across staging, sandbox, and production environments."
    ],
    tech: ["Java", "Directed Acyclic Graphs (DAG)", "REST APIs", "PostgreSQL", "Enterprise Integration", "Distributed Workflows"]
  },
  {
    id: "hubspot-llm-integration",
    company: "HubSpot",
    role: "Senior Backend Engineer",
    period: "2022 – 2026",
    title: "Production LLM Listing Generation Integration & Review Guards",
    tagline: "Integrated LLM-assisted marketplace listing generation with human-in-the-loop review guards and downstream validation RPCs.",
    impact: [
      "Integrated production LLM listing generation directly into marketplace app listing creation workflows.",
      "Engineered automated prompt pipelines combining partner app metadata with safety guidelines to generate high-converting listing copy.",
      "Implemented human-in-the-loop review guards, strict rate-limiting, and downstream validation RPCs to prevent malformed or policy-violating copy.",
      "Accelerated partner listing submission velocity while maintaining marketplace editorial standards."
    ],
    tech: ["Python", "Java", "LLM APIs", "Prompt Engineering", "Validation RPCs", "Content Safety Filters"]
  },
  {
    id: "hubspot-observability-pipeline",
    company: "HubSpot",
    role: "Senior Backend Engineer",
    period: "2022 – 2026",
    title: "Distributed Observability & High-Throughput Log Pipeline",
    tagline: "High-throughput log ingestion pipeline (Kafka → HBase → Elasticsearch) with multi-region AWS Lambda automation.",
    impact: [
      "Engineered distributed developer and observability infrastructure operating high-throughput log ingestion pipeline (Kafka → HBase → Elasticsearch).",
      "Implemented dynamic batching and adaptive backpressure handling multi-terabyte daily log spikes with zero data loss.",
      "Automated multi-region AWS Lambda lifecycle routines for cost-effective automated resource purging and index rollover.",
      "Provided engineering-wide query interfaces and sub-second log retrieval for mission-critical production troubleshooting."
    ],
    tech: ["Kafka", "HBase", "Elasticsearch", "AWS Lambda", "AWS S3", "Python", "Distributed Logging"]
  },
  {
    id: "pegasystems-config-framework",
    company: "Pegasystems",
    role: "Senior Software Engineer",
    period: "2018 – 2022",
    title: "End-to-End Dynamic Application Configuration Framework",
    tagline: "Core field types and dynamic settings engine in Java with REST endpoints and React setup wizard.",
    impact: [
      "Engineered an end-to-end application configuration framework modeling core field types and dynamic settings in Java with REST endpoints.",
      "Delivered a modern React setup wizard and branch-preference tooling enabling non-technical administrators to configure complex enterprise instances.",
      "Built comprehensive automated test suites via JUnit, Mockito, and Puppeteer achieving >90% code coverage across mission-critical paths."
    ],
    tech: ["Java", "React", "RESTful APIs", "JUnit", "Mockito", "Puppeteer", "Enterprise Architecture"]
  },
  {
    id: "oracle-fleet-hardening",
    company: "Oracle",
    role: "Software Engineer",
    period: "2015 – 2018",
    title: "Server Fleet Hardening & Encryption Automation",
    tagline: "C/Java end-to-end encryption for remote consoles and Python automation for rolling updates across hundreds of fleet servers.",
    impact: [
      "Hardened and automated server management infrastructure across hundreds of mission-critical fleet servers.",
      "Implemented C/Java end-to-end encryption protocols for remote administrative consoles, mitigating critical security vulnerabilities.",
      "Developed robust Python automation suites to orchestrate zero-downtime rolling updates and failover testing across bare-metal server clusters."
    ],
    tech: ["C", "Java", "Python", "Fleet Automation", "Linux / Unix", "End-to-End Encryption", "SSL/TLS"]
  }
];

export const clientAndToolProjects = [
  {
    id: "takahachi-bakery",
    title: "Takahachi Bakery",
    category: "Artisanal Client",
    tagline: "Artisanal Japanese Bakery & Café in Tribeca, NYC",
    liveUrl: "https://behlv10.github.io/takahachi-bakery/",
    githubUrl: "https://github.com/BehlV10/takahachi-bakery",
    image: "./images/takahachi-bakery.jpg",
    description:
      "A modern digital experience for Takahachi Bakery in Tribeca, Manhattan. Features an interactive celebration cake pre-order builder with real-time serving/price calculator, custom chocolate message piping, and full café menu.",
    tech: ["React 18", "Vite", "Tailwind CSS", "Interactive Pre-Order Builder", "Tribeca NYC"]
  },
  {
    id: "wos-custom-tailoring",
    title: "Wo's Custom Tailoring",
    category: "Luxury Client",
    tagline: "Upper East Side NYC Bespoke Master Tailoring Salon (Est. 1978)",
    liveUrl: "https://behlv10.github.io/wos-custom-tailoring/",
    githubUrl: "https://github.com/BehlV10/wos-custom-tailoring",
    description:
      "A luxury bespoke digital salon for Wo's Custom Tailoring on Lexington Ave & 73rd St. Features custom suiting styling, luxury bridal alterations, and VIP fitting consultations.",
    tech: ["React", "Tailwind CSS", "Appointment Scheduler", "Luxury Atelier UI"]
  },
  {
    id: "japonaise-bakery",
    title: "Japonaise Bakery & Cafe",
    category: "Historic Client",
    tagline: "Historic French-Japanese Fusion Bakery in Brookline, MA (Serving Since 1985)",
    liveUrl: "https://behlv10.github.io/japonaise-bakery/",
    githubUrl: "https://github.com/BehlV10/japonaise-bakery",
    image: "./images/japonaise-pastry.jpg",
    description:
      "A fast, responsive web experience redesigned for Japonaise Bakery & Cafe. Famous for azuki matcha croissants, French pastries, and custom anniversary cake request builders.",
    tech: ["React", "Vite", "Tailwind CSS", "Cake Customizer", "Mobile-First"]
  },
  {
    id: "cirque-du-souffle",
    title: "Cirque du Soufflé",
    category: "Culinary Client",
    tagline: "French Haute Pâtisserie & Theatrical Dessert Catering in Somerville, MA",
    liveUrl: "https://behlv10.github.io/cirque-du-souffle/",
    githubUrl: "https://github.com/BehlV10/cirque-du-souffle",
    description:
      "A theatrical web experience for Chef T Lawrence-Simon merging French patisserie with circus artistry, featuring custom soufflé bookings and event dessert catering estimators.",
    tech: ["Next.js", "React", "Tailwind CSS", "Event Booking", "Artisanal Catering"]
  },
  {
    id: "price-comparison-app",
    title: "Smart Price Comparison Engine",
    category: "Open Source Tool",
    tagline: "Real-Time Multi-Vendor Ticket & Retail Arbitrage Scanner",
    githubUrl: "https://github.com/BehlV10/price_comparison_app",
    description:
      "An automated arbitrage tool that tracks and compares ticket and retail prices across secondary marketplaces, notifying users when prices drop below historic thresholds.",
    tech: ["Python", "Asyncio Scrapers", "Data Analytics", "JSON Schemas"]
  }
];

export const experienceData = [
  {
    company: "HubSpot",
    location: "Cambridge, MA",
    role: "Tech Lead, Senior Software Engineer",
    period: "2022 – 2026",
    team: "Marketplace, Portability, and Developer Infrastructure Teams",
    bullets: [
      "Led a team to decompose a monolithic catalog engine into modular microservices (Products, Listings, URLs, Schemata) and implemented a multi-entity schema system that unified discovery, lifecycle, and validation for apps, AI agents, and workflow templates.",
      "Architected an asynchronous listing publish/unpublish engine using queue-based workers, parallelized RPC execution, transactional rollback modes, and consumer-side timestamp reconciliation to guarantee eventual consistency.",
      "Led a team to architect asset migration services to replicate workflows, contacts, and marketing templates from developer and sandbox environments into customer production portals, cutting manual onboarding overhead from hours to minutes.",
      "Integrated production LLM listing generation into marketplace publishing workflows, human-in-the-loop review guards, and downstream validation RPCs.",
      "Engineered distributed developer and observability infrastructure, operating a high-throughput log ingestion pipeline (Kafka → HBase → Elasticsearch) with dynamic batching alongside multi-region AWS Lambda lifecycle automation and automated resource purging."
    ]
  },
  {
    company: "Pegasystems",
    location: "Cambridge, MA",
    role: "Senior Software Engineer",
    period: "2018 – 2022",
    bullets: [
      "Engineered an end-to-end application configuration framework modeling core field types and dynamic settings in Java with REST endpoints, while delivering a React setup wizard and branch-preference tooling tested via JUnit, Mockito, and Puppeteer."
    ]
  },
  {
    company: "Oracle",
    location: "Burlington, MA",
    role: "Software Engineer",
    period: "2015 – 2018",
    bullets: [
      "Hardened and automated server management infrastructure, implementing C/Java end-to-end encryption for remote administrative consoles and developing Python automation to orchestrate rolling updates across hundreds of fleet servers."
    ]
  }
];

export const educationData = [
  {
    institution: "Georgia Institute of Technology (GIT)",
    degree: "M.S. in Computer Science",
    period: "2017 – 2020",
    details: "Online Part-Time • GPA 3.77 / 4.0"
  },
  {
    institution: "Rensselaer Polytechnic Institute (RPI)",
    degree: "Dual B.S. in Computer & Systems Engineering and Electrical Engineering",
    period: "2010 – 2014",
    details: "Minor in Psychology • GPA 3.81 / 4.0, Dean's List • Eta Kappa Nu, Tau Beta Pi Honors Societies"
  }
];

export const technicalSkills = {
  languages: ["Java", "Python", "C++", "C", "JavaScript (ESNext)", "TypeScript", "SQL"],
  distributedCloud: [
    "Kafka",
    "Elasticsearch",
    "HBase",
    "Microservices",
    "AWS (Lambda, S3)",
    "REST APIs",
    "Event-Driven Architecture",
    "RPC Frameworks",
    "Eventual Consistency"
  ],
  aiTooling: ["Claude Code", "Cursor", "Antigravity", "Conductor", "Gemini", "ChatGPT", "LLM Pipelines", "Prompt Engineering"],
  frontendInfra: ["React", "Vite", "Tailwind CSS", "MySQL", "PostgreSQL", "Docker", "Kubernetes", "Git", "JUnit", "Mockito", "Puppeteer"]
};

export const activitiesData = [
  {
    title: "HubSpot Culture Champion and Social Committee Member",
    period: "2023 – 2026",
    desc: "Active community leader organizing department events, hackathons, and culture initiatives."
  },
  {
    title: "Founder of HubSpot Employee Board Game and Pickleball Clubs",
    period: "2023 – 2026",
    desc: "Established weekly company-wide gaming and athletic clubs connecting 100+ engineers across departments."
  },
  {
    title: "Social & Partner Dancing",
    period: "2010 – Present",
    desc: "Ballroom, West Coast Swing, Salsa, Bachata, and Country Swing Dancing."
  },
  {
    title: "One Brick Boston Volunteering",
    period: "2016 – Present",
    desc: "Community volunteer supporting local Boston non-profit organizations, food pantries, and youth programs."
  }
];
