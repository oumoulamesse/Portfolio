import React from "react";

const Navbar = () => {
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className='bg-white text-black px-8 md:px-16 lg:px-16'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>
          Oumou Kalthoum Lamesse
        </div>
        <div className='space-x-6'>
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About me</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#projet" className="hover:text-gray-400">Projets</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        <div className="hidden md:flex space-x-3">
          {/* Bouton qui fait défiler vers la section contact */}
          <button
            onClick={handleScrollToContact}
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
              transform transition-transform duration-300 
              hover:scale-105 px-4 py-2 rounded-full'
          >
            Contact Me
          </button>

          {/* Bouton qui ouvre un email */}
          <a 
            href="mailto:oumoulamesse@gmail.com"
            className='bg-gradient-to-r from-blue-500 to-purple-500 text-white 
              transform transition-transform duration-300 
              hover:scale-105 px-4 py-2 rounded-full'
          >
            Email Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
