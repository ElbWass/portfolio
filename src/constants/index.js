import { front, backend, creator, fsdev } from "../assets";

// ── New tech icons (PNG for Three.js 3D balls) ──
import python from "../assets/tech2/py2.png";
import java from "../assets/tech2/java2.png";
import php from "../assets/tech2/php2.png";
import bash from "../assets/tech2/bash2.png";
import nodejsIcon from "../assets/tech2/nodejs.png";
import mongodbIcon from "../assets/tech2/mongodb.png";
import mysql from "../assets/tech2/mysql.png";
import dockerIcon from "../assets/tech2/docker.png";
import github from "../assets/tech2/github.png";
import postman from "../assets/tech2/postman.png";
import bootstrapIcon from "../assets/tech2/bootstrap.png";
import reactIcon from "../assets/tech2/react2.png";
import tailwindIcon from "../assets/tech2/tailwindcss.png";
import wordpressIcon from "../assets/tech2/wordpress.png";
import javascriptIcon from "../assets/tech2/js2.png";

// ── Project images ──
import devpedia from "../assets/Devpedia.png";
import sitevacances from "../assets/sitevacances.png";
import staffflow from "../assets/staffflow.png";
import nexaAI from "../assets/nexaAI.png";
import pileface from "../assets/Pileface.png";
import portfolio from "../assets/portfolio.png";

export const navLinks = [
  { id: "about",        title: "About" },
  { id: "work",         title: "Work" },
  { id: "contact",      title: "Contact" },
];

// ── Services (About section cards) ──
const services = [
  { title: "Full-Stack Development", icon: fsdev },
  { title: "Frontend Engineering", icon: front },
  { title: "Backend & API Development", icon: backend },
  { title: "Data & AI Integration", icon: creator },
];

// ── Technologies ──
const technologies = [
  { name: "JavaScript", icon: javascriptIcon },
  { name: "Python",     icon: python },
  { name: "Java",       icon: java },
  { name: "PHP",        icon: php },
  { name: "Bash",       icon: bash },
  { name: "React",      icon: reactIcon },
  { name: "Node.js",    icon: nodejsIcon },
  { name: "MongoDB",    icon: mongodbIcon },
  { name: "MySQL",      icon: mysql },
  { name: "Docker",     icon: dockerIcon },
  { name: "GitHub",     icon: github },
  { name: "Postman",    icon: postman },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Bootstrap",  icon: bootstrapIcon },
  { name: "WordPress",  icon: wordpressIcon },
];

// ── Experiences ──
const experiences = [
  {
    title: "Full Stack Developer — Web Applications & SaaS",
    title_fr: "Développeur Full Stack — Applications Web & SaaS",
    company_name: "",
    icon: backend,
    iconBg: "#071526",
    date: "Jan 2024 – Present",
    points: [
      "Built multiple full stack applications using React / Next.js, Node.js and PostgreSQL.",
      "Developed StaffFlow, an HR management SaaS platform featuring secure authentication, role management and employee dashboards.",
      "Built Nexa AI, an AI assistant powered by Angular, Node.js and OpenAI GPT-4o mini.",
      "Created DevPedia, a full stack social platform with JWT authentication and user profile management.",
      "Designed secure REST APIs and structured backend architectures.",
      "Developed modern and responsive user interfaces with a strong focus on user experience.",
      "Improved deployment workflows and explored AI integration within web applications.",
    ],
    points_fr: [
      "Développement de plusieurs applications full stack avec React / Next.js, Node.js et PostgreSQL.",
      "Réalisation de StaffFlow, une plateforme SaaS RH avec authentification sécurisée, gestion des rôles et tableaux de bord employés.",
      "Développement de Nexa AI, un assistant IA basé sur Angular, Node.js et OpenAI GPT-4o mini.",
      "Création de DevPedia, une plateforme sociale full stack avec authentification JWT et gestion de profils.",
      "Conception d'APIs REST sécurisées et structuration des architectures backend.",
      "Développement d'interfaces utilisateur modernes et responsive avec une forte attention à l'expérience utilisateur.",
      "Amélioration des workflows de déploiement et exploration de l'intégration de l'IA dans les applications web.",
    ],
  },
  {
    title: "Full Stack Developer",
    title_fr: "Développeur Full Stack",
    company_name: "Open.global",
    icon: fsdev,
    iconBg: "#071526",
    date: "Jan 2022 – Oct 2023",
    points: [
      "Developed business SaaS web applications using React (frontend) and Java / Spring Boot (backend).",
      "Contributed to the design of a complete HR SaaS solution (authentication, business workflows, reporting).",
      "Worked in an Agile team of 12 developers: daily meetings, sprint planning, and demos.",
      "Improved UI ergonomics and application performance.",
      "Performed functional testing and validated releases before deployment.",
    ],
    points_fr: [
      "Développement d'applications web SaaS métiers avec React (frontend) et Java / Spring Boot (backend).",
      "Participation à la conception d'une solution SaaS de gestion RH complète (authentification, processus métiers, reporting).",
      "Travail en équipe Agile (12 développeurs) : daily meetings, sprint planning, démonstrations.",
      "Amélioration de l'ergonomie et des performances applicatives.",
      "Réalisation de tests fonctionnels et validation des releases avant déploiement.",
    ],
  },
  {
    title: "Master — Full Stack Developer",
    title_fr: "Master Développeur Full Stack",
    company_name: "Cloud Campus",
    icon: creator,
    iconBg: "#071526",
    date: "2021 – 2024",
    points: [
      "Work-study program specializing in full stack development.",
      "Learned React, Node.js, Java / Spring Boot and DevOps environments.",
      "Built end-to-end applications from development to deployment.",
      "Worked on projects integrating CI/CD, security and best practices.",
    ],
    points_fr: [
      "Formation en alternance spécialisée en développement full stack.",
      "Apprentissage de React, Node.js, Java / Spring Boot et des environnements DevOps.",
      "Mise en place d'applications complètes jusqu'au déploiement.",
      "Travail sur des projets intégrant CI/CD, sécurité et bonnes pratiques.",
    ],
  },
  {
    title: "Bachelor's Degree in Computer Science",
    title_fr: "Licence Informatique",
    company_name: "Université Sorbonne Paris Nord",
    icon: front,
    iconBg: "#071526",
    date: "2017 – 2021",
    points: [
      "Strong foundations in algorithms and object-oriented programming.",
      "Development in Java, C, JavaScript and Bash scripting.",
      "Understanding of core software development fundamentals.",
    ],
    points_fr: [
      "Bases solides en algorithmique et programmation orientée objet.",
      "Développement en Java, C, JavaScript et scripting Bash.",
      "Compréhension des fondamentaux du développement logiciel.",
    ],
  },
];


// ── Projects (real) ──
const projects = [
  {
    name: "DevPedia — Social Media Platform",
    name_fr: "DevPedia — Plateforme Réseau Social",
    description:
      "Full stack social platform featuring authentication, post sharing, profile management and friend system — built with React, Node.js and Dockerized infrastructure.",
    description_fr:
      "Plateforme sociale full stack avec authentification, partage de posts, gestion de profil et système d'amis — développée avec React, Node.js et une infrastructure Dockerisée.",
    tags: [
      { name: "React",    color: "brand-text-gradient" },
      { name: "Node.js",  color: "pink-text-gradient" },
      { name: "MongoDB",  color: "green-text-gradient" },
      { name: "Docker",   color: "orange-text-gradient" },
    ],
    image: devpedia,
    source_code_link: "https://github.com/ElbWass/Devpedia",
  },
  {
    name: "SiteVacances — Travel Web Application",
    name_fr: "SiteVacances — Application Web de Voyage",
    description:
      "Full stack travel application built without frameworks, featuring a REST API, real-time filtering and interactive UI — demonstrating strong mastery of core web technologies.",
    description_fr:
      "Application web de voyage full stack développée sans framework, avec une API REST, filtrage en temps réel et interface interactive — démontrant une maîtrise solide des technologies web fondamentales.",
    tags: [
      { name: "Node.js",    color: "brand-text-gradient" },
      { name: "Express",    color: "pink-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "HTML/CSS",   color: "orange-text-gradient" },
    ],
    image: sitevacances,
    source_code_link: "https://github.com/ElbWass/Sitevacances",
  },
  {
    name: "StaffFlow — HR Management SaaS",
    name_fr: "StaffFlow — SaaS de Gestion RH",
    description:
      "Full stack HR SaaS platform with REST API, JWT authentication and role-based access control — designed with a scalable architecture and modern frontend interface. REST API fully documented with Swagger/OpenAPI.",
    description_fr:
      "Plateforme SaaS RH full stack avec API REST, authentification JWT et contrôle d'accès basé sur les rôles — conçue avec une architecture scalable et une interface frontend moderne. API REST entièrement documentée avec Swagger/OpenAPI.",
    tags: [
      { name: "Next.js",    color: "brand-text-gradient" },
      { name: "Node.js",    color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Prisma",     color: "orange-text-gradient" },
    ],
    image: staffflow,
    source_code_link: "https://github.com/ElbWass/staffflow-web",
  },
  {
    name: "Nexa AI — AI Assistant Platform",
    name_fr: "Nexa AI — Plateforme d'Assistant IA",
    description:
      "Full stack AI assistant integrating OpenAI GPT-4o mini to generate professional content, summaries and workflow assistance through a modern Angular interface.",
    description_fr:
      "Assistant IA full stack intégrant OpenAI GPT-4o mini pour générer du contenu professionnel, des résumés et une assistance aux workflows via une interface Angular moderne.",
    tags: [
      { name: "Angular",     color: "brand-text-gradient" },
      { name: "Node.js",     color: "pink-text-gradient" },
      { name: "OpenAI",      color: "green-text-gradient" },
      { name: "TailwindCSS", color: "orange-text-gradient" },
    ],
    image: nexaAI,
    source_code_link: "https://github.com/ElbWass/Nexa-Ai",
  },
  {
    name: "Quantum Coin Simulator",
    name_fr: "Simulateur de Pièce Quantique",
    description:
      "Interactive quantum simulation built with Python and Qiskit, visualizing probabilistic outcomes and quantum superposition through an animated Streamlit interface.",
    description_fr:
      "Simulation quantique interactive construite avec Python et Qiskit, visualisant les résultats probabilistes et la superposition quantique via une interface Streamlit animée.",
    tags: [
      { name: "Python",     color: "brand-text-gradient" },
      { name: "Qiskit",     color: "pink-text-gradient" },
      { name: "Streamlit",  color: "green-text-gradient" },
      { name: "Matplotlib", color: "orange-text-gradient" },
    ],
    image: pileface,
    source_code_link: "https://github.com/ElbWass/Pileface",
  },
  {
    name: "Wassil.dev — Interactive Developer Portfolio",
    name_fr: "Wassil.dev — Portfolio Développeur Interactif",
    description:
      "Immersive 3D developer portfolio built with React, Three.js and Framer Motion, featuring interactive animations, modern UI and responsive user experience.",
    description_fr:
      "Portfolio développeur 3D immersif construit avec React, Three.js et Framer Motion, avec des animations interactives, une interface moderne et une expérience utilisateur responsive.",
    tags: [
      { name: "React",        color: "brand-text-gradient" },
      { name: "ThreeJS",      color: "pink-text-gradient" },
      { name: "FramerMotion", color: "green-text-gradient" },
      { name: "TailwindCSS",  color: "orange-text-gradient" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/ElbWass/Pileface",
  },
];

export { services, technologies, experiences, projects };
