import './projetscartes.css'

export default function ProjetCartes({ image, titre, sousTitre, description, tags, lien }) {
  return (
    <div className="projet-card">
      <img src={image} alt={titre} />
      <h2 className='title'>{titre}</h2>
      <p className='st'>{sousTitre}</p>
      <p className='desc'>{description}</p>
      <p className='tags'>{tags}</p>
      {lien && <a href={lien} target='__blank'>Voir le site</a>}
    </div>
  );
}