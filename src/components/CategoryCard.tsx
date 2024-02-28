import { IPlants } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const CategoryCard: FC<IPlants> = ({ alt, image, name, slug }) => {
  return (
    <>
      {/* category card with overlay */}
      <div className='relative aspect-[4/3]'>
        <Link href={`/shop?category=${slug}`}>
          <Image
            fill
            src={image}
            alt={alt}
            className='object-fill rounded-xl'
            sizes='(min-width: 640px) 100vw, (min-width: 768px) 50vw, 25vw'
          />
        </Link>
        <div className='absolute inset-0 bg-black bg-opacity-40 rounded-xl' />

        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <Link href={`/shop?category=${slug}`}>
            <h1 className='text-2xl font-bold text-white'>{name}</h1>
          </Link>
        </div>
      </div>
    </>
  )
}
export default CategoryCard
