import Cartify from "@/src/assets/cartify.png";
import JSU from "@/src/assets/JSU.png";
import Sympto from "@/src/assets/Sympto.png";
import Dx from "@/src/assets/dx.png";
import CS from "@/src/assets/CS.png";
import KYB from "@/src/assets/KYB.png";
import { StaticImageData } from "next/image";
import { ProjectItem, ExperienceItem } from "@/types";

export const projects: (Omit<ProjectItem, "image"> & { image?: StaticImageData })[] = [
  {
    title: "Cartify",
    subtitle: "Full Stack E-Commerce Platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Samonline1/Cartify",
    live: "https://caartify.netlify.app/",
    image: Cartify,
  },
  {
    title: "CineScoop",
    subtitle: "Movie discovery app",
    stack: ["React JS", "Redux", "Catching", "API"],
    github: "https://github.com/Samonline1/CineScope",
    live: "https://cine-scoope.netlify.app/",
    image: CS,
  },
  {
    title: "DX ERP",
    subtitle: "Unified ERP Platform",
    stack: ["Firebase", "CRUD", "AUTH", "TypeScript"],
    live: "https://dxerp.netlify.app/",
    image: Dx,
  },
  {
    title: "KYB - Know Your Broker",
    subtitle: "Verified Brokers Platform",
    stack: ["Next JS", "TypeScript", "tailwind"],
    live: "https://knowyourbroker.site/",
    image: KYB,
  },
  {
    title: "Sympto API",
    subtitle: "RESTful Health Search API",
    stack: ["Node.js", "Express.js", "API Key Auth"],
    github: "https://github.com/Samonline1/SymptoAPI",
    live: "https://symptoapi-b6w8.onrender.com",
    image: Sympto,
  },
  {
    title: "Exam Timetable Live",
    subtitle: "Student Utility Platform",
    stack: ["React JS", "Tailwind", "Framer"],
    github: "https://github.com/Samonline1/TimeTable",
    live: "https://jsu-time-table.netlify.app/",
    image: JSU,
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Self-Employed",
    period: "Nov 2025 - Present",
    location: "Remote",
    type: "Freelance",
    description:
      "Building and deploying custom web applications for businesses, including CRM systems, automation tools, and customer engagement platforms. I work across development, deployment, and business workflow optimization to help clients improve efficiency, manage leads, and grow operations.",
    responsibilities: [
      "Build and deploy web applications for businesses, handling requirements, feature development, API integration, debugging, and production deployment.",
      "Built Review Booster, a review management platform with automated workflows and WhatsApp integration, increasing reviews from 40 to 140+ in 6 months.",
      "Developed a Real Estate CRM for managing leads, clients, properties, and follow-ups, reducing manual tracking and improving lead management.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    role: "Trainee Associate",
    company: "Tech Mahindra",
    period: "Jan 2024 - Apr 2024",
    location: "Noida, Uttar Pradesh, India",
    type: "Full-Time",
    description:
      "Provided customer support while consistently meeting productivity, quality, and customer satisfaction targets in a performance-driven environment.",
    responsibilities: [
      "Delivered customer support while consistently meeting assigned productivity, quality, and customer satisfaction KPIs.",
      "Maintained an average CSAT score of 4.4/5 throughout the tenure.",
      "Recognized as a Best Performer based on overall performance metrics and received the Bravo Award for outstanding performance.",
    ],
    skills: [
      "Customer Support",
      "Customer Satisfaction",
      "Communication",
      "Problem Solving",
      "KPI Management",
    ],
  },
];
