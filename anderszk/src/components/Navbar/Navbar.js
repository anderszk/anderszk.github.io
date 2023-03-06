import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";

export const Navbar = () => {
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
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <div className="navlinks">
        <a>About Me</a>
        <a>Technologies</a>
        <a>Experience</a>
        <a>Portofolio</a>
        <a>Contact</a>
      </div>
    </nav>
  );
};
