import React from 'react';
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="py-16 lg:py-32 px-6 bg-white text-black flex flex-col items-center justify-center">
      {/* 404 Header */}
      <div className="text-center">
        <h1 className="text-[120px] font-bold text-[#3299fe] leading-none">
          404
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-lg text-gray-500 mt-2">
          It seems you've hit a broken link or entered a wrong URL.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex items-center gap-1 mt-8">
        <Link href='/'>
          <button className="bg-[#3299fe] text-white text-lg rounded-full px-8 py-3 shadow-md hover:bg-[#2678c9] transition">
            Go to Homepage
          </button>
        </Link>
        <button className="bg-black text-white p-3 rounded-full hover:scale-105 transition">
          <ArrowUpRight className="w-6 h-6" />
        </button>
      </div>

    </section>
  );
};

export default NotFound;
