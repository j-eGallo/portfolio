import './contact.css'
import Logo from '../assets/logoportfolio.png'
import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm("xvgrlbrq")

  return (
    <section className="topcontact">
      <div className='contactpart'>
        <h2 className='contact-title'>ME CONTACTER</h2>
        <div className="contact-underline"></div>

        {state.succeeded ? (
          <p className="success-message">Merci ! Votre message a bien été envoyé.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="row">
              <input type="text" name="Nom" placeholder="Nom *" required />
              <input type="text" name="Prénom" placeholder="Prénom *" required />
            </div>
            <div className="row">
              <input type="email" name="Email" placeholder="Mail *" required />
              <input type="text" name="Société" placeholder="Société *" required />
            </div>
            <input type="text" name="Objet" placeholder="Objet *" required />

            <ValidationError prefix="Objet" field="Objet" errors={state.errors} />
            <ValidationError prefix="Email" field="Email" errors={state.errors} />

            <textarea name="Message" placeholder="Votre message *" required></textarea>
            <ValidationError prefix="Message" field="Message" errors={state.errors} />

            <button type="submit" disabled={state.submitting}>
              ENVOYER MON MESSAGE
            </button>
          </form>
        )}

        <div className="jg-logo"><img className='bottomlogo' src={Logo} alt="" /></div>
      </div>
    </section>
  )
}
