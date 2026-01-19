import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vivek Kumar Gupta",
  initials: "VG",
  url: "https://www.linkedin.com/in/learnervivek",
  location: "Ghaziabad, Uttar Pradesh",
  description:
    "I’m a passionate web developer who loves turning ideas into dynamic, high-performance websites. With expertise in MERN stack, I bring a well-rounded approach to building SEO-friendly, scalable web applications that deliver seamless user experiences.",
  summary:
    " I’m Vivek Kumar Gupta, a dedicated web developer with a strong passion for creating high-performance, user-friendly applications. I specialize in web development using modern frameworks and technologies like React, MongoDB, Node.js, and Next.js. Over the course of my career, I’ve developed and successfully completed over 10 projects, which you can explore in my Projects section and on my Github.",
  avatarUrl: "/pfpp.jpg",
  skills: [
    "C",
    "C++",
    "JavaScript",
    "Python",
    "Node.js",
    "Express.js",
    "EJS",
    "React.js",
    "Redux",
    "MongoDB",
    "REST API",
    "JWT Authentication",
    "HTML",
    "CSS",
    "Mongoose",
    "Cloudinary",
    "Tailwind CSS",
    "Bootstrap",
    "Shadcn UI",
    "Git",
    "GitHub",
    "MongoDB Atlas",
    "Postman",
    "Canva",
    "VS Code"
  ],
  work: [
    {
      company: "Kinesis Technical Society",
      href: "https://www.linkedin.com/company/kinesis-technical-society/",
      location: "Ghaziabad, India",
      title: "Web Development Lead",
      logoUrl: "/kts.webp",
      start: "Apr 2024",
      end: "Present",
      badges: ["Workshops", "Hackathons", "Community"],
      description:
        "Organize national-level hackathons (including NASA Space Apps Challenge) and lead bootcamps on JavaScript, Git, and GitHub to grow student participation and skills.",
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "v8381813340@gmail.com",
    tel: "7007655515",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/learnervivek",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/learnervivek",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/thevivek_gupta",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:v8381813340@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  education: [
    {
      school: "KIET Group of Institutions",
      href: "https://www.kiet.edu/",
      degree: "B.Tech in Information Technology (CGPA: 8.23)",
      logoUrl: "/KIET-LOGO.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Naval's National Academy",
      href: "https://navalsacademy.org/",
      degree: "Senior Secondary (Class XII) - 77%",
      logoUrl: "/navals.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "Naval's National Academy",
      href: "https://navalsacademy.org/",
      degree: "Secondary (Class X) - 94%",
      logoUrl: "/navals.png",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Mega Blog Web Application",
      href: "https://blogify-rho-blue.vercel.app/",
      dates: "Aug 2025",
      active: true,
      description:
        "Responsive blogging platform with Appwrite backend for auth, database, and storage; supports secure CRUD for posts and 100+ concurrent users.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "JWT Authentication",
        "Cloudinary",
        "Multer",
        "Mongoose"
      ],
      links: [],
      image: "/blog.png",
      video: "",
    },
     {
      title: "Career-Connect",
      href: "https://github.com/learnervivek/Career-connect",
      dates: "Jan 2025",
      active: true,
      description:
        "A full-stack MERN job portal enabling employers to post roles and manage applicants, while job seekers search, apply, track applications, upload resumes, use secure JWT authentication, role-based access, dashboards, rich listings, and a responsive interface.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB","Mongoose", "Cloudinary","JWT Authentication "],
      links: [],
      image: "/career connect.png",
      video: "",
    },
     {
      title: "Portfolio-Website",
      href: "https://www.vivekgupta.tech/",
      dates: "Jan 2025",
      active: true,
      description:
        "A modern, responsive portfolio website showcasing my MERN stack expertise, built with Next.js 14, React 18, TypeScript, and Tailwind CSS, featuring dark mode, animations, SEO optimization, markdown content, syntax highlighting, custom components, and mobile-first design.",
      technologies: ["TypeScript", "Next.js", "React.js", "Magic UI", "Tailwind CSS","Framer Motion","Radix UI","Lucide React"],
      links: [],
      image: "/portfolio.png",
      video: "",
    },
    {
      title: "AI Article Summarizer – Chrome Extension",
      href: "https://github.com/learnervivek/AI-article-summerizer-extension",
      dates: "Sep 2025",
      active: true,
      description:
        "Manifest V3 extension using Google Gemini API to generate brief, descriptive, and bullet summaries with an intuitive popup and options UI.",
      technologies: ["JavaScript", "HTML", "CSS", "Manifest V3", "Gemini API"],
      links: [],
      image: "/ext.png",
      video: "",
    },
   
   


    {
      title: "Saarthi: Cultural Heritage Platform",
      href: "https://saarthi0.netlify.app/",
      dates: "Nov 2024",
      active: true,
      description:
        "Interactive heritage experience with 10+ 3D models, AR/VR exploration, AI chatbot, and secure auth; deployed for 24/7 access.",
      technologies: ["JavaScript", "HTML", "CSS", "Three.js", "Blender"],
      links: [],
      image: "/sarthi.png",
      video: "",
    },
    {
      title: "Simon-Says-Game",
      href: "https://idyllic-buttercream-fc441f.netlify.app/",
      dates: "Sep 2024",
      active: true,
      description:
        "A browser-based Simon Says memory game built with HTML, CSS, and vanilla JavaScript. Players repeat increasingly complex color sequences with visual feedback, score tracking, responsive design, and instant restart, testing memory as difficulty progressively increases.",
      technologies: ["JavaScript",  "CSS", "HTML","Bootstrap"],
      links: [],
      image: "/simon.png",
      video: "",
    },
    {
      title: "Password Generator",
      href: "https://github.com/learnervivek/react_mini_project/tree/main/passgen",
      dates: "May 2025",
      active: true,
      description:
        "Passgen is a React-based password generator that creates secure random passwords with customizable length, optional numbers and special characters, interactive toggles, range slider control, and one-click clipboard copying using the Clipboard API for modern applications.",
      technologies: ["React.js","Tailwind CSS","JavaScript",  "CSS", "HTML"],
      links: [],
      image: "/pass.png",
      video: "",
    },

  ],
  hackathons: [],
} as const;
