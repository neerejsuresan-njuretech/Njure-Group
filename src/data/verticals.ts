export interface VerticalData {
  id: string;
  name: string;
  division: string;
  tagline: string;
  humanMission: string;
  summary: string;
  description: string;
  externalLink?: string;
  externalLinkLabel?: string;
  status: 'Operational' | 'Active Growth' | 'In Development' | 'R&D Phase';
  accentColor: string;
  iconName: string;
  keyInitiatives: string[];
  metrics: { label: string; value: string }[];
  impactStories: { title: string; story: string }[];
  domainFeatures: { title: string; desc: string }[];
}

export const VERTICALS: VerticalData[] = [
  {
    id: 'njure-tech',
    name: 'Njure Tech',
    division: 'Enterprise Technology & BPO',
    tagline: 'Engineering with Purpose. Elevating Human Potential.',
    humanMission:
      'We believe world-class technology should enrich communities, creating high-value engineering careers right here in Kerala while building software that removes workplace burnout.',
    summary:
      'Enterprise cloud infrastructure, automated ITSM workflows through ScribbleIT, and conversational voice AI that empowers customer teams.',
    description:
      'Njure Tech is founded on the conviction that high-tier software engineering does not require migrating away from loved ones and hometowns. Operating from Kozhikode, our engineers build resilient enterprise architectures, modern IT service management workflows with ScribbleIT, and low-latency voice AI agents designed to handle repetitive customer friction so human teams can focus on empathy and meaningful problem solving.',
    externalLink: 'https://tech.njuregroup.in',
    externalLinkLabel: 'tech.njuregroup.in',
    status: 'Operational',
    accentColor: '#38bdf8',
    iconName: 'Server',
    keyInitiatives: [
      'ScribbleIT ITSM Workflow Automation',
      'Conversational Voice AI & Empathy-First Support',
      'Resilient Cloud Infrastructure & Data Sovereignty',
      '24/7 Global Managed Services & BPO Excellence'
    ],
    metrics: [
      { label: 'Uptime Reliability', value: '99.98%' },
      { label: 'ITSM Engine', value: 'ScribbleIT' },
      { label: 'Voice AI Latency', value: '<450ms' }
    ],
    impactStories: [
      {
        title: 'Retaining Local Brainpower',
        story: 'Providing ambitious regional graduates in Malabar with global-tier software careers without forcing relocation to crowded metros.'
      },
      {
        title: 'Relieving IT Burnout',
        story: 'Automating routine service desk tickets so enterprise support specialists spend time on creative human collaboration.'
      }
    ],
    domainFeatures: [
      {
        title: 'ScribbleIT ITSM Workflows',
        desc: 'An intuitive IT Service Management suite that replaces clunky legacy ticket queues with automated, human-friendly routing.'
      },
      {
        title: 'Conversational Voice AI',
        desc: 'Natural, multilingual voice assistants that listen with context and solve customer requests promptly.'
      },
      {
        title: 'Enterprise Cloud Operations',
        desc: 'Hybrid infrastructure and continuous reliability monitoring engineered for growing businesses.'
      }
    ]
  },
  {
    id: 'vastrathalam',
    name: 'Vastrathalam',
    division: 'Apparel & Handloom Heritage',
    tagline: 'Honoring the Hands Behind Every Thread.',
    humanMission:
      'Every weave carries the soul of a weaver. We bridge Kerala’s master artisans directly with the world, ensuring fair livelihoods, cultural pride, and timeless grace.',
    summary:
      'Authentic Kerala handlooms, festive Kasavu sarees, and bespoke ethnic attire connecting traditional weavers with modern digital commerce.',
    description:
      'Vastrathalam was born out of profound love for Kerala’s living textile traditions. Handloom weaving is not merely fabric; it is generations of inherited artistry passed down through families in Balaramapuram, Chendamangalam, and Kuthampully. By eliminating exploitative middlemen and opening a direct global digital storefront, Vastrathalam guarantees fair-trade prosperity to master weavers while delivering pure, unadulterated cotton and zari drapes to homes worldwide.',
    externalLink: 'https://vastrathalam.njuregroup.in',
    externalLinkLabel: 'vastrathalam.njuregroup.in',
    status: 'Operational',
    accentColor: '#fbbf24',
    iconName: 'Sparkles',
    keyInitiatives: [
      'Direct-From-Weaver Ethical Compensation',
      'Authentic Balaramapuram & Kasavu Collections',
      'Custom Bridal Ensembles & Made-to-Measure Tailoring',
      'Global Diaspora Cultural Delivery'
    ],
    metrics: [
      { label: 'Fair-Trade Premium', value: '100% Direct' },
      { label: 'Weaver Cooperatives', value: '24+ Active' },
      { label: 'Heritage Weaves', value: '500+ Drapes' }
    ],
    impactStories: [
      {
        title: 'Dignity for Master Weavers',
        story: 'Ensuring senior craftsmen receive the financial security and societal respect their timeless generational skills deserve.'
      },
      {
        title: 'Connecting the Diaspora',
        story: 'Bringing the warm, nostalgic scent of authentic Kasavu festive attire to Malayalis celebrating Onam and weddings across the globe.'
      }
    ],
    domainFeatures: [
      {
        title: 'Authentic Kasavu Craft',
        desc: 'Pure cotton handwoven on traditional pit looms with meticulous gold and silver zari borders, certified for authenticity.'
      },
      {
        title: 'Made-to-Measure Tailoring',
        desc: 'Personalized styling and artisan tailoring that celebrates individual fit and cultural elegance.'
      },
      {
        title: 'Direct Weaver Partnerships',
        desc: 'Sustainable direct-to-consumer infrastructure that routes commercial margins directly back into handloom communities.'
      }
    ]
  },
  {
    id: 'dozo',
    name: 'Dozo',
    division: 'Hyperlocal Community Platform',
    tagline: 'Empowering Local Hands. Strengthening Neighborhoods.',
    humanMission:
      'The heart of any town is its local workers. We are building Dozo to give electricians, plumbers, and neighborhood merchants fair work, instant pay, and community respect.',
    summary:
      'A proposed hyperlocal marketplace and dignified gig-work platform connecting local households with trusted neighborhood specialists.',
    description:
      'Too many gig workers and local service trades are trapped in asymmetric platforms with hidden penalties, unpredictable wages, and faceless algorithms. Dozo reimagines the hyperlocal economy around dignity, mutual respect, and neighborhood trust. When a family needs an emergency electrical fix, an appliance repair, or artisan produce, Dozo pairs them with verified local professionals with zero commission gouging and prompt digital escrow payouts.',
    status: 'In Development',
    accentColor: '#34d399',
    iconName: 'MapPin',
    keyInitiatives: [
      'Dignified Gig Work with Fair Wage Transparency',
      'Rapid Neighborhood Matching within 5 Kilometers',
      'Support for Local Mom-and-Pop Merchants',
      'Community Verification & Mutual Trust Badges'
    ],
    metrics: [
      { label: 'Worker Earnings Retained', value: '92%+' },
      { label: 'Target Service Match', value: '<5 Mins' },
      { label: 'Community Focus', value: 'Neighborhood First' }
    ],
    impactStories: [
      {
        title: 'Fair Pay for Local Trades',
        story: 'Enabling independent trade workers to take pride in their craft, receive instant pay, and build loyal neighborhood clientele.'
      },
      {
        title: 'Reliable Community Safety',
        story: 'Giving families complete peace of mind when inviting skilled technicians into their homes through verified community accountability.'
      }
    ],
    domainFeatures: [
      {
        title: 'Neighborhood Trade Discovery',
        desc: 'Instant booking for certified electricians, plumbers, carpenters, and appliance repair specialists in your immediate vicinity.'
      },
      {
        title: 'Fair-Share Worker Escrow',
        desc: 'No predatory commission fees; transparent rates where the person performing the labor takes home their rightful earnings.'
      },
      {
        title: 'Hyperlocal Merchant Commerce',
        desc: 'Connecting neighborhood bakeries, artisans, and family stores to customers with eco-friendly local delivery.'
      }
    ]
  },
  {
    id: 'b-plus-energies',
    name: 'B+ Energies',
    division: 'Clean Mobility & Automotive R&D',
    tagline: 'Cleaner Skies for Our Children. Accessible Commutes for Every Family.',
    humanMission:
      'Clean energy cannot be a luxury reserved for the affluent. We engineer practical hybrid powertrains that cut everyday fuel costs for working families while preserving our green landscapes.',
    summary:
      'An automotive engineering initiative researching hybrid two-wheelers and regenerative battery systems engineered for everyday Indian roads.',
    description:
      'For millions of hardworking individuals across South India, a two-wheeler is more than transportation—it is the lifeline to employment, education, and family well-being. With fluctuating fuel prices placing a heavy burden on household budgets, B+ Energies is researching parallel hybrid motorcycle powertrains. By pairing existing fuel reliability with intelligent electric torque for stop-and-go city traffic, we target cutting commuting costs by half without requiring costly charger installations.',
    status: 'R&D Phase',
    accentColor: '#60a5fa',
    iconName: 'Zap',
    keyInitiatives: [
      'Accessible Parallel Hybrid Motorcycle Prototypes',
      'Affordable Fuel-Saving Retrofit Systems',
      'Modular Swappable Battery Safety for Tropical Climates',
      'Kinetic Regenerative Urban Commute Systems'
    ],
    metrics: [
      { label: 'Target Fuel Savings', value: '45–60%' },
      { label: 'Commute Cost Cut', value: 'Immediate' },
      { label: 'Engineering Goal', value: 'Zero Range Anxiety' }
    ],
    impactStories: [
      {
        title: 'Lightening Household Budgets',
        story: 'Designing technology that keeps more money in the pockets of working parents instead of paying for rising fuel bills.'
      },
      {
        title: 'Protecting Kerala’s Lush Landscapes',
        story: 'Preserving the pristine greenery and air quality of the Western Ghats and coastal communities through practical clean transit.'
      }
    ],
    domainFeatures: [
      {
        title: 'Parallel Hybrid System',
        desc: 'An intelligent mechanical architecture where electric torque effortlessly carries stop-and-go traffic while combustion handles open highways.'
      },
      {
        title: 'Tropical-Tested Battery Engineering',
        desc: 'Thermal-safe battery modules built to withstand humid South Indian monsoon conditions and summer temperatures safely.'
      },
      {
        title: 'Accessible Maintenance',
        desc: 'Designed so trusted neighborhood motorcycle mechanics can easily service components without needing proprietary tooling.'
      }
    ]
  }
];
