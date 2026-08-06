export type Project = {
  title: string
  eyebrow: string
  description: string
  highlights: string[]
  stack: string[]
  accent: string
  country?: string
  url?: string
  linkLabel?: string
  status?: string
}

export const aiProjects: Project[] = [
  {
    title: 'AI Lead Generation Agent',
    eyebrow: 'Natural language business search',
    description:
      'A local Streamlit application that uses Gemini to understand natural language lead requests and Google Places API Text Search to retrieve real business records.',
    highlights: [
      'Interprets natural language lead criteria',
      'Returns company details, ratings, and contact information',
      'Provides Google Maps URLs and Google Place IDs',
    ],
    stack: [
      'Python',
      'Streamlit',
      'Gemini API',
      'Google Places API',
      'REST APIs',
    ],
    accent: 'LG',
    status: 'Public repository',
    url: 'https://github.com/mark-anthony-canta/Lead-Generator-AI-Agent',
    linkLabel: 'Visit Repository',
  },
  {
    title: 'AI File Reading Agent',
    eyebrow: 'Local document assistant',
    description:
      'An AI agent that reads files from an approved local folder and answers questions about their contents through a browser based chat interface.',
    highlights: [
      'Reads PDF, TXT, DOCX, and DOC files',
      'Uses Gemini function calling',
      'Restricts file access to one approved folder',
    ],
    stack: [
      'Python',
      'Streamlit',
      'Gemini API',
      'Function Calling',
      'Document Processing',
    ],
    accent: 'FR',
    status: 'Public repository',
    url: 'https://github.com/mark-anthony-canta/AI-File-Reading-Agent',
    linkLabel: 'Visit Repository',
  },
  {
    title: 'Resume Sender AI Agent',
    eyebrow: 'Automated job outreach',
    description:
      'An AI powered agent currently being developed to find company email addresses using provided search parameters and send a tailored resume based on the type of company.',
    highlights: [
      'Finds companies using configurable search parameters',
      'Collects and organizes company email addresses',
      'Selects and sends a tailored resume for each company type',
    ],
    stack: [
      'Python',
      'Gmail API',
      'Google Places API',
      'Google Search API',
      'Gemini API',
      'Google Drive API',
    ],
    accent: 'RS',
    status: 'Currently under development',
  },
]

export const wordpressProjects: Project[] = [
  {
    title: 'Atlantik DMC',
    eyebrow: 'Travel and destination management',
    description:
      'A responsive website for an Icelandic destination management company specializing in cruise services, MICE, and bespoke luxury travel.',
    highlights: [
      'Cruise, MICE, and luxury travel service pages',
      'Responsive mega menu and content structure',
      'Blog, sustainability, team, and contact sections',
    ],
    stack: [
      'WordPress',
      'Bricks Builder',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    accent: 'IS',
    country: 'Iceland',
    url: 'https://www.atlantik.is/',
  },
  {
    title: 'Baig Security',
    eyebrow: 'Security services website',
    description:
      'A lead focused business website presenting professional security services for commercial, residential, construction, retail, event, and concierge clients.',
    highlights: [
      'Security service and location pages',
      'Quote forms and lead generation',
      'Hosting, DNS, deployment, and maintenance',
    ],
    stack: [
      'WordPress',
      'Elementor',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    accent: 'CA',
    country: 'Canada',
    url: 'https://baig-security.com/',
  },
  {
    title: "JT's Manukan Grille",
    eyebrow: 'Restaurant and locations website',
    description:
      'A restaurant website for a Filipino inasal brand featuring its menu, branch locations, company story, updates, and contact information.',
    highlights: [
      'Food menu and branch discovery',
      'Brand story and blog content',
      'Responsive restaurant experience',
    ],
    stack: [
      'WordPress',
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
    ],
    accent: 'PH',
    country: 'Philippines',
    url: 'https://jtsmanukangrille.com/',
  },
]

export const shopifyProjects: Project[] = [
  {
    title: 'The Reykjavík Grapevine Store',
    eyebrow: 'Icelandic products and merchandise',
    description:
      'A Shopify storefront connected to The Reykjavík Grapevine, featuring curated Icelandic products, publications, gift boxes, and branded merchandise.',
    highlights: [
      'Curated product collections and merchandising',
      'Product catalog, cart, and customer accounts',
      'Responsive storefront and newsletter signup',
    ],
    stack: [
      'Shopify',
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
    ],
    accent: 'RG',
    country: 'Iceland',
    url: 'https://shop.grapevine.is/',
  },
  {
    title: 'Wool Iceland',
    eyebrow: 'Icelandic wool ecommerce store',
    description:
      'A modern Shopify storefront presenting Icelandic wool sweaters with a clean product experience designed for local and international customers.',
    highlights: [
      'Product catalog and featured collections',
      'Responsive product and shopping experience',
      'Customer accounts, cart, and worldwide delivery',
    ],
    stack: [
      'Shopify',
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
    ],
    accent: 'WI',
    country: 'Iceland',
    url: 'https://wooliceland.is/',
  },
  {
    title: 'Calma',
    eyebrow: 'Home and gift ecommerce store',
    description:
      'An Icelandic Shopify store offering timeless home décor and gift products, including candles, vases, flowerpots, kitchen items, and bathroom products.',
    highlights: [
      'Organized product categories and collections',
      'Product search, cart, and customer accounts',
      'Promotional sections and newsletter integration',
    ],
    stack: [
      'Shopify',
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
    ],
    accent: 'CA',
    country: 'Iceland',
    url: 'https://calma.is/',
  },
]

export const otherWebsiteProjects: Project[] = [
  {
    title: 'Baig Secured Security',
    eyebrow: 'Professional security company website',
    description:
      'A professional company website presenting security guard services, emergency coverage, mobile patrols, event security, career opportunities, and customer inquiry options.',
    highlights: [
      'Security service and company information',
      'Quote requests and customer inquiries',
      'Career, contact, and service area pages',
    ],
    stack: [
      'Website Builder',
      'HTML',
      'CSS',
      'Responsive Design',
      'Contact Forms',
    ],
    accent: 'BS',
    country: 'Canada',
    url: 'https://baigsecurity.com/',
  },
  {
    title: 'Ziomara Beauty & Spa',
    eyebrow: 'Beauty and wellness business website',
    description:
      'A professional business website presenting beauty, wellness, esthetics, tattooing, artistry, and related services for clients in Orlando, Florida.',
    highlights: [
      'Beauty and wellness service presentation',
      'Business information and contact forms',
      'Responsive layout for mobile and desktop',
    ],
    stack: [
      'Website Builder',
      'HTML',
      'CSS',
      'Responsive Design',
      'Contact Forms',
    ],
    accent: 'ZB',
    country: 'USA',
    url: 'https://ziomarabeautyspa.com/',
  },
  {
    title: 'HT Security',
    eyebrow: 'Bilingual security services website',
    description:
      'A bilingual company website presenting professional on-call, event, short-term, and long-term security services for businesses and individuals in Iceland.',
    highlights: [
      'English and Icelandic website content',
      'Security services and company information',
      'Contact forms and customer inquiry sections',
    ],
    stack: [
      'Website Builder',
      'HTML',
      'CSS',
      'Responsive Design',
      'Multilingual Content',
    ],
    accent: 'HT',
    country: 'Iceland',
    url: 'https://htsecurity.is/',
  },
  {
    title: 'ASAP Dental Services',
    eyebrow: 'Dental services business website',
    description:
      'A professional company website presenting dental services, career opportunities, company information, and customer contact options for its US operations.',
    highlights: [
      'Dental service and company information',
      'Career and recruitment pages',
      'Customer inquiry and contact forms',
    ],
    stack: [
      'Website Builder',
      'HTML',
      'CSS',
      'Responsive Design',
      'Contact Forms',
    ],
    accent: 'AD',
    country: 'USA',
    url: 'https://asapdentalllc.com/',
  },
]




export const resumeLinks = [
  {
    title: 'AI Agent Developer Resume',
    description: 'Python, FastAPI, RAG, Gemini, OpenAI, Claude, ChromaDB, and API integrations.',
    href: '/resumes/mark-anthony-canta-ai-agent-developer.pdf',
  },
  {
    title: 'WordPress Developer Resume',
    description: 'Elementor, Bricks Builder, custom frontend development, hosting, DNS, and maintenance.',
    href: '/resumes/mark-anthony-canta-wordpress-developer.pdf',
  },
    {
    title: 'Shopify Developer Resume',
    description: 'Store setup, custom storefronts, payment configuration, email marketing, and retention workflows.',
    href: '/resumes/mark-anthony-canta-shopify-developer.pdf',
  },
]
