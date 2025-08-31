export const BATTERY_PAGE_DATA = {
  metadata: {
    title: {
      default:
        "Industrial Battery Rental & Sales in Saudi Arabia | Gulf Horizon Telecom",
    },
    description:
      "Explore reliable battery solutions for data centers, telecom, and backup systems across Saudi Arabia. Gulf Horizon Telecom offers rental and sales of VRLA, lithium-ion, and tubular batteries in Riyadh, Jeddah, and Dammam.",
    keywords:
      "battery rental Saudi Arabia, VRLA battery, lithium-ion battery, tubular battery, UPS battery replacement, telecom batteries, solar batteries, battery sales Riyadh, battery backup KSA, industrial batteries Gulf Horizon",
  },

  pageHeader: {
    title: "Battery Rental & Sales in Saudi Arabia",
    backto: "Home",
    breadcrumbs: [
      {
        name: "Battery Solutions",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/batteries/batterybanner.webp",
  },
  sidebarCategories: {
    heading: "Explore Our Other Power Products",
    details: [
      { name: "UPS Systems", link: "/ups-saudi-arabia" },
      { name: "Load Banks", link: "/load-bank-rental-saudi-arabia" },
      { name: "Generators", link: "/generators-saudi-arabia" },
      {
        name: "AVR's",
        link: "/automatic-voltage-regulator-services-saudi-arabia",
      },
    ],
  },
  sidebar: {
    title: "Get Battery Backup Help",
    description:
      "Need help finding the right battery? Reach out for specs, pricing, or expert support across Saudi Arabia.",
  },
  batteryData: {
    title: "Reliable Battery Solutions for Every Power Need",
    description:
      "Gulf Horizon Telecom provides rental and sales of industrial-grade batteries for critical applications. Whether you're powering a telecom tower, UPS system, or solar backup, we supply high-performance batteries with fast delivery and expert support across Saudi Arabia.",
    images: [
      "/batteries/battery.webp",
      "/batteries/battery2.webp",
      "/batteries/battery3.webp",
    ],
    rentalBenefits: [
      "Short-term and emergency backup battery rentals",
      "Full installation & discharge testing",
      "Available in Riyadh, Jeddah, Dammam & beyond",
    ],
    maintenance: {
      preventive: [
        "Voltage & specific gravity checks",
        "Connection tightening & corrosion removal",
        "Temperature monitoring",
      ],
      schedule: {
        monthly: ["Electrolyte level checks", "Terminal cleaning"],
        quarterly: ["Capacity test", "Equalization charging"],
        annual: ["Load testing", "Battery replacement planning"],
      },
    },
  },

  productData: {
    productTitle: "Our Battery Rental & Sales Services",
    details: [
      {
        name: "VRLA Battery Rental",
        description:
          "Rent sealed lead-acid (VRLA) batteries for UPS and telecom backup systems. Ideal for short-term outages and maintenance windows.",
      },
      {
        name: "Lithium-Ion Battery Solutions",
        description:
          "Long-lasting, lightweight, and fast-charging lithium-ion batteries. Suitable for energy storage, solar integration, and mobile deployments.",
      },
      {
        name: "Tubular Battery Systems",
        description:
          "High-capacity tubular batteries for industrial and off-grid usage. Available in flooded and gel variants.",
      },
      {
        name: "Telecom Battery Backup",
        description:
          "Ensure BTS continuity with high-discharge rate telecom-grade batteries, available on rental or purchase.",
      },
      {
        name: "UPS Battery Replacement",
        description:
          "We supply and install batteries for all major UPS systems—complete with commissioning and disposal of old units.",
      },
      {
        name: "Solar Battery Storage",
        description:
          "Deep cycle batteries for hybrid and off-grid solar setups. Excellent for energy storage applications across KSA.",
      },
    ],
  },

  batteryTypes: {
    subHeading: "Battery Models Available",
    heading: "Types of Batteries We Offer",
    description:
      "Choose from a wide range of industrial battery technologies including VRLA, lithium-ion, and tubular batteries—each tested for performance, safety, and endurance under extreme Saudi conditions.",
    details: [
      {
        name: "VRLA (Sealed Lead Acid) Batteries",
        description:
          "Maintenance-free batteries ideal for UPS systems, telecom sites, and data centers. Known for reliability and safety in indoor applications.",
        image: "/batteries/battery.webp",
        link: "/battery-solutions-saudi-arabia",
        applications: ["UPS systems", "Telecom base stations", "Control rooms"],
        features: [
          "Maintenance-free sealed design",
          "Long float life",
          "Shock and vibration resistant",
        ],
        specifications: [
          {
            capacity: "12V 100Ah",
            dimensions: "330 x 170 x 220mm",
            weight: "32kg",
          },
          {
            capacity: "12V 200Ah",
            dimensions: "520 x 240 x 220mm",
            weight: "62kg",
          },
        ],
      },
      {
        name: "Lithium-Ion Batteries",
        description:
          "High-energy-density batteries for compact spaces, rapid charging, and deep discharge cycles. Ideal for solar, telecom, and IT loads.",
        image: "/batteries/battery2.webp",
        link: "/battery-solutions-saudi-arabia",
        applications: ["Solar backup", "Energy storage", "Telecom towers"],
        features: [
          "Lightweight and compact",
          "Fast charge/discharge",
          "10+ year lifespan",
        ],
        specifications: [
          {
            capacity: "48V 50Ah",
            dimensions: "442 x 410 x 89mm",
            weight: "35kg",
          },
          {
            capacity: "48V 100Ah",
            dimensions: "600 x 430 x 180mm",
            weight: "52kg",
          },
        ],
      },
      {
        name: "Tubular Batteries",
        description:
          "Heavy-duty flooded or gel batteries built for long backup durations and frequent cycling. Excellent for industrial and solar use.",
        image: "/batteries/battery3.webp",
        link: "/battery-solutions-saudi-arabia",
        applications: ["Industrial equipment", "Off-grid solar", "Factories"],
        features: [
          "High cycle life",
          "Rugged and durable",
          "Available in gel/flooded variants",
        ],
        specifications: [
          {
            capacity: "12V 150Ah",
            dimensions: "505 x 190 x 410mm",
            weight: "55kg",
          },
          {
            capacity: "12V 200Ah",
            dimensions: "520 x 220 x 440mm",
            weight: "72kg",
          },
        ],
      },
    ],
  },

  industryApplications: {
    subHeading: "Industries We Serve",
    heading: "Battery Solutions for Every Sector",
    description:
      "Our industrial battery offerings are tailored for mission-critical sectors in Saudi Arabia. Whether you're in telecom, solar, healthcare, or energy—we ensure uninterrupted power delivery.",
    details: [
      {
        industry: "Data Centers",
        description:
          "Maintain zero-downtime operations with battery-backed UPS systems designed for high-density IT environments.",
        benefits: [
          "Supports Tier certifications",
          "Compatible with major UPS brands",
          "Extended runtime backup",
        ],
      },
      {
        industry: "Telecommunications",
        description:
          "Provide continuous BTS and repeater power with VRLA or lithium batteries, even during grid failures.",
        benefits: [
          "Remote location deployment",
          "Fast recharge capability",
          "Compact and rugged form factors",
        ],
      },
      {
        industry: "Solar & Renewable Energy",
        description:
          "Store excess solar power using deep cycle tubular or lithium batteries, ideal for hybrid and off-grid installations.",
        benefits: [
          "High depth-of-discharge cycles",
          "Compatible with hybrid inverters",
          "Reduced generator dependence",
        ],
      },
      {
        industry: "Healthcare & Hospitals",
        description:
          "Ensure life-saving systems remain online during blackouts. We supply backup batteries for surgical rooms, labs, and ICUs.",
        benefits: [
          "Zero-delay battery backup",
          "Low maintenance sealed batteries",
          "24/7 emergency support",
        ],
      },
    ],
  },

  batteryFaqs: {
    subHeading: "FAQs – Battery Rental & Sales",
    heading: "Battery Rental & Sales FAQs",
    description:
      "Answers to common questions about industrial battery selection, rental duration, maintenance, and delivery across Saudi Arabia.",
    details: [
      {
        question: "Do you offer both rental and sales of batteries?",
        answer:
          "Yes. Gulf Horizon Telecom offers batteries for short-term rental or permanent purchase—ideal for UPS systems, telecom towers, and energy storage.",
      },
      {
        question: "What types of batteries do you supply?",
        answer:
          "We provide VRLA (sealed lead-acid), lithium-ion, and tubular batteries in various capacities to suit telecom, UPS, solar, and industrial applications.",
      },
      {
        question: "What areas in Saudi Arabia do you serve?",
        answer:
          "We operate in Riyadh, Jeddah, Dammam, Makkah, Madinah, and remote sites—offering battery delivery, installation, and replacement services.",
      },
      {
        question: "Do you install and test the batteries?",
        answer:
          "Yes. Our services include installation, load testing, and commissioning. For rentals, we also provide removal and collection post-usage.",
      },
      {
        question: "Do you offer battery maintenance plans?",
        answer:
          "We provide preventive maintenance, including electrolyte checks, charge testing, and terminal cleaning. AMC plans are available for enterprise setups.",
      },
      {
        question: "Which industries use your battery solutions?",
        answer:
          "Telecom, solar, healthcare, data centers, manufacturing, and oil & gas are some of the major sectors we serve across KSA.",
      },
    ],
  },

  whyChooseUs: [
    {
      heading: "Trusted Battery Partner in Saudi Arabia",
      description:
        "Gulf Horizon Telecom is a reliable provider of industrial battery solutions—trusted by telecom, healthcare, and IT sectors across the Kingdom.",
    },
    {
      heading: "Fast & Hassle-Free Delivery",
      description:
        "We ensure quick deployment of battery systems across major cities and remote areas—delivered with complete testing and setup.",
    },
    {
      heading: "Wide Range of Battery Technologies",
      description:
        "From VRLA to lithium-ion, we offer a broad selection of batteries to suit every power backup scenario.",
    },
  ],
};


export const VRLA_BATTERY_DATA = {
  metadata: {
    title: {
      default:
        "VRLA Battery Rental & Sales in Saudi Arabia | Gulf Horizon Telecom",
    },
    description:
      "Sealed VRLA batteries for UPS, telecom, and data centers. Gulf Horizon Telecom offers rental and purchase of maintenance-free batteries across Riyadh, Jeddah, Dammam, and more.",
  },
  pageHeader: {
    title: "VRLA Battery Solutions in Saudi Arabia",
    backto: "Home",
    breadcrumbs: [
      {
        name: "VRLA Batteries",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/batteries/batterybanner.webp",
  },
  VRLABatteryData: {
    id: "VRLA Battery",
    name: "VRLA (Sealed Lead Acid) Batteries",
    detailedDescription:
      "VRLA (Valve-Regulated Lead-Acid) batteries are sealed, maintenance-free solutions ideal for critical backup applications. They are widely used in UPS systems, telecom towers, control rooms, and data centers. These batteries are spill-proof, long-lasting, and designed for safe indoor use under high-performance conditions across Saudi Arabia’s climate zones.",
    images: [
      "/batteries/battery.webp",
      "/batteries/battery2.webp",
      "/batteries/battery3.webp",
    ],
    applications: [
      "UPS backup in data centers and IT rooms",
      "Telecom base stations and indoor BTS setups",
      "Battery banks for PLCs and automation",
      "Control systems and security power backups",
    ],
    features: [
      "Maintenance-free sealed design",
      "Spill-proof, leak-resistant construction",
      "Long float and cycle life",
      "Shock and vibration resistant",
      "Wide temperature tolerance",
    ],
    specifications: [
      {
        capacity: "12V 100Ah",
        dimensions: "330 x 170 x 220mm",
        weight: "32kg",
        terminals: "M8",
        rentalPrice: {
          daily: "SAR 50",
          weekly: "SAR 250",
          monthly: "SAR 700",
        },
        purchasePrice: "SAR 1,200",
      },
      {
        capacity: "12V 200Ah",
        dimensions: "520 x 240 x 220mm",
        weight: "62kg",
        terminals: "M8",
        rentalPrice: {
          daily: "SAR 80",
          weekly: "SAR 400",
          monthly: "SAR 1,100",
        },
        purchasePrice: "SAR 2,000",
      },
    ],
    benefits: [
      "Ready-to-install without acid handling",
      "Trusted in telecom and IT industries",
      "Space-saving stackable units",
      "Easy disposal and recycling options",
    ],
    certifications: ["ISO 9001:2015", "CE Certified", "UL Listed", "IEC 60896"],
    maintenanceInfo:
      "Preventive maintenance includes monthly voltage checks, corrosion cleaning, terminal torque tightening, and annual load testing to ensure peak performance and longevity.",
    installationRequirements: [
      "Install indoors with temperature regulation",
      "Ensure proper ventilation and airflow",
      "Avoid deep discharges or overcharging",
      "Follow polarity and terminal torque guidelines",
    ],
    faqs: {
      id: "VRLA Battery FAQs",
      heading: "VRLA Battery - Frequently Asked Questions",
      description:
        "Commonly asked questions about VRLA battery performance, usage, and service in Saudi Arabia.",
      details: [
        {
          question: "Are VRLA batteries maintenance-free?",
          answer:
            "Yes, they are sealed and require no water topping or electrolyte checks—just basic terminal and voltage monitoring.",
        },
        {
          question: "What’s the average lifespan of VRLA batteries?",
          answer:
            "3–5 years in float use, or 200–1200 cycles in cyclic applications depending on depth of discharge and environment.",
        },
        {
          question: "Are these batteries safe for indoor use?",
          answer:
            "Yes, VRLA batteries are spill-proof and leak-resistant, ideal for use in buildings, control rooms, and IT spaces.",
        },
        {
          question: "Do you offer delivery and installation?",
          answer:
            "Yes, we provide delivery, setup, and load testing across Riyadh, Jeddah, Dammam, and other regions.",
        },
      ],
    },
    relatedProducts: [
      "Lithium-Ion Batteries",
      "Tubular Batteries",
      "UPS Battery Replacement Kits",
      "Telecom Power Systems",
    ],
    documents: [
      {
        name: "VRLA Battery Datasheet",
        url: "/documents/vrla-battery-datasheet.pdf",
      },
      {
        name: "Installation Guidelines",
        url: "/documents/vrla-installation-guide.pdf",
      },
    ],
    rental: {
      availableForRental: true,
      rentalPeriods: ["Daily", "Weekly", "Monthly"],
      minimumRentalPeriod: "1 day",
      deliveryTimeframe: "24 to 72 hours nationwide",
      includedServices: [
        "Battery delivery and setup",
        "Load testing and certification",
        "Pickup and return service",
      ],
      additionalServices: [
        {
          name: "Discharge Testing",
          description: "Load discharge test reports for critical systems",
          priceInfo: "From SAR 500",
        },
      ],
      rentalTerms: [
        "Security deposit applies",
        "Prepaid rental required",
        "Return in original condition",
      ],
      commonRentalApplications: [
        "UPS temporary backups",
        "Telecom site testing",
        "Disaster recovery deployments",
        "Industrial site load trials",
      ],
    },
    purchase: {
      availableForPurchase: true,
      leadTime: "In stock / 2–4 days",
      paymentOptions: ["Cash on delivery", "Bank transfer"],
      warranty: {
        standard: "1 year manufacturer warranty",
        extended: "2-year extension optional",
      },
      afterSaleServices: [
        "AMC (Annual Maintenance Contract)",
        "Replacement & swap service",
        "End-of-life disposal",
      ],
      financingOptions: {
        available: true,
      },
    },
    buyVsRent: {
      buyAdvantages: [
        "Better ROI for long-term setups",
        "No recurring rental costs",
        "Eligible for bulk discounts",
      ],
      rentAdvantages: [
        "No upfront capital required",
        "Best for emergency or short-term use",
        "Easier to scale and rotate",
      ],
      idealBuyScenarios: [
        "Data centers with continuous power needs",
        "Permanent telecom infrastructure",
      ],
      idealRentScenarios: [
        "Maintenance downtime coverage",
        "Project-based temporary setups",
      ],
    },
  },
};

export const LITHIUM_ION_BATTERY_DATA = {
  metadata: {
    title: {
      default:
        "Lithium-Ion Battery Rental & Sales in Saudi Arabia | Gulf Horizon Telecom",
    },
    description:
      "High-performance lithium-ion batteries for energy storage, telecom, and solar systems. Gulf Horizon Telecom offers rental and sales of Li-ion battery systems across Riyadh, Jeddah, and Dammam.",
  },
  pageHeader: {
    title: "Lithium-Ion Battery Solutions in Saudi Arabia",
    backto: "Home",
    breadcrumbs: [
      {
        name: "Lithium-Ion Batteries",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/batteries/batterybanner.webp",
  },
  LithiumIonBatteryData: {
    id: "Lithium-Ion Battery",
    name: "Lithium-Ion Battery Systems",
    detailedDescription:
      "Lithium-ion batteries offer superior energy density, long cycle life, and fast-charging capabilities. These batteries are ideal for telecom towers, solar energy storage, mobile power systems, and industrial applications that require lightweight, compact, and high-performance backup solutions. Designed for extreme climates and critical operations in Saudi Arabia.",
    images: [
      "/batteries/battery.webp",
      "/batteries/battery2.webp",
      "/batteries/battery3.webp",
    ],
    applications: [
      "Telecom tower backup systems",
      "Hybrid and off-grid solar energy storage",
      "Mobile power banks and temporary infrastructure",
      "Smart grid and peak load management",
    ],
    features: [
      "Lightweight and compact design",
      "Fast charge/discharge cycles",
      "High depth-of-discharge capability",
      "Built-in BMS for cell balancing and safety",
      "Long service life: up to 10 years",
    ],
    specifications: [
      {
        capacity: "48V 50Ah",
        dimensions: "442 x 410 x 89mm",
        weight: "35kg",
        terminals: "Anderson/Push Type",
        rentalPrice: {
          daily: "SAR 120",
          weekly: "SAR 600",
          monthly: "SAR 1,700",
        },
        purchasePrice: "SAR 4,200",
      },
      {
        capacity: "48V 100Ah",
        dimensions: "600 x 430 x 180mm",
        weight: "52kg",
        terminals: "Screw Terminal",
        rentalPrice: {
          daily: "SAR 180",
          weekly: "SAR 900",
          monthly: "SAR 2,600",
        },
        purchasePrice: "SAR 7,800",
      },
    ],
    benefits: [
      "Longer lifespan and fewer replacements",
      "Ideal for space-constrained environments",
      "Reduced heat generation and improved efficiency",
      "Remote monitoring with smart BMS",
    ],
    certifications: ["UN38.3", "IEC 62619", "CE Marked", "RoHS Compliant"],
    maintenanceInfo:
      "Minimal maintenance required. Monitor charge/discharge logs, BMS health, and temperature sensors quarterly. Annual system-level checkups recommended for large banks.",
    installationRequirements: [
      "Use BMS-protected connections",
      "Avoid prolonged deep discharge",
      "Install in shaded, ventilated locations",
      "Use appropriate enclosures for outdoor setups",
    ],
    faqs: {
      id: "Lithium-Ion Battery FAQs",
      heading: "Lithium-Ion Battery - Frequently Asked Questions",
      description:
        "Technical and operational guidance for lithium-ion battery usage in industrial and renewable power systems.",
      details: [
        {
          question: "How long do lithium-ion batteries last?",
          answer:
            "They can last 8–10 years with 2000–6000 charge cycles depending on DOD and operating temperature.",
        },
        {
          question: "Are they suitable for outdoor or solar use?",
          answer:
            "Yes, with the right enclosures and BMS, they are ideal for solar hybrid systems and telecom towers.",
        },
        {
          question: "Is a BMS included with these batteries?",
          answer:
            "Yes, all our lithium batteries come with integrated Battery Management Systems for safety and control.",
        },
        {
          question: "Do you provide lithium battery rental?",
          answer:
            "Yes, we offer short- and mid-term rental for site testing, energy pilots, and emergency setups.",
        },
      ],
    },
    relatedProducts: [
      "Solar Battery Storage Systems",
      "Telecom Hybrid Power Solutions",
      "VRLA Battery Kits",
      "DC Power Distribution Panels",
    ],
    documents: [
      {
        name: "Lithium-Ion Battery Spec Sheet",
        url: "/documents/lithium-ion-datasheet.pdf",
      },
      {
        name: "Safe Handling Manual",
        url: "/documents/lithium-ion-safety-guide.pdf",
      },
    ],
    rental: {
      availableForRental: true,
      rentalPeriods: ["Daily", "Weekly", "Monthly"],
      minimumRentalPeriod: "3 days",
      deliveryTimeframe: "48–72 hours across KSA",
      includedServices: [
        "Pre-charged unit delivery",
        "Monitoring setup and handover",
        "Pickup after rental duration",
      ],
      additionalServices: [
        {
          name: "IoT Monitoring Kit",
          description:
            "Real-time battery health monitoring via cloud dashboard",
          priceInfo: "From SAR 800/month",
        },
      ],
      rentalTerms: [
        "Prepaid rental and refundable deposit",
        "Proper BMS handling required",
        "Return in operational condition",
      ],
      commonRentalApplications: [
        "Emergency telecom deployment",
        "Field trials for solar hybrid setups",
        "Mobile infrastructure and testing labs",
      ],
    },
    purchase: {
      availableForPurchase: true,
      leadTime: "2–3 weeks",
      paymentOptions: ["100% upfront", "50/50 milestone terms"],
      warranty: {
        standard: "3 years",
        extended: "Optional 5-year with AMC",
      },
      afterSaleServices: [
        "Firmware updates and diagnostics",
        "Battery bank installation and scaling",
        "Priority technical support",
      ],
      financingOptions: {
        available: true,
      },
    },
    buyVsRent: {
      buyAdvantages: [
        "Ideal for permanent power storage",
        "Lower lifecycle cost over 5+ years",
        "Custom integration with solar and telecom systems",
      ],
      rentAdvantages: [
        "Quick deployment for pilot projects",
        "Minimal upfront investment",
        "No maintenance or repair responsibilities",
      ],
      idealBuyScenarios: [
        "Solar farms and off-grid communities",
        "Enterprise telecom infrastructure",
      ],
      idealRentScenarios: [
        "Field testing or disaster response",
        "Short-term mobile installations",
      ],
    },
  },
};

export const TUBULAR_BATTERY_DATA = {
  metadata: {
    title: {
      default:
        "Tubular Battery Rental & Sales in Saudi Arabia | Gulf Horizon Telecom",
    },
    description:
      "Heavy-duty tubular batteries for solar, industrial, and backup applications. Gulf Horizon Telecom offers high-capacity tubular battery rental and purchase services across Riyadh, Jeddah, Dammam, and beyond.",
  },
  pageHeader: {
    title: "Tubular Battery Solutions in Saudi Arabia",
    backto: "Home",
    breadcrumbs: [
      {
        name: "Tubular Batteries",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/batteries/batterybanner.webp",
  },
  TubularBatteryData: {
    id: "Tubular Battery",
    name: "Tubular Battery Systems",
    detailedDescription:
      "Tubular batteries are designed for deep discharge applications and extended power backup needs. Available in flooded and gel variants, these batteries are ideal for solar systems, off-grid setups, and industrial operations. With high cycle life, robust construction, and adaptability to Saudi Arabia’s harsh conditions, they ensure dependable power even in remote locations.",
    images: [
      "/batteries/battery.webp",
      "/batteries/battery2.webp",
      "/batteries/battery3.webp",
    ],
    applications: [
      "Off-grid and hybrid solar systems",
      "Industrial backup power and automation",
      "Manufacturing and production facilities",
      "Long-duration telecom and IT backups",
    ],
    features: [
      "High charge acceptance and deep discharge performance",
      "Flooded and gel variants available",
      "Long cycle life—up to 1500+ cycles",
      "Robust tubular plate technology",
      "Excellent thermal management for desert climates",
    ],
    specifications: [
      {
        capacity: "12V 150Ah",
        dimensions: "505 x 190 x 410mm",
        weight: "55kg",
        terminals: "L-type",
        rentalPrice: {
          daily: "SAR 70",
          weekly: "SAR 350",
          monthly: "SAR 1,000",
        },
        purchasePrice: "SAR 1,800",
      },
      {
        capacity: "12V 200Ah",
        dimensions: "520 x 220 x 440mm",
        weight: "72kg",
        terminals: "L-type",
        rentalPrice: {
          daily: "SAR 90",
          weekly: "SAR 450",
          monthly: "SAR 1,300",
        },
        purchasePrice: "SAR 2,400",
      },
    ],
    benefits: [
      "Ideal for rural and off-grid setups",
      "Resilient in high-temperature regions",
      "Higher backup per charge cycle",
      "Easy water topping and maintenance",
    ],
    certifications: ["ISO 14001", "IEC 61427", "MNRE Approved", "CE Certified"],
    maintenanceInfo:
      "Monthly water level checks (flooded type), terminal cleaning, equalization charging every quarter, and load testing annually to maximize life expectancy.",
    installationRequirements: [
      "Install on acid-proof stands or trays",
      "Maintain adequate ventilation",
      "Keep upright and avoid overcharging",
      "Follow proper PPE and disposal protocols",
    ],
    faqs: {
      id: "Tubular Battery FAQs",
      heading: "Tubular Battery - Frequently Asked Questions",
      description:
        "All your questions answered about tubular batteries for solar, industrial, and long-duration backup use cases.",
      details: [
        {
          question:
            "What’s the difference between tubular and flat plate batteries?",
          answer:
            "Tubular batteries have longer life and are better suited for deep discharge and solar applications than flat plate batteries.",
        },
        {
          question: "Do you supply both gel and flooded types?",
          answer:
            "Yes, we offer both types based on application—flooded for cost-effectiveness and gel for zero-spill indoor use.",
        },
        {
          question: "Are these suitable for solar inverters?",
          answer:
            "Absolutely. Tubular batteries are commonly used with off-grid and hybrid solar inverter systems across Saudi Arabia.",
        },
        {
          question: "Do you deliver and install across Saudi Arabia?",
          answer:
            "Yes, we provide nationwide delivery, installation, and periodic maintenance support.",
        },
      ],
    },
    relatedProducts: [
      "Solar Inverter Kits",
      "Battery Enclosures",
      "Lithium Battery Storage",
      "Battery Monitoring Systems",
    ],
    documents: [
      {
        name: "Tubular Battery Datasheet",
        url: "/documents/tubular-battery-datasheet.pdf",
      },
      {
        name: "Maintenance Schedule",
        url: "/documents/tubular-battery-maintenance.pdf",
      },
    ],
    rental: {
      availableForRental: true,
      rentalPeriods: ["Weekly", "Monthly"],
      minimumRentalPeriod: "1 week",
      deliveryTimeframe: "2–4 days",
      includedServices: [
        "Battery delivery and rack installation",
        "Water topping (if flooded type)",
        "Post-rental inspection",
      ],
      additionalServices: [
        {
          name: "Equalization Charging",
          description: "Quarterly service for flooded tubular batteries",
          priceInfo: "From SAR 350/service",
        },
      ],
      rentalTerms: [
        "Flooded batteries require monthly water checks",
        "Cleaning on customer site every 30 days",
        "Full charge before pickup required",
      ],
      commonRentalApplications: [
        "Solar hybrid system trials",
        "Industrial load shedding backup",
        "Event power backup",
      ],
    },
    purchase: {
      availableForPurchase: true,
      leadTime: "1–2 weeks",
      paymentOptions: ["Bank transfer", "Cash on delivery"],
      warranty: {
        standard: "2 years for gel, 1 year for flooded",
        extended: "Up to 4 years with service contract",
      },
      afterSaleServices: [
        "Routine checkups and AMC",
        "Battery disposal and recycling",
        "Spare parts and electrolyte kits",
      ],
      financingOptions: {
        available: false,
      },
    },
    buyVsRent: {
      buyAdvantages: [
        "Best for solar and permanent setups",
        "Cost-effective over long-term use",
        "Custom racking and configuration options",
      ],
      rentAdvantages: [
        "Perfect for seasonal or test deployments",
        "Lower upfront cost",
        "Rental includes water top-up and service",
      ],
      idealBuyScenarios: [
        "Factories with long-duration power needs",
        "Off-grid solar and hybrid systems",
      ],
      idealRentScenarios: [
        "Solar pilot projects",
        "Temporary telecom installations",
      ],
    },
  },
};
