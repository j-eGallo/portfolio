import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Apropos from './components/Apropos'
import Projets from './components/Projets'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Navbar />
      <section id='header'>
      <Header />
      </section>
      <section id='apropos'>
      < Apropos/>
      </section>
      <section id='projets'>
        <Projets />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </>
  )
}

export default App
