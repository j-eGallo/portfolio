import './projets.css'
import ProjetCartes from './ProjetCartes'
import Physis from '../assets/physis.png'
import Checcucci from '../assets/Checcucci.png'
import Myorion from '../assets/myorion.png'

export default function Projets() {
  const projets = [
    {
      image: Physis,
      titre: 'Physis Studio',
      sousTitre: 'Portfolio photographe',
      description: 'Site que j’ai réalisé pour un photographe italien.',
      lien: 'https://physis-studio.it'
    },
    {
      image: Checcucci,
      titre: 'Corinne Checcucci',
      sousTitre: 'Site vitrine pour écrivain',
      description: 'Site que j’ai réalisé pour un écrivain.',
      lien: 'https://corinne-checcucci.fr/'
    },
    {
      image: Myorion,
      titre: 'My Orion',
      sousTitre: `Orion santé`,
      description: 'Un service d’abonnement destiné aux infirmiers libéraux, réalisé avec un autre développeur',
      lien: 'https://www.orionsante.fr/myorion'
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
