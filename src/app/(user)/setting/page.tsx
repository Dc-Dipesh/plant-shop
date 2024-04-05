"use client"

import { Contact2, Mail, Smartphone } from "lucide-react"
import Image from "next/image"

const Page = () => {
  return (
    <div className='bg-white/80 text-black/90 shadow-lg ring-1 ring-black/5 rounded-xl p-3'>
      <h2 className='text-2xl font-bold  mb-5'>Profile </h2>
      {/* profile details name email address credit card info */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className=''>
          <div className='h-full flex flex-col bg-gray-100 shadow-xl '>
            <div className='bg-green-300 shadow-lg pb-3 rounded-b-3xl'>
              <div className='flex  rounded-b-3xl bg-gray-100 space-y-5 flex-col items-center py-7'>
                <div className='h-28 w-28 relative'>
                  <Image
                    className='rounded-full'
                    fill
                    src='/images/profile.jpg'
                    alt='user'
                    sizes='(min-width: 640px) 50vw, (min-width: 768px) 30vw, 25vw'
                  />
                </div>

                <span className='text-2xl'>Joo dee</span>
              </div>
              <div className='grid px-7 py-2  items-center justify-around grid-cols-3 gap-4 divide-x divide-solid '>
                <div className='col-span-1 flex flex-col items-center '>
                  <span className='text-2xl font-bold dark:text-gray-500'>
                    20
                  </span>
                  <span className='text-lg font-medium 0'>Total Orders</span>
                </div>
                <div className='col-span-1 px-3 flex flex-col items-center '>
                  <span className='text-2xl font-bold dark:text-gray-500'>
                    15
                  </span>
                  <span className='text-lg font-medium'>Pending Delivery</span>
                </div>
                <div className='col-span-1 px-3 flex flex-col items-center '>
                  <span className='text-2xl font-bold dark:text-gray-500'>
                    5
                  </span>
                  <span className='text-lg font-medium'>Rejected</span>
                </div>
              </div>
            </div>

            <div className='grid rounded-2xl divide-y divide-dashed hover:divide-solid  justify-evenly bg-gray-50 dark:bg-gray-300 m-3 mt-10 grid-cols-1 md:grid-cols-2'>
              <div className='  p-3'>
                <div className='flex flex-col items-center justify-center'>
                  <Smartphone size={48} />
                  <span className='text-lg font-medium'>9800000001</span>
                </div>
              </div>
              <div className=' p-3'>
                <div className='flex flex-col items-center '>
                  <Mail size={48} />
                  <span className='text-lg font-medium'>example@gmail.com</span>
                </div>
              </div>
              <div className='md:col-span-2  p-3'>
                <div className='flex flex-col items-center '>
                  <Contact2 size={48} />
                  <span className='text-lg font-medium'>
                    Kathmandu 11, Babarmahal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card relative h-[260px] max-w-[400px] flex flex-col justify-end px-6 py-10 text-black/80 rounded-3xl gap-8 bg-gradient-to-r from-red-200 to-red-500'>
          <p className='text-2xl  font-medium'>5430 4900 3232 9755</p>
          <div className='flex justify-between gap-10'>
            <p className='text-lg font-medium'>Joo dee</p>
            <div className='flex-1 flex flex-col justify-end'>
              <p className='self-end'>Valid Date</p>
              <p className='self-end'>2/14/2024</p>
            </div>
            <div className='self-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 58 36'
                height='36'
                width='58'>
                <circle
                  fill-opacity='0.62'
                  fill='#F9CCD1'
                  r='18'
                  cy='18'
                  cx='18'></circle>
                <circle
                  fill='#424242'
                  r='18'
                  cy='18'
                  cx='40'
                  opacity='0.36'></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Page
