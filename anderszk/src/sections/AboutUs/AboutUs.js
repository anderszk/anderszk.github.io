import "./AboutUs.css";
import { useRef } from "react";

import anders from "../../assets/anders.svg";
import linkedin from "../../assets/icon_li.svg";
import mail from "../../assets/icon_mail.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AboutUs = () => {
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
    <div className="aboutus-container flex-row" id="section1" ref={sectionRef}>
      <div className="aboutus-l flex-column" data-aos="fade-right">
        <h1>About me.</h1>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <h2>Anders Kristensen</h2>
          <h3>Engineering Student and UI/UX-Designer</h3>
          <p>
            Solution-oriented, curious and enthusiastic student looking to make
            technology interesting and innovative. My ideology is based on
            making user-oriented designs to tailor digital solutions through
            technology. I strongly believe by working in a iterative design
            processes in cross-functional teams and designing towards a
            sustainable goal is essential to make good, reliable and easy to
            maintain solutions.
            <br />
            <br />
            My interests are revolved around technology, web development,
            UI/UX-design and Artificial Intelligence. I see my interests
            intertwined and relevant in a set of ways in the world of
            information technology, as products and digital solution towards the
            private market is accelerating.
            <br />
            <br />I have experience from working in companies of all scales,
            from my sole proprietorship to international companies. This has
            given me valueable insights of how teams work together with
            different cases and with different levels of responsibility. For my
            future workplace, I am hoping to develop myself while learning new
            technologies and methodologies to further improve in my field of
            science.
          </p>
          <div className="about-contact flex-row">
            <img src={linkedin} alt="linkedin" />
            <a
              href="https://www.linkedin.com/in/anderszk/"
              target="_blank"
              rel="noreferrer"
            >
              My LinkedIn profile
            </a>
          </div>
          <div className="about-contact flex-row">
            <img src={mail} alt="mail" />
            <a
              href="mailto:anderszk@outlook.com?subject=Contact Website"
              target="_blank"
              rel="noreferrer"
            >
              Contact me on mail
            </a>
          </div>
        </div>
      </div>
      <div className="aboutus-r flex-column" data-aos="fade-left">
        <h1 id="aboutus-mobile">About me.</h1>
        <img src={anders} alt="pic of bjorn himself" className="aboutus-pic" />
      </div>
    </div>
  );
};
