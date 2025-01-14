import React, { useEffect } from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
    });
  }, []);

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me" data-aos="slide-up">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>
        <div className="about__content" data-aos="slide-up">
          <p>
            Hello : ) <br/>
            I’m a Frontend Developer/UI Developer with 1+ years of experience.<br /><br /> I work for building clean, responsive web applications using JavaScript, React, and Angular. From crafting smooth interfaces to integrating APIs, I focus on creating simple and effective solutions.<br/><br />
            When I’m not coding, I love to draw. You can check out my work at <a href="https://www.instagram.com/letmedraw_you/" target="blank">
              @letmedraw_you
            </a>.<br /><br />
            I’m always open to new ideas and eager to work on meaningful projects. Let’s connect!            
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
// - React.js | JavaScript/TypeScript | HTML | CSS | Express | Node
// - React.js Developer/Frontend Developer and currently learning MERN stack web development.
// - I'm a code enthusiast that enjoys experimenting with new technologies and building web apps.
// - When I am not working/coding I usually spend my time sketching and art.
// - You can look at my art. <3 : https://www.instagram.com/letmedraw_you/
// - Currently looking for a remote job as a Frontend Developer role around the world.
