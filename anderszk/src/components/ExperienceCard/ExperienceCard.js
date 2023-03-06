import "./ExperienceCard.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const ExperienceCard = ({ obj, effect }) => {
  const info = obj.company + " | " + obj.date;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 150,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="experience-card-container flex-row" data-aos={effect}>
      <img src={obj.img} className="experience-card-img"></img>
      <div className="experience-card-sep" />
      <div className="experience-card-info">
        <h2>{obj.title}</h2>
        <p className="company-date">{info}</p>
        <p>{obj.info}</p>
      </div>
    </div>
  );
};
