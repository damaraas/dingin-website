import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { IoCallOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { GoClockFill } from "react-icons/go";
import { FiClock } from "react-icons/fi";

const ContactPage = () => {
  return (
    <>
      <Navbar/>
      <section className='bg-white dark:bg-gray-900'>
                  <div className='mx-4'>
                      <div className='container m-auto lg:px-8 sm:px-4'>
                          <div className='bg-secondary dark:bg-primary rounded-xl p-6 shadow-lg sm:mx-0'>
                            <h1 className='font-poetsen text-4xl text-white mb-4 pb-5 dark:text-secondary'>
                              Contact Us
                            </h1>
                              <div className="flex flex-col lg:flex-row items-center gap-2">
                                  {/* Section kiri */}
                                  <div data-aos='fade-up' data-aos-duration='600' data-aos-once='true' className="w-full lg:w-1/2 lg:py-2 lg:px-5 px-4 sm:py-3 md:px-2 text-center lg:text-left bg-gray-100 rounded-md">
                                      <h1 className="text-2xl font-poetsen text-gray-800 dark:text-gray-800 duration-300 py-2">
                                          Informasi Kontak
                                      </h1>
                                      <hr className="border-2 border-gray-300 my-1" />
                                      <div className='py-2'>
                                          <p>
                                            <span className="flex items-center gap-2 mb-1 font-poetsen">
                                              <IoCallOutline className='text-xl'/>
                                              Phone
                                            </span>
                                            +62-813-8528-7494
                                          </p>
                                          <p>
                                            <span className="flex items-center gap-2 mb-1 font-poetsen">
                                              <CiShop className='text-xl'/>
                                              Alamat
                                            </span>
                                            Jl. Kali Baru Barat No.45, Kota Baru, Kec. Bekasi Barat, Kota Bekasi, Jawa Barat, 17139.
                                          </p>
                                      </div>
                                  </div>
      
                                  {/* Section kanan */}
                                  <div data-aos='fade-up' data-aos-duration='600' data-aos-once='true' className="w-full lg:w-1/2 lg:py-2 lg:px-5 px-4 sm:py-3 md:px-2 text-center lg:text-left bg-gray-100 rounded-md">
                                      <h1 className="text-2xl font-poetsen text-gray-800 dark:text-gray-800 duration-300 py-2">
                                          Jam Operasional
                                      </h1>
                                      <hr className="border-2 border-gray-300 my-1" />
                                      <div className='py-2'>
                                          <p className='text-red-700 font-bold'>
                                            <span className="flex items-center gap-2 mb-1 font-poetsen text-gray-800">
                                              <GoClockFill className='text-xl'/>
                                              Senin
                                            </span>
                                            TUTUP
                                          </p>
                                          <p>
                                            <span className="flex items-center gap-2 mb-1 font-poetsen">
                                              <FiClock className='text-xl'/>
                                              Selasa - Minggu
                                            </span>
                                            09.30 - 20.00 WIB
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div className='w-full h-[400px] overflow-hidden pt-4'>
                                <iframe
                                    data-aos='zoom-in' data-aos-duration='600' data-aos-once='true'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.343271149371!2d106.95735889999999!3d-6.2183834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d5e71ffc735%3A0xdf3ea1b205850d7b!2sDingin%20Ice%20Cream!5e0!3m2!1sid!2sid!4v1749299299630!5m2!1sid!2sid'
                                    width='100%'
                                    height='100%'
                                    style={{ border: 0 }}
                                    allowFullScreen=''
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                    title='Lokasi Dingin Ice Cream'
                                    className='w-full h-full rounded-md'
                                ></iframe>
                                </div>
                          </div>
                      </div>
                  </div>
              </section>
      <Footer/>
    </>
  )
}

export default ContactPage