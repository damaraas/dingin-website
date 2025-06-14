import React from "react";
import Heropic from "../../assets/Hero.png";
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 duration-400">
        <div className="container m-auto lg:px-12 sm:px-0">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-2">
            {/* Section kiri */}
            <div className="w-full lg:w-1/2 py-14 px-10 text-center lg:text-left bg-secondary rounded-xl">
              <div data-aos='zoom-out' data-aos-duration='400' data-aos-once='true'>
                <h1 className="lg:text-6xl sm:text-5xl text-4xl font-poetsen text-white mb-4 dark:text-gray-800 duration-300 bg-gray-800 dark:bg-third pl-2 pb-4 pt-2">
                  Bukan Sekadar Dingin, Ini Dingin yang Bikin Bahagia!
                </h1>
                <p className="text-gray-800 font-semibold mb-8 dark:text-white duration-300">
                  Es krim lezat, segar, dan penuh rasa yang bikin harimu makin
                  manis!
                </p>
                <Link to='/Order'>
                  <button className="bg-primary text-gray-800 py-4 px-6 rounded-xl hover:bg-primary/90 transition font-bold duration-300">
                    Pesan Sekarang
                  </button>
                </Link>
              </div>
            </div>

            {/* Section kanan */}
            <div className="w-full lg:w-1/2 py-3 px-10 rounded-xl flex justify-center bg-primary relative overflow-hidden">
              <svg
                className="absolute top-1/2 left-1/2 md:w-[50rem] md:h-[50rem] w-[30rem] h-[30rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none fill-current text-third dark:text-secondary"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M30.8,-51.6C37.1,-49.8,37.4,-35.8,40.8,-25.1C44.3,-14.5,50.9,-7.2,54.6,2.1C58.3,11.5,59,23,51.2,26.2C43.5,29.4,27.3,24.4,17.4,30.7C7.5,37,3.7,54.7,-3.7,61.1C-11.1,67.4,-22.2,62.5,-24,51.5C-25.9,40.5,-18.5,23.5,-26.7,13.9C-35,4.3,-58.8,2.1,-70.9,-7C-83,-16.1,-83.4,-32.3,-71.6,-35.7C-59.9,-39.1,-35.9,-29.9,-21.9,-27.2C-7.9,-24.5,-4,-28.5,4.2,-35.7C12.3,-42.9,24.6,-53.4,30.8,-51.6Z" transform="translate(100 100)" />
              </svg>

              <img
                data-aos="zoom-out"
                data-aos-duration="600"
                data-aos-once="true"
                src={Heropic}
                alt="Hero Ice Cream"
                className="max-w-full h-auto hover:scale-105 duration-300 relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
