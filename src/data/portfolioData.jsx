import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaDatabase, FaCode, FaDocker, FaJava, FaCloud, FaTasks, FaServer, FaLock, FaGamepad, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiPython, SiCplusplus, SiPostgresql, SiLinux, SiJira, SiFlutter, SiHtml5 } from 'react-icons/si';

export const personalInfo = {
  name: "Tamir Refael",
  title: "ETL & Informatica Developer | SQL & Python Expert",
  email: "tamir11refael@gmail.com",
  linkedin: "https://www.linkedin.com/in/tamir-refael-92b683270",
  github: "https://github.com/TamirRefael",
  resumeLink: "/TamirRefaelCV.pdf",
  bio: `Software Engineer (B.Sc.) specializing in ETL and Data Integration. Currently at Aman Group, I design end-to-end pipelines using Informatica PowerCenter & Cloud (IDMC).

My expertise combines advanced SQL optimization and complex data logic (SCD, XML) with a Full-Stack background (Node.js, React) allowing me to build efficient, scalable data solutions.`,
  shortBio: "Turning complex data into actionable insights with ETL & SQL."
};

export const education = [
  {
    institution: "Shamoon College of Engineering (SCE)",
    degree: "B.Sc. in Software Engineering",
    duration: "2021 - 2025",
    score: "Graduate",
  },
  {
    institution: "Aman Group",
    degree: "Power Center 10.x Level 1 Developer Training",
    duration: "Nov 2025",
    score: "Certified",
  },
];

export const projects = [
  {
    title: "BikeSafe",
    tech: ["Flutter", "Node.js", "IoT"],
    description: "IoT Flutter application with Node.js backend for real-time safety monitoring. Designed to enhance rider safety through real-time data analysis and alerts.",
    date: "Project",
    githubLink: "https://github.com/TamirRefael", // קישור לפרופיל הראשי כפי שביקשת
    liveLink: null,
    category: "Mobile & IoT",
    icon: <SiFlutter size={24} className="text-accent-1"/>
  },
  {
    title: "Secure Password Manager",
    tech: ["Python", "AES Encryption", "Bcrypt", "GUI/CLI"],
    description: "Developed a secure password manager using Python with both command-line and GUI interfaces. Implemented AES encryption for secure storage and bcrypt for user authentication.",
    date: "May 2025",
    githubLink: "https://github.com/TamirRefael/PasswordManager",
    liveLink: null,
    category: "Cybersecurity",
    icon: <FaLock size={24} className="text-accent-1"/>
  },
  {
    title: "Flight Management System",
    tech: ["React.js", "Node.js", "PostgreSQL", "Docker", "CI/CD"],
    description: "Built a full-stack flight booking system. Designed RESTful APIs for communication between frontend and backend. Integrated Docker for containerization and GitHub Actions for CI/CD automation.",
    date: "Mar 2025 - Apr 2025",
    githubLink: "https://github.com/TamirRefael/FlightManagment",
    liveLink: null,
    category: "Full Stack",
    icon: <FaCloud size={24} className="text-accent-1"/>
  },
  {
    title: "Animal Race Game",
    tech: ["Java", "OOP", "GUI"],
    description: "A rich graphical interface where players manage competitive races between animals. Features energy management systems, organized scoreboards, and support for multiple race types.",
    date: "Apr 2023 - May 2023",
    githubLink: "https://github.com/TamirRefael/AnimalRace",
    liveLink: null,
    category: "Game Dev",
    icon: <FaGamepad size={24} className="text-accent-1"/>
  },
  {
    title: "Reversi Game",
    tech: ["C++", "OOP", "Algorithm Design"],
    description: "Classic strategy game developed as a personal project using C++. Implemented logic for legal moves, advanced score management, and object-oriented programming principles.",
    date: "Dec 2022 - Jan 2023",
    githubLink: "https://github.com/TamirRefael/ReversiGame",
    liveLink: null,
    category: "Game Dev",
    icon: <FaGamepad size={24} className="text-accent-1"/>
  },
  {
    title: "Wishclean Website",
    tech: ["HTML", "CSS", "Web Design"],
    description: "Official website for Wishclean. Designed and developed the frontend interface focusing on user experience and responsive design.",
    date: "Project",
    githubLink: "https://github.com/TamirRefael/wishclean-website",
    liveLink: null,
    category: "Web Dev",
    icon: <FaGlobe size={24} className="text-accent-1"/>
  },
];

export const skills = {
  languages: [
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Python", icon: <SiPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
  ],
  frameworksAndLibraries: [
    { name: "Informatica PowerCenter", icon: <FaServer /> },
    { name: "Informatica Cloud (IDMC)", icon: <FaCloud /> },
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Docker", icon: <FaDocker /> },
  ],
  toolsAndPlatforms: [
    { name: "Oracle DB", icon: <FaDatabase /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "Linux CLI", icon: <SiLinux /> },
    { name: "Jira", icon: <FaTasks /> },
    { name: "CI/CD", icon: <FaCode /> },
  ],
  coreCompetencies: [
    "ETL Development",
    "Data Integration",
    "System Monitoring",
    "Cybersecurity Basics",
    "OOP",
    "Agile Methodologies"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "ETL & Informatica Developer",
    organization: "Aman Group",
    duration: "Nov 2025 - Present",
    points: [
      "Developing End-to-End ETL processes using Informatica PowerCenter 10.x and Cloud (IDMC).",
      "Specializing in SQL, Informatica PowerCenter, and Data Integration pipelines.",
      "Completed Power Center 10.x Level 1 Developer Training."
    ],
  },
  {
    role: "Real-Time Monitoring Operator",
    organization: "Kavim",
    duration: "Apr 2025 - Nov 2025",
    points: [
      "Monitoring real-time system alerts using diagnostic platforms and internal tools.",
      "Identifying and classifying anomalies, determining severity levels, and escalating critical issues.",
      "Coordinated with field technicians to maintain system stability."
    ],
  },
  {
    role: "Deliver",
    organization: "Wolt",
    duration: "Jan 2021 - Jun 2025",
    points: [
      "Independent thinking, teamwork, and time management in a fast-paced environment.",
    ],
  },
  {
    role: "Security Guard",
    organization: "IEC (Israel Electric Corporation)",
    duration: "Jan 2019 - Jan 2021",
    points: [
      "Secured high-priority facilities requiring supervisory skills and interpersonal communication.",
    ],
  },
   {
    role: "Driver Manager",
    organization: "IDF",
    duration: "Feb 2017 - Oct 2019",
    points: [
      "Managed logistics and fleet operations.",
      "Demonstrated leadership and responsibility in high-pressure situations.",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
};