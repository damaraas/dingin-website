import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Gofood from '../assets/gofood.png'

const OrderPage = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [order, setOrder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = '628134567890';
    const message = `Halo, saya ingin memesan:
    Nama Pemesan: ${name}
    Tanggal Pengambilan: ${date}
    Jam Pengambilan: ${hour}
    Pesanan: ${order}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <Navbar />
      <section className='bg-white dark:bg-gray-900'>
        <div className='mx-4'>
          <div className='container m-auto lg:px-8 lg:py-2 sm:px-4'>
            <div className='sm:mx-0'>
              <div className="flex flex-col lg:flex-row items-center gap-2">
                {/* Section kiri */}
                <div data-aos='slide-up' data-aos-duration='800' data-aos-once='true' className="w-full lg:w-1/2 py-6 px-4 lg:px-10 sm:py-6 md:px-2 text-center lg:text-left">
                  <h1 className="lg:text-5xl md:text-4xl text-4xl font-poetsen text-secondary mb-8 sm:mb-3 dark:text-gray-800 duration-300 flex justify-center lg:justify-start">
                    <span className="mb-2 dark:text-white">
                      Order Menu <span className='font-poetsen lg:text-5xl md:text-4xl text-4xl text-gray-800 dark:text-secondary'>Dingin Ice Cream</span> Sekarang!
                    </span>
                  </h1>
                  <div className='flex justify-center lg:justify-start'>
                    <a href="https://www.gojek.com">
                      <img src={Gofood} alt="GoFood" width={200} className='bg-secondary hover:bg-opacity-80 duration-300 px-3 py-4 rounded-xl' />
                    </a>
                  </div>
                </div>

                {/* Section kanan */}
                <div data-aos='fade-up' data-aos-duration='600' data-aos-once='true' className='bg-secondary dark:bg-primary rounded-xl w-full lg:w-1/2 py-2 flex justify-center'>
                  <div className='py-3'>
                    <h1 data-aos='zoom-out' data-aos-duration='600' data-aos-once='true' className='font-poetsen text-2xl mb-3 flex justify-center'>
                      Pemesanan Melalui Whatsapp
                    </h1>
                  <form onSubmit={ handleSubmit }>
                      <div data-aos='zoom-out' data-aos-duration='600' data-aos-once='true' className='mb-2'>
                        <input type="text" value={name} placeholder='Nama Pemesan' onChange={(e) => setName(e.target.value)} required
                          className="w-[350px] sm:w-[360px] md:w-[508px] px-3 py-2 border rounded-lg bg-primary placeholder-gray-800 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white" />
                      </div>
                      <div data-aos='zoom-out' data-aos-duration='600' data-aos-once='true' className='flex flex-row mb-2 gap-2'>
                        <input type="text" value={date} placeholder='Tanggal Pengambilan' onChange={(e) => setDate(e.target.value)} required
                          className="w-[200px] sm:w-[230px] md:w-[350px] px-3 py-2 border rounded-lg bg-primary placeholder-gray-800 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white" />
                        <input type="text" value={hour} placeholder='Jam Pengambilan' onChange={(e) => setHour(e.target.value)} required
                          className="w-[140px] sm:w-[120px] md:w-[150px] px-3 py-2 border rounded-lg bg-primary placeholder-gray-800 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white" />
                      </div>
                      <div data-aos='zoom-out' data-aos-duration='600' data-aos-once='true' className='mb-2'>
                        <textarea
                          value={order} placeholder='Nama Pesanan - Jumlah, dll'
                          onChange={(e) => setOrder(e.target.value)}
                          rows="12"
                          className="w-full px-3 py-2 border rounded-lg bg-primary placeholder-gray-800 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <button data-aos='zoom-out' data-aos-duration='600' data-aos-once='true'
                        type="submit"
                        className="w-full bg-third dark:bg-secondary font-poetsen text-gray-800 py-2 px-4 rounded-lg hover:bg-opacity-80 duration-300"
                      >
                        Pesan
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default OrderPage