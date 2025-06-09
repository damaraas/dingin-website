import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="py-4 dark:bg-gray-900 duration-400">
        <div className='text-gray-800 font-poetsen text-md mx-8 lg:mx-12 sm:mx-2'>
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center bg-primary dark:bg-third rounded-xl py-6 sm:px-2">
            <p className="text-sm px-8">&copy;2025 Dingin Ice Cream. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0 px-8">
                <Link to="/Menu" className="hover:text-secondary transition">Menu</Link>
                <Link to="/Order" className="hover:text-secondary transition">Order</Link>
                <Link to="/Contact" className="hover:text-secondary transition">Contact Us</Link>
            </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
