import React from 'react';
// import { Discord, Twitter, Telegram } from 'feather-icons';

const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-8">
      {/* <div className="flex items-center justify-center space-x-4">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Discord width="32" height="32" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Twitter width="32" height="32" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Telegram width="32" height="32" />
        </a>
      </div> */}
      <p className="text-gray-500 text-sm mt-2">
        &copy; {new Date().getFullYear()} Ninty. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
