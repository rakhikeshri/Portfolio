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
            Hey there! I'm a final-year Computer Science and Engineering student
            at SVCET, Chittoor. Deeply interested in Web Development. I'm
            skilled in React.js and Frontend Development. Currently, I'm
            exploring MERN Stack Development. <br />
            My projects involve creating both functional and good-looking web
            applications. <br />
            When I'm not coding, I do sketching, here you can catch my
            creations&nbsp;
            <a href="https://www.instagram.com/letmedraw_you/" target="blank">
              @letmedraw_you
            </a>.
            <br />I am eager to contribute my expertise to impactful projects
            and collaborate with fellow professionals. Let's connect and explore
            opportunities in the world of technology.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
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
