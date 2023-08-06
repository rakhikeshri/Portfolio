import React, {useEffect} from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import './footer.css'
import AOS from 'aos'
import "aos/dist/aos.css";

const Footer = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
    });
  }, []);


  return (
    <footer  data-aos="slide-up">
      <a href='#' className='footer__logo'>RAKHI</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/rakhi-keshri-1a3018214/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/rakhikeshri' target="_blank"><FaGithub/></a>
        <a href='https://www.instagram.com/letmedraw_you/' target="_blank"><FiInstagram/></a>

      </div>
      <div className='footer__copyright'>
        <small>Copyright &copy; RAKHI KESHRI. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer