import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Quick About */}
          <div>
            <h4 className="text-xl font-semibold mb-4">About</h4>
            <p className="text-gray-400">
              Full-Stack & Cloud Developer passionate about building
              high-performance, modern solutions that meet today’s technical needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/oumou-kalthoum-lamesse-18531b182/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/oumoulamesse"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:oumoulamesse@gmail.com"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} oumoulamesse . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
