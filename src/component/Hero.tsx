import react from "react";
import Profil from '../assets/hello.jpeg'
const Hero = () => {

    return(
    <div className='bg-black text-white text-center py-16' id="home">
        <img src={Profil} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover-scale-165'/>
        <h1 className='text-4xl font-bold'>
            I'm {""}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Oumou kalthoum Lamesse</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300 px-4 md:px-32'>
            I specialiste in building modern and responsive web application 
        </p>
        <div className='mt-8 space-x-4'>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
                hidden md:inline transform transition-transform duration-300 
                hover:scale-105 px-4 py-2 rounded-full'> Contact with me </button>
            <a  href="cv_oumou_kalthoum_lamesse (1).pdf" download className="mt-6 inline-block bg-gradient-to-r from-green-400 to-blue-500 
             text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 
             transition-transform duration-300">my Resume </a>
        </div>
    </div>
)
}

export default Hero