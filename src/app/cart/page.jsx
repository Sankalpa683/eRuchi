import React from 'react'
import { Trash2 } from 'lucide-react'

const cart = () => {
  return (
    <>
      <section className='py-12 lg:py-20 bg-white text-black max-w-[1400px] w-full mx-auto'>
        <div className='px-4'>
          <div className='flex flex-col space-y-4'>
            <div className='flex flex-col space-y-3'>
              <h1 className='text-3xl lg:text-5xl'>Your Cart</h1>
              <p className='text-lg lg:text-xl text-gray-700'>View your item's below</p><br />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
              <div className='col-span-2 relative space-x-4 space-y-4 lg:space-y-0 border-t border-b flex max-w-[850px] py-12 flex-wrap lg:flex-nowrap'>
                <img src='https://m.media-amazon.com/images/I/81JikRw3uLL.jpg' className='w-[200px]' />
                <div className='flex flex-col space-y-5'>
                  <h1 className='text-2xl'>Teenage Engineering - Audio Mixer 2023</h1>
                  <p className='break-all text-md text-gray-600 w-fit lg:w-3/4'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, impedit quis ullam amet facere omnis quo ab dolor obcaecati neque velit ipsum itaque, aperiam excepturi id adipisci. Quisquam, explicabo ratione!
                  </p>
                </div>
                <div className='pt-2 lg:pt-0 grow flex flex-row justify-end lg:flex-col gap-4 lg:gap-1 items-center lg:items-end'>
                  <span className='text-lg'>$1200.00</span>
                  <Trash2 className='w-6 h-6'/>
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>
          <div>
            <div>

            </div>
            <div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default cart