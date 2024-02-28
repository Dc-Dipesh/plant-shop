"use client"

import PlantCard from "@/components/PlantCard"

import { Filter, Plus } from "lucide-react"

import { FC } from "react"
import AllPlants from "@/data.json"
import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { useCart } from "@/components/CartContext"
// Import Swiper styles
import "swiper/css"
import toast, { Toaster } from "react-hot-toast"
const Page: FC = () => {
  const { addItem } = useCart()
  return (
    <>
      <div className='bg-white/80 text-black/70 shadow-lg ring-1 ring-black/5 h-full mb-52 rounded-xl p-3 '>
        <div className='flex justify-between items-center'>
          <div className='rounded-full bg-white w-fit h-fit p-2 '>
            <Filter size={20} />
          </div>
          <div className='text-black  w-[250px]'>
            <div className='  bg-transparent mt-3 mb-3 rounded-full mx-auto '>
              <div className='relative rounded-md'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='w-4 h-4'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                    />
                  </svg>
                </div>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-transparent block w-full rounded-full border-0 ring-1 py-1.5 pl-10 text-black placeholder:text-black/50  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Search'
                />
              </div>
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className='mySwiper h-[calc(100%+100px)]'>
          {AllPlants?.map((plant, index) => (
            <SwiperSlide key={index}>
              <div className=''>
                <PlantCard key={index} {...plant} />
                <div className='w-full z-10 addtocart'>
                  <div className='mt-5 w-full flex justify-center'>
                    <div className='flex flex-row bg-white/50 text-black/70 shadow-lg ring-1 ring-black/5 p-5 rounded-full w-fit gap-5'>
                      <div className=' flex-col'>
                        <h1 className='font-medium text-black text-md flex  '>
                          {plant.name}
                        </h1>
                        <p className='text-md md:text-2xl text-black'>
                          ${plant.price}
                        </p>
                      </div>
                      <button
                        className='bg-white text-black p-2 px-4 rounded-full flex gap-1 justify-center items-center '
                        onClick={() => {
                          addItem(plant)
                          toast.success("item added to cart.")
                        }}>
                        <Plus /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className='flex justify-center mt-5'>
        <Pagination TotalPage={TotalPage} />
      </div> */}
      <Toaster />
    </>
  )
}
export default Page
