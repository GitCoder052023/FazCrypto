export type ServiceCategory = "all" | "web" | "mobile" | "backend" | "cloud" | "maintenance" | "design";

export interface ServicePricing {
  model: "starting_at" | "fixed" | "recurring" | "custom";
  amount?: number;
  currency: string;
  label: string;
  period?: string;
  disclaimer: string;
}

export interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: "web" | "mobile" | "backend" | "cloud" | "maintenance" | "design";
  categoryLabel: string;
  shortDescription: string;
  description: string;
  priceType: "fixed" | "starting_at" | "custom_quote";
  price?: number;
  currency: string;
  duration: string;
  deliverables: string[];
  included: string[];
  requirements: string[];
  optionalAddons: Addon[];
  idealFor: string[];
  technologies: string[];
  priceDrivers: string[];
  caseStudyRef?: string;
  featured?: boolean;
  bookingAvailable: boolean;
  pricing: ServicePricing;
  booking: {
    enabled: boolean;
    ctaLabel: string;
  };
}

export interface BookingRequest {
  id: string;
  serviceId: string;
  serviceName: string;
  pricingType: "fixed" | "starting_at" | "custom_quote";
  basePrice?: number;
  selectedAddonIds?: string[];
  selectedAddonNames?: string[];
  estimatedTotal?: number;
  client: {
    name: string;
    email: string;
    phone?: string;
    company: string;
  };
  project: {
    description: string;
    timeline?: string;
    budget?: string;
    size?: "small" | "medium" | "large" | "not_sure";
  };
  createdAt: string;
  status: "new" | "reviewing" | "contacted" | "qualified" | "closed";
  // Flat compatibility properties for legacy views
  name: string;
  email: string;
  company: string;
  phone?: string;
  projectDescription?: string;
  timeline?: string;
  budget?: string;
}

export const DEMO_SERVICES: Service[] = [
  {
    id: "business-website",
    slug: "business-website",
    name: "Business Website",
    category: "web",
    categoryLabel: "Web Systems",
    shortDescription:
      "High-performance editorial websites built with Next.js, headless CMS, and responsive typography.",
    description:
      "We design and build bespoke corporate and product websites that communicate technical maturity and commercial authority. Unlike bloated WordPress themes or no-code drag-and-drop builders, our websites run on clean Next.js architectures with sub-second page loads, automated asset optimization, and zero operational drag.",
    priceType: "starting_at",
    price: 25000,
    currency: "INR",
    duration: "2–4 weeks",
    pricing: {
      model: "starting_at",
      amount: 25000,
      currency: "INR",
      label: "Starting at ₹25,000",
      disclaimer: "Indicative baseline for standard 5–8 page business site. Final quote scales with page count, CMS schema depth, and bespoke interactivity.",
    },
    deliverables: [
      "Custom responsive Next.js (App Router) codebase in your private repository",
      "Headless CMS integration (Sanity or Strapi) configured for non-technical editors",
      "Interactive lead capture forms with server-side validation & spam filters",
      "Comprehensive Core Web Vitals optimization targeting 95+ Lighthouse scores",
      "Technical SEO infrastructure (JSON-LD structured data, OpenGraph, dynamic sitemap)",
      "Automated CI/CD deployment pipeline to Vercel or Cloudflare Pages",
    ],
    included: [
      "Up to 8 custom responsive page layouts (Home, Services, Case Studies, About, Contact)",
      "Mobile-first responsive typography system",
      "Semantic HTML & WCAG AA accessibility compliance",
      "Custom domain DNS configuration and automated SSL provisioning",
      "30-day post-launch warranty and bug fixes",
    ],
    requirements: [
      "Brand assets (vector logos, brand typography guidelines, or color references)",
      "Draft page copy or raw structural bullet points",
      "Access to target domain DNS provider (Cloudflare, GoDaddy, Namecheap)",
      "Designated team reviewer for 2-day milestone sign-offs",
    ],
    optionalAddons: [
      {
        id: "technical-seo-schema",
        name: "Deep Technical SEO & Structured Data",
        description: "Full schema.org entity graphing for B2B search discovery and rich snippets.",
        price: 5000,
      },
      {
        id: "privacy-analytics",
        name: "Privacy-First Analytics Setup",
        description: "Self-hosted Plausible or PostHog event instrumentation with zero cookie banners.",
        price: 3500,
      },
      {
        id: "multi-language-i18n",
        name: "Multi-Language Internationalization (i18n)",
        description: "Subpath routing and translated content dictionary setup for 2 additional languages.",
        price: 7500,
      },
    ],
    idealFor: [
      "B2B service firms needing a distinctive, credible digital storefront",
      "Technology startups preparing for commercial launch or institutional fundraising",
      "Companies replacing slow, plugin-heavy WordPress installations",
      "Agencies that demand editorial typography and verifiable 100ms load speeds",
    ],
    technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
    priceDrivers: [
      "Total number of unique page templates and compositions",
      "Headless CMS schema depth and nested content relationships",
      "Bespoke interactive components (calculators, configurators, multi-step intakes)",
      "CRM and marketing automation webhook integrations",
      "Legacy content migration from existing databases or blogs",
    ],
    caseStudyRef: "meridian",
    featured: true,
    bookingAvailable: true,
    booking: {
      enabled: true,
      ctaLabel: "Book Business Website",
    },
  },
  {
    id: "custom-web-application",
    slug: "custom-web-application",
    name: "Custom Web Application",
    category: "web",
    categoryLabel: "Web Systems",
    shortDescription:
      "Full-stack web applications, SaaS platforms, and internal operational tooling built for high concurrency.",
    description:
      "We engineer production-grade web applications from architectural schema to cloud cutover. Whether replacing brittle spreadsheets with a hardened internal control plane or launching a multi-tenant B2B platform, we deliver scalable PostgreSQL schemas, secure token authentication, and responsive user workflows.",
    priceType: "starting_at",
    price: 75000,
    currency: "INR",
    duration: "4–10 weeks",
    pricing: {
      model: "starting_at",
      amount: 75000,
      currency: "INR",
      label: "Starting at ₹75,000",
      disclaimer: "Indicative baseline for MVP application. Final quote scales with schema entity depth, RBAC matrix, and external API integrations.",
    },
    deliverables: [
      "High-density responsive frontend with sub-100ms state updates",
      "Hardened backend API with comprehensive unit and integration test suites",
      "Enterprise authentication (OAuth2, OIDC, JWT session tokens, RBAC)",
      "Normalized PostgreSQL schema with automated migration scripts",
      "End-to-end automated testing harnesses (Playwright)",
      "Containerized deployment with zero-downtime blue/green deployment scripts",
    ],
    included: [
      "Full user lifecycle (Registration, Invite, Password Reset, Session Revocation)",
      "Role-Based Access Control (Admin, Operator, Read-Only User tiers)",
      "Audit logging for state-mutating actions",
      "Data export utilities (CSV / JSON format)",
      "Developer documentation and local Docker development environment",
      "60-day post-launch warranty and performance monitoring",
    ],
    requirements: [
      "Documented user workflows or wireframe sketches",
      "Existing database export or data sample schemas (if migrating)",
      "Target cloud environment access (AWS, GCP, DigitalOcean)",
      "Product owner available for weekly sprint review and acceptance tests",
    ],
    optionalAddons: [
      {
        id: "stripe-billing-engine",
        name: "Multi-Tier Subscription & Billing Engine",
        description: "Stripe/Razorpay recurring billing with invoice generation and proration logic.",
        price: 15000,
      },
      {
        id: "realtime-websocket-engine",
        name: "Real-time Telemetry & WebSockets",
        description: "Sub-second bidirectional event updates using Redis Pub/Sub channels.",
        price: 12000,
      },
      {
        id: "automated-e2e-suite",
        name: "Hermetic End-to-End Test Suite",
        description: "Playwright test coverage covering all critical business user paths.",
        price: 9000,
      },
    ],
    idealFor: [
      "Founders building their foundational software MVP or platform core",
      "Operations leads eliminating manual spreadsheet reconciliation workflows",
      "Enterprises requiring internal control planes and administrative portals",
      "Businesses automating multi-step customer or partner transactions",
    ],
    technologies: ["Next.js", "React 19", "TypeScript", "Node.js / Go", "PostgreSQL", "Redis", "Docker"],
    priceDrivers: [
      "Complexity of relational data entities and schema migrations",
      "Multi-tenant isolation and granular permission boundaries",
      "Real-time event synchronization throughput",
      "Payment gateway integration and billing proration edge cases",
      "Regulatory compliance requirements (SOC2, HIPAA, data encryption at rest)",
    ],
    caseStudyRef: "meridian",
    featured: true,
    bookingAvailable: true,
    booking: {
      enabled: true,
      ctaLabel: "Book Custom Web App",
    },
  },
  {
    id: "ui-ux-design-systems",
    slug: "ui-ux-design-systems",
    name: "UI/UX & Design Systems",
    category: "design",
    categoryLabel: "Product Design",
    shortDescription:
      "Engineered design systems, component tokens, and high-density product interfaces built for complex workflows.",
    description:
      "We design product interfaces and rigorous design systems that bridge visual craft and engineering reality. We do not deliver unexecutable Figma art with detached spacing. Every component is defined with strict design tokens, responsive layout rules, accessible color contrast, and production-ready React component specs.",
    priceType: "starting_at",
    price: 35000,
    currency: "INR",
    duration: "2–4 weeks",
    pricing: {
      model: "starting_at",
      amount: 35000,
      currency: "INR",
      label: "Starting at ₹35,000",
      disclaimer: "Indicative baseline for core product design system and key flows. Final quote scales with total unique screen count and interaction density.",
    },
    deliverables: [
      "Comprehensive Figma design system with tokenized color, typography, and spacing variables",
      "Complete component library with active, hover, focused, disabled, and error states",
      "High-fidelity interactive prototype for key user conversion flows",
      "Design-to-code documentation with CSS/Tailwind token mappings",
      "WCAG 2.1 AA accessibility audit and contrast verification documentation",
      "Direct developer handoff walkthrough with your engineering leads",
    ],
    included: [
      "Foundational typography, elevation, and layout grid tokens",
      "Up to 12 primary core application screen designs (Desktop + Mobile)",
      "Interactive component states (Buttons, Inputs, Modals, Tables, Navigation)",
      "Vector icon set harmonization and asset exports",
      "Two revision rounds following structured stakeholder feedback",
    ],
    requirements: [
      "User persona briefs or current application walkthroughs",
      "Existing brand guidelines and logo vectors",
      "List of primary user tasks and critical conversion paths",
    ],
    optionalAddons: [
      {
        id: "design-tokens-npm",
        name: "Exported Tailwind / NPM Token Package",
        description: "Token package ready for direct integration into front-end build pipelines.",
        price: 8000,
      },
      {
        id: "extended-screen-pack",
        name: "Extended Flow Pack (+10 Screens)",
        description: "Complete coverage of edge cases, empty states, and administrative views.",
        price: 12000,
      },
    ],
    idealFor: [
      "Engineering-heavy teams with functional software that looks amateur or cluttered",
      "Startups needing a cohesive, distinctive product language before launch",
      "Enterprises consolidating multiple fragmented web tools into one unified system",
    ],
    technologies: ["Figma", "Design Tokens", "Tailwind CSS", "Radix UI", "WCAG 2.1"],
    priceDrivers: [
      "Total number of unique screens and responsive viewport variations",
      "Data density requirements (financial tables, charting, complex forms)",
      "Custom micro-interactions and motion design specifications",
    ],
    caseStudyRef: "meridian",
    featured: true,
    bookingAvailable: true,
    booking: {
      enabled: true,
      ctaLabel: "Book Design System",
    },
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    name: "Mobile App Development",
    category: "mobile",
    categoryLabel: "Mobile Systems",
    shortDescription:
      "Resilient iOS & Android applications with offline synchronization, hardware integrations, and push messaging.",
    description:
      "We engineer high-speed, battery-efficient mobile applications designed to perform reliably under variable network environments. From field-worker dispatch systems to secure enterprise mobile tooling, our applications prioritize immediate touch responsiveness, offline-first local caching, and robust security.",
    priceType: "starting_at",
    price: 100000,
    currency: "INR",
    duration: "6–12 weeks",
    pricing: {
      model: "starting_at",
      amount: 100000,
      currency: "INR",
      label: "Starting at ₹1,00,000",
      disclaimer: "Indicative baseline for cross-platform app. Final quote scales with offline conflict resolution complexity and native device integrations.",
    },
    deliverables: [
      "Cross-platform codebase (React Native) compiling to native iOS & Android",
      "Offline-first local caching engine with automatic background sync",
      "Push notification service integration (FCM, Apple APNs)",
      "Biometric security authentication (FaceID, Fingerprint) and keychain encryption",
      "App Store and Google Play compliance review and release builds",
      "Crash telemetry and real-time error monitoring instrumentation",
    ],
    included: [
      "Complete responsive mobile navigation (Tabs, Drawers, Stacks)",
      "Local encrypted SQLite/WatermelonDB storage",
      "Network status detection and offline indicators",
      "App Store & Google Play metadata and asset generation",
      "60-day post-launch warranty and app store update support",
    ],
    requirements: [
      "App Store and Google Play Developer accounts",
      "Backend API endpoints or documentation (if not built by us)",
      "Test devices for targeted validation",
      "Core feature specification and workflow requirements",
    ],
    optionalAddons: [
      {
        id: "hardware-ble-gps",
        name: "Continuous Background GPS & BLE Beacons",
        description: "Battery-optimized location tracking and Bluetooth peripheral synchronization.",
        price: 18000,
      },
      {
        id: "in-app-purchases",
        name: "In-App Purchases & Subscriptions",
        description: "StoreKit and Google Play Billing integration with server-side receipt validation.",
        price: 14000,
      },
    ],
    idealFor: [
      "Organizations deploying operational apps for field agents or drivers",
      "Consumer technology companies launching companion mobile experiences",
      "Enterprises replacing outdated native apps with a unified maintainable codebase",
    ],
    technologies: ["React Native", "TypeScript", "iOS / Android Native APIs", "SQLite", "FCM", "Fastlane"],
    priceDrivers: [
      "Single platform vs. dual iOS & Android deployment requirements",
      "Offline-first sync complexity and merge conflict algorithms",
      "Native device hardware integrations (GPS, Bluetooth, Camera Barcode, NFC)",
      "In-app purchases and subscription receipt validation",
    ],
    caseStudyRef: "meridian",
    featured: true,
    bookingAvailable: true,
    booking: {
      enabled: true,
      ctaLabel: "Book Mobile App",
    },
  },
  {
    id: "backend-api-development",
    slug: "backend-api-development",
    name: "API & Backend Development",
    category: "backend",
    categoryLabel: "Backend & API",
    shortDescription:
      "High-throughput microservices, REST/gRPC API architectures, transactional data buses, and database tuning.",
    description:
      "We design and refactor the backend engines that power mission-critical digital operations. Focusing on sub-50ms P99 response times, transactional data safety, and horizontal scaling, our backend engineering ensures your infrastructure scales predictably without operational panic or database lockups.",
    priceType: "starting_at",
    price: 50000,
    currency: "INR",
    duration: "3–8 weeks",
    pricing: {
      model: "starting_at",
      amount: 50000,
      currency: "INR",
      label: "Starting at ₹50,000",
      disclaimer: "Indicative baseline for dedicated API service. Final quote depends on concurrency requirements, event streaming, and schema migration depth.",
    },
    deliverables: [
      "Domain-driven API architecture with OpenAPI / gRPC contract specifications",
      "Normalized relational database schemas with index optimization and connection pooling",
      "Asynchronous task queue processing (Kafka / RabbitMQ / BullMQ)",
      "High-speed Redis cache layers and distributed lock management",
      "Automated unit, integration, and load benchmarking test suites",
      "Structured JSON logging, OpenTelemetry tracing, and metric endpoints",
    ],
    included: [
      "Strict request validation and sanitization middleware",
      "Rate limiting and API token authentication",
      "Comprehensive database migration scripts with rollback capability",
      "Interactive Swagger/OpenAPI documentation portal",
      "Local Docker development environment with seeded test databases",
      "45-day post-cutover warranty and query tuning",
    ],
    requirements: [
      "Detailed business logic specifications or legacy source code access",
      "Expected throughput benchmarks (peak req/s, concurrent connections)",
      "Third-party API credentials for sandbox testing",
    ],
    optionalAddons: [
      {
        id: "kafka-event-streaming",
        name: "Apache Kafka Event Bus Architecture",
        description: "Partitioned event streaming setup for distributed asynchronous microservices.",
        price: 15000,
      },
      {
        id: "cdc-debezium-pipeline",
        name: "Zero-Downtime CDC Migration Pipeline",
        description: "Debezium Change Data Capture dual-write pipeline for zero-downtime cutover.",
        price: 20000,
      },
      {
        id: "opentelemetry-apm",
        name: "OpenTelemetry Distributed Tracing",
        description: "Full Jaeger/Grafana Tempo tracing instrumentation across all API paths.",
        price: 7500,
      },
    ],
    idealFor: [
      "Platforms experiencing database timeouts or sluggish API response times",
      "Companies integrating multiple external partner systems or payment APIs",
      "Teams decoupling monolithic codebases into modular, testable services",
      "Businesses launching apps that demand rigorous transactional consistency",
    ],
    technologies: ["Go", "Node.js / TypeScript", "PostgreSQL", "Apache Kafka", "Redis", "gRPC"],
    priceDrivers: [
      "Target request throughput and concurrency thresholds (> 10,000 req/s)",
      "Number and reliability of external third-party API dependencies",
      "Data consistency model (strict ACID vs. eventual consistency)",
      "Legacy database schema migration and backwards compatibility constraints",
    ],
    caseStudyRef: "kestrel",
    featured: true,
    bookingAvailable: true,
    booking: {
      enabled: true,
      ctaLabel: "Book Backend / API",
    },
  },
  {
    id: "cloud-setup-deployment",
    slug: "cloud-setup-deployment",
    name: "Cloud Setup & Infrastructure",
    category: "cloud",
    categoryLabel: "Cloud & Infrastructure",
    shortDescription:
      "Declarative Infrastructure as Code (Terraform), Kubernetes cluster orchestration, and automated CI/CD.",
    description:
      "We eliminate manual cloud configuration and snowflake servers. Codifying your entire infrastructure with modular Terraform manifests, we provision self-healing container clusters, multi-zone automated failovers, and actionable monitoring dashboards with zero hidden configuration drift.",
    priceType: "starting_at",
    price: 20000,
    currency: "INR",
    duration: "1–3 weeks",
    pricing: {
      model: "starting_at",
      amount: 20000,
      currency: "INR",
      label: "Starting at ₹20,000",
      disclaimer: "Indicative baseline for standard cloud foundation. Final quote scales with cluster topologies, multi-region redundancy, and compliance audit frameworks.",
    },
    deliverables: [
      "Modular Infrastructure as Code (Terraform) in your private repository",
      "Container orchestration (Docker / Kubernetes / AWS ECS) with auto-scaling",
      "Automated GitHub Actions zero-downtime deployment pipelines",
      "Managed database provisioning with daily snapshots & point-in-time recovery",
      "Full-stack observability suite (Prometheus, Grafana, OpenTelemetry)",
      "Security hardening: least-privilege IAM, SSL/TLS certificates, and WAF rules",
    ],
    included: [
      "Isolated Production and Staging VPC network environments",
      "Automated secret management (AWS Secrets Manager / Vault)",
      "DNS cutover runbook and SSL certificate automation",
      "Cloud cost optimization review and idle resource eradication",
      "Comprehensive infrastructure disaster recovery documentation",
    ],
    requirements: [
      "Administrative access to target cloud account (AWS, GCP, Azure)",
      "Domain DNS access for SSL verification and routing",
      "Repository permissions for CI/CD pipeline setup",
    ],
    optionalAddons: [
      {
        id: "multi-region-failover",
        name: "Multi-Region Automated Failover",
        description: "Active/passive cross-region disaster recovery with automated Route 53 health routing.",
        price: 18000,
      },
      {
        id: "soc2-hipaa-hardening",
        name: "SOC2 / HIPAA Compliance Hardening",
        description: "Field-level encryption, mTLS mesh, and immutable tamper-evident audit logging.",
        price: 22000,
      },
    ],
    idealFor: [
      "Teams moving from manual server SSH deployments to modern GitOps",
      "Companies suffering unpredictable cloud outages or runaway AWS/GCP bills",
      "Organizations preparing for external institutional security audits",
      "Startups needing a bulletproof infrastructure foundation before high-profile launch",
    ],
    technologies: ["Terraform", "AWS / GCP", "Docker", "Kubernetes", "GitHub Actions", "Prometheus"],
    priceDrivers: [
      "Multi-region high availability and active/active disaster recovery SLAs",
      "Compute workload scale and auto-scaling constraints",
      "Formal compliance frameworks (SOC2, HIPAA, PCI-DSS)",
      "Migration of live production databases without downtime",
    ],
    caseStudyRef: "synapse",
    featured: true,
    bookingAvailable: true,
    booking: {
      enabled: true,
      ctaLabel: "Book Cloud Setup",
    },
  },
  {
    id: "application-maintenance",
    slug: "application-maintenance",
    name: "Application Maintenance & SRE",
    category: "maintenance",
    categoryLabel: "Maintenance & SRE",
    shortDescription:
      "Continuous production monitoring, security patching, dependency upgrades, SLA incident response, and performance tuning.",
    description:
      "Software does not stop needing attention once deployed. Our recurring maintenance pod acts as your dedicated reliability engineering team—monitoring uptime, applying critical security patches, updating dependencies before vulnerabilities emerge, and resolving production regressions.",
    priceType: "starting_at",
    price: 10000,
    currency: "INR",
    duration: "Ongoing Monthly Retainer",
    pricing: {
      model: "recurring",
      amount: 10000,
      currency: "INR",
      label: "Starting at ₹10,000 / month",
      period: "/month",
      disclaimer: "Indicative baseline monthly retainer. Final quote depends on production SLA requirements, system count, and dedicated on-call coverage.",
    },
    deliverables: [
      "24/7 automated uptime and API health monitoring with instant pager alerting",
      "Monthly package dependency audits, vulnerability scans, and security patches",
      "Database performance profiling, slow query tuning, and index maintenance",
      "Continuous automated offsite backup verification and restore tests",
      "Dedicated monthly engineering hours for bug fixes and minor upgrades",
      "Monthly executive reliability report detailing uptime SLAs and error budgets",
    ],
    included: [
      "Dedicated Slack/Teams communication channel with lead systems engineer",
      "4-hour critical incident response SLA during business hours",
      "Up to 10 hours monthly allocated for minor feature enhancements and bug fixes",
      "Quarterly architectural review and technical debt backlog grooming",
    ],
    requirements: [
      "Production repository and cloud infrastructure access",
      "Designated internal contact for escalation authorization",
      "Access to existing issue tracker or ticketing system",
    ],
    optionalAddons: [
      {
        id: "24x7-oncall-pager",
        name: "24/7 Dedicated On-Call Paging SLA",
        description: "15-minute response time guarantee for critical P0 outages, weekends and holidays included.",
        price: 15000,
      },
      {
        id: "extended-dev-hours",
        name: "Additional Engineering Block (+20 Hours/mo)",
        description: "Dedicated developer hours for ongoing feature shipping and backlog items.",
        price: 25000,
      },
    ],
    idealFor: [
      "Businesses with live revenue systems who lack an in-house 24/7 DevOps engineer",
      "Founders needing dependable technical insurance so they can focus on growth",
      "Organizations whose internal teams are fully committed to new product features",
      "Legacy software systems that require stability without costly rewrites",
    ],
    technologies: ["Datadog", "Prometheus", "Grafana", "Sentry", "Dependabot", "PagerDuty"],
    priceDrivers: [
      "Required SLA response time (15-minute emergency vs. next business day)",
      "Number of production microservices and active infrastructure instances",
      "Dedicated monthly engineering hours allocated for enhancements",
      "Weekend and overnight on-call engineer paging coverage",
    ],
    caseStudyRef: "kestrel",
    featured: true,
    bookingAvailable: true,
    booking: {
      enabled: true,
      ctaLabel: "Book Maintenance Retainer",
    },
  },
];

// ============================================================================
// CENTRALIZED BUSINESS LOGIC & HELPERS
// ============================================================================

/**
 * Format Indian currency with proper comma grouping (e.g. ₹1,00,000)
 */
export function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN");
}

/**
 * Format pricing presentation
 */
export function formatPriceDisplay(pricing: ServicePricing): string {
  if (!pricing.amount) return pricing.label;
  const formatted = formatINR(pricing.amount);
  if (pricing.model === "recurring") {
    return `Starting at ${formatted} ${pricing.period || "/month"}`;
  }
  if (pricing.model === "fixed") {
    return formatted;
  }
  return `Starting at ${formatted}`;
}

export function getAllServices(): Service[] {
  return DEMO_SERVICES;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return DEMO_SERVICES.find((s) => s.slug === slug);
}

export function getServiceById(id: string): Service | undefined {
  return DEMO_SERVICES.find((s) => s.id === id);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  if (category === "all") return DEMO_SERVICES;
  return DEMO_SERVICES.filter((s) => s.category === category);
}

export function getBookableServices(): Service[] {
  return DEMO_SERVICES.filter((s) => s.bookingAvailable);
}

/**
 * Calculate total estimated investment for a service with selected add-ons
 */
export function calculateEstimatedTotal(service: Service, selectedAddonIds: string[]): number {
  const base = service.price || 0;
  const addonsTotal = (service.optionalAddons || [])
    .filter((addon) => selectedAddonIds.includes(addon.id))
    .reduce((sum, addon) => sum + addon.price, 0);
  return base + addonsTotal;
}

// Client-side simulated booking storage
const LOCAL_STORAGE_KEY = "vectis_demo_booking_requests";

export function getStoredDemoBookings(): BookingRequest[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      // Seed with 2 realistic demo bookings if empty
      const seeded: BookingRequest[] = [
        {
          id: "REQ-8491",
          serviceId: "custom-web-application",
          serviceName: "Custom Web Application",
          pricingType: "starting_at",
          basePrice: 75000,
          selectedAddonIds: ["stripe-billing-engine"],
          selectedAddonNames: ["Multi-Tier Subscription & Billing Engine"],
          estimatedTotal: 90000,
          client: {
            name: "Rajesh Iyer",
            email: "r.iyer@apexlogistics.in",
            phone: "+91 98400 12345",
            company: "Apex Logistics India",
          },
          project: {
            description: "Replacing multi-city dispatch spreadsheets with centralized web portal for 45 operations controllers.",
            timeline: "1–3 months",
            budget: "₹1L – ₹2.5L",
            size: "medium",
          },
          status: "reviewing",
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
          // Flat compatibility
          name: "Rajesh Iyer",
          email: "r.iyer@apexlogistics.in",
          phone: "+91 98400 12345",
          company: "Apex Logistics India",
          projectDescription: "Replacing multi-city dispatch spreadsheets with centralized web portal for 45 operations controllers.",
          timeline: "1–3 months",
          budget: "₹1L – ₹2.5L",
        },
        {
          id: "REQ-3104",
          serviceId: "backend-api-development",
          serviceName: "API & Backend Development",
          pricingType: "starting_at",
          basePrice: 50000,
          selectedAddonIds: ["kafka-event-streaming"],
          selectedAddonNames: ["Apache Kafka Event Bus Architecture"],
          estimatedTotal: 65000,
          client: {
            name: "Sarah Chen",
            email: "sarah@luminahealth.io",
            company: "Lumina Health",
          },
          project: {
            description: "PostgreSQL read-replica cutover and Kafka transaction pipeline under SOC2 constraints.",
            timeline: "This month",
            budget: "₹50k – ₹1L",
            size: "large",
          },
          status: "new",
          createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
          // Flat compatibility
          name: "Sarah Chen",
          email: "sarah@luminahealth.io",
          company: "Lumina Health",
          projectDescription: "PostgreSQL read-replica cutover and Kafka transaction pipeline under SOC2 constraints.",
          timeline: "This month",
          budget: "₹50k – ₹1L",
        },
      ];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(seeded));
      return seeded;
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveDemoBookingRequest(bookingData: {
  serviceId: string;
  serviceName: string;
  pricingType?: "fixed" | "starting_at" | "custom_quote";
  basePrice?: number;
  selectedAddonIds?: string[];
  selectedAddonNames?: string[];
  estimatedTotal?: number;
  client: {
    name: string;
    email: string;
    phone?: string;
    company: string;
  };
  project: {
    description: string;
    timeline?: string;
    budget?: string;
    size?: "small" | "medium" | "large" | "not_sure";
  };
  // Legacy flat fields allowed
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  projectDescription?: string;
  timeline?: string;
  budget?: string;
}): BookingRequest {
  const clientName = bookingData.client?.name || bookingData.name || "";
  const clientEmail = bookingData.client?.email || bookingData.email || "";
  const clientCompany = bookingData.client?.company || bookingData.company || "";
  const clientPhone = bookingData.client?.phone || bookingData.phone;
  const projectDesc = bookingData.project?.description || bookingData.projectDescription || "";
  const projectTimeline = bookingData.project?.timeline || bookingData.timeline || "Flexible";
  const projectBudget = bookingData.project?.budget || bookingData.budget || "Indicative Scope";
  const projectSize = bookingData.project?.size || "medium";

  const newBooking: BookingRequest = {
    id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
    serviceId: bookingData.serviceId,
    serviceName: bookingData.serviceName,
    pricingType: bookingData.pricingType || "starting_at",
    basePrice: bookingData.basePrice,
    selectedAddonIds: bookingData.selectedAddonIds || [],
    selectedAddonNames: bookingData.selectedAddonNames || [],
    estimatedTotal: bookingData.estimatedTotal,
    client: {
      name: clientName,
      email: clientEmail,
      company: clientCompany,
      phone: clientPhone,
    },
    project: {
      description: projectDesc,
      timeline: projectTimeline,
      budget: projectBudget,
      size: projectSize,
    },
    createdAt: new Date().toISOString(),
    status: "new",
    // Flat compatibility
    name: clientName,
    email: clientEmail,
    company: clientCompany,
    phone: clientPhone,
    projectDescription: projectDesc,
    timeline: projectTimeline,
    budget: projectBudget,
  };

  if (typeof window !== "undefined") {
    try {
      const existing = getStoredDemoBookings();
      const updated = [newBooking, ...existing];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new Event("vectis_booking_updated"));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  return newBooking;
}

export function updateBookingStatus(id: string, newStatus: BookingRequest["status"]): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getStoredDemoBookings();
    const updated = existing.map((b) => (b.id === id ? { ...b, status: newStatus } : b));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("vectis_booking_updated"));
  } catch (e) {
    console.warn("Could not update booking status", e);
  }
}
