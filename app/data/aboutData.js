export const personalInfo = {
  profileImage: '/images/profile.jpg',
  name: 'John Doe',
  title: 'Senior Structural BIM Specialist',
  summary: 'Experienced BIM professional with over 8 years of expertise in structural modeling and coordination. Specialized in creating detailed 3D models, implementing BIM workflows, and optimizing project delivery through advanced automation techniques.',
  contacts: [
    {
      icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
      value: 'john.doe@email.com'
    },
    {
      icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>',
      value: '+1 234 567 890'
    }
  ]
}

export const locationData = {
  icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
  address: [
    '123 Business District',
    'Silicon Valley, CA 94025',
    'United States'
  ]
}

export const educationData = [
  {
    degree: 'Master of Engineering - Structural Engineering',
    school: 'Stanford University',
    period: '2012 - 2014',
    highlights: [
      'Specialized in Building Information Modeling',
      'Research focus on BIM implementation in structural design',
      'GPA: 3.9/4.0'
    ]
  },
  {
    degree: 'Bachelor of Science - Civil Engineering',
    school: 'MIT',
    period: '2008 - 2012',
    highlights: [
      'Minor in Computer Science',
      'Graduated with Honors',
      'President of Engineering Society'
    ]
  }
]

export const experienceData = [
  {
    title: 'Senior BIM Manager',
    company: 'Global Construction Corp',
    period: '2018 - Present',
    achievements: [
      'Led BIM implementation for $500M worth of construction projects',
      'Managed a team of 15 BIM modelers and coordinators',
      'Developed automated workflows reducing modeling time by 40%',
      'Implemented clash detection protocols resulting in 90% reduction in field conflicts'
    ]
  },
  {
    title: 'BIM Coordinator',
    company: 'Engineering Solutions Inc',
    period: '2014 - 2018',
    achievements: [
      'Coordinated BIM models for healthcare and commercial projects',
      'Developed custom Dynamo scripts for automation',
      'Trained junior staff in Revit and BIM best practices',
      'Achieved 30% improvement in project delivery time'
    ]
  }
]

export const interestsData = [
  {
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>',
    title: 'Travel & Photography',
    description: 'Exploring architectural marvels around the world and documenting them through photography.'
  },
  {
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>',
    title: '3D Printing',
    description: 'Creating architectural models and prototypes using 3D printing technology.'
  },
  {
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
    title: 'Technical Writing',
    description: 'Contributing to engineering blogs and writing about BIM best practices.'
  }
]
