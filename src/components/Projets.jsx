import './projets.css'
import ProjetCartes from './ProjetCartes'
import Physis from '../assets/physis.png'
import Checcucci from '../assets/corinne.png'
import Myorion from '../assets/myorion.png'
import Dashboard from '../assets/dashboard.png'
import GesAdmin from '../assets/gestion_session_admin.png'
import GesForm from '../assets/gestion_session_formateurs.png'

export default function Projets() {
  const projets = [
      {
      image: Myorion,
      titre: 'My Orion',
      sousTitre: `Orion santé`,
      description: 'Un service d’abonnement destiné aux infirmiers libéraux, réalisé avec un autre développeur',
      tags : 'Javascript, NodeJS',
      lien: 'https://www.orionsante.fr/myorion'
    },
    {
      image: Dashboard,
      titre: 'Dashboard Journal',
      sousTitre: `Intranet projet fin d'année`,
      description: `Partie intranet de mon projet de fin d'année, qui est une application mobile de journal`,
      tags : 'ReactJS, Vite, NodeJS, MySQL, Mantine',
    },
    {
      image: GesAdmin,
      titre: 'Gestion administration',
      sousTitre: `Orion Santé`,
      description: `Service dédié à la gestion des formations, et l'assignation des formateurs`,
      tags : 'Javascript, NodeJS, JSON, WebSockets, OpenStreetMap',
    },
    {
      image: GesForm,
      titre: 'Gestion formateurs',
      sousTitre: `Orion Santé`,
      description: `Service dédié aux formateurs afin qu'ils puissent communiquer leurs choix à l'administration`,
      tags : 'Javascript, NodeJS, JSON, WebSockets, OpenStreetMap',
    },
    {
      image: Physis,
      titre: 'Physis Studio',
      sousTitre: 'Portfolio photographe',
      description: 'Site que j’ai réalisé pour un photographe italien.',
      tags: 'html, css, Javascript',
      lien: 'https://physis-studio.it'
    },
    {
      image: Checcucci,
      titre: 'Corinne Checcucci',
      sousTitre: 'Site vitrine pour écrivain',
      description: 'Site que j’ai réalisé pour un écrivain.',
      ags: 'html, css, Javascript',
      lien: 'https://corinne-checcucci.fr/'
    }
  ]

  return (
    <section className="projets">
      <h1 className='titre'>PROJETS</h1>
      <div className='underline'></div>
      <p className='soustitre'>Projets que j'ai réalisé</p>

      <div className="projets-grid">
        {projets.map((proj, i) => (
          <ProjetCartes key={i} {...proj} />
        ))}
      </div>
    </section>
  )
}
