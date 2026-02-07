import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href={portfolioData.contact.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <span className="text-xl">🐙</span>
            </a>
            <a
              href={portfolioData.contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <span className="text-xl">💼</span>
            </a>
            <a
              href={portfolioData.contact.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <span className="text-xl">🐦</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
