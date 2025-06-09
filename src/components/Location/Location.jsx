import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Gofood from '../../assets/gofood.png'

const Location = () => {
    return (
        <section className='pb-12 bg-white dark:bg-gray-900'>
            <div className='mx-4'>
                <div className='container m-auto lg:px-8 sm:px-4'>
                    <div className='bg-third dark:bg-primary rounded-xl p-6 shadow-lg sm:mx-0'>
                        <div className="flex flex-col lg:flex-row items-center gap-2">
                            {/* Section kiri */}
                            <div data-aos='fade-up' data-aos-duration='600' className="w-full lg:w-1/2 py-6 px-4 sm:py-6 md:px-2 text-center lg:text-left">
                                <h1 className="lg:text-4xl sm:text-3xl text-2xl font-poetsen text-secondary mb-8 dark:text-gray-800 duration-300">
                                    <span className="flex items-center gap-2 mb-2">
                                    <FaMapMarkerAlt className="text-red-600 text-3xl" />
                                        Temukan <span className='font-poetsen lg:text-4xl sm:text-3xl text-2xl text-gray-800 dark:text-secondary'>Dingin Ice Cream</span>
                                    </span> di GoFood atau datang langsung sekarang!
                                </h1>
                                <div className='flex justify-center lg:justify-start'>
                                    <a href="">
                                    <img src={ Gofood } alt="GoFood" width={200} className='bg-secondary hover:bg-opacity-80 duration-300 px-3 py-4 rounded-xl'/>
                                </a>
                                </div>
                            </div>

                            {/* Section kanan */}
                            <div className='w-full lg:w-1/2 px-8 py-2 flex justify-center'>
                                <div className='w-full h-[400px] overflow-hidden'>
                                <iframe
                                    data-aos='zoom-in' data-aos-duration='600'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.343271149371!2d106.95735889999999!3d-6.2183834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d5e71ffc735%3A0xdf3ea1b205850d7b!2sDingin%20Ice%20Cream!5e0!3m2!1sid!2sid!4v1749299299630!5m2!1sid!2sid'
                                    width='100%'
                                    height='100%'
                                    style={{ border: 0 }}
                                    allowFullScreen=''
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                    title='Lokasi Dingin Ice Cream'
                                    className='w-full h-full'
                                ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;