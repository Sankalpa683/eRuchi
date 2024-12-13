import React from 'react'
import Image from 'next/image'
import { ShoppingCart, ShoppingBag } from 'lucide-react'


const homepage4 = () => {
  return (
    <>
      <section className="w-full py-16 bg-white text-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-8 flex-wrap lg:flex-row items-start lg:items-center justify-between">
            {/* Left Side: Text Content */}
            <div className="space-y-2 lg:space-y-6 w-full lg:w-1/2">
              <h1 className="text-3xl lg:text-5xl md:text-4xl leading-tight">
                Shop our Collection
              </h1>
              {/* <p className="text-gray-600 text-lg">
                Explore our collections of various goods curated to your taste something something.
              </p> */}
              <button className="py-2 px-10 text-white bg-blue-400 rounded-full text-lg font-medium">
                Go to shop
              </button>
            </div>

            {/* Right Side: Image + Cart Info */}
            <div className="flex flex-col flex-1 items-center relative">
              <div className='flex gap-1 items-center w-full'>
                <ShoppingBag className='w-10 h-10 p-2 bg-black text-white rounded-3xl'/>
                <input type='text' className='p-2 px-4 outline-none border border-black w-full rounded-full' placeholder='Your Cart'/>
              </div>
              <div className='mt-6'>
                <p className='text-gray-600 text-xl lg:text-2xl text-start lg:text-end font-thin'>
                  Explore our collections of various goods curated 
                  to your taste something something 
                </p>
              </div>
            </div>
          </div>
          <br />
          <div>
            <img className='lg:mt-5 rounded-3xl w-full h-full lg:h-[400px] object-cover' src='https://thinborne.com/cdn/shop/articles/iphone-16-action-button_ebf7ff9b-8e98-43ba-97f9-8eb3a5cd1c85_1200x.jpg?v=1725465942' />
          </div>
        </div>
      </section>
    </>
  )
}

export default homepage4