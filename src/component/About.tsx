import React from "react";
import AboutImage from '../assets/hello1.jpeg';

const About = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='mb-10 text-3xl font-bold text-center'>About me</h2>

                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    {/* Image */}
                    <img
                        src={AboutImage}
                        alt="Portrait"
                        className='w-72 h-80 rounded object-cover mb-8 md:mb-0'
                    />

                    {/* Texte + compétences */}
                    <div className='flex-1'>
                        <p className='text-lg mb-8'>
                            Passionate about software development and IT infrastructure,
                             I combine my skills in programming, system/network administration,
                             and cloud computing to design reliable, modern, and scalable solutions.
                        </p>

                        <div className='space-y-5'>
                            {/* Java - Spring Boot */}
                            <Skill label="Java - Spring Boot" width="w-10/12" from="green-400" to="blue-500" />

                            {/* React - Angular */}
                            <Skill label="React - Angular" width="w-9/12" from="blue-500" to="purple-500" />

                            {/* Systèmes & Réseaux */}
                            <Skill label="Systèmes & Réseaux" width="w-8/12" from="indigo-400" to="cyan-400" />

                            {/* Cloud Engineer */}
                            <Skill label="Cloud Engineer" width="w-8/12" from="yellow-400" to="orange-500" />
                        </div>

                        {/* Statistiques */}
                        <div className="mt-12 flex justify-between text-center space-x-4">
                            <Stat number="3+" label="Années d'expérience" />
                            <Stat number="30+" label="Projets complétés" />
                            <Stat number="20+" label="Clients satisfaits" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Composant pour les compétences
const Skill = ({ label, width, from, to }) => (
    <div className="flex items-center">
        <label className="w-4/12">{label}</label>
        <div className='grow bg-gray-700 rounded-full h-2.5'>
            <div className={`bg-gradient-to-r from-${from} to-${to} h-2.5 rounded-full ${width}`} />
        </div>
    </div>
);

// Composant pour les stats
const Stat = ({ number, label }) => (
    <div>
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
            {number}
        </h3>
        <p>{label}</p>
    </div>
);

export default About;
