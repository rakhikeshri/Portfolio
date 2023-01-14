import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2>
      <div className='container experience__container'>

        <div className="experience__frontend">
          <h3>Skills</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML | HTML5</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS | CSS3</h4>
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
                <h4>ReactJs</h4>
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
                <h4>JAVA</h4>
                {/* <small className='text-light'>Intermediate</small> */}
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
                <h4>Es6</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Responsive Design</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Problem Solving</h4>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__backend">
          <h3>Certifications</h3>

          <div className="experience__content certifications">

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Introduction to programming using JavaScript </h4>
                <small className='text-light'>Certified : <a href='https://www.udemy.com/certificate/UC-e171e996-7a98-40cb-b558-998d3e8cd88d/' target='_blank'>HackerRank</a></small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Build advanced React JS Frontend with expert </h4>
                <small className='text-light'>Certified : <a href='https://www.udemy.com/certificate/UC-e171e996-7a98-40cb-b558-998d3e8cd88d/' target='_blank'>Udemy</a></small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript Algorithms and Data Structures</h4>
                <small className='text-light'>Certified : <a href='https://www.udemy.com/certificate/UC-e171e996-7a98-40cb-b558-998d3e8cd88d/' target='_blank'>freeCodeCamp</a></small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
