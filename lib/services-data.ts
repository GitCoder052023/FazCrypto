export type ServiceCategory = "all" | "web" | "mobile" | "backend" | "cloud" | "maintenance";

export interface ServicePricing {
  model: "starting_at" | "fixed" | "recurring" | "custom";
  amount?: number;
  currency: string;
  label: string;
  period?: string;
  disclaimer: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: "web" | "mobile" | "backend" | "cloud" | "maintenance";
  categoryLabel: string;
  pricing: ServicePricing;
  duration: string;
  deliverables: string[];
  idealFor: string[];
  technologies: string[];
  priceDrivers: string[];
  caseStudyRef?: string;
  featured?: boolean;
  booking: {
    enabled: boolean;
    ctaLabel: string;
  };
}

export interface BookingRequest {
  id: string;
  serviceId: string;
  serviceName: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  projectDescription?: string;
  budget?: string;
  timeline?: string;
  status: "demo_submitted";
  createdAt: string;
}

export const DEMO_SERVICES: Service[] = [
  {
    id: "business-website",
    slug: "business-website",
    name: "Business Website",
    shortDescription:
      "High-performance, editorial business websites engineered with modern Next.js, headless CMS, and precise responsive typography.",
    description:
      "We design and build bespoke corporate and product websites that communicate technical authority and business maturity. Unlike generic WordPress themes or bloated page-builders, our business websites are built on clean Next.js architectures with sub-second page loads, automated asset optimization, and intuitive content management.",
    category: "web",
    categoryLabel: "Web Development",
    pricing: {
      model: "starting_at",
      amount: 25000,
      currency: "INR",
      label: "Starting at ₹25,000",
      disclaimer: "Demo pricing for baseline commercial scope. Final quote depends on number of pages, CMS integration, and bespoke animations.",
    },
    duration: "2–4 weeks",
    deliverables: [
      "Custom responsive frontend built in Next.js (App Router) & Tailwind CSS",
      "Headless CMS integration (Sanity, Strapi, or Contentful) for team editing",
      "Interactive lead capture forms with validation & spam filtering",
      "Comprehensive Core Web Vitals optimization (100 Lighthouse target)",
      "Technical SEO markup (OpenGraph, JSON-LD structured data, XML sitemaps)",
      "Automated CI/CD production deployment pipeline (Vercel / Cloudflare)",
    ],
    idealFor: [
      "B2B service firms needing a distinctive, professional digital storefront",
      "Early-stage technology ventures preparing for commercial launch or fundraising",
      "Established businesses replacing legacy, slow WordPress installations",
      "Agencies and consultancies that require precise typography and fast load times",
    ],
    technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Sanity / Strapi", "Vercel"],
    priceDrivers: [
      "Total number of unique page templates and layout compositions",
      "Custom CMS schema depth (dynamic content models vs. static pages)",
      "Interactive components (calculators, configurators, multi-step forms)",
      "Third-party CRM, marketing automation, or analytics integrations",
      "Content migration from existing legacy websites",
    ],
    caseStudyRef: "meridian",
    featured: true,
    booking: {
      enabled: true,
      ctaLabel: "Book Business Website",
    },
  },
  {
    id: "custom-web-application",
    slug: "custom-web-application",
    name: "Custom Web Application",
    shortDescription:
      "Full-stack web applications, SaaS platforms, and internal operational tooling built for high concurrency and complex business logic.",
    description:
      "We engineer production-grade web applications from architecture to deployment. Whether replacing spreadsheets with a secure internal control plane or launching a multi-tenant B2B SaaS platform, we deliver scalable database models, robust authentication, and intuitive user workflows.",
    category: "web",
    categoryLabel: "Web Development",
    pricing: {
      model: "starting_at",
      amount: 75000,
      currency: "INR",
      label: "Starting at ₹75,000",
      disclaimer: "Demo pricing for baseline application MVP. Final quote scales with schema complexity, role permissions, and integration depth.",
    },
    duration: "4–10 weeks",
    deliverables: [
      "High-density responsive frontend interface with sub-100ms interactions",
      "Robust REST or gRPC backend APIs with comprehensive test coverage",
      "Enterprise authentication (OAuth2, OIDC, JWT session management, RBAC)",
      "Normalized relational database architecture (PostgreSQL) with migration scripts",
      "Automated integration and end-to-end testing harnesses (Playwright)",
      "Production deployment with automated blue/green canary pipelines",
    ],
    idealFor: [
      "Startups building their foundational MVP or core software product",
      "Operations leaders replacing brittle spreadsheets and manual reconciliation",
      "Enterprises requiring internal control planes and administrative portals",
      "Businesses automating multi-step customer or partner transaction workflows",
    ],
    technologies: ["React / Next.js", "TypeScript", "Node.js / Go", "PostgreSQL", "Redis", "Docker"],
    priceDrivers: [
      "Complexity of data models and relational entities",
      "Role-Based Access Control (RBAC) matrix and multi-tenancy requirements",
      "Real-time synchronization requirements (WebSockets, SSE)",
      "Payment gateway integrations and multi-currency billing logic",
      "Compliance requirements (SOC2, HIPAA, data encryption at rest)",
    ],
    caseStudyRef: "meridian",
    featured: true,
    booking: {
      enabled: true,
      ctaLabel: "Book Custom Web App",
    },
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortDescription:
      "Native and cross-platform Android & iOS applications with offline synchronization, push notifications, and hardware integrations.",
    description:
      "We engineer resilient, high-speed mobile applications designed to perform reliably under unpredictable network conditions. From field-worker fleet dispatch to consumer fintech interfaces, our mobile applications prioritize battery efficiency, fluid 60fps animations, and secure local data encryption.",
    category: "mobile",
    categoryLabel: "Mobile Development",
    pricing: {
      model: "starting_at",
      amount: 100000,
      currency: "INR",
      label: "Starting at ₹1,00,000",
      disclaimer: "Demo pricing for dual-platform baseline application. Final quote depends on offline synchronization, device hardware integration, and store submission scope.",
    },
    duration: "6–12 weeks",
    deliverables: [
      "Cross-platform codebase (React Native / Flutter) targeting iOS & Android",
      "Offline-first local caching and automatic reconciliation engine",
      "Push notification pipeline integration (FCM, Apple APNs)",
      "Biometric authentication (FaceID, Fingerprint) and secure keychain storage",
      "App Store and Google Play compliance review and release submission support",
      "Crashlytics and performance telemetry monitoring instrumentation",
    ],
    idealFor: [
      "Businesses deploying operational apps for field staff or delivery drivers",
      "Consumer tech ventures launching customer-facing mobile platforms",
      "Platforms needing mobile companion apps with push notifications and live tracking",
      "Companies modernizing deprecated native apps into a unified codebase",
    ],
    technologies: ["React Native", "TypeScript", "iOS / Android Native APIs", "SQLite", "FCM", "Fastlane"],
    priceDrivers: [
      "Single platform vs. dual iOS & Android deployment requirements",
      "Offline-first data sync complexity and conflict resolution algorithms",
      "Hardware integrations (GPS tracking, Bluetooth beacons, camera barcode scanning)",
      "In-app purchases, subscription management, and App Store guidelines review",
      "Custom UI animations and native device gesture interactions",
    ],
    caseStudyRef: "meridian",
    featured: true,
    booking: {
      enabled: true,
      ctaLabel: "Book Mobile App",
    },
  },
  {
    id: "backend-api-development",
    slug: "backend-api-development",
    name: "API & Backend Development",
    shortDescription:
      "High-throughput microservices, REST/gRPC API architectures, transactional data buses, and database query optimizations.",
    description:
      "We build and refactor the backend engines that power modern digital operations. Focusing on sub-50ms response times, transactional safety, and horizontal scalability, our backend engineering ensures your infrastructure scales predictably without unbudgeted cloud costs or database lockups.",
    category: "backend",
    categoryLabel: "Backend & API",
    pricing: {
      model: "starting_at",
      amount: 50000,
      currency: "INR",
      label: "Starting at ₹50,000",
      disclaimer: "Demo pricing for standard API microservice. Final quote depends on concurrency requirements, event bus topologies, and third-party integrations.",
    },
    duration: "3–8 weeks",
    deliverables: [
      "Domain-driven API architecture with OpenAPI / gRPC contract specifications",
      "Normalized relational database schemas with index optimization and connection pooling",
      "Asynchronous task queue processing (Kafka / RabbitMQ / BullMQ)",
      "High-speed Redis cache layers and distributed lock management",
      "Automated unit, integration, and load benchmarking test suites",
      "Structured JSON logging, OpenTelemetry tracing, and metric endpoints",
    ],
    idealFor: [
      "Platforms experiencing database timeouts or slow API response times",
      "Companies integrating multiple external enterprise systems or partner APIs",
      "Teams decoupling monolithic backends into manageable microservices",
      "Businesses launching mobile or web apps that require a dedicated API tier",
    ],
    technologies: ["Go", "Node.js / TypeScript", "PostgreSQL", "Apache Kafka", "Redis", "gRPC"],
    priceDrivers: [
      "Target request throughput and concurrent connection thresholds",
      "Number and reliability of external third-party API dependencies",
      "Data consistency requirements (strict ACID vs. eventual consistency)",
      "Complex financial calculation or algorithmic transaction processing logic",
      "Legacy database schema migration and backwards compatibility constraints",
    ],
    caseStudyRef: "kestrel",
    featured: true,
    booking: {
      enabled: true,
      ctaLabel: "Book Backend / API",
    },
  },
  {
    id: "cloud-setup-deployment",
    slug: "cloud-setup-deployment",
    name: "Cloud Setup & Infrastructure",
    shortDescription:
      "Declarative Infrastructure as Code (Terraform), Kubernetes cluster orchestration, automated CI/CD, and production SRE hardening.",
    description:
      "We eliminate manual cloud configuration and 'it works on my machine' inconsistencies. Codifying your entire infrastructure with modular Terraform, we provision self-healing container clusters, multi-zone automated failovers, and actionable monitoring dashboards with zero hidden drift.",
    category: "cloud",
    categoryLabel: "Cloud & Infrastructure",
    pricing: {
      model: "starting_at",
      amount: 20000,
      currency: "INR",
      label: "Starting at ₹20,000",
      disclaimer: "Demo pricing for baseline cloud architecture setup. Final quote depends on cluster size, multi-region redundancy, and compliance policies.",
    },
    duration: "1–3 weeks",
    deliverables: [
      "Modular Infrastructure as Code (Terraform) in your private repository",
      "Container orchestration (Docker / Kubernetes / AWS ECS) with auto-scaling",
      "Automated GitHub Actions / GitLab CI/CD zero-downtime deployment pipelines",
      "Managed database provisioning with automated daily snapshots & point-in-time recovery",
      "Full-stack observability suite (Prometheus, Grafana, OpenTelemetry)",
      "Security hardening: least-privilege IAM, SSL/TLS certificates, and WAF rules",
    ],
    idealFor: [
      "Teams moving from manual server SSH deployments to modern GitOps pipelines",
      "Companies experiencing mysterious cloud outages or runaway monthly AWS/GCP bills",
      "Organizations preparing for security audits or institutional compliance reviews",
      "Startups needing a bulletproof production foundation before high-profile launch",
    ],
    technologies: ["Terraform", "AWS / GCP", "Docker", "Kubernetes", "GitHub Actions", "Prometheus"],
    priceDrivers: [
      "Multi-region high availability and active/active disaster recovery SLAs",
      "Scale of compute workloads and auto-scaling boundary constraints",
      "Compliance frameworks (SOC2, HIPAA, PCI-DSS) and audit evidence logging",
      "Migration of live production databases and DNS cutover without downtime",
      "Existing cloud account cleanup and cost-optimization refactoring",
    ],
    caseStudyRef: "synapse",
    featured: true,
    booking: {
      enabled: true,
      ctaLabel: "Book Cloud Setup",
    },
  },
  {
    id: "application-maintenance",
    slug: "application-maintenance",
    name: "Application Maintenance & SRE",
    shortDescription:
      "Continuous production monitoring, automated security patching, dependency upgrades, SLA incident response, and performance tuning.",
    description:
      "Software does not stop needing attention once deployed. Our recurring maintenance pod acts as your dedicated reliability engineering team—monitoring uptime, applying critical security patches, updating dependencies before vulnerabilities emerge, and resolving production regressions.",
    category: "maintenance",
    categoryLabel: "Maintenance & SRE",
    pricing: {
      model: "recurring",
      amount: 10000,
      currency: "INR",
      label: "Starting at ₹10,000 / month",
      period: "/month",
      disclaimer: "Demo pricing for baseline monthly maintenance retainer. Final quote depends on production SLA requirements and dedicated on-call coverage.",
    },
    duration: "Ongoing Monthly Retainer",
    deliverables: [
      "24/7 automated uptime and API health monitoring with instant pager alerting",
      "Monthly package dependency audits, vulnerability scans, and security patches",
      "Database performance profiling, slow query tuning, and index maintenance",
      "Continuous automated offsite backup verification and disaster recovery restore tests",
      "Dedicated monthly engineering hours for bug fixes and minor capability upgrades",
      "Monthly executive reliability report detailing uptime SLAs and error budgets",
    ],
    idealFor: [
      "Businesses with live revenue systems who lack an in-house 24/7 DevOps engineer",
      "Founders needing dependable technical insurance so they can focus on sales",
      "Organizations whose internal teams are fully committed to new feature roadmaps",
      "Legacy software systems that need stable maintenance without ongoing rewrites",
    ],
    technologies: ["Datadog", "Prometheus", "Grafana", "Sentry", "Dependabot", "PagerDuty"],
    priceDrivers: [
      "Required SLA response time (e.g. 15-minute critical vs. next business day)",
      "Number of production microservices and active infrastructure instances",
      "Dedicated monthly engineering hours allocated for enhancements",
      "Weekend and overnight on-call engineer paging coverage",
    ],
    caseStudyRef: "kestrel",
    featured: true,
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
  return DEMO_SERVICES.filter((s) => s.booking.enabled);
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
          id: "DEMO-REQ-481A",
          serviceId: "custom-web-application",
          serviceName: "Custom Web Application",
          name: "Rajesh Iyer",
          email: "r.iyer@apexlogistics.in",
          company: "Apex Logistics India",
          projectDescription: "Replacing multi-city dispatch spreadsheets with centralized web portal for 45 operators.",
          budget: "₹1L – ₹2.5L",
          timeline: "1–3 months",
          status: "demo_submitted",
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        },
        {
          id: "DEMO-REQ-9B2C",
          serviceId: "backend-api-development",
          serviceName: "API & Backend Development",
          name: "Sarah Chen",
          email: "sarah@luminahealth.io",
          company: "Lumina Health",
          projectDescription: "PostgreSQL read-replica cutover and Kafka transaction pipeline.",
          budget: "₹50k – ₹1L",
          timeline: "Within 1 month",
          status: "demo_submitted",
          createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
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

export function saveDemoBookingRequest(booking: Omit<BookingRequest, "id" | "createdAt" | "status">): BookingRequest {
  const newBooking: BookingRequest = {
    ...booking,
    id: `DEMO-REQ-${Math.floor(1000 + Math.random() * 9000).toString(16).toUpperCase()}`,
    status: "demo_submitted",
    createdAt: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    try {
      const existing = getStoredDemoBookings();
      const updated = [newBooking, ...existing];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  return newBooking;
}
