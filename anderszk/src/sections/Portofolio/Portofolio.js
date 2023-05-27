import "./Portofolio.css";
import bg from "../../assets/stats2.svg";
import cancri from "../../assets/cancri.svg";
import github from "../../assets/github.svg";
import { useEffect, useRef } from "react";
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

  const sectionRef = useRef(null);

  return (
    <div
      className="portofolio-container flex-column"
      style={{ backgroundImage: `url(${bg})` }}
      id="section4"
      ref={sectionRef}
    >
      <h1 data-aos="fade-left">Portofolio.</h1>
      <div className="portofolio-item-wrapper flex-row">
        <div className="portofolio-item flex-column" data-aos="fade-left">
          <h2>Check me out on Github</h2>
          <img
            src={github}
            alt="GitHub"
            onClick={() => window.open("https://github.com/anderszk", "_blank")}
          />
        </div>
        <div className="portofolio-item flex-column" data-aos="fade-left">
          <h2>My Figma Portofolio</h2>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
            alt="GitHub"
            onClick={() =>
              window.open(
                "https://www.figma.com/proto/ROBwXCI7CooIMY7XDRqEtb/Figma-Portofolio---Anders-Kristensen?node-id=1%3A6&starting-point-node-id=1%3A6",
                "_blank"
              )
            }
          />
        </div>
        <div className="portofolio-item flex-column" data-aos="fade-left">
          <h2>My projects @ Cancri</h2>
          <img
            src={cancri}
            alt="cancri"
            onClick={() => window.open("https://cancri.no", "_blank")}
          />
        </div>
      </div>
    </div>
  );
};
