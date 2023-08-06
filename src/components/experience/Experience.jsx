import React, {useEffect} from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import AOS from 'aos'
import "aos/dist/aos.css";

const Experience = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
    });
  }, []);

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2>
      <div className='container experience__container'>

        <div className="experience__frontend" data-aos="slide-up">
          <h3>Skills</h3>
          <div className="experience__content">

            
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJs</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML5 | CSS</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>           
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Material UI</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JAVA</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Redux-Toolkit</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ES6</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Webpack</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Problem Solving</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Responsive Design</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend" data-aos="slide-up">
          <h3>Certifications</h3>

          <div className="experience__content certifications">

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Namaste React</h4>
                <small className='text-light'>Certified : <a href='https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/148878/certificates/142240/7959184_142240.pdf?1680025746' target='_blank'>Namaste Dev (Akshay Saini)</a></small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Build advanced React JS Frontend</h4>
                <small className='text-light'>Certified : <a href='https://www.udemy.com/certificate/UC-e171e996-7a98-40cb-b558-998d3e8cd88d/' target='_blank'>Udemy</a></small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript Algorithms and Data Structures</h4>
                <small className='text-light'>Certified : <a href='https://www.freecodecamp.org/certification/fcca194f410-e007-4dd2-aed9-28bbe9637049/javascript-algorithms-and-data-structures' target='_blank'>freeCodeCamp</a></small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Introduction to programming using JavaScript </h4>
                <small className='text-light'>Certified : <a href='https://www.hackerrank.com/certificates/2c19e2cf97ea' target='_blank'>HackerRank</a></small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
