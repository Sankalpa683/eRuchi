import React from 'react'
import { ArrowUpRight } from "lucide-react";

const hero1 = () => {
  return (
    <>
      <section className="py-16 px-6 bg-white text-black" id='hero_section'>
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <button className="bg-[#3299fe]  text-white rounded-full px-6 py-3 shadow-md hover:bg-[#2678c9] transition">
                At Eruchi
              </button>
              <span className="text-[40px] tracking-tight  hidden lg:block text-black md:text-[58px]">
                Fueled by what
              </span>
            </div>
            <h1 className="text-[40px] tracking-tight  -mt-1 w-full break-all block lg:hidden text-black md:text-[58px] font-thin leading-tight">
              Fueled by what moves you, driven to make a difference.
            </h1>
            <h1 className="text-[40px] tracking-tight  hidden lg:block text-black md:text-[58px] -mt-7 font-thin leading-tight">
              moves you, driven to <br /> make a difference.
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.
            </p>
            <div className="flex items-center gap-2">
              <button className="bg-[#3299fe] text-2xl text-white rounded-full px-8 py-3 shadow-md hover:bg-[#2678c9] transition">
                Take Survey
              </button>
              <button className="text-white bg-black p-3 rounded-full hover:scale-105 transition">
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <img
              src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg?semt=ais_hybrid"
              alt="Wide angle shot of a tree"
              className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg shadow-md hover:scale-105 transition"
            />
            <img
              src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
              alt="Bird close-up"
              className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg shadow-md hover:scale-105 transition"
            />
          </div>

          {/* Column 2 */}
          <img
            src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
            alt="The Craggies"
            className="col-span-1 sm:col-span-2 md:col-span-2 w-full h-[300px] sm:h-[460px] object-cover rounded-lg shadow-md hover:scale-105 transition"
          />

          {/* Column 3 */}
          <img
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80"
            alt="Spring Forest"
            className="w-full h-[300px] sm:h-[460px] object-cover rounded-lg shadow-md hover:scale-105 transition"
          />
        </div>
      </section>

    </>
  )
}

export default hero1