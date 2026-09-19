export const portfolioData = {
  personal: {
    name: "Vinayak Patel",
    title: "Software Engineer & Full-Stack Developer",
    location: "Indore, Madhya Pradesh",
    address: "Indore, Madhya Pradesh",
    email: "vp40668@gmail.com",
    github: "https://github.com/vpvinayak",
    linkedin: "https://www.linkedin.com/in/vpvinayakpatel/",
    web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || "",
    objective: "To obtain a Software Engineer position where I can leverage my Java, DSA, and problem-solving skills to build quality software solutions while continuously learning and contributing to organizational growth.",
    avatar: "/profile.jpg", // Save your profile photo as profile.jpg in public/ folder
    systemStatus: "ONLINE // AVAILABLE FOR HIRE",
    cgpa: "7.90",
    degree: "B.Tech CSE (2023-27)",
    college: "Acropolis Institute of Technology & Research (AITR), Indore"
  },
  
  stats: [
    { label: "Current CGPA", value: "7.90", sub: "AITR Indore (RGPV)" },
    { label: "IBM Certification", value: "Java Dev", sub: "Professional Cert" },
    { label: "NPTEL Score", value: "84%", sub: "DBMS Elite Silver" },
    { label: "Major Projects", value: "02+", sub: "Full-Stack Platforms" }
  ],

  skillCategories: [
    {
      id: "languages",
      title: "Core Languages",
      icon: "Code",
      skills: [
        { name: "Java", level: 90, desc: "OOP, Collections, Multi-threading, JVM internals" },
        { name: "SQL", level: 85, desc: "Complex queries, indexing, schema design, join optimization" },
        { name: "C / C++", level: 80, desc: "Memory management, pointers, algorithm performance" },
        { name: "JavaScript / ES6+", level: 85, desc: "Async/Await, DOM, modern ES features, React" }
      ]
    },
    {
      id: "fundamentals",
      title: "CS Fundamentals",
      icon: "Cpu",
      skills: [
        { name: "Data Structures & Algorithms", level: 90, desc: "Arrays, Linked Lists, Trees, Graphs, DP, Sorting" },
        { name: "Object-Oriented Programming", level: 92, desc: "Encapsulation, Polymorphism, Abstraction, Inheritance" },
        { name: "Database Management Systems (DBMS)", level: 88, desc: "Relational modeling, Normalization, ACID properties" }
      ]
    },
    {
      id: "web-apis",
      title: "Web Architecture & APIs",
      icon: "Globe",
      skills: [
        { name: "RESTful APIs", level: 88, desc: "API design, endpoints, JSON payload handling" },
        { name: "HTTP / HTTPS Protocols", level: 85, desc: "Request methods, headers, status codes, CORS" },
        { name: "React.js & Frontend", level: 82, desc: "Component architecture, hooks, state management, UI" },
        { name: "HTML5 / CSS3", level: 90, desc: "Semantic markup, CSS Grid/Flexbox, animations" }
      ]
    },
    {
      id: "tools",
      title: "Developer Tools & Practices",
      icon: "Wrench",
      skills: [
        { name: "Git & GitHub", level: 88, desc: "Version control, branching, PRs, collaborative workflow" },
        { name: "VS Code & Postman", level: 90, desc: "API testing, debugging, environment scripting" },
        { name: "Android Studio", level: 75, desc: "Mobile app build environments, Android SDK" },
        { name: "Agile & SDLC", level: 85, desc: "Iterative development, testing, debugging pipelines" }
      ]
    }
  ],

  projects: [
    {
      id: "tribal-marketplace",
      title: "Digital Marketplace for Tribal Products",
      category: "Full-Stack Web App",
      badge: "Featured Platform",
      role: "Full-Stack Developer",
      image: "/tribal_marketplace.png",
      summary: "An e-commerce marketplace connecting Indigenous tribal artisans directly with global customers, eliminating middlemen.",
      description: "Designed and implemented an online platform empowering tribal craftsmen to list handmade artisan products, manage inventory, and receive direct customer orders. Built with secure HTTP/REST APIs, product categorization, and responsive user interfaces.",
      features: [
        "Direct Artisan-to-Customer storefront channel",
        "Categorized catalog search & filtering engine",
        "Order request relay & product gallery view",
        "Responsive glassmorphism UI dashboard"
      ],
      techStack: ["Flutter", "Java Spring Boot", "REST APIs", "MongoDB"],
      demoUrl: "#",
      githubUrl: "https://github.com/vpvinayak"
    },
    {
      id: "alumni-connect",
      title: "Alumni-Student Interconnection Platform",
      category: "Mentorship & Networking Network",
      badge: "Community Network",
      role: "Full-Stack Developer",
      image: "/alumni_connect.png",
      summary: "A dedicated networking ecosystem connecting college alumni with current students for mentorship and career guidance.",
      description: "Developed a collaborative network application facilitating direct communication between alumni mentors and students. Features profile matching, mentorship scheduling, career opportunities board, and interactive guidance request feeds.",
      features: [
        "Student & Alumni registration and profile verification",
        "Mentorship request dispatch & scheduling interface",
        "Career opportunity posting & discussion feeds",
        "Interactive alumni search directory"
      ],
      techStack: ["Java", "React", "REST APIs", "DBMS / SQL", "Git", "JSON"],
      demoUrl: "#",
      githubUrl: "https://github.com/vpvinayak"
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Acropolis Institute of Technology & Research (AITR), Indore",
      affiliation: "Affiliated to RGPV Bhopal",
      timeline: "2023 - 2027 (Pursuing)",
      details: "Current CGPA: 7.90. Active participant in technical exhibitions, hackathons, and departmental leadership."
    },
    {
      degree: "Secondary School Certificate (SSC - Class XII)",
      institution: "Shri Sai Baba Public School (MPBSE)",
      timeline: "Completed 2022",
      details: "Percentage: 79.80%. Academic excellence."
    },
    {
      degree: "Higher Secondary Certificate (HSC - Class X)",
      institution: "Kendriya Vidyalaya School (CBSE)",
      timeline: "Completed 2020",
      details: "Percentage: 86.60%. Strong foundation in Physics, Chemistry, and Mathematics."
    },
  ],

  certifications: [
    {
      title: "IBM Java Developer Professional Certificate",
      issuer: "IBM",
      type: "Professional Certification",
      badge: "Verified Certificate",
      desc: "Comprehensive certification covering Java enterprise concepts, OOP design principles, application development, and testing practices."
    },
    {
      title: "NPTEL Database Management System (DBMS)",
      issuer: "NPTEL / IIT",
      type: "Online Certification 2025",
      badge: "Score: 84%",
      desc: "Secured 84% in national level database exam covering relational algebra, SQL optimization, indexing, and transaction management."
    }
  ],

  awards: [
    {
      title: "Best Emerging Position",
      event: "Civil War - A Project Exhibition",
      award: "1st Emerging Winner",
      desc: "Awarded top emerging project distinction for technical innovation and prototype implementation."
    },
    {
      title: "3rd Position - Outstanding Research Award 2025",
      event: "IEEE Student Branch",
      award: "3rd Place",
      desc: "Recognized for research contribution and project architecture presentation by IEEE Student Branch."
    },
    {
      title: "3rd Position - DBMS Project Exhibition",
      event: "AITR Computer Science Department",
      award: "3rd Place",
      desc: "Achieved 3rd place in university-wide DBMS Project Exhibition cum Competition at AITR."
    }
  ],

  leadership: [
    {
      role: "Organizer - National Level Hackathon 'Prayatna'",
      organization: "AITR, Indore",
      desc: "Coordinated logistics, participant registration, and judge evaluation pipelines for nationwide tech hackathon."
    },
    {
      role: "Robotics Workshop Coordinator",
      organization: "AITR in collaboration with Techfest, IIT Bombay",
      desc: "Organized hands-on technical workshop for robotics enthusiasts in partnership with IIT Bombay Techfest team."
    }
  ],

  terminalCommands: {
    help: "Available commands: bio, skills, projects, awards, certs, edu, contact, social, matrix, clear",
    bio: "Vinayak Patel | Software Engineer & CSE Undergrad @ AITR Indore | Java, DSA, DBMS & Full-Stack Web",
    skills: "Java, SQL, C/C++, Data Structures & Algorithms, REST APIs, React, Git, Postman, DBMS",
    projects: "1. Digital Marketplace for Tribal Products | 2. Alumni-Student Interconnection Platform",
    awards: "★ Best Emerging @ Civil War Exhibition | ★ 3rd @ IEEE Research Award 2025 | ★ 3rd @ DBMS Exhibition",
    certs: "1. IBM Java Developer Professional | 2. NPTEL DBMS (84% Top Score)",
    edu: "B.Tech CSE @ AITR Indore (CGPA: 7.90) | SSC Class XII 79.80% (2022) | HSC Class X 86.60% (2020)",
    contact: "Email: vp40668@gmail.com | Location: Indore, Madhya Pradesh",
    social: "GitHub: https://github.com/vpvinayak | LinkedIn: https://www.linkedin.com/in/vpvinayakpatel/"
  }
};
