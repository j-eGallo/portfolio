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
                <p>Développeur Full-Stack, récemment diplômé du titre de Concepteur Développeur
                  d’Applications, je bénéficie de deux années d’expérience professionnelle.
                  Autonome, rigoureux et passionné par le développement, je conçois des applications
                  fiables, performantes et adaptées aux besoins des utilisateurs.
                  Toujours avide d’apprendre, je souhaite relever de nouveaux défis techniques
                  et mettre mes compétences au service de projets ambitieux.</p>
                  <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}><button>ME CONTACTER</button></a>

                </div>
                <img src={Moi2} alt="" />
                <div className='card-right'>
                <h1 className='titledesc'>Mes compétences</h1>
                <div className='tags'>
                  <span>Symfony</span>
                  <span>TypesScript</span>
                  <span>React</span>
                  <span>React Native</span>
                  <span>NODE JS</span>
                  <span>Mongo DB</span>
                  <span>Docker</span>
                  <span>Wordpress</span>
                  <span>Github</span>
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