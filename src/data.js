// All the text on your site lives here.
// Edit this file to update your portfolio. You don't need to touch the components.

export const profile = {
  name: "Baudoin Bolingo",
  role: "Full Stack Developer",
  location: "Kigali, Rwanda",
  headline: "I Build Mobile And Web Apps That Solve Real Problems.",
  overview:
    "I'm a full stack developer building mobile and web apps with React, React Native, Next.js, TypeScript, Angular, Redux, Node.js and Express, and experience with AI using local LLMs. I learn fast and work closely with clients to ship efficient, scalable and user-friendly products.",
  email: "baudouinbolingo@gmail.com",
  phone: "+250 796 226 099",
  phoneLink: "+250796226099",
  photo: "", // put your photo in public/ (e.g. public/me.jpg) and write '/me.jpg' here
  resume: "", // put your CV in public/ (e.g. public/Baudoin_Bolingo_CV.pdf) and write its path here
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/your-username" }, // put your real links
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-username" },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const experience = [
  {
    role: "Software Developer",
    company: "Wiredin",
    current: true,
    points: [
      "Building the Murakoze App on mobile and web to improve user engagement and service experience.",
      "Develop and maintain core features, optimize performance and keep frontend and backend working together smoothly.",
      "Turn UI/UX designs into high-quality code and build scalable solutions with senior developers.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Cowlytics",
    points: [
      "Built full-stack features for an agri-tech platform that gives farmers real-time livestock monitoring and predictive analytics.",
      "Built RESTful APIs with Node.js and Express that power dashboards for biosecurity alerts and productivity insights.",
      "Modeled data with Supabase and built responsive interfaces that make complex farm data clear on any device.",
    ],
  },
  {
    role: "Software Developer",
    company: "CB-link",
    points: [
      "Developed and maintained web and mobile apps with React.js and React Native.",
      "Worked with designers, product managers and developers to ship high-quality products.",
      "Built responsive, cross-browser interfaces and took part in code reviews.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Klab",
    points: [
      "Built team projects with React.js, React Native, HTML, CSS and Tailwind CSS.",
      "Created responsive interfaces that matched the designs and worked across devices and platforms.",
    ],
  },
];

export const projects = [
  {
    name: "Murakoze",
    type: "Web & Mobile Platform",
    description:
      "A Rwandan customer experience platform. Banks, hospitals, hotels and restaurants use it to track client satisfaction in real time, manage queues and schedule appointments.",
    role: "Software Developer",
    image: "projects/murakoze.png",
    mobileImage: "projects/screen.png",
    tags: [
      "React js",
      "TypeScript",
      "React Native",
      "Angular",
      "PostgreSQL",
      "Yii2",
      "PHP",
    ],
    github: "", // add your repo link
    live: "", // add your live demo link
  },
  {
    name: "Cowlytic",
    type: "Livestock Monitoring Platform",
    description:
      "A livestock monitoring platform that gives farmers real-time insights, biosecurity alerts and predictive analytics to improve animal health and farm productivity.",
    role: "Full Stack Developer",
    image: "projects/cowlytic.png",
    tags: [
      "Next js",
      "TypeScript",
      "React Native",
      "Rest API",
      "Express js",
      "Supabase",
      "Tailwind css",
    ],
    github: "",
    live: "",
  },
  {
    name: "Intern Connect",
    type: "SaaS Web App",
    description:
      "Connects students, schools and companies. Students find and apply for internships, companies post openings, and schools track their students’ placements in one place.",
    role: "Full Stack Developer",
    image: "projects/intern-connect.png",
    tags: ["React js", "Express js", "Tailwind css", "SaaS"],
    github: "",
    live: "",
  },
  {
    name: "StreamZone",
    type: "Mobile App",
    description:
      "A movie streaming app where users browse, search and watch movies right from their phone, with weekly, monthly and yearly subscription plans.",
    role: "Mobile Developer",
    image: "projects/streamzone.png",
    tags: [
      "React Native",
      "Redux Toolkit",
      "Tailwind css",
      "Rest Api",
      "Appwrite",
    ],
    github: "",
    live: "",
  },
];

export const services = [
  {
    title: "Mobile App",
    tag: "Most requested",
    for: "For startups and businesses that need an iOS and Android app built from idea to launch.",
    items: [
      "React Native app for iOS & Android",
      "Design-to-code from Figma",
      "APIs, auth & payments",
      "App Store & Play Store launch",
    ],
    cta: "Build My App",
  },
  {
    title: "Web App",
    for: "For teams that need a dashboard, SaaS product or business website that is fast and easy to use.",
    items: [
      "React or Next.js frontend",
      "Node.js & Express backend",
      "Supabase or PostgreSQL database",
      "Responsive on every device",
    ],
    cta: "Build My Web App",
  },
  {
    title: "Team Developer",
    for: "For companies that need an extra developer to ship features on a regular basis.",
    items: [
      "New features",
      "Bug fixes & maintenance",
      "Code reviews",
      "AI-assisted development",
    ],
    cta: "Work With Me",
  },
];

export const skills = [
  {
    group: "Mobile",
    items: ["React Native", "Expo", "Redux Toolkit", "Appwrite"],
  },
  {
    group: "Frontend",
    items: [
      "React js",
      "Next js",
      "Angular",
      "TypeScript",
      "Tailwind css",
      "Redux",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express js",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "PHP / Yii2",
    ],
  },
  {
    group: "AI",
    items: [
      "Gemma 4",
      "Ollama",
      "Groq",
      "Local LLMs",
      "Zero-Shot Classification",
    ],
  },
];

export const principles = [
  {
    title: "Users Come First.",
    text: "A feature is only done when people understand it and enjoy using it.",
  },
  {
    title: "Work Closely With Clients.",
    text: "I share progress early and often, so what I build matches what you need.",
  },
  {
    title: "Build To Scale.",
    text: "I write clean, organized code that is easy to grow and easy to hand over.",
  },
  {
    title: "Test Beyond The Happy Path.",
    text: "I check errors, slow networks and edge cases before anything goes live.",
  },
  {
    title: "Keep Learning.",
    text: "I pick up new tools fast, from Angular to AI, and use what fits the project.",
  },
];
