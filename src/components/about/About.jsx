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
          <p>
          I'm a sophomore at SVCET pursuing a B.Tech degree in Computer Science and Engineering (3rd year). <br />
          {/* I'm a code enthusiast that enjoys experimenting with new technologies. <br /> */}
          A React.js Developer/Frontend Developer. <br />
          I'm a code enthusiast that enjoys experimenting with new technologies and building web apps, 
          currently learning MERN stack web development. <br />

          When I am not working/coding, I usually spend my time sketching
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
// - React.js | JavaScript/TypeScript | HTML | CSS | Express | Node
// - React.js Developer/Frontend Developer and currently learning MERN stack web development.
// - I'm a code enthusiast that enjoys experimenting with new technologies and building web apps.
// - When I am not working/coding I usually spend my time sketching and art.
// - You can look at my art. <3 : https://www.instagram.com/letmedraw_you/
// - Currently looking for a remote job as a Frontend Developer role around the world.