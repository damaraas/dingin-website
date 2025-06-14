import React from 'react'
import { LuIceCreamCone, LuSandwich } from "react-icons/lu"
import { RiDrinks2Line } from "react-icons/ri"

const Category = () => {
  const items = [
    { icon: <LuIceCreamCone className='text-6xl' />, label: 'Ice Cream' },
    { icon: <LuSandwich className='text-6xl' />, label: 'Cemilan' },
    { icon: <RiDrinks2Line className='text-6xl' />, label: 'Minuman' },
  ]

  return (
    <section className='bg-white py-8 dark:bg-gray-900'>
      <div className='container m-auto lg:px-12 sm:px-0'>
        <div className='w-full lg:py-6 lg:px-10 py-6 text-center bg-secondary rounded-xl overflow-hidden'>
          <div className='whitespace-nowrap animate-motion flex min-w-fit'>
            {/* duplikasi */}
            {[...items, ...items, ...items, ...items].map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center gap-2 font-bold text-gray-800 dark:text-white dark:hover:text-third text-4xl sm:text-3xl px-6 sm:px-10 hover:text-third duration-300'
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category
