import './App.css'
import './i18n'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Services from './component/Services'
import Projects from './component/Projets'
import Contact from './component/Contact'
import Footer from './component/Footer'
import { useTranslation } from 'react-i18next'

function App(){

  const {i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };


  return(
   
    <div>
      {/* Bouton de langue en haut de tout le site */}
       {/*
      <div className="flex justify-end p-4 bg-gray-600">
        <button
          className="px-3 py-1 bg-gray-200 rounded-lg mr-2 hover:bg-gray-300"
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
        <button
          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => changeLanguage("fr")}
        >
          FR
        </button>
      </div>
      */}
     <Navbar/>
     <Hero/>
     <About/>
     <Services />
     <Projects />
     <Contact />
     <Footer />
     
    </div>

    
  )
}


export default  App 
 