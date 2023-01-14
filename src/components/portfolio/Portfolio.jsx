import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/techie.png";
import IMG2 from "../../assets/crypto.png";
import IMG3 from "../../assets/extension.png";
import IMG4 from "../../assets/dsa-api.png";
import IMG5 from "../../assets/practice.png";
import IMG6 from "../../assets/notes.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Techie- A Productivity App",
    github: "https://github.com/rakhikeshri/ProductivityApp",
    demo: "https://techieee.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Cryptocosm",
    github: "https://github.com/rakhikeshri/Cryptocosm",
    demo: "https://cryptocosm-cryptos.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Chrome Extension: DSA",
    github: "https://github.com/rakhikeshri/DSA-chrome-extension-js-code",
    demo: "http://bit.ly/3Xbe7Us",
  },
  {
    id: 4,
    image: IMG4,
    title: "Chrome Ext. used API",
    github: "https://github.com/rakhikeshri/chrome-ext",
    demo: "https://chrome-extensionn-dsa-api.onrender.com/snippets",
  },
  {
    id: 5,
    image: IMG5,
    title: "React Beginner Projects",
    github: "https://github.com/rakhikeshri/React-Practice-Projects",
    demo: "https://react-beginner-projects.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Notes Taking App",
    github: "https://github.com/rakhikeshri/notesapp",
    demo: "https://dailynotesapp.netlify.app/",
  },
  
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 style={{textAlign:'center'}}>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank"> Github </a>
                <a href={demo} className="btn btn-primary" target="_blank" > Live Demo </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
