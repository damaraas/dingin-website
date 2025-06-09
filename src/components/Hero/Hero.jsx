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
            <div className="w-full lg:w-1/2 py-16 px-10 text-center lg:text-left bg-secondary rounded-xl">
              <div data-aos='zoom-out' data-aos-duration='400' data-aos-once='true'>
                <h1 className="lg:text-6xl sm:text-5xl text-4xl font-poetsen text-white mb-4 dark:text-gray-800 duration-300">
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
            <div className="w-full lg:w-1/2 py-2 px-10 rounded-xl flex justify-center bg-primary">
              <img data-aos='zoom-out' data-aos-duration='600' data-aos-once='true' src={Heropic} alt="Hero Ice Cream" className="max-w-full h-auto hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
