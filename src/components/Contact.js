import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-gray-900 dark:text-white">{portfolioData.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📧</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white">{portfolioData.contact.email}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center space-x-6">
              <a
                href={portfolioData.contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
              >
                <img
    src="/icons/github.png"
    alt="github"
    width="32"
  />
              </a>
              <a
                href={portfolioData.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
              >
                      <img
    src="/icons/linkedin.png"
    alt="linkedin"
    width="32"
  />
              </a>
              <a
                href={portfolioData.contact.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
              >
                <img
    src="/icons/x.png"
    alt="twitter"
    width="32"
  />
              </a>
              <a
  href={portfolioData.contact.social.Leetcode}
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
>
  <img
    src="/icons/leetcode.png"
    alt="LeetCode Profile"
    width="32"
  />
</a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
