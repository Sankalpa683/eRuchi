'use client'

import { Trash2 } from 'lucide-react'
import Image from 'next/image'

export default function Cart() {
  return (
    <div className=" bg-white text-black">
      <main className="mx-auto max-w-[1400px] px-4 py-12 lg:py-16">
        <div className="mb-12">
          <h1 className="mb-2 text-[2.75rem] font-thin tracking-tight lg:text-5xl">Your Cart</h1>
          <p className="text-lg text-gray-600 lg:text-xl">View your items below</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <div className="space-y-6 divide-y divide-gray-200">
              {/* Cart Item 1 */}
              <div className="flex flex-col gap-6 pt-6 sm:flex-row">
                <div className="h-[200px] w-[200px] flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src="https://m.media-amazon.com/images/I/81JikRw3uLL.jpg"
                    alt="Teenage Engineering - Audio Mixer 2023"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-thin">Teenage Engineering - Audio Mixer 2023</h2>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <p className="text-lg font-thin">$1200.00</p>
                    <button className="group p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Trash2 className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Cart Item 2 */}
              <div className="flex flex-col gap-6 pt-6 sm:flex-row">
                <div className="h-[200px] w-[200px] flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src="https://m.media-amazon.com/images/I/81JikRw3uLL.jpg"
                    alt="Teenage Engineering - Audio Mixer 2023"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-thin">Teenage Engineering - Audio Mixer 2023</h2>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <p className="text-lg font-thin">$1200.00</p>
                    <button className="group p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Trash2 className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-thin">$1200.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-thin">$1200.00</p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <p className="text-lg font-thin">Total</p>
                    <p className="text-lg font-thin">$2400.00</p>
                  </div>
                </div>
                
                <div className="space-y-3 pt-4">
                  <div className="relative">
                    <div className="flex items-center rounded-lg border border-gray-200 px-4 py-3">
                      <span className="text-gray-600">Credit/Debit Card</span>
                      <div className="ml-auto flex gap-1">
                        <div className="h-4 w-8 rounded bg-gray-200" />
                        <div className="h-4 w-8 rounded bg-gray-200" />
                        <div className="h-4 w-8 rounded bg-gray-200" />
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full rounded-lg bg-black py-3 text-white transition-opacity hover:opacity-90">
                    Check out
                  </button>
                  <button className="w-full rounded-lg border border-gray-200 py-3 text-gray-600 transition-colors hover:bg-gray-50">
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

