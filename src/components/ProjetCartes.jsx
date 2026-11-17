import './projetscartes.css'
import { useState, useEffect, useRef, useId } from 'react'
import { createPortal } from 'react-dom'

import Symfony from '../assets/symfony.png'
import Ts from '../assets/typescript.png'
import Reactp from '../assets/react.png'
import Mongo from '../assets/mongodb.svg'
import Node from '../assets/node.png'
import Php from '../assets/php.png'
import Docker from '../assets/docker.png'
import Wordpress from '../assets/wordpress.png'
import Git from '../assets/git.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/js.png'

import Link from '../assets/link.png'
import LinkToGit from '../assets/linktogit.png'

const logos = {
  symfony: Symfony,
  typescript: Ts,
  react: Reactp,
  mongodb: Mongo,
  nodejs: Node,
  php: Php,
  docker: Docker,
  wordpress: Wordpress,
  git: Git,
  html5: Html,
  css3: Css,
  javascript: Js
}

export default function ProjetCartes({
  image,
  titre,
  categorie,
  sousTitre,
  description,
  technologies = [],
  lien,
  lienGit
}) {

  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef(null)
  const titreId = useId()

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    dialogRef.current?.showModal()

    return () => {
      document.body.style.overflow = previousOverflow
    }

  }, [isOpen])

  const afficherTechnologies = () => (
    technologies
      .filter((tech) => Object.prototype.hasOwnProperty.call(logos, tech))
      .map((tech) => (
        <img
          key={tech}
          src={logos[tech]}
          alt={tech}
          title={tech}
          className="tech-logo"
        />
      ))
  )

  return (
    <>
      <article className="projet-card">

        <button
          type="button"
          className="projet-image"
          onClick={() => setIsOpen(true)}
          aria-label={`Découvrir le projet ${titre}`}
        >
          <img src={image} alt={titre} />
        </button>

        <div className="projet-infos">

          <span className="projet-categorie">
            {categorie}
          </span>

          <div className="projet-technologies">
            {afficherTechnologies()}
          </div>

        </div>

      </article>

      {isOpen && createPortal(

        <dialog
          ref={dialogRef}
          className="projet-modal"
          aria-labelledby={titreId}
          onClose={() => setIsOpen(false)}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false)
            }
          }}
        >

          <button
            type="button"
            className="projet-modal-close"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer"
          >
            &times;
          </button>

          <div className="projet-modal-interieur">

            <img
              className="projet-modal-image"
              src={image}
              alt={titre}
            />

            <div className="projet-modal-content">

              <span className="projet-modal-categorie">
                {categorie}
              </span>

              <h2 id={titreId} className="projet-modal-title">
                {titre}
              </h2>

              <p className="projet-modal-subtitle">
                {sousTitre}
              </p>

              <p className="projet-modal-description">
                {description}
              </p>

              <div className="projet-modal-technologies">
                {afficherTechnologies()}
              </div>

              {(lien || lienGit) && (
                <div className="projet-modal-links">

                  {lien && (
                    <a
                      href={lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Voir le site"
                      aria-label="Voir le site"
                    >
                      <img
                        src={Link}
                        alt="Voir le site"
                        className="projet-link-icon"
                      />
                    </a>
                  )}

                  {lienGit && (
                    <a
                      href={lienGit}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Voir le dépôt GitHub"
                      aria-label="Voir le dépôt GitHub"
                    >
                      <img
                        src={LinkToGit}
                        alt="Voir le dépôt GitHub"
                        className="projet-link-icon"
                      />
                    </a>
                  )}

                </div>
              )}

            </div>

          </div>

        </dialog>,

        document.body

      )}
    </>
  )
}