import "./Portofolio.css";
import bg from "../../assets/stats2.svg";
import github from "../../assets/github.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Portofolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 150,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      className="portofolio-container flex-column"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1>Portofolio.</h1>
      <div className="portofolio-item-wrapper flex-row">
        <div className="portofolio-item flex-column">
          <h2>Check me out on Github</h2>
          <img src={github} alt="GitHub" />
        </div>
        <div className="portofolio-item flex-column">
          <h2>My Figma Portofolio</h2>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
            alt="GitHub"
          />
        </div>
      </div>
    </div>
  );
};
