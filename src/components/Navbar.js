import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import enFlag from '../assets/en.svg';
import frFlag from '../assets/fr.svg';

function Navbar() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="container mx-auto px-4 flex justify-between items-center py-6">
      <h1 className="text-2xl font-bold">Mon Portfolio</h1>
      <nav>
        <ul className="flex space-x-6 text-lg items-center">
          <li><a href="#" className="hover:underline">development</a></li>
          <li><a href="#" className="hover:underline">blog</a></li>
          <li><a href="#" className="hover:underline">cv</a></li>
          <li>
            <a href="https://github.com/ValentinMich349" className="hover:underline">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li className="flex space-x-4">
            <img 
              src={enFlag} 
              alt="English" 
              className={`w-6 h-6 cursor-pointer ${i18n.language === 'en' ? 'opacity-100' : 'opacity-50'}`} 
              onClick={() => changeLanguage('en')} 
              title="English"
            />
            <img 
              src={frFlag} 
              alt="Français" 
              className={`w-6 h-6 cursor-pointer ${i18n.language === 'fr' ? 'opacity-100' : 'opacity-50'}`} 
              onClick={() => changeLanguage('fr')} 
              title="Français"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
