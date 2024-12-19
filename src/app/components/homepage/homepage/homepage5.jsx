import React from 'react'

const homepage5 = () => {
  return (
    <>

    <section className='w-full py-16 px-6 bg-white text-black'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0'>
        {/* left side  */}
        <div className='flex flex-col justify-center space-y-5'>
          <h1 className='text-3xl lg:text-5xl'>
            About Us
          </h1>
          <h3 className='text-2xl text-gray-600'>
            Get to know out team
          </h3>
          <p className='text-lg break-all text-gray-800'>
            Lorem, ipsum dolor sit amet consectetur adipisicing
             elit. Sapiente quae quaerat ab ducimus quisquam 
             eligendi, aliquam placeat expedita ipsa excepturi 
             hic tenetur tempore corporis possimus, quo 
             molestiae cum amet ex.
          </p>
          <button className='p-3 rounded-full bg-black text-white w-full'>
            Check out our blog
          </button>
        </div>
        {/* right side  */}
        <div className=' justify-items-end'>
          
          <img className='rounded-xl w-[500px]' src='https://www.shutterstock.com/image-photo/we-great-team-group-three-260nw-1478368508.jpg' />

        </div>
      </div>
    </section>
    </>
  )
}

export default homepage5