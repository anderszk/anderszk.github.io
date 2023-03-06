import { ExperienceCard } from "../../components/ExperienceCard/ExperienceCard";
import "./Experience.css";

import img_ey from "../../assets/logo/ey_logo.svg";
import img_ks from "../../assets/logo/logo_b.svg";
import img_elkraft from "../../assets/logo/elkraft_logo.svg";
import img_diversify from "../../assets/logo/diversify_logo.svg";
import img_itav from "../../assets/logo/itav_logo.svg";
import img_ntnu from "../../assets/logo/ntnu_logo.svg";
import img_cancri from "../../assets/logo/cancri_logo.svg";

const ey = {
  img: img_ey,
  title: "Summer Intern - Consulting",
  company: " Ernst & Young Oslo",
  date: "June 2023 - August 2023",
  info: "Summer Intern for EY Oslo in the consultant division working with Data & Analytics. Working with [Company here] to [insert here].",
};
const elkraft = {
  img: img_elkraft,
  title: "Summer Intern and Designer",
  company: "Elkraft AS",
  date: " June 2022 - Present",
  info: "Summer Intern for Elkraft AS working with graphical and UX-design for internal resources and products. Working with Business Intelligence through all divisions of the office. Automate and improve the efficiency of manual processes using software from Microsoft Power. Creating and managing databases and services on MS Azure",
};
const diversify = {
  img: img_diversify,
  title: "IT Intern Summer",
  company: "Diversify",
  date: " June 2022 - September 2022",
  info: "IT Intern for Diversify, working with maintenance of a number of websides. Working with UX-design in Figma and Wordpress. Participated in arranging the first-of-its-kind event in Diversity, Equity, Inclusion and Belonging in Norway called Diversify Nordic Summit.",
};
const ntnu = {
  img: img_ntnu,
  title: "Teaching Assistant",
  company: "NTNU - Trondheim",
  date: " August 2021 - Present",
  info: "Autumn 2021 : Teaching Assistant, INGT1001 - Python Programming \n Spring 2022 : Teaching Assistant, TDT4180 - Human Computer Interaction \n Autumn 2022 : Teaching Assistant, INGT1001 - Python Programming \n Spring 2022\n: Teaching Assistant, TDT4180 - Human \nComputer Interaction and Graphics",
};
const ks = {
  img: img_ks,
  title: "Owner",
  company: "Kristensen Solutions",
  date: " July 2022 - Present",
  info: "Proprietorship for consulting services. Designing, prototyping and creating new designs in Figma. Webdevelopment using technologies such as React.js and Wordpress",
};
const itav = {
  img: img_itav,
  title: "Developer and UI-Designer",
  company: "It Takes A Village DA",
  date: " March 2022 - Present",
  info: "Freelance work for It Takes a Village making their webpage in Wordpress and prototyping in Figma. I was responsible for the whole UX-design process and implementation in Wordpress. Making internal resources and documents",
};
const cancri = {
  img: img_cancri,
  title: "UI/UX Lead Designer",
  company: "Cancri (InsomnIT AS)",
  date: " January 2023 - Present",
  info: "Responsible for external and internal products regarding prototyping, design manuals, using closed feedback loops and iterative design processes to develop designs representing the companies. Making internal resources for Cancri AS. Developing wireframes and interactive prototypes for internal and external porjects using Figma as implementation tool.",
};

export const Experience = () => {
  return (
    <div
      className="experience-container flex-column"
      style={{ color: "black" }}
    >
      <h1>My Experience.</h1>
      <ExperienceCard obj={ey} effect="fade-right" />
      <ExperienceCard obj={cancri} effect="fade-left" />
      <ExperienceCard obj={ks} effect="fade-right" />
      <ExperienceCard obj={elkraft} effect="fade-left" />
      <ExperienceCard obj={itav} effect="fade-right" />
      <ExperienceCard obj={ntnu} effect="fade-left" />
      <ExperienceCard obj={diversify} effect="fade-right" />
    </div>
  );
};
