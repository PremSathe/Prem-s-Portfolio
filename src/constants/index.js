import { GeekRider, edureka, mahindra } from "../assets/images";
import {
  car,
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
  pricewise,
  react,
  redux,
  sass,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "redux.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
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
    title: "MERN stack Internship Program",
    company_name: "Edureka",
    icon: edureka,
    iconBg: "#a2d2ff",
    date: "July 2023 - Dec 2023",
    points: [
      "Gain hands-on experience with the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Receive guidance and mentorship from experienced professionals in the field, helping you navigate challenges and providing insights into best practices.",
      "Gain exposure to industry-standard tools, practices, and workflows, preparing you for a successful transition from an intern to a potential full-time role in web development.",
    ],
  },

  {
    title: "Frontend Developer (React-JS)",
    company_name: "Mahindra & Mahindra",
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
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Prems_Restaurant ",
    description:
      "Prem's Restaurant React app offers a seamless and user-friendly interface for patrons to explore the restaurans menu, place orders, and enjoy a streamlined dining experience. With responsive design and intuitive navigation, it enhances the customer's interaction with the restaurant's offerings.",
    // link: 'https://github.com/PremSathe/Prems_Restaurant.git', //git-link
    link: "https://prems-restaurant.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "GPT3-clone",
    description:
      "The GPT-3 clone using React harnesses the power of OpenAI's language model to create an interactive and dynamic application. Users can experience advanced natural language understanding and generation capabilities, showcasing the potential of GPT-3 within a React-based interface.",
    // link: 'https://github.com/PremSathe/GPT3-clone.git', // git-link
    link: "https://gpt-3-clone-two.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Modern-Bank App",
    description:
      "The Modern-Bank app, crafted with React and styled with Tailwind CSS, provides a visually appealing and responsive banking interface. Seamlessly blending React's functionality with Tailwind's utility-first styling, users can experience a modern and aesthetically pleasing platform for efficient financial management.",
    // link: 'https://github.com/PremSathe/Modern-Bank.git', // git-link
    link: "https://modern-bank-seven.vercel.app/",
  },
];
