import React from 'react'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

const homepage4 = () => {
  return (
    <>
      <section className="w-full py-12 bg-white text-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Side: Text Content */}
            <div className="space-y-6 lg:w-1/2">
              <h1 className="text-4xl md:text-6xl leading-tight">
                Shop our Collection
              </h1>
              {/* <p className="text-gray-600 text-lg">
                Explore our collections of various goods curated to your taste something something.
              </p> */}
              <button className="py-2 px-10 text-white bg-blue-500 rounded-full text-lg font-medium">
                Go to shop
              </button>
            </div>

            {/* Right Side: Image + Cart Info */}
            <div className="flex flex-col items-center relative">
              helloworld
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default homepage4