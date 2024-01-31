import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  EYLogo,
  cubynLogo,
  simundiaLogo,
  carrent,
  jobit,
  tripguide,
  threejs,
  omnipresentLogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Fullstack Web Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "AI Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer - remote",
    company_name: "Omnipresent - Saas HR",
    icon: omnipresentLogo,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Shipped high-quality, well-tested, scalable, and maintainable code autonomously.",
      "Developed production-ready features aligned with product goals, serving thousands of end customers. Creation of a new Contractor platform with payment system integration.",
      "Led frontend technical challenges and design discussions and in architecting and implementing reusable components.",
      "Designed comprehensive test scenarios and authored code tests, including unit tests, end-to-end tests, and integration tests.",
      "Performed technical support, troubleshooting, and debugging of production code",
    ],
  },
  {
    title: "Software Engineer - remote",
    company_name: "Cubyn - Saas logistic",
    icon: cubynLogo,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - May 2022",
    points: [
      "Developed features through continuous delivery, code reviews, stack improvements and bug fixes.",
      "Built a responsive claim management app from scratch.",
      "Worked closely with product team for UX / UI, data structure, technical solution design (RFC).",
      "Engaged in technical support resolution and debugging production code.",
    ],
  },
  {
    title: "Sales Manager",
    company_name: "Simundia - Online coaching",
    icon: simundiaLogo,
    iconBg: "#383E56",
    date: "Feb 2019 - Oct 2020",
    points: [
      "Managed a team of 5 SDR.",
      "Developed the product with the Tech team, focusing on customer journey and roadmap",
      "Defined the commercial strategy, shaping of sales processes and monitoring of KPIs.",
    ],
  },
  {
    title: "Strategy Consultant",
    company_name: "EY Parthenon",
    icon: EYLogo,
    iconBg: "#E6DEDD",
    date: "Apr 2016 - Feb 2019",
    points: [
      "Realized various strategy projects, due diligences and financial analysis for corporates",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
