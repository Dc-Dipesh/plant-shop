"use client"

import Image from "next/image"
import { FC } from "react"
import { useCart } from "@/components/CartContext"
import toast, { Toaster } from "react-hot-toast"
const Cart: FC = () => {
  const { items, getTotalPrice, removeItem, incrementItem, decrementItem } =
    useCart()
  return (
    <div className=''>
      <div className=' grid grid-cols-1 md:grid-cols-5 gap-10'>
        <div className='md:col-span-3 bg-white/80 text-black/70 shadow-lg ring-1 ring-black/5 rounded-xl p-3'>
          {/* Cart Page design */}
          <h1 className='font-bold text-2xl text-black '>Your Cart</h1>
          {items.map((plant, index) => (
            <div key={index} className='flex justify-between gap-10 p-3'>
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
                  <button
                    className='bg-black/80 text-white px-3 rounded-lg'
                    onClick={() => decrementItem(plant?.slug)}
                    disabled={plant.quantity == 1}>
                    -
                  </button>
                  <span>{plant.quantity}</span>
                  <button
                    className='bg-black/80 text-white px-3 rounded-lg'
                    onClick={() => incrementItem(plant?.slug)}>
                    +
                  </button>
                </div>
              </div>
              {/* remove button */}
              <div className='flex items-center justify-end '>
                <button
                  className='bg-black/80 text-white p-3 rounded-lg h-fit'
                  onClick={() => {
                    removeItem(plant.slug)
                    toast.success("item removed from cart.")
                  }}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className='flex justify-center items-center h-80'>
              <h1 className='text-xl font-bold text-black'>
                Your cart is empty
              </h1>
            </div>
          )}
        </div>
        <div className='md:col-span-2 bg-white/80 text-black/70 shadow-lg ring-1 ring-black/5 rounded-xl p-3 h-fit'>
          {/* Total */}
          <div className='flex flex-col gap-5 p-3'>
            <h1 className='text-xl font-bold text-black'>Total</h1>
            <div className='flex justify-between'>
              <h1 className='text-lg font-light text-black'>Subtotal</h1>
              <p className='text-lg font-light text-black'>
                ${getTotalPrice()}
              </p>
            </div>
            <div className='flex justify-between'>
              <h1 className='text-lg font-light text-black'>Shipping</h1>
              <p className='text-lg font-light text-black'>$5</p>
            </div>
            <div className='flex justify-between'>
              <h1 className='text-lg font-light text-black'>Total</h1>
              <p className='text-lg font-light text-black'>
                ${getTotalPrice() + 5}
              </p>
            </div>
            <button className='bg-black/80 text-white p-3 rounded-lg'>
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
export default Cart
