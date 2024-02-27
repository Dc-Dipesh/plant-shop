import Headline from "@/components/Headline"
import { ICart, IPlants } from "@/types"
import Image from "next/image"
import { FC } from "react"

const Cart: FC = () => {
  return (
    <div className=''>
      <div className=' grid grid-cols-1 md:grid-cols-5 gap-10'>
        <div className='md:col-span-3 bg-white/80 text-black/70 shadow-lg ring-1 ring-black/5 rounded-xl p-3'>
          {/* Cart Page design */}
          <h1 className='font-bold text-2xl text-black '>Your Cart</h1>
          {cartPlants.map((plant, index) => (
            <div key={index} className='flex gap-5 p-3'>
              <div className='relative aspect-[4/3] w-80'>
                <Image
                  fill
                  src={plant.image}
                  alt={plant.alt}
                  className='object-contain rounded-xl'
                />
              </div>
              <div className='flex flex-col gap-2 justify-center'>
                <h1 className='text-xl font-bold text-black'>{plant.name}</h1>
                <p className='text-lg font-light text-black'>${plant.price}</p>
                {/* Quantity */}
                <div className='flex gap-2'>
                  <button className='bg-black/80 text-white px-3 rounded-lg'>
                    -
                  </button>
                  <span>{plant.quantity}</span>
                  <button className='bg-black/80 text-white px-3 rounded-lg'>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='md:col-span-2 bg-white/80 text-black/70 shadow-lg ring-1 ring-black/5 rounded-xl p-3 h-fit'>
          {/* Total */}
          <div className='flex flex-col gap-5 p-3'>
            <h1 className='text-xl font-bold text-black'>Total</h1>
            <div className='flex justify-between'>
              <h1 className='text-lg font-light text-black'>Subtotal</h1>
              <p className='text-lg font-light text-black'>$65</p>
            </div>
            <div className='flex justify-between'>
              <h1 className='text-lg font-light text-black'>Shipping</h1>
              <p className='text-lg font-light text-black'>$5</p>
            </div>
            <div className='flex justify-between'>
              <h1 className='text-lg font-light text-black'>Total</h1>
              <p className='text-lg font-light text-black'>$70</p>
            </div>
            <button className='bg-black/80 text-white p-3 rounded-lg'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart

const cartPlants: ICart[] = [
  {
    image: "/images/plant1.png",
    name: "Monstera",
    price: 20,
    quantity: 1,
    alt: "Monstera plant",
    slug: "monstera",
  },
  {
    image: "/images/plant2.png",
    name: "Fiddle Leaf Fig",
    price: 30,
    quantity: 2,
    alt: "Fiddle Leaf Fig plant",
    slug: "fiddle-leaf-fig",
  },
  {
    image: "/images/plant3.png",
    name: "Snake Plant",
    quantity: 1,
    price: 15,
    alt: "Snake plant",
    slug: "snake-plant",
  },
]
