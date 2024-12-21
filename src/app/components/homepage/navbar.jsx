"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="border z-50 p-3 top-0 bg-white sticky">
      <div className="flex justify-between items-center mx-4">
        {/* Logo */}
        <div className="cursor-pointer">
          <Link href="/">
            <Image src="/logo.png" width={135} height={60} alt="eruchi_icon" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8">
          <Link href="/shop">
            <span className="uppercase cursor-pointer">Shop</span>
          </Link>
          <Link href="/">
            <span className="uppercase cursor-pointer">Blog</span>
          </Link>
          <Link href="/">
            <span className="uppercase cursor-pointer">Survey</span>
          </Link>
          <Link href="/faqs">
            <span>FAQs</span>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link href="/login">
            <span className="uppercase cursor-pointer">Login</span>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="block lg:hidden cursor-pointer" onClick={toggleDrawer}>
          {isDrawerOpen ? <X className="w-7 h-7 text-black" /> : <Menu className="w-7 h-7 text-black" />}
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg z-50 p-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={toggleDrawer}>
              <X className="w-7 h-7 text-black" />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link href="/shop" onClick={toggleDrawer}>
              <span className="uppercase cursor-pointer">Shop</span>
            </Link>
            <Link href="/" onClick={toggleDrawer}>
              <span className="uppercase cursor-pointer">Blog</span>
            </Link>
            <Link href="/" onClick={toggleDrawer}>
              <span className="uppercase cursor-pointer">Survey</span>
            </Link>
            <Link href="/faqs" onClick={toggleDrawer}>
              <span>FAQs</span>
            </Link>
            <Link href="/login" onClick={toggleDrawer}>
              <span className="uppercase cursor-pointer">Login</span>
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
