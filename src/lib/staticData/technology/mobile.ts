// Server-only static data for Mobile Technology page
export const mobileTechnologyData = {
  hero: {
    title: 'Mobile Development Technologies We Use to Build',
    hollowText: 'Native and Cross-Platform Mobile Apps',
    description: 'We use the latest mobile technologies to build beautiful, performant mobile applications. Our mobile engineering ensures native performance, cross-platform compatibility, and seamless user experiences on iOS and Android.'
  },
  technologies: [
    {
      name: 'React Native',
      iconName: 'Code',
      description: 'Cross-platform framework for building native mobile apps with React.',
      number: '1'
    },
    {
      name: 'Flutter',
      iconName: 'Layers',
      description: 'Google\'s UI toolkit for building natively compiled apps.',
      number: '2'
    },
    {
      name: 'Swift',
      iconName: 'Zap',
      description: 'Apple\'s programming language for iOS and macOS development.',
      number: '3'
    },
    {
      name: 'Kotlin',
      iconName: 'Code',
      description: 'Modern language for Android development with concise syntax.',
      number: '4'
    },
    {
      name: 'Ionic',
      iconName: 'Globe',
      description: 'Framework for building hybrid mobile apps with web technologies.',
      number: '5'
    },
    {
      name: 'Xamarin',
      iconName: 'Code',
      description: 'Microsoft framework for building cross-platform mobile apps.',
      number: '6'
    }
  ],
  whatWeBuild: [
    { iconName: 'Smartphone', title: 'iOS Apps' },
    { iconName: 'Smartphone', title: 'Android Apps' },
    { iconName: 'Code', title: 'Cross-Platform Apps' },
    { iconName: 'ShoppingCart', title: 'E-commerce Apps' },
    { iconName: 'Users', title: 'Social Apps' },
    { iconName: 'Rocket', title: 'Enterprise Apps' }
  ],
  benefits: [
    { iconName: 'Zap', title: 'Native Performance', description: 'Fast and responsive apps' },
    { iconName: 'Smartphone', title: 'Cross-Platform', description: 'One codebase, multiple platforms' },
    { iconName: 'Palette', title: 'Beautiful UI', description: 'Modern, intuitive interfaces' },
    { iconName: 'Rocket', title: 'App Store Ready', description: 'Deploy to iOS and Android stores' },
    { iconName: 'Target', title: 'User Experience', description: 'Seamless user interactions' }
  ],
  whyChooseUs: [
    { iconName: 'Smartphone', title: 'Mobile Expertise', description: 'Native and cross-platform development' },
    { iconName: 'Target', title: 'Platform Knowledge', description: 'Deep iOS and Android expertise' },
    { iconName: 'Rocket', title: 'App Store', description: 'Handle submissions and compliance' },
    { iconName: 'Zap', title: 'Performance', description: 'Optimized for speed and battery' }
  ],
  cta: {
    title: 'Build a Mobile App',
    buttonText: 'Get Started'
  }
} as const

