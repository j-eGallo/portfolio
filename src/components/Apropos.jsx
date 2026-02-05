import './apropos.css'
import { useEffect } from 'react';
import Moi2 from '../assets/moi2.png'
import Slide from './Slide'
import ScrollReveal from 'scrollreveal';


export default function Apropos() {
  useEffect(() => {
  ScrollReveal().reveal('.card', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 300,
  reset: false,
  });
  }, []);

useEffect(() => {
  ScrollReveal().reveal('.card-right', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 300,
  reset: false,
  });
  }, []);

  useEffect(() => {
  ScrollReveal().reveal('.description img', {
  origin: 'top',
  distance: '50px',
  duration: 1000,
  delay: 300,
  reset: false,
  });
  }, []);

    const handleScroll = (e, id) => {
  e.preventDefault();



  const target = document.getElementById(id);
  if (target) {
    const y = target.getBoundingClientRect().top + window.pageYOffset - 70; // 70px offset
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
  return (
    <div className="apropos">
          <div className='top'>
              <h1 className='titre'>À PROPOS</h1>
              <div className='underline'></div>
              <p className='soustitre'>En apprendre plus sur moi</p>
              <div className='description'>
                <div className='card'>
                  <h1 className='titledesc'>Qui suis-je ?</h1>
                  <p>Développeur web en alternance, passionné par la création d’outils utiles et bien codés. 
                  J’aime construire des projets simples mais solides, en allant droit au but. Actuellement 
                  en poste chez Orion Santé, je travaille sur des applications internes en Vanilla JS et Node.js.
                  Curieux, déterminé, et toujours partant pour mettre à profit mes compétences</p>
                  <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}><button>ME CONTACTER</button></a>

                </div>
                <img src={Moi2} alt="" />
                <div className='card-right'>
                <h1 className='titledesc'>Mes compétences</h1>
                <div className='tags'>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JAVASCRIPT</span>
                  <span>REACT</span>
                  <span>NODE JS</span>
                  <span>PHP</span>
                  <span>WORDPRESS</span>
                  <span>GITHUB</span>
                  <span>DOCKER</span>
                </div>
                </div>
              </div>
              <div className='slider'>
              <Slide />
              </div>
          </div>
    </div>
  )
}