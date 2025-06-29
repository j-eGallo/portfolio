import './projetscartes.css'

export default function ProjetCartes({ image, titre, sousTitre, description, lien }) {
  return (
    <div className="projet-card">
      <img src={image} alt={titre} />
      <h2>{titre}</h2>
      <p>{sousTitre}</p>
      <p>{description}</p>
      {lien && <a href={lien} target='__blank'>Voir le site</a>}
    </div>
  );
}