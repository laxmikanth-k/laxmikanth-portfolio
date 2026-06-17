export const portfolioData = {
  personalInfo: {
    greeting: 'Hi, I am',
    name: 'Kotla Laxmi Kanth Reddy',
    title: 'Computer Science Graduate | Aspiring Software Developer',
    brand: 'LaxmiKanth',
    location: 'Hyderabad, India',
    summary: "Recent Computer Science graduate with strong foundations in Java, Spring Boot, React, and problem-solving, passionate about building impactful software solutions.",
    ctaLabel: 'View projects',
    contactLabel: 'Contact me',
  },
  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/#about' },
    { label: 'Experience', path: '/#experience' },
    { label: 'Projects', path: '/#projects' },
    { label: 'Contact', path: '/#contact' },
  ],
  hero: {
    resumeLabel: 'Download Resume',
    resumeLink: 'https://drive.google.com/file/d/1yXvuFgFHaKV5jDj8OnmTM795PoFEw-Yv/view?usp=drive_link',
    techStack: ['Java', 'Spring Boot', 'React', 'Node.js', 'MySQL'],
    mousePrompt: 'Scroll Down',
  },
  about: {
  title: "About",
  profile: {
    profileInitials: "KLKR",
    role: "Computer Science Graduate | Aspiring Software Developer",
    name: "Kotla Laxmi Kanth Reddy",
    headline: "Computer Science Graduate passionate about building scalable web applications using Java, Spring Boot, React, and modern software development practices.",
    
    summary:
      "Recent Computer Science Engineering graduate with strong foundations in Java, Spring Boot, React, REST APIs, MySQL, and Data Structures & Algorithms. Passionate about building scalable software solutions, solving real-world problems, and continuously learning modern technologies.",

    strongSkills: [
      "Java",
      "Spring Boot",
      "React",
      "REST APIs",
      "MySQL"
    ],

    highlights: [
      "Completed internship as Trainee Associate Software Engineer at Mphasis.",
      "Developed full-stack projects using Java, React, Node.js, and Python.",
      "Strong foundation in Data Structures, OOP, DBMS, and Software Development."
    ],

    stats: [
      { label: "Projects", value: "8+" },
      { label: "Technologi-es", value: "10+" },
      { label: "Certificati-ons", value: "5+" },
    ],

    counters: [
      { label: "Projects Completed", value: 8 },
      { label: "Techs Learned", value: 10 },
      { label: "Certificati-ons", value: 5 },
    ],
  },
},
  skills: [
  {
    category: "Languages",
    items: [
      {
        name: "Java",
        level: "Advanced",
        progress: 95,
        description: "OOP, Collections Framework, Exception Handling, and Multithreading.",
      },
      {
        name: "JavaScript",
        level: "Advanced",
        progress: 88,
        description: "ES6+, DOM manipulation, and modern web development.",
      },
      {
        name: "Python",
        level: "Intermediate",
        progress: 80,
        description: "Machine Learning, automation, and data processing.",
      },
    ],
  },

  {
    category: "Frontend",
    items: [
      {
        name: "React.js",
        level: "Advanced",
        progress: 92,
        description: "Building responsive and interactive user interfaces.",
      },
      {
        name: "HTML & CSS",
        level: "Advanced",
        progress: 90,
        description: "Creating responsive and accessible web applications.",
      },
    ],
  },

  {
    category: "Backend",
    items: [
      {
        name: "Spring Boot",
        level: "Advanced",
        progress: 92,
        description: "REST API development and enterprise applications.",
      },
      {
        name: "Node.js",
        level: "Intermediate",
        progress: 80,
        description: "Backend services and API development.",
      },
      {
        name: "REST APIs",
        level: "Advanced",
        progress: 90,
        description: "Designing and integrating scalable web services.",
      },
    ],
  },

  {
    category: "Databases & Tools",
    items: [
      {
        name: "MySQL",
        level: "Advanced",
        progress: 88,
        description: "Database design, queries, and CRUD operations.",
      },
      {
        name: "Git & GitHub",
        level: "Advanced",
        progress: 90,
        description: "Version control and collaborative development.",
      },
      {
        name: "Postman",
        level: "Advanced",
        progress: 85,
        description: "API testing and debugging.",
      },
    ],
  },

  {
    category: "Core Concepts",
    items: [
      {
        name: "Data Structures & Algorithms",
        level: "Advanced",
        progress: 90,
        description: "Problem-solving and optimization techniques.",
      },
      {
        name: "OOP",
        level: "Advanced",
        progress: 95,
        description: "Inheritance, Polymorphism, Abstraction, and Encapsulation.",
      },
      {
        name: "DBMS",
        level: "Advanced",
        progress: 88,
        description: "Database management and normalization concepts.",
      },
    ],
  },
],
  experience: [
    {
      date: ' 2026 (Jan - Apr)',
      role: 'Trainee Associate Software Engineer',
      company: 'Mphasis',
      location: 'Bangalore, India',
      responsibilities: [
        'Worked on development for enterprise insurance domain applications using Java , SpringBoot and React.',
        'Developed RESTful APIs for policy management and customer-related functionalities.',
        'Performed CRUD operations and backend data handling using MySQL.',
        'Participated in debugging, API testing, and performance optimization activities.',

      ],
      achievements: [
        'Delivered a major module ahead of schedule with less production defects.',
        'Reduced backend latency by 20% through performance tuning.',
      ],
    },
    
  ],
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/laxmikanth-reddy-kotla/',
    github: 'https://github.com/laxmikanth-k',
  },
  projects: [
    {
      title: 'Online Examination System',
      category: 'Enterprise',
      status: 'Completed',
      summary: 'A secure online examination platform built using JSP, Servlets, JDBC, and MySQL. Supports user authentication, MCQ exams, automatic evaluation, and result management.',
      details: [
        'Role-based login for students, teachers, and administrators.',
        'Custom question bank management with timed assessments.',
        'Automated result generation and performance dashboards.',
      ],
      tags: ['JSP', 'Servlets', 'JDBC', 'MySQL'],
      demoLink: null,
      repo: 'https://github.com/laxmikanth-k/online-examination-using-jsp',
    },
    {
      title: 'Multilingual Subtitle Generator',
      category: 'AI / Media',
      status: 'Completed',
      summary: 'An AI-powered subtitle generation application that transcribes audio, translates captions, and generates multilingual subtitle files using Whisper AI.',
      details: [
        'Speech-to-text transcription using Whisper AI and Python.',
        'Multi-language subtitle translation via Node.js services.',
        'React-based UI for preview, editing, and download export.',
      ],
      tags: ['Python', 'Node.js', 'React', 'Whisper AI'],
      demoLink: null,
      repo: 'https://github.com/laxmikanth-k/subtitle-generator',
    },
    {
      title: 'Blockchain Based Voting System',
      category: 'Blockchain',
      status: 'Completed',
      summary: 'A decentralized voting solution using smart contracts, Node.js backend, and React frontend for secure and transparent voting.',
      details: [
        'Smart contract voting logic for tamper-proof ballots.',
        'User authentication and vote validation via Node.js APIs.',
        'Responsive React dashboard for voters and election administrators.',
      ],
      tags: ['Node.js', 'React.js', 'Smart Contracts'],
      demoLink: null,
      repo: 'Add Placeholder',
    },
    {
      title: 'Invoice Generator',
      category: 'Enterprise',
      status: 'Completed',
      summary: 'A modern invoice generation application that enables users to create, manage, and download professional invoices with automatic calculations and a responsive UI.',
      details: [
        'Create and manage invoice templates.',
        'Automatic tax and total calculations.',
        'Export invoices as PDF for download and sharing.',
      ],
      tags: ['React.js', 'JavaScript', 'HTML', 'CSS'],
      demoLink: null,
      repo: 'https://github.com/laxmikanth-k/invoice-genarator',
    },
    {
      title: 'Recipe Finder',
      category: 'Web Application',
      status: 'Completed',
      summary: 'A responsive web app that allows users to search and explore recipes with detailed ingredients and cooking instructions, focused on fast discovery and UX.',
      details: [
        'Search recipes via third-party API integration.',
        'Detailed recipe pages with ingredients and steps.',
        'Responsive UI for mobile and desktop.',
      ],
      tags: ['React.js', 'JavaScript', 'API Integration'],
      demoLink: null,
      repo: 'https://github.com/laxmikanth-k/RECIPE-FINDER',
    },
    {
      title: 'Object Detection Using OpenCV',
      category: 'AI / Computer Vision',
      status: 'Completed',
      summary: 'A Computer Vision project using Python and OpenCV that detects and identifies objects from images and video streams with real-time recognition.',
      details: [
        'Real-time object detection in video streams.',
        'Bounding box visualization and label classification.',
        'Optimizations with NumPy for faster processing.',
      ],
      tags: ['Python', 'OpenCV', 'NumPy'],
      demoLink: null,
      repo: 'https://github.com/laxmikanth-k/object-detection-opencv',
    },
    {
      title: 'Loan Approval Using Random Forest',
      category: 'Machine Learning',
      status: 'Completed',
      summary: 'Predicts loan approval status using Random Forest. Includes data preprocessing, model training, evaluation, and predictive analytics.',
      details: [
        'Data cleaning and feature engineering.',
        'Model training and cross-validation.',
        'Performance evaluation and ROC/AUC reporting.',
      ],
      tags: ['Python', 'Pandas', 'Scikit-Learn', 'Random Forest'],
      demoLink: null,
      repo: 'https://github.com/laxmikanth-k/loan-approval-using-random-forest',
    },
    {
      title: 'Learning Management System (LMS)',
      category: 'Enterprise',
      status: 'Ongoing',
      summary: 'A full-stack Learning Management System for managing courses, students, instructors, assignments and progress tracking.',
      details: [
        'Course and user management modules.',
        'Assignment submission and grading workflows.',
        'REST APIs with Spring Boot and MySQL backend.',
      ],
      tags: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs'],
      demoLink: null,
      repo: 'Add Placeholder',
    },
  ],

  certifications: [
    { title: 'DSA', issuer: 'Smart interviews', date: '2025', status: 'Completed' },
    { title: 'DBMS', issuer: 'NPTEL', date: '2024', status: 'Completed' },
    { title: 'Cloud Computing', issuer: 'NPTEL', date: '2025', status: 'Completed' },
    { title: 'Build Your Own Static Website', issuer: 'NXTWAVE', date: '2025', status: 'Completed' },
    { title: 'Build Your Own Responsive Website', issuer: 'NXTWAVE', date: '2025', status: 'Completed' },
    { title: 'Node & React ', issuer: 'NXTWAVE', date: '2025', status: 'In Progress' },
  ],
  achievements: [
  {
    title: "Mphasis Internship",
    description: "Completed internship as a Trainee Associate Software Engineer, working with Java, Spring Boot, React, REST APIs, and MySQL."
  },
  {
    title: "Academic Excellence",
    description: "Maintained a CGPA of 9.14 in B.Tech Computer Science Engineering."
  },
  {
    title: "Project Development",
    description: "Built multiple full-stack, AI, Machine Learning, and Web Development projects using modern technologies."
  },
],
  education: [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Sreyas Institute of Engineering and Technology",
    score: "CGPA: 9.14",
    date: "2022 - 2026",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College",
    score: "91.8 %",
    date: "2020 - 2022",
  },
  {
    degree: "SSC",
    institution: "Narayana High School",
    score: "CGPA: 10.0",
    date: "2019 - 2020",
  },
],
  skillsSectionTitle: 'Skills',
  experienceSectionTitle: 'Experience',
  projectsSectionTitle: 'Projects',
  certificationsSectionTitle: 'Certifications',
  achievementsSectionTitle: 'Achievements',
  educationSectionTitle: 'Education',
  contact: {
    title: 'Let’s Connect',
    subtitle: 'I’m actively seeking opportunities in Software Development and related technology roles.',
    description: 'Feel free to reach out regarding job opportunities, internships, projects, collaborations, or professional networking.',
    location: 'Hyderabad, India',
    email: 'kotlaxmikanthreddy@gmail.com',
    phone: '+91 8008773569',
    form: {
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      phonePlaceholder: 'Your phone number',
      messagePlaceholder: 'Tell me about your project',
      buttonText: 'Send message',
    },
  },
  footer: {
    rights: '2026 © Portfolio @LaxmiKanth\'s. Built with React and Tailwind.',
  },
};
