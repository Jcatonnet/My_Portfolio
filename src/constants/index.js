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
  openAI,
  EYLogo,
  cubynLogo,
  simundiaLogo,
  safedate,
  tshirt,
  saferideher,
  threejs,
  omnipresentLogo,
  postgresql,
  aws,
  reactNative,
  jest,
  firebase,
  profilePicture,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
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
    name: "Node JS",
    icon: nodejs,
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
    name: "Jest",
    icon: jest,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "AWS",
    icon: aws,
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
    name: "openAI",
    icon: openAI,
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

const projects = [
  {
    name: "SafeDate",
    description:
      "Mobile app IOS/Android helping women to share live info geolocation with a friend to go dating safely.",
    tags: [
      {
        name: "react native",
        icon: reactNative,
      },
      {
        name: "redux",
        icon: redux,
      },
      {
        name: "typescript",
        icon: typescript,
      },
      {
        name: "firebase",
        icon: firebase,
      },
    ],
    image: safedate,
    source_code_link: "https://github.com/Jcatonnet/SafeDate",
  },
  {
    name: "Custom Tshirt",
    description:
      "Web application powered by AI that enables users to generate customed tshirts and view it through 3D models.",
    tags: [
      {
        name: "react",
        icon: reactjs,
      },
      {
        name: "tailwind",
        icon: tailwind,
      },
      {
        name: "openAI API",
        icon: openAI,
      },
    ],
    image: tshirt,
    source_code_link: "https://github.com/Jcatonnet/tshirtAI",
  },
  {
    name: "SafeRideHer",
    description:
      "A platform to reference women-only extreme sports clubs to help women pursue their adrenaline dreams in a safe environment.",
    tags: [
      {
        name: "react",
        icon: reactjs,
      },
      {
        name: "node.js",
        icon: nodejs,
      },
      {
        name: "mongodb",
        icon: mongodb,
      },
      {
        name: "threejs",
        icon: threejs,
      },
    ],
    image: saferideher,
    source_code_link: "https://github.com/Jcatonnet/SafeRideHer",
  },
];

const profile = {
  name: "Julien",
  lastName: "Catonnet",
  email: "julien.catonnet@essec.edu",
  phone: "+33 6 77 68 80 27",
  image: profilePicture,
  linkedin_link: "https://www.linkedin.com/in/julien-catonnet-18624162/",
  github_link: "https://github.com/Jcatonnet",
};

export { services, technologies, experiences, projects, profile };
