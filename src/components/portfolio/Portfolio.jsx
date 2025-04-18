import React, {useEffect} from "react";
import "./portfolio.css";
import IMG1 from "../../assets/foodie.png";
import IMG2 from "../../assets/trello.png";
import IMG3 from "../../assets/techie.png";
import IMG4 from "../../assets/crypto.png";
// import IMG5 from "../../assets/dsa-api.png";
import IMG5 from "../../assets/specs.png";
// import IMG6 from "../../assets/notes.png";
import IMG7 from "../../assets/quiz.png";
import AOS from 'aos'
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Foodie - Food Delivery App",
    github: "https://github.com/rakhikeshri/Foodie-react-app",
    demo: "https://my-foodiee.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Task Manager - Trello clone",
    github: "https://github.com/rakhikeshri/Trello-CLone",
    demo: "https://my-wrokspace.netlify.app/#/login",
  },
  {
    id: 3,
    image: IMG3,
    title: "Techie- A Productivity App",
    github: "https://github.com/rakhikeshri/ProductivityApp",
    demo: "https://techieee.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Cryptocosm",
    github: "https://github.com/rakhikeshri/Quiz-Master",
    demo: "https://cryptocosm-cryptos.netlify.app/",
  },
  // {
  //   id: 5,
  //   image: IMG3,
  //   title: "Chrome Extension: DSA",
  //   github: "https://github.com/rakhikeshri/DSA-chrome-extension-js-code",
  //   demo: "http://bit.ly/3Xbe7Us",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "API - DSA Problems",
  //   github: "https://github.com/rakhikeshri/chrome-ext",
  //   demo: "https://chrome-extensionn-dsa-api.onrender.com/snippets",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "API - DSA Problems",
  //   github: "https://github.com/rakhikeshri/specs",
  //   demo: "https://genesisapp.onrender.com/",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Notes Taking App",
  //   github: "https://github.com/rakhikeshri/notesapp",
  //   demo: "https://dailynotesapp.netlify.app/",
  // },
  {
    id: 5,
    image: IMG7,
    title: "Quiz Master - Clone",
    github: "https://github.com/rakhikeshri/Quiz-Master",
    demo: "https://quizzzmaster.netlify.app/",
  }
  
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
    });
  }, []);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <article key={id} className="portfolio__item" data-aos="slide-up">
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
