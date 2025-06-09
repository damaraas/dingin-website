import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Img1 from '../assets/Menu/IceCream/BACKCURRENT BOBA.jpg'
import Img2 from '../assets/Menu/IceCream/STRAWBERRY BOBA.jpg'
import Img3 from '../assets/Menu/IceCream/MANGO BOBA.jpg'
import Img4 from '../assets/Menu/IceCream/OREO COOKIES.jpg'
import Img5 from '../assets/Menu/IceCream/MATCHA COOKIES.jpg'
import Img6 from '../assets/Menu/IceCream/RED VELVET COOKIES.jpg'
import Img7 from '../assets/Menu/IceCream/VANILLA SUNDAE.jpg'
import Img8 from '../assets/Menu/IceCream/CHOCOLATE SUNDAE.jpg'
import Img9 from '../assets/Menu/IceCream/STRAWBERRY SUNDAE.jpg'
import Img10 from '../assets/Menu/IceCream/VANILLA STRAWBERRY SUNDAE.jpg'
import Img11 from '../assets/Menu/IceCream/VANILLA CHOCOLATE SUNDAE.jpg'
import Img12 from '../assets/Menu/Cemilan/BURGER SMOKED BEEF.jpg'
import Img13 from '../assets/Menu/Cemilan/BURGER BEEF PATTY.jpg'
import Img14 from '../assets/Menu/Cemilan/BURGER CHICKEN PATTY.jpg'
import Img15 from '../assets/Menu/Cemilan/LUMPIA SMOKED BEEF.jpg'
import Img16 from '../assets/Menu/Cemilan/LUMPIA BEEF PATTY.jpg'
import Img17 from '../assets/Menu/Cemilan/LUMPIA CHICKEN PATTY.jpg'
import Img18 from '../assets/Menu/Cemilan/ROPANG SMOKED BEEF.jpg'
import Img19 from '../assets/Menu/Cemilan/ROPANG BEEF PATTY.jpg'
import Img20 from '../assets/Menu/Cemilan/ROPANG CHICKEN PATTY.jpg'
import Img21 from '../assets/Menu/Cemilan/ROPANG KEJU.jpg'
import Img22 from '../assets/Menu/Cemilan/ROPANG COKLAT.jpg'
import Img23 from '../assets/Menu/Cemilan/ROPANG COKLAT KEJU.jpg'
import Img24 from '../assets/Menu/Minuman/CAPPUCINO.jpg'
import Img25 from '../assets/Menu/Minuman/SPORT CHOCO.jpg'
import Img26 from '../assets/Menu/Minuman/HAPPY RED.jpg'
import Img27 from '../assets/Menu/Minuman/LOVELY BLUE.jpg'
import Img28 from '../assets/Menu/Minuman/COCOLA.jpg'
import Img29 from '../assets/Menu/Minuman/MANGO MILKY.jpg'
import Img30 from '../assets/Menu/Minuman/STRAWBERRY MILKY.jpg'

const MenuPage = () => {
    const allMenus = [
        { id: 1, img: Img1, category: 'Ice Cream', price: 12000 },
        { id: 2, img: Img2, category: 'Ice Cream', price: 12000 },
        { id: 3, img: Img3, category: 'Ice Cream', price: 12000 },
        { id: 4, img: Img4, category: 'Ice Cream', price: 12000 },
        { id: 5, img: Img5, category: 'Ice Cream', price: 12000 },
        { id: 6, img: Img6, category: 'Ice Cream', price: 12000 },
        { id: 7, img: Img7, category: 'Ice Cream', price: 10000 },
        { id: 8, img: Img8, category: 'Ice Cream', price: 10000 },
        { id: 9, img: Img9, category: 'Ice Cream', price: 10000 },
        { id: 10, img: Img10, category: 'Ice Cream', price: 10000 },
        { id: 11, img: Img11, category: 'Ice Cream', price: 10000 },
        { id: 12, img: Img12, category: 'Cemilan', price: 10000 },
        { id: 13, img: Img13, category: 'Cemilan', price: 13000 },
        { id: 14, img: Img14, category: 'Cemilan', price: 13000 },
        { id: 15, img: Img15, category: 'Cemilan', price: 10000 },
        { id: 16, img: Img16, category: 'Cemilan', price: 13000 },
        { id: 17, img: Img17, category: 'Cemilan', price: 13000 },
        { id: 18, img: Img18, category: 'Cemilan', price: 10000 },
        { id: 19, img: Img19, category: 'Cemilan', price: 13000 },
        { id: 20, img: Img20, category: 'Cemilan', price: 13000 },
        { id: 21, img: Img21, category: 'Cemilan', price: 10000 },
        { id: 22, img: Img22, category: 'Cemilan', price: 10000 },
        { id: 23, img: Img23, category: 'Cemilan', price: 14000 },
        { id: 24, img: Img24, category: 'Minuman', price: 10000 },
        { id: 25, img: Img25, category: 'Minuman', price: 10000 },
        { id: 26, img: Img26, category: 'Minuman', price: 10000 },
        { id: 27, img: Img27, category: 'Minuman', price: 10000 },
        { id: 28, img: Img28, category: 'Minuman', price: 10000 },
        { id: 29, img: Img29, category: 'Minuman', price: 10000 },
        { id: 30, img: Img30, category: 'Minuman', price: 10000 },
    ];

    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const categories = ['Semua', ...new Set(allMenus.map(item => item.category))];
    const filteredMenus =
        selectedCategory === 'Semua'
            ? allMenus
            : allMenus.filter(item => item.category === selectedCategory);

    return (
        <>
            <Navbar />
            <section className='py-10 px-4 bg-white dark:bg-gray-900 duration-400'>
                <div data-aos='fade-out' data-aos-duration='600' className='flex gap-4 justify-center mb-8'>
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full font-semibold 
                                ${selectedCategory === cat ? 'bg-secondary dark:bg-third text-white dark:text-gray-800' : 'bg-primary dark:bg-secondary text-gray-800 dark:text-white'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 mx-9'>
                    {filteredMenus.map(menu => (
                        <div data-aos='zoom-in' data-aos-duration='800' data-aos-easing='ease-in-out' key={menu.id} className='border p-4 rounded-lg shadow hover:bg-third dark:hover:bg-primary duration-300 bg-white'>
                            <div className='w-full h-[180px] flex justify-center items-center overflow-hidden'>
                                <img
                                    src={menu.img}
                                    alt={menu.category}
                                    className='h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105'
                                />
                            </div>

                            <div className='mt-4 font-poetsen'>
                                <p className='text-gray-800'>{menu.category}</p>
                                <p className='text-secondary font-semibold'>Rp{menu.price.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MenuPage