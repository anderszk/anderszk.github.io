import "./Header.css";
import img from "../../assets/headerimg2.svg";

export const Header = () => {
  const scrolldown = () => {
    window.scrollTo({
      top: window.innerHeight + 10,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <header className="cover" style={{ backgroundImage: `url(${img})` }}>
      <h1>
        My Digital <br />
        Portofolio.
      </h1>
      <h2>By - Anders Kristensen</h2>
      <div className="scrolldown-indicator">
        <p>Read More!</p>
        <a onClick={scrolldown}>╲╱</a>
      </div>
    </header>
  );
};
