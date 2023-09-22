
import Waving from "../images/waving.png";
import Html from "../images/html.svg";
import Css from "../images/css3.svg";
import Js from "../images/javascript.svg";
import React from "../images/react.svg";
import Tailwind from "../images/tailwind.svg";
import Sass from "../images/scss.svg";

function Hero() {
  const skillsIcons = [
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Css,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: React,
      title: "React",
    },
    {
      img: Tailwind,
      title: "Tailwind CSS",
    },
    {
      img: Sass,
      title: "SCSS",
    },
  ];

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Full-Stack Web Developer</h1>
                <img src={Waving} alt="waving_hand" />
                <p>
                  Hi, I'm Fahim Ahmed. A passionate Full Stack
                 Web Developer based in Kushtia, Bangladesh. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/fahim-ahmed-477836190/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/FahimAhamed101?tab=repositories"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    aria-label="youtube"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.youtube.com/channel/UC1WuKPRfrC0T-NP9_yLt05w"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
