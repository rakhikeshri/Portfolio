import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h3>icon</h3>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            {/* <article className='about__card'>
              <h3>icon</h3>
              <h5>Clients</h5>
              <small>-----</small>
            </article> */}
            <article className='about__card'>
              <h3>icon</h3>
              <h5>Projects</h5>
              {/* <small>20+ Practice Projects</small> */}
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          I'm a sophomore at SVCET pursuing BTech in Computer Science and Technology(3rd year). <br />
          {/* I'm a code enthusiast that enjoys experimenting with new technologies. <br /> */}
          I'm a React.js developer/Frontend developer(specifically). <br />
          I enjoy building web apps and currently learning MERN stack web development. <br />

          When I am not working/coding I usually spend my time sketching
          <a href='https://www.instagram.com/letmedraw_you/' target="blank"> @letmedraw_you

</a>
          </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
