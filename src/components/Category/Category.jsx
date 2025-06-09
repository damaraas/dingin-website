import React from 'react'
import { LuIceCreamCone } from "react-icons/lu";
import { LuSandwich } from "react-icons/lu";
import { RiDrinks2Line } from "react-icons/ri";

const Category = () => {
  return (
    <>
      <section className="bg-white py-8 dark:bg-gray-900">
        <div className="container m-auto lg:px-12 sm:px-0">
          <div className="flex lg:flex-row items-center">
            <div className="w-full lg:py-6 lg:px-10 sm:py-0 text-center lg:text-left bg-secondary rounded-xl">
              <div data-aos='slide-up' data-aos-duration='400' className='py-4 sm:py-0'>
                <ul className='flex flex-col sm:flex-row justify-between font-poetsen text-gray-800 dark:text-white text-4xl sm:text-3xl gap-6 sm:gap-10 sm:mx-20 sm:py-4 text-center sm:text-left'>
                  <li className='hover:text-third duration-300 flex flex-col items-center gap-2'>
                    <LuIceCreamCone className='text-6xl' />
                    Ice Cream</li>
                  <li className='hover:text-third duration-300 flex flex-col items-center gap-2'>
                    <LuSandwich className='text-6xl' />
                    Cemilan</li>
                  <li className='hover:text-third duration-300 flex flex-col items-center gap-2'>
                    <RiDrinks2Line className='text-6xl' />
                    Minuman</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Category