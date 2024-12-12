import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react';


const navbar = () => {
  
  return (
    <nav className='border p-3 top-0 bg-white sticky'>
      <div className='flex flex-wrap justify-between mx-4 items-center'>
        <div>
          <Image src="/logo.png" width={135} height={60} alt='eruchi_icon'/>
        </div>
        <div className='hidden lg:flex md:flex gap-8'>
          <Link href='/'> <span className='uppercase'>Shop</span></Link>
          <Link href='/'> <span className='uppercase'>Blog</span></Link>
          <Link href='/'> <span className='uppercase'>Survey</span></Link>
          <Link href='/'> <span>FAQs</span></Link>
        </div>
        <div className='hidden lg:flex'>
          <Link href='/'> <span className='uppercase'>Login</span></Link>
        </div>

        <div className='block lg:hidden cursor-pointer'>
          <Menu className='w-7 h-7 text-black'/>
        </div>
      </div>
    </nav>
  )
}

export default navbar