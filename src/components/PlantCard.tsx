import { IPlants } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const PlantCard: FC<IPlants> = ({ image, name, price, alt, slug }) => {
  return (
    <div>
      <div className='relative aspect-[4/3]'>
        <Link href={`/shop/${slug}`}>
          <Image
            src={image}
            fill
            sizes='(min-width: 640px) 100vw, (min-width: 768px) 50vw, 25vw'
            alt={alt}
            className='object-contain rounded-xl'
          />
        </Link>
      </div>
      <div className='flex flex-col gap-2 p-3 items-center'>
        <Link href={`/shop/${slug}`} className='text-xl font-bold text-black'>
          {name}
        </Link>
        <p className='text-lg font-light text-black'>${price}</p>
      </div>
    </div>
  )
}
export default PlantCard
