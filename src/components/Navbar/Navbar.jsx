import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'
import { CgMenuRound } from "react-icons/cg";
import { IoIceCreamOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(true)

    return (
        <>
            <div className='w-full duration-300 font-poetsen bg-white dark:bg-gray-900'>
                <div className='container m-auto pb-3 pt-2 sm:px-0 lg:px-12 lg:py-4 bg-white dark:bg-gray-900'>
                    <div className='flex justify-between items-center py-1 rounded-xl bg-third'>
                        <div>
                            <a href="" className='gap-2'>
                                <img src={Logo} alt="Dingin Ice Cream" className='w-20 mx-10' />
                            </a>
                        </div>
                        <div className='flex items-center gap-8 mx-10'>
                            <div><DarkMode /></div>
                            <CgMenuRound onClick={() => setNavOpen(!navOpen)} className='text-4xl text-gray-800 cursor-pointer lg:hidden mx-8'/>
                            <div className='hidden lg:block'>
                                <ul className='flex gap-8 font-poetsen text-gray-800 dark:text-gray-800'>
                                    <li>
                                        <Link to="/" className='inline-block p-4 hover:text-secondary'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/Menu" className='inline-block p-4 hover:text-secondary'>Menu</Link>
                                    </li>
                                    <li>
                                        <Link to="/Order" className='inline-block p-4 hover:text-secondary'>Order</Link>
                                    </li>
                                    <li>
                                        <Link to="/Contact" className='inline-block p-4 hover:text-secondary'>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Mobile & tablet menu */}
                        {navOpen && (
                            <div className='fixed bottom-0 right-0 left-0 py-2 md:px-20 px-12 bg-white lg:hidden transition-all duration-300 scale-120 dark:bg-gray-900 z-50'>
                                <ul className='flex justify-between'>
                                    <li>
                                        <Link to="/" className='flex justify-center flex-col items-center gap-1'>
                                            <span className='text-gray-800 opacity-50 text-sm font-normal dark:text-white dark:opacity-90'>Home</span>
                                            <HiOutlineHome className='text-xl text-gray-800 opacity-50 dark:text-white dark:opacity-90'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Menu" className='flex justify-center flex-col items-center gap-1'>
                                            <span className='text-gray-800 opacity-50 text-sm font-normal dark:text-white dark:opacity-90'>Menu</span>
                                            <IoIceCreamOutline className='text-xl text-gray-800 opacity-50 dark:text-white dark:opacity-90'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Order" className='flex justify-center flex-col items-center gap-1'>
                                            <span className='text-gray-800 opacity-50 text-sm font-normal dark:text-white dark:opacity-90'>Order</span>
                                            <IoBagHandleOutline className='text-xl text-gray-800 opacity-50 dark:text-white dark:opacity-90'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Contact" className='flex justify-center flex-col items-center gap-1'>
                                            <span className='text-gray-800 opacity-50 text-sm font-normal dark:text-white dark:opacity-90'>Contact Us</span>
                                            <RiContactsLine className='text-2sm text-gray-800 opacity-50 dark:text-white dark:opacity-90'/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar