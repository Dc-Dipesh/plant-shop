import Headline from "@/components/Headline"
import { Pagination } from "@/components/Pagination"
import PlantCard from "@/components/PlantCard"
import { IPlants } from "@/types"
import { Filter } from "lucide-react"
import { ParsedUrlQuery } from "querystring"
import { FC } from "react"
import AllPlants from "@/data.json"
interface IProps {
  searchParams: ParsedUrlQuery
}
const page: FC<IProps> = ({ searchParams }) => {
  const limit = 8
  const page: number = parseInt(searchParams.page as string) || 1
  const TotalPage = Math.ceil(AllPlants.length / 8)

  return (
    <>
      <div className='bg-white/80 text-black/70 shadow-lg ring-1 ring-black/5 h-full w-full rounded-xl p-3'>
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

        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {AllPlants.slice((page - 1) * limit, limit * page)?.map(
            (plant, index) => (
              <PlantCard key={index} {...plant} />
            )
          )}
        </div>
      </div>
      <div className='flex justify-center mt-5'>
        <Pagination TotalPage={TotalPage} />
      </div>
    </>
  )
}
export default page
