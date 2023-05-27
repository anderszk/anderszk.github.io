import "./Technologies.css";
import stats from "../../assets/stats.svg";
import { useEffect } from "react";
import AOS from "aos";
import { useRef } from "react";

import "aos/dist/aos.css";

export const Technologies = () => {
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
      className="stats-container flex-column"
      style={{ backgroundImage: `url(${stats})` }}
      id="section2"
      ref={sectionRef}
    >
      <h1>Technologies.</h1>
      <div className="stats-wrapper flex-column">
        <div className="tech-row flex-row" data-aos="fade-right">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain-wordmark.svg"
            alt="HTML5"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
            alt="JavaScript"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg"
            alt="CSS"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
            alt="Tailwind"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            alt="SASS"
          />
        </div>
        <div className="tech-row flex-row" data-aos="fade-right">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="React.js"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain-wordmark.svg"
            alt="Node.js"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg"
            alt="Java"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg"
            alt="Python"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg"
            alt="Material UI"
          />
        </div>
        <div className="tech-row flex-row" data-aos="fade-right">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg"
            alt="WordPress"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
            alt="MS Po"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
            alt="Figma"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original.svg"
            alt="Arduino-C"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
            alt="C"
          />
        </div>
      </div>
    </div>
  );
};
