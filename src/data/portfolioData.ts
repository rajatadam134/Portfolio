export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  liveUrl: string;
  displayUrl: string;
  videoSrc: string;
  posterSrc: string;
  description: string;
  badge: 'Live' | 'Template';
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProcessItem {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export const CLIENT_WORK: ProjectItem[] = [
  {
    id: 'somganesh-events',
    title: 'Somganesh Events',
    category: 'Event Management & Production',
    liveUrl: 'https://rajatadam134.github.io/Somganesh_Events_Website/',
    displayUrl: 'somganeshevents.com',
    videoSrc: '/videos/Client1.mp4',
    posterSrc: '/assets/Client1LandingPageImage.png',
    description: 'High-impact luxury event management and production platform designed for seamless presentation, editorial visual weight, and frictionless client inquiries.',
    badge: 'Live',
  },
  {
    id: 'dr-karpe-clinic',
    title: 'Dr. Karpe Clinic',
    category: 'Healthcare & Medical Platform',
    liveUrl: 'https://drkarpe.com/',
    displayUrl: 'drkarpe.com',
    videoSrc: '/videos/Client2.mp4',
    posterSrc: '/assets/Client2LandingPageImage.png',
    description: 'Authoritative medical clinic platform engineered with clinical clarity, fast accessibility, and high-trust patient inquiry flows.',
    badge: 'Live',
  },
];

export const TEMPLATES: ProjectItem[] = [
  {
    id: 'juice-galaxy',
    title: 'Juice Galaxy',
    category: 'DTC Beverage & Storefront Concept',
    liveUrl: 'https://harsh-bhutada.github.io/JuiceGalaxy/',
    displayUrl: 'juicegalaxy.store',
    videoSrc: '/videos/TemplateWebsite1Video.mp4',
    posterSrc: '/assets/TemplateWebsite1Image.png',
    description: 'Vibrant direct-to-consumer digital storefront concept engineered with punchy micro-interactions, responsive cart flows, and modern kinetic typography.',
    badge: 'Template',
  },
  {
    id: 'woodland-solapur',
    title: 'Woodland Solapur',
    category: 'Retail & Apparel Brand Experience',
    liveUrl: 'https://rajatadam134.github.io/Woodland_Solapur_Website/',
    displayUrl: 'woodland-solapur.com',
    videoSrc: '/videos/TemplateWebsite2Video.mp4',
    posterSrc: '/assets/TemplateWebsite2Image.png',
    description: 'Editorial retail showcase and catalog designed to highlight outdoor durability, product lines, and local store presence.',
    badge: 'Template',
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'bespoke-web-dev',
    title: 'Bespoke Web Development',
    description: 'Custom web solutions tailored specifically to your company workflows. Engineered using modern frameworks with clean maintainable architecture and responsive fluid design.',
    tags: ['Next.js', 'React', 'CMS Setup'],
  },
  {
    id: 'high-converting-landing-pages',
    title: 'High-Converting Landing Pages',
    description: 'Laser-focused campaign landing pages built to maximize paid traffic ROI, capture high-ticket leads, and tell your brand story with authority.',
    tags: ['Lead Generation', 'A/B Ready', 'Conversion Flow'],
  },
  {
    id: 'speed-optimization-redesigns',
    title: 'Speed Optimization & Redesigns',
    description: 'Transform sluggish, outdated websites into sleek, modern powerhouses scoring 95+ on Google PageSpeed with zero layout shifts.',
    tags: ['Core Web Vitals', 'Asset Optimization', 'Mobile UX Fix'],
  },
  {
    id: 'ui-ux-creative-direction',
    title: 'UI/UX & Creative Direction',
    description: 'Distinctive visual design that commands respect. No generic cookie-cutter templates — every visual token is calibrated for your industry.',
    tags: ['Visual Design', 'UI/UX Design', 'Design Systems'],
  },
];

export const PROCESS_STEPS: ProcessItem[] = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Blueprint & Alignment',
    description: 'We align on business goals, target audience psychology, and technical scope. Within 48 hours, you receive a clear execution roadmap with zero guesswork.',
  },
  {
    step: '02',
    title: 'Build',
    subtitle: 'Interactive Craft & Code',
    description: 'I design and develop the solution in focused sprints with regular async progress walkthroughs, responsive stress-testing, and strict component modularity.',
  },
  {
    step: '03',
    title: 'Launch & Support',
    subtitle: 'Vitals Audit & Delivery',
    description: 'We run accessibility and Core Web Vitals checks, wire production hosting and domains, and ensure a seamless handoff so your site runs reliably from day one.',
  },
];

export const MARQUEE_ITEMS: string[] = [
  'React',
  'Tailwind CSS',
  'TypeScript',
  'Next.js',
  'Interactive Motion',
  'SEO & Core Web Vitals',
  'Clean Architecture',
  'Performance Engineering',
];
