import React from 'react'

const login = () => {
  return (
    <>
      <section className='py-20 bg-white text-black '>
        <div className='flex justify-center lg:justify-between items-center'>
          <div className='hidden lg:block'>

          </div>
          <div className='flex w-full rounded-lg lg:w-fit mx-5 space-y-8 flex-wrap flex-col'>
            <h1 className='text-[28px] lg:text-5xl font-thin'>
              Welcome Back!<br />
              Please sign in to continue
            </h1>
            <br />
            <div className='grid grid-cols-1 space-y-5'>
              <input type='text' placeholder='Username/Email Address' className='w-full text-lg outline-none p-4 border-b' />
              <input type='password' placeholder='Password' className='w-full outline-none text-lg p-4 border-b' />
            </div>
            <div className='w-full flex justify-between text-gray-500 flex-wrap'>
              <a className='text-gray-600 underline'>
                forgot password?
              </a>
              <a className='text-gray-600 underline'>
                Don't have an account?
              </a>
            </div>
            <button className='w-full mt-4 p-3 bg-black text-white rounded-2xl'>
              Login
            </button>
          </div>
          <div className='hidden lg:block'>
            {/* <img src='/svg/leftsideball.svg' className=''/> */}

          </div>
        </div>
      </section>
    </>
  )
}

export default login