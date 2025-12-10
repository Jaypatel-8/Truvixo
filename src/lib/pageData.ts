// Centralized FAQ data for different pages
export const pageFAQs: Record<string, Array<{ question: string; answer: string }>> = {
  'custom-software-development': [
    {
      question: 'How long does custom software development take?',
      answer: 'Typically 1–6 months depending on complexity, features, and scope. We provide detailed timelines during the discovery phase and follow agile methodology for iterative delivery.'
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes, we offer comprehensive ongoing support including bug fixes, updates, security patches, feature enhancements, and performance optimization.'
    },
    {
      question: 'Can you scale an existing system?',
      answer: 'Absolutely! We specialize in modernizing and scaling legacy systems to meet current business needs and future growth requirements.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern tech stacks including React, Next.js, Node.js, Python, Django, AWS, and more. We choose technologies based on your specific requirements.'
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Yes, we sign NDAs and follow strict security practices to protect your intellectual property and business information.'
    }
  ],
  'ai-development-services': [
    {
      question: 'What AI technologies do you specialize in?',
      answer: 'We specialize in machine learning, deep learning, natural language processing, computer vision, and AI-powered automation solutions.'
    },
    {
      question: 'How do you ensure AI model accuracy?',
      answer: 'We follow rigorous testing protocols, use quality datasets, implement continuous learning mechanisms, and perform regular model validation to ensure high accuracy.'
    },
    {
      question: 'Can you integrate AI into existing systems?',
      answer: 'Yes, we can seamlessly integrate AI capabilities into your existing infrastructure through APIs, microservices, and custom integration solutions.'
    },
    {
      question: 'What industries have you worked with for AI projects?',
      answer: 'We have experience across healthcare, fintech, retail, logistics, manufacturing, and more, delivering industry-specific AI solutions.'
    }
  ],
  'web-application-development': [
    {
      question: 'What frameworks do you use for web development?',
      answer: 'We use modern frameworks like React, Next.js, Vue.js, Angular, Node.js, Django, and FastAPI based on your project requirements.'
    },
    {
      question: 'Do you build responsive web applications?',
      answer: 'Yes, all our web applications are fully responsive and optimized for desktop, tablet, and mobile devices.'
    },
    {
      question: 'How do you ensure web application security?',
      answer: 'We implement security best practices including HTTPS, authentication, authorization, data encryption, and regular security audits.'
    },
    {
      question: 'Can you integrate third-party services?',
      answer: 'Absolutely! We integrate payment gateways, CRM systems, analytics tools, and other third-party services as needed.'
    }
  ],
  'mobile-app-development': [
    {
      question: 'Do you develop for iOS and Android?',
      answer: 'Yes, we develop native and cross-platform mobile applications for both iOS and Android using React Native, Flutter, and native technologies.'
    },
    {
      question: 'How long does mobile app development take?',
      answer: 'Typically 2–4 months for a standard mobile app, depending on features and complexity. We provide detailed timelines during planning.'
    },
    {
      question: 'Do you handle app store submissions?',
      answer: 'Yes, we can assist with app store submissions, including preparing required assets, descriptions, and managing the submission process.'
    },
    {
      question: 'What about app maintenance and updates?',
      answer: 'We offer ongoing maintenance, bug fixes, feature updates, and ensure compatibility with new OS versions.'
    }
  ],
  'saas-product-development': [
    {
      question: 'What is included in SaaS product development?',
      answer: 'We handle everything from architecture design, development, cloud deployment, subscription management, payment integration, and ongoing maintenance.'
    },
    {
      question: 'Do you build multi-tenant SaaS platforms?',
      answer: 'Yes, we specialize in building scalable multi-tenant architectures that can serve multiple customers efficiently.'
    },
    {
      question: 'Can you integrate payment gateways?',
      answer: 'Absolutely! We integrate popular payment gateways like Stripe, PayPal, and others for subscription billing.'
    }
  ],
  'ecommerce-development': [
    {
      question: 'Which eCommerce platforms do you work with?',
      answer: 'We work with Shopify, WooCommerce, Magento, and custom eCommerce solutions built from scratch.'
    },
    {
      question: 'Do you handle payment gateway integration?',
      answer: 'Yes, we integrate all major payment gateways including Stripe, PayPal, Razorpay, and others.'
    },
    {
      question: 'Can you build multi-vendor marketplaces?',
      answer: 'Absolutely! We build scalable multi-vendor platforms with vendor management, commission systems, and more.'
    }
  ],
  'cms-development': [
    {
      question: 'Which CMS platforms do you work with?',
      answer: 'We work with WordPress, Strapi, Sanity, Contentful, and custom headless CMS solutions.'
    },
    {
      question: 'Do you build custom CMS solutions?',
      answer: 'Yes, we build fully custom CMS solutions tailored to your specific content management needs.'
    },
    {
      question: 'Can you migrate from one CMS to another?',
      answer: 'Yes, we provide CMS migration services to help you move your content seamlessly.'
    }
  ],
  'enterprise-software-development': [
    {
      question: 'What types of enterprise software do you develop?',
      answer: 'We develop ERP systems, CRM solutions, automation platforms, and other enterprise-grade software tailored for large organizations.'
    },
    {
      question: 'How do you ensure enterprise software security?',
      answer: 'We implement enterprise-grade security measures including encryption, access controls, compliance standards, and regular security audits.'
    },
    {
      question: 'Can you integrate with existing enterprise systems?',
      answer: 'Yes, we specialize in integrating new solutions with existing enterprise systems, ensuring seamless data flow and compatibility.'
    }
  ],
  'api-development-integration': [
    {
      question: 'What types of APIs do you develop?',
      answer: 'We develop RESTful APIs, GraphQL APIs, WebSocket APIs, and microservices APIs based on your requirements.'
    },
    {
      question: 'Do you handle API documentation?',
      answer: 'Yes, we provide comprehensive API documentation including endpoints, request/response formats, authentication, and usage examples.'
    },
    {
      question: 'Can you integrate third-party APIs?',
      answer: 'Absolutely! We integrate payment gateways, CRM systems, analytics tools, and other third-party services via APIs.'
    }
  ],
  'maintenance-support': [
    {
      question: 'What does maintenance and support include?',
      answer: 'Our maintenance services include bug fixes, security updates, performance optimization, feature enhancements, and 24/7 monitoring.'
    },
    {
      question: 'How quickly do you respond to issues?',
      answer: 'We provide different SLA tiers, with critical issues addressed within hours and regular updates scheduled based on your needs.'
    },
    {
      question: 'Do you offer long-term support contracts?',
      answer: 'Yes, we offer flexible support contracts ranging from monthly to annual plans, tailored to your business requirements.'
    }
  ],
  'legacy-app-modernization': [
    {
      question: 'What legacy systems can you modernize?',
      answer: 'We modernize applications built on older technologies, outdated frameworks, and legacy architectures, transforming them into modern, scalable solutions.'
    },
    {
      question: 'How do you ensure data migration during modernization?',
      answer: 'We follow a careful data migration process with backups, validation, and testing to ensure zero data loss during the modernization process.'
    },
    {
      question: 'Can you modernize while keeping the system running?',
      answer: 'Yes, we use phased migration approaches that allow your system to remain operational during the modernization process.'
    }
  ],
  'machine-learning-model-development': [
    {
      question: 'What types of ML models do you develop?',
      answer: 'We develop custom ML models for prediction, classification, clustering, recommendation systems, and natural language processing.'
    },
    {
      question: 'How do you ensure model accuracy?',
      answer: 'We use rigorous testing, cross-validation, hyperparameter tuning, and continuous monitoring to ensure high model accuracy and performance.'
    },
    {
      question: 'Can you deploy ML models to production?',
      answer: 'Yes, we handle the complete ML lifecycle including model training, deployment, monitoring, and retraining for production environments.'
    }
  ],
  'seo': [
    {
      question: 'How long does it take to see SEO results?',
      answer: 'Typically 3-6 months to see significant improvements in rankings. However, some quick wins can be achieved within weeks.'
    },
    {
      question: 'Do you provide monthly SEO reports?',
      answer: 'Yes, we provide comprehensive monthly reports showing rankings, traffic, conversions, and recommendations for improvement.'
    },
    {
      question: 'What SEO tools do you use?',
      answer: 'We use industry-leading tools like Google Analytics, Search Console, Ahrefs, SEMrush, and custom tracking solutions.'
    }
  ],
  'ppc': [
    {
      question: 'How much should I budget for PPC?',
      answer: 'Budget depends on your goals and industry. We recommend starting with a minimum budget to test and scale based on performance.'
    },
    {
      question: 'How quickly can I see results from PPC?',
      answer: 'PPC campaigns can start driving traffic and conversions within days of launch, making it one of the fastest marketing channels.'
    },
    {
      question: 'Do you manage multiple PPC platforms?',
      answer: 'Yes, we manage Google Ads, Facebook Ads, LinkedIn Ads, and other platforms based on your target audience and goals.'
    }
  ],
  'smm': [
    {
      question: 'Which social media platforms do you manage?',
      answer: 'We manage all major platforms including Facebook, Instagram, LinkedIn, Twitter, TikTok, and platform-specific strategies.'
    },
    {
      question: 'How often will you post on social media?',
      answer: 'Posting frequency depends on your industry and goals. We typically recommend 3-5 posts per week per platform.'
    },
    {
      question: 'Do you create all the content?',
      answer: 'Yes, we handle content creation, design, copywriting, and scheduling. We can also work with your existing content team.'
    }
  ],
  'performance-marketing': [
    {
      question: 'What is performance-based pricing?',
      answer: 'You only pay when we deliver results - leads, sales, or conversions. This ensures ROI and aligns our success with yours.'
    },
    {
      question: 'How do you track performance?',
      answer: 'We use advanced tracking tools, attribution models, and analytics to track every conversion and calculate accurate ROI.'
    },
    {
      question: 'What results can I expect?',
      answer: 'Results vary by industry and campaign type, but we typically see 20-50% improvement in conversion rates and ROI.'
    }
  ],
  'email-marketing': [
    {
      question: 'What email marketing platforms do you use?',
      answer: 'We work with Mailchimp, SendGrid, Constant Contact, and custom email solutions based on your needs.'
    },
    {
      question: 'How do you grow email lists?',
      answer: 'We use lead magnets, opt-in forms, landing pages, and strategic content to grow your email list organically.'
    },
    {
      question: 'What is a good email open rate?',
      answer: 'Industry average is 20-25%, but we typically achieve 25-35% open rates through optimization and segmentation.'
    }
  ],
  'cro': [
    {
      question: 'How long does CRO take?',
      answer: 'Initial analysis takes 1-2 weeks, then we implement quick wins and run A/B tests over 2-3 months for optimal results.'
    },
    {
      question: 'What conversion rate improvements can I expect?',
      answer: 'Typical improvements range from 20-50%, depending on your current conversion rate and optimization opportunities.'
    },
    {
      question: 'Do you test everything?',
      answer: 'We prioritize high-impact tests based on data analysis, user behavior, and conversion funnel analysis.'
    }
  ],
  'frontend-developers': [
    {
      question: 'Can I hire a single frontend developer?',
      answer: 'Yes, single or multiple developers are available. We can match you with the right number of developers based on your project needs.'
    },
    {
      question: 'Can the developer join my team\'s workflow?',
      answer: 'Yes — our developers seamlessly integrate with your existing tools and processes including Slack, Jira, GitHub, Agile methodologies, and more.'
    },
    {
      question: 'What time zones do your developers support?',
      answer: 'We have developers available across multiple time zones worldwide, ensuring flexible collaboration that fits your schedule.'
    },
    {
      question: 'What about NDA and security?',
      answer: 'Fully included. All developers sign NDAs and we follow strict security protocols to protect your intellectual property and data.'
    },
    {
      question: 'Can I scale the team later?',
      answer: 'Yes, anytime. We make it easy to add or remove developers as your project needs evolve.'
    }
  ],
  'backend-developers': [
    {
      question: 'What backend technologies do your developers specialize in?',
      answer: 'Our backend developers are experts in Node.js, Python, Java, .NET, Go, and more. We match you with developers who specialize in your preferred tech stack.'
    },
    {
      question: 'Can they work with microservices architecture?',
      answer: 'Yes, our backend developers have extensive experience building scalable microservices architectures.'
    },
    {
      question: 'Do you provide database expertise?',
      answer: 'Yes, our developers are proficient in SQL and NoSQL databases including PostgreSQL, MongoDB, MySQL, and more.'
    }
  ],
  'full-stack-developers': [
    {
      question: 'What makes a full-stack developer different?',
      answer: 'Full-stack developers can handle both frontend and backend development, reducing the need for multiple developers and improving communication.'
    },
    {
      question: 'Can they work on end-to-end projects?',
      answer: 'Yes, full-stack developers can build complete applications from database design to user interface.'
    }
  ],
  'mobile-developers': [
    {
      question: 'Do you provide iOS and Android developers?',
      answer: 'Yes, we provide both native iOS (Swift) and Android (Kotlin) developers, as well as cross-platform developers (React Native, Flutter).'
    },
    {
      question: 'Can they handle app store submissions?',
      answer: 'Yes, our mobile developers can assist with app store submissions and compliance requirements.'
    }
  ],
  'ai-ml-engineers': [
    {
      question: 'What AI/ML expertise do your engineers have?',
      answer: 'Our AI/ML engineers specialize in machine learning, deep learning, NLP, computer vision, and generative AI technologies.'
    },
    {
      question: 'Can they build custom ML models?',
      answer: 'Yes, our engineers build custom ML models tailored to your specific use case and data.'
    }
  ],
  'devops-engineers': [
    {
      question: 'What DevOps tools do your engineers use?',
      answer: 'Our DevOps engineers are experts in AWS, Azure, GCP, Docker, Kubernetes, CI/CD pipelines, and infrastructure automation.'
    },
    {
      question: 'Can they set up cloud infrastructure?',
      answer: 'Yes, our DevOps engineers can design, deploy, and manage scalable cloud infrastructure.'
    }
  ],
  'qa-engineers': [
    {
      question: 'What testing methodologies do your QA engineers use?',
      answer: 'Our QA engineers use manual and automated testing, including unit, integration, E2E, and performance testing.'
    },
    {
      question: 'Can they set up automated testing pipelines?',
      answer: 'Yes, our QA engineers can set up and maintain automated testing pipelines for continuous quality assurance.'
    }
  ],
  'ui-ux-designers': [
    {
      question: 'What design tools do your designers use?',
      answer: 'Our designers are proficient in Figma, Adobe XD, Sketch, and other modern design tools.'
    },
    {
      question: 'Do they create design systems?',
      answer: 'Yes, our designers create comprehensive design systems for consistent, scalable design.'
    }
  ],
  'project-managers': [
    {
      question: 'What project management methodologies do they use?',
      answer: 'Our project managers are experienced in Agile, Scrum, Kanban, and other methodologies.'
    },
    {
      question: 'Can they manage remote teams?',
      answer: 'Yes, our project managers have extensive experience managing distributed and remote teams.'
    }
  ],
  'dedicated-teams': [
    {
      question: 'What is a dedicated team?',
      answer: 'A dedicated team is a full team of developers, designers, and managers assigned exclusively to your project.'
    },
    {
      question: 'How quickly can you assemble a team?',
      answer: 'We can assemble a dedicated team within 2-4 weeks, depending on your requirements.'
    }
  ],
  'fintech': [
    {
      question: 'Do you develop banking-grade solutions?',
      answer: 'Yes, we develop fully compliant fintech systems that meet banking industry standards and regulatory requirements.'
    },
    {
      question: 'Can you integrate payment gateways?',
      answer: 'Yes — we integrate with Stripe, Razorpay, PayPal, and custom payment APIs to meet your specific needs.'
    },
    {
      question: 'Do you support microservices architecture?',
      answer: 'Yes, we build scalable microservices architectures for fintech applications.'
    },
    {
      question: 'Are your solutions PCI-DSS compliant?',
      answer: 'Yes, all our fintech solutions are built with PCI-DSS compliance in mind.'
    }
  ],
  'healthcare': [
    {
      question: 'Are your apps HIPAA compliant?',
      answer: 'Yes, all our healthcare applications are built with HIPAA compliance in mind, ensuring patient data protection and regulatory adherence.'
    },
    {
      question: 'Do you support HL7/FHIR integration?',
      answer: 'Yes, we integrate with HL7 and FHIR standards for seamless healthcare data exchange.'
    },
    {
      question: 'Can you modernize our legacy hospital system?',
      answer: 'Absolutely. We specialize in modernizing legacy healthcare systems with modern, scalable architectures.'
    }
  ],
  'retail-ecommerce': [
    {
      question: 'Can you build multi-vendor marketplaces?',
      answer: 'Yes, we build scalable multi-vendor platforms with vendor management, commission systems, and more.'
    },
    {
      question: 'Do you integrate payment gateways?',
      answer: 'Yes, we integrate all major payment gateways including Stripe, PayPal, Razorpay, and others.'
    },
    {
      question: 'Can you build inventory management systems?',
      answer: 'Yes, we build comprehensive inventory management systems integrated with e-commerce platforms.'
    }
  ],
  'education': [
    {
      question: 'Can you build learning management systems?',
      answer: 'Yes, we build comprehensive LMS platforms with course management, student tracking, and assessment tools.'
    },
    {
      question: 'Do you support SCORM compliance?',
      answer: 'Yes, we build SCORM-compliant e-learning solutions.'
    }
  ],
  'logistics': [
    {
      question: 'Can you build fleet management systems?',
      answer: 'Yes, we build comprehensive fleet management systems with GPS tracking, route optimization, and more.'
    },
    {
      question: 'Do you integrate with shipping APIs?',
      answer: 'Yes, we integrate with major shipping carriers and logistics APIs.'
    }
  ],
  'real-estate': [
    {
      question: 'Can you build property management systems?',
      answer: 'Yes, we build comprehensive property management systems with tenant management, maintenance tracking, and more.'
    },
    {
      question: 'Do you build real estate listing platforms?',
      answer: 'Yes, we build modern real estate listing and marketplace platforms.'
    }
  ],
  'manufacturing': [
    {
      question: 'Can you build ERP systems for manufacturing?',
      answer: 'Yes, we build custom ERP systems tailored for manufacturing operations.'
    },
    {
      question: 'Do you support IoT integration?',
      answer: 'Yes, we integrate IoT devices and sensors for smart manufacturing solutions.'
    }
  ],
  'travel-hospitality': [
    {
      question: 'Can you build booking engines?',
      answer: 'Yes, we build comprehensive booking engines for flights, hotels, and travel services.'
    },
    {
      question: 'Do you integrate with GDS systems?',
      answer: 'Yes, we integrate with major GDS systems and travel APIs.'
    },
    {
      question: 'Can you build hotel management systems?',
      answer: 'Yes, we build complete hotel management systems with room booking, check-in/out, and more.'
    }
  ],
  'about': [
    {
      question: 'Where is TruVixo located?',
      answer: 'We are based in Ahmedabad, Gujarat, India, and serve clients across India, Dubai (UAE), USA, Australia, and worldwide.'
    },
    {
      question: 'How many projects has TruVixo completed?',
      answer: 'We have successfully completed 500+ projects across various industries with a 98% client satisfaction rate.'
    },
    {
      question: 'What services does TruVixo offer?',
      answer: 'We offer comprehensive solutions including custom software development, AI & machine learning, web and mobile app development, digital marketing, branding, cloud infrastructure, and business consulting.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve diverse industries including FinTech, Healthcare, Retail, EdTech, Manufacturing, Real Estate, Logistics, and Construction.'
    },
    {
      question: 'How long has TruVixo been in business?',
      answer: 'TruVixo has been delivering innovative solutions for over 3 years, helping businesses transform and grow.'
    },
    {
      question: 'What makes TruVixo different?',
      answer: 'We combine AI-driven innovation, end-to-end partnership, proven results, and future-ready solutions. We\'re not just service providers – we\'re your partners in transformation.'
    }
  ],
  'default': [
    {
      question: 'How quickly can you start?',
      answer: 'We can onboard a developer within 1–2 weeks; full teams vary by scope.'
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Yes — we sign NDAs and follow strict security practices.'
    },
    {
      question: 'Do you offer a trial?',
      answer: 'Yes — 1-week risk-free trial for development engagements.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'Fintech, Healthcare, Retail, Logistics, Education, and more.'
    },
    {
      question: 'Can you integrate third-party APIs?',
      answer: 'Yes — payments, mapping, CRM, analytics, and more.'
    }
  ]
}

// Helper function to get FAQs for a page
export function getFAQsForPage(pageSlug: string) {
  return pageFAQs[pageSlug] || pageFAQs['default']
}

