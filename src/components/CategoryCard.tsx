import { IPlants } from "@/types"
import Image from "next/image"
import { FC } from "react"

const CategoryCard: FC<IPlants> = ({ alt, image, name, price }) => {
  return (
    <>
      {/* category card with overlay */}
      <div className='relative aspect-[4/3]'>
        <Image
          fill
          src={image}
          alt={alt}
          className='object-fill rounded-xl'
          sizes='(min-width: 640px) 100vw, (min-width: 768px) 50vw, 25vw'
        />
        <div className='absolute inset-0 bg-black bg-opacity-40 rounded-xl' />
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <h1 className='text-2xl font-bold text-white'>{name}</h1>
        </div>
      </div>
    </>
  )
}
export default CategoryCard
