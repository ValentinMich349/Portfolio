import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useWindowSize from './useWindowSize';

function Home() {
  const { t } = useTranslation();
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const { height } = useWindowSize();

  const fullText = t('role');

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 150);

      return () => clearTimeout(timer);
    } else {
      const interval = setInterval(() => {
        setDisplayText("");
        setIndex(0);
      }, 15000);

      return () => clearInterval(interval);
    }
  }, [index, fullText]);

  return (
    <div
      className="flex flex-col bg-black text-white overflow-hidden"
      style={{ height: `${height}px` }}
    >
      <div className="flex-grow flex flex-col justify-center items-start container mx-auto px-4">
        <h2 className="text-6xl mb-4">{t('greeting')}</h2>
        <p className="text-4xl mb-4" dangerouslySetInnerHTML={{ __html: t('nameIntroduction', { name: 'Valentin MICHEL' }) }}></p>
        <p className="text-4xl mb-8">
          <span className="border-r-2 border-white">{displayText}</span>
        </p>
      </div>
      <div className="flex justify-center items-center pb-6 w-full">
        <button
          onClick={() => window.location.href='/projects'}
          className="flex items-center bg-transparent border border-white text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:bg-white hover:text-black text-2xl group"
        >
          {t('projects')}
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export default Home;
