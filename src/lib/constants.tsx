import { BsGithub } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

export const FAQ_DATA = [
  {
    value: "item-1",
    title: "Are you available for remote work?",
    content:
      "Yes, I have experience working remotely and am comfortable collaborating with teams across different locations.",
  },
  {
    value: "item-2",
    title: "Do you take freelance projects?",
    content:
      "Yes, I am open to freelance projects. Feel free to reach out to me via the contact form or email to discuss your project in more detail.",
  },
  {
    value: "item-3",
    title: "Do you have experience working in companies?",
    content:
      "Yes, I have interned as a Frontend Engineer at two startups, Eduwork and Torche Education. I’m also currently a Frontend Engineer at DOT Indonesia, IT consultant company.",
  },
];

export const SKILLS = [
  {
    name: "React Js",
    image: "/assets/reactjs.png",
  },
  {
    name: "Python",
    image: "/assets/python.png",
  },
  {
    name: "Node Js",
    image: "/assets/nodejs.png",
  },
  {
    name: "Mongo DB",
    image: "/assets/mongodb.png",
  },
  {
    name: "MySQL",
    image: "/assets/mysql.png",
  },
  {
    name: "HTML",
    image: "/assets/html.png",
  },
  {
    name: "CSS",
    image: "/assets/css.png",
  },
];

export const POSITION = ["React Dev", "Software Eng", "Backend Dev"];

export const CONTACTS = [
  {
    id: "contact-1",
    text: "faisalabubakar.works@gmail.com",
    icon: <MdOutlineMail size={36} />,
    href: "test",
  },
  {
    id: "contact-2",
    text: "FaisalABR",
    icon: <BsGithub size={36} />,
    href: "https://github.com/FaisalABR",
  },
  {
    id: "contact-3",
    text: "faisalabubakarriza",
    icon: <FiInstagram size={36} />,
    href: "https://www.instagram.com/faisalabubakarriza/",
  },
];

export const PROJECTS = [
  {
    id: "project-1",
    image: "/assets/trus.png",
    title: "Trus",
    description:
      "Landing page for Trus Corp. Trusted IT Service Partner for Your Stock Trading",
    date: "18 Feb 2024",
    link: "https://trus.co.id/",
  },
  {
    id: "project-2",
    image: "/assets/storegg.png",
    title: "StoreGG",
    description: "Website for top up micro transaction in many platform",
    date: "28 Jan 2024",
    link: "https://precious-gecko-bf07b1.netlify.app/",
  },
  {
    id: "project-3",
    image: "/assets/kanban-react.png",
    title: "Kanban React",
    description: "Website for top up micro transaction in many platform",
    date: "5 Mar 2024",
    link: "https://kanban-react123.netlify.app/projects/project-1",
  },
];
