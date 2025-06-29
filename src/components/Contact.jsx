import './contact.css'
import Logo from '../assets/logoportfolio.png'
export default function Contact() {
  return (
    <section className="topcontact">
      <div className='contactpart'>
        <h2 className='contact-title'>ME CONTACTER</h2>
        <div className="contact-underline"></div>

        <div className="contact-icons">

        </div>

        <form className="contact-form">
          <div className="row">
            <input type="text" placeholder="Nom *" required />
            <input type="text" placeholder="Prénom *" required />
          </div>
          <div className="row">
            <input type="email" placeholder="Mail *" required />
            <input type="text" placeholder="Société *" required />
          </div>
          <textarea placeholder="Votre message *" required></textarea>
          <button type="submit">ENVOYER MON MESSAGE</button>
        </form>

        <div className="jg-logo"><img className='bottomlogo' src={ Logo } alt="" /></div>
      </div>
    </section>
  )
}
