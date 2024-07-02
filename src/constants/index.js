import {
  mobile,
  backend,
  creator,
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
  cookiecad,
  prfy,
  viewer3d,
  grizara,
  capitalMovies,
  threejs,
  cloud9,
  pendant,
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
  {
    id: "resume",
    title: "Resume",
    link: "https://drive.google.com/file/d/1OopwTj9Gk4ocAFdJtU0TZLhAmF9-RgFB",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D enabled websites",
    icon: creator,
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
    title: "Cadit and Cookiecad",
    icon: cookiecad,
    iconBg: "#383E56",
    points: [
      "Cookiecad lets you create your own custom cookie cutters for 3d printing, and cadit was a extension of that app which lets you to do more with your cutter generated via cookiecad.",
      "In Cadit, I worked on various functionalities like import and export of 3d models in various formats, reperesentaion of 2d image of respective 3d model etc.",
      "In cookiecad, I only worked on the 3d functionality like calculate and display size of cutters genrated.",
      "Technology used: Three.js and Vue.js",
    ],
    link:'https://app.cookiecad.com/designer'
  },
  {
    title: "Name Pendant",
    icon: pendant,
    iconBg: "#383E56",
    points: [
      "A pendant configurator integration into clients existing website, where user can design their own pendants.",
      "User can type their name or anything they want a 3d model of that pendant will appear in side panel to visualize it.",
      "Customizability was the main focus here, user can change size, bails, heads and add another object, available in app.",
      "Technology used: Next.js and Three.js",
    ],
    link: 'https://d3signer-rose.vercel.app/admin/newdesign/'
  },
  {
    title: "PRfy",
    icon: prfy,
    iconBg: "#E6DEDD",
    points: [
      "A mobile application to help journalists.",
      "PRfy helps users to pitch to the journalists to get published and ultimately grow their personal and company brand.",
      "Features are Personalised Media Inquiries and Pitch to the journalists directly",
      "Technology used: React Native managed by expo",
    ],
    link: 'https://apps.apple.com/is/app/prfy-your-pocket-pr-buddy/id6443536852'
  },
  {
    title: "Cloud9",
    icon: cloud9,
    iconBg: "#E6DEDD",
    points: [
      "Cloud9 is Kuwait's leading Omnichannel destination for Consumer Electronics to the discerning customer.",
      "It is available in both web and mobile platforms.",
      "I work on their frontend functionalities and UI, on both the web and mobile app.",
      "Technology used: React Native(bare) in mobile app and React.js in web app",
    ],
    link:'https://cloud9albahar.com/'
  },
];

const testimonials = [

];

const projects = [
  {
    name: "Blend da vinci",
    description:
      "Web application that enables users to import 3d files, modify them, change properties and export it into various 3d file formats.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: viewer3d,
    source_code_link: "https://github.com/GreaZeY/3D-viewer",
  },
  {
    name: "Capital Movies",
    description:
      "Capital Movies a web app where user can browse movies and add them to thier list.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: capitalMovies,
    source_code_link: "https://github.com/GreaZeY/greazyMML",
  },
  {
    name: "Grizara",
    description:
      "An e-commerce Website for business where user can create thier account and shop products. Still working on it.",
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
    image: grizara,
    source_code_link: "https://github.com/GreaZeY/Grizara",
  },
];

export { services, technologies, experiences, testimonials, projects };
