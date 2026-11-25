import './projets.css'
import { useEffect } from 'react'
import ProjetCartes from './ProjetCartes'
import Rbadmin from '../assets/rbbureau.png'
import Std from '../assets/std.png'
import Motus from '../assets/motus.png'
import Logregdel from '../assets/logregdel.png'
import Bmr from '../assets/bmr.png'
import Physis from '../assets/physis.png'
import Checcucci from '../assets/corinne.png'
import Myorion from '../assets/myorion.png'
import Dashboard from '../assets/dashboard.png'
import GesAdmin from '../assets/gestion_session_admin.png'
import GesForm from '../assets/gestion_session_formateurs.png'
import ScrollReveal from 'scrollreveal'


export default function Projets() {

  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal('.projet-card', {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 300,
      reset: false,
    })

    return () => sr.clean('.projet-card')
  }, [])

  const projets = [
            {
      image: Rbadmin,
      titre: 'Restau Bonheur - Partie administration',
      categorie: 'Application Web',
      sousTitre: 'Application pour les restaurateurs',
      description: `L’espace restaurateur est une application web développée avec React et TypeScript, permettant aux restaurateurs de gérer leur établissement depuis un tableau de bord dédié. Ils peuvent modifier leurs informations, gérer leurs horaires d’ouverture, leur capacité d’accueil, leurs photos et consulter les réservations ainsi que les avis de leurs clients.`,
      technologies: ['typescript','react', 'symfony', 'docker'],
      lien: 'https://vercel.com/jean-emmanuel/restau-bonheur/4SFv34gV4ESpx8JGWHRdw9SzxF6L',
      lienGit: 'https://github.com/j-eGallo/restau_bonheur'
    },

        {
      image: Motus,
      titre: 'Motus Master',
      categorie: 'Projet personnel',
      sousTitre: 'Jeu du Motus',
      description: `Petit projet de jeu Motus`,
      technologies: ['react', 'nodejs'],
      lienGit: 'https://github.com/j-eGallo/motus-master'
    },
    {
      image: Logregdel,
      titre: 'LOGREGDEL',
      categorie: 'Projet personnel',
      sousTitre: 'Application d’authentification Full-Stack',
      description: `Application Full-Stack permettant la création de comptes utilisateurs,
      la connexion sécurisée via JWT et la suppression de comptes.
      Le projet repose sur une architecture React et TypeScript côté frontend,
      une API REST Symfony côté backend et une base de données PostgreSQL.
      L’application intègre également Docker.`,
      technologies: ['typescript', 'react', 'symfony', 'docker'],
      lien: 'https://logregdel.vercel.app/login',
      lienGit: 'https://github.com/j-eGallo/logregdel'
    },
    
    {
      image: Myorion,
      titre: 'My Orion',
      categorie: 'SaaS',
      sousTitre: 'Orion Santé',
      description: 'Un service d’abonnement destiné aux infirmiers libéraux, réalisé avec un autre développeur.',
      technologies: ['javascript', 'nodejs'],
      lien: 'https://www.orionsante.fr/myorion',
      lienGit: 'https://github.com'
    },
            {
      image: Std,
      titre: 'Super To-do List',
      categorie: 'Projet personnel',
      sousTitre: 'Application de to-do list',
      description: `STD-List (Super To-Do List) est une application web de gestion de tâches permettant aux utilisateurs d'organiser facilement leur quotidien.

Chaque utilisateur dispose d'un espace personnel sécurisé dans lequel il peut ajouter, consulter, modifier et supprimer ses tâches, en leur attribuant une date. Un calendrier permet également de planifier ses activités.

Développée avec React, Node.js, Express et MongoDB, l'application intègre un système d'authentification JWT et une interface simple, moderne et intuitive.`,
      technologies: ['typescript','react', 'nodejs', 'mongodb'],
      lienGit: 'https://github.com/j-eGallo/motus-master'
    },
    {
      image: Dashboard,
      titre: 'Dashboard Journal',
      categorie: 'Projet de formation',
      sousTitre: "Intranet projet de fin d’année",
      description: "Partie intranet de mon projet de fin d’année, qui est une application mobile de journal.",
      technologies: ['react', 'nodejs']
    },
    {
      image: GesAdmin,
      titre: 'Gestion administration',
      categorie: "Projet d’entreprise",
      sousTitre: 'Orion Santé',
      description: "Service dédié à la gestion des formations et à l’assignation des formateurs.",
      technologies: ['javascript', 'nodejs']
    },
    {
      image: GesForm,
      titre: 'Gestion formateurs',
      categorie: "Projet d’entreprise",
      sousTitre: 'Orion Santé',
      description: "Service dédié aux formateurs afin qu’ils puissent communiquer leurs choix à l’administration.",
      technologies: ['javascript', 'nodejs']
    },
      {
      image: Bmr,
      titre: 'Calculateur de BMR et de TDEE',
      categorie: "Projet personnel",
      description: "Petit projet consistant à permettre aux sportifs de calculer leur BMR et leur TDEE.",
      technologies: ['typescript', 'react'],
      lienGit: 'https://github.com/j-eGallo/Calculateur-de-BMR-TDEE',
      lien: 'https://calculateur-de-bmr-tdee-8tfo.vercel.app/',
    },
    {
      image: Physis,
      titre: 'Physis Studio',
      categorie: 'Site vitrine',
      sousTitre: 'Portfolio photographe',
      description: 'Site que j’ai réalisé pour un photographe italien.',
      technologies: ['html5', 'css3', 'javascript'],
      lien: 'https://physis-studio.it'
    },
    {
      image: Checcucci,
      titre: 'Corinne Checcucci',
      categorie: 'Site vitrine',
      sousTitre: 'Site vitrine pour écrivain',
      description: 'Site que j’ai réalisé pour un écrivain.',
      technologies: ['html5', 'css3', 'javascript'],
      lien: 'https://corinne-checcucci.fr/'
    }
  ]

  return (
    <section className="projets">
      <h1 className="titre">PROJETS</h1>
      <div className="underline"></div>
      <p className="soustitre">Projets que j'ai réalisés</p>

      <div className="projets-grid">
        {projets.map((proj, i) => (
          <ProjetCartes key={i} {...proj} />
        ))}
      </div>
    </section>
  )
}