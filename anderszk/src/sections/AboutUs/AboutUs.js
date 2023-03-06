import "./AboutUs.css";
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
  return (
    <div className="aboutus-container flex-row">
      <div className="aboutus-l flex-column" data-aos="fade-right">
        <h1>About me.</h1>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <h2>Anders Kristensen</h2>
          <h3>Engineering Student and UI/UX-Designer</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="about-contact flex-row">
            <img src={linkedin} alt="linkedin" />
            <p>My LinkedIn profile</p>
          </div>
          <div className="about-contact flex-row">
            <img src={mail} alt="mail" />
            <p>Contact me on mail</p>
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
