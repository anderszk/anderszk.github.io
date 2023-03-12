import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";

export const Navbar = ({ currentSectionIndex }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setVisible(prevScrollPos > scrollTop || scrollTop < 10);
      setPrevScrollPos(scrollTop);
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  function handleAnchorClick(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop + 100;

    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <img src={logo} alt="logo" className="logo" />
      <div className="navlinks">
        <a
          className={currentSectionIndex === "index1" ? "navbar-active" : ""}
          href="#section1"
          onClick={handleAnchorClick}
        >
          About Me
        </a>
        <a
          className={currentSectionIndex === "index1" ? "navbar-active" : ""}
          href="#section2"
          onClick={handleAnchorClick}
        >
          Technologies
        </a>
        <a
          className={currentSectionIndex === "index1" ? "navbar-active" : ""}
          href="#section3"
          onClick={handleAnchorClick}
        >
          Experience
        </a>
        <a
          className={currentSectionIndex === "index1" ? "navbar-active" : ""}
          href="#section4"
          onClick={handleAnchorClick}
        >
          Portofolio
        </a>
      </div>
    </nav>
  );
};
