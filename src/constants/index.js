import { GeekRider, edureka, mahindra } from "../assets/images";
import {
  restaurant,
  chatgpt,
  robot,
  bank,
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  aws,
  azure,
  figma,
  bootstrap,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
    title: "HTML",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
    title: "CSS",
  },
  {
    imageUrl: bootstrap,
    name: "bootstrap",
    type: "Frontend",
    title: "Bootstrap",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
    title: "SCSS",
  },
  {
    imageUrl: tailwindcss,
    name: "TailwindCSS",
    type: "Frontend",
    title: "Tailwind",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    title: "JavaScript",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
    title: "ReactJS",
  },
  {
    imageUrl: redux,
    name: "redux.js",
    type: "Frontend",
    title: "Redux",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    title: "NodeJS",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
    title: "ExpressJS",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    title: "MongoDB",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
    title: "Git",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
    title: "GitHub",
  },

  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
    title: "Material-UI",
  },

  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
    title: "TypeScript",
  },
  {
    imageUrl: aws,
    name: "aws",
    type: "skill",
    title: "AWS",
  },
  {
    imageUrl: azure,
    name: "azure",
    type: "skill",
    title: "Azure",
  },
  {
    imageUrl: figma,
    name: "figma",
    type: "skill",
    title: "Figma",
  },
];

export const experiences = [
  {
    title: "Web Developer",
    company_name: "Geek Rider",
    icon: GeekRider,
    iconBg: "#b7e4c7",
    date: "Mar 2023 - Jun 2023",
    points: [
      " Developed and maintained responsive websites using HTML, CSS, and JavaScript.",
      " Stayed up to date with industry trends and technologies, and made recommendations for improvement.",
      " Created and maintained technical documentation for websites and web applications.",
    ],
  },
  {
    title: "MERN stack (Internship) ",
    company_name: "Edureka",
    icon: edureka,
    iconBg: "#175093",
    date: "July 2023 - Dec 2023",
    padding: 10,
    points: [
      "Gain hands-on experience with the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Receive guidance and mentorship from experienced professionals in the field, helping you navigate challenges and providing insights into best practices.",
      "Gain exposure to industry-standard tools, practices, and workflows, preparing you for a successful transition from an intern to a potential full-time role in web development.",
    ],
  },

  {
    title: "Frontend Developer (React-JS)",
    company_name: "Mahindra",
    icon: mahindra,
    iconBg: "#000",
    date: "Feb 2024 - Present",
    points: [
      "Developed user interfaces for Robin DMS using React, ensuring a seamless and intuitive",
      "Implemented responsive design for accessibility across devices",
      "Used React hooks and Redux for enhanced performance and maintainability.",
      "Integrated RESTful APIs for efficient data management.",
      "Conducted testing with Jest and Enzyme to ensure high-quality deliverables.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/PremSathe",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/prem-sathe-877a26273/",
  },
];

export const projects = [
  {
    iconUrl: restaurant,
    theme: "btn-back-red",
    name: "Prems_Restaurant ",
    description:
      "Prem's Restaurant React app offers a seamless and user-friendly interface for patrons to explore the restaurans menu, place orders, and enjoy a streamlined dining experience. With responsive design and intuitive navigation, it enhances the customer's interaction with the restaurant's offerings.",
    // link: 'https://github.com/PremSathe/Prems_Restaurant.git', //git-link
    link: "https://prems-restaurant.vercel.app/",
  },
  {
    iconUrl: chatgpt,
    theme: "btn-back-green",
    name: "GPT3-clone",
    description:
      "The GPT-3 clone using React harnesses the power of OpenAI's language model to create an interactive and dynamic application. Users can experience advanced natural language understanding and generation capabilities, showcasing the potential of GPT-3 within a React-based interface.",
    // link: 'https://github.com/PremSathe/GPT3-clone.git', // git-link
    link: "https://gpt-3-clone-two.vercel.app/",
  },
  {
    iconUrl: bank,
    theme: "btn-back-blue",
    name: "Modern-Bank App",
    description:
      "The Modern-Bank app, crafted with React and styled with Tailwind CSS, provides a visually appealing and responsive banking interface. Seamlessly blending React's functionality with Tailwind's utility-first styling, users can experience a modern and aesthetically pleasing platform for efficient financial management.",
    // link: 'https://github.com/PremSathe/Modern-Bank.git', // git-link
    link: "https://modern-bank-seven.vercel.app/",
  },
  {
    iconUrl: robot,
    theme: "btn-back-pink",
    name: "SHIFRA-AI",
    description:
      "Shifra AI Virtual Assistant, built with React and styled with Tailwind CSS, offers a sleek, responsive interface for seamless task management. Integrated with the Gemini API, it delivers intelligent, real-time assistance, combining modern design with powerful functionality for an efficient user experience.",
    link: "https://shifra-ai.vercel.app/",
  },
];
