import React from 'react'
import Img1 from '../../assets/waffel.png'
import Img2 from '../../assets/vanilla-sundae.png'
import Img3 from '../../assets/lumpia-beef.png'
import Img4 from '../../assets/lovely-blue.png'

const BestMenu = [
    {
        id: 1,
        img: Img1,
        name: 'Ice Cream Waffel Cone',
        description: 'Es krim berkualitas tinggi disajikan dalam cone waffle yang renyah, memberikan pengalaman rasa yang sempurna.',
    },
    {
        id: 2,
        img: Img2,
        name: 'Ice Cream Sundae',
        description: 'Es krim lembut dilengkapi saus dan topping premium, menyajikan kenikmatan yang elegan dan memuaskan.',
    },
    {
        id: 3,
        img: Img3,
        name: 'Lumpia Beef Patty',
        description: 'Lumpia dengan isian daging sapi, jagung, makaroni, dan berbagai sayuran segar, digoreng hingga renyah, cocok sebagai hidangan pendamping.',
    },
    {
        id: 4,
        img: Img4,
        name: 'Lovely Blue',
        description: 'Minuman soda yang ditambah sirup berwarna biru yang memberikan rasa kesegaran.',
    },
]

const BestSeller = () => {
  return (
    <>
    <div className='pt-10 dark:bg-gray-900 duration-400'>
        <h1 className='flex justify-center text-4xl dark:text-white font-poetsen'>
            Best Seller
        </h1>
        <div className='py-24 mx-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-5 sm:gap-7 sm:mx-3 place-items-center'>
                { BestMenu.map(({ id, img, name, description }) => {
                return (
                <div data-aos='zoom-in' data-aos-duration='300' key={ id } className='max-w-[280px] group rounded-2xl bg-white dark:hover:bg-third hover:bg-primary hover:text-gray-800 duration-300 p-4 shadow-xl'>
                    <div className='h-[180px]'>
                        <img src={ img } alt=""
                        className='max-w-[250px] mx-auto block transform -translate-y-24 group-hover:scale-105 duration-300'/>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold font-poetsen'>{ name }</h1>
                        <p className='text-gray-500 text-sm line-clamp-3'>{ description }</p>
                    </div>
                </div>
                )
            }) }</div>
        </div>
    </div>
    </>
  )
}

export default BestSeller