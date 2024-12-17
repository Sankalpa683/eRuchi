import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react';


const navbar = () => {

  return (
    <nav className='border z-50 p-3 top-0 bg-white sticky'>
      <div className='flex flex-wrap justify-between mx-4 items-center'>
        <div className='cursor-pointer'>
          <Link href='/'>
            <Image src="/logo.png" width={135} height={60} alt='eruchi_icon'/>
          </Link>
        </div>
        <div className='hidden lg:flex md:flex gap-8 cursor-pointer'>
          <Link href='/shop' className='cursor-pointer'> <span className='uppercase'>Shop</span></Link>
          <Link href='/' className='cursor-pointer'> <span className='uppercase'>Blog</span></Link>
          <Link href='/' className='cursor-pointer'> <span className='uppercase'>Survey</span></Link>
          <Link href='/faqs' className='cursor-pointer'> <span>FAQs</span></Link>
        </div>
        <div className='hidden lg:flex cursor-pointer'>
          <Link href='/login'> <span className='uppercase'>Login</span></Link>
        </div>

        <div className='block lg:hidden cursor-pointer'>
          <Menu className='w-7 h-7 text-black' />
        </div>
      </div>
    </nav>
  )
}

export default navbar