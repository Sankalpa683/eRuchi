import React from 'react'
import { ShoppingBag, Search } from 'lucide-react';


const shop = () => {
  const images = [
    {
      id: 1,
      title: "Gentle Monsters",
      price: "$1299",
      src: "https://cdn.prod.website-files.com/65202616cfa1bf1882f3db51/6760dda45aaf126d3a9e91a7_6760dda397ca095caf9be686_lastImage.png",
      span: false
    },
    {
      id: 2,
      title: "Digital Age",
      price: "$1299",
      src: "https://cdn.ktar.com/ktar/wp-content/uploads/2024/02/pexels-tyler-lastovich-699122-2.jpg",
      span: false
    },
    {
      id: 3,
      title: "Yugoslavian Monuments",
      price: "$1299",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg",
      span: true
    },
    {
      id: 4,
      title: "Patagonia",
      price: "$999",
      src: "https://i.ytimg.com/vi/pSb8TO7REN4/hq720.jpg",
      span: false
    },
    {
      id: 5,
      title: "Future Vision",
      price: "$1299",
      src: "https://static.vecteezy.com/system/resources/previews/027/152/735/large_2x/connection-male-human-and-artificial-intelligence-robot-the-concept-of-merging-a-person-and-a-computer-with-neural-networks-in-the-future-ai-generated-free-photo.jpg",
      span: false
    }
  ]
  return (
    <>
      <section className='py-10 lg:py-20 px-4 bg-white text-black max-w-[1400px] mx-auto w-full' id='shop'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center space-y-9 sm:space-y-9 lg:space-y-0'>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 break-all">
              <button className="bg-[#3299fe] text-white rounded-full px-6 py-3 shadow-md hover:bg-[#2678c9] transition">
                Shop
              </button>
              <span className="text-[35px] lg:text-[40px] tracking-tight lg:block text-black md:text-[58px]">
                Our Collection
              </span>
            </div>
            <h1 className="text-[20px] text-gray-700 tracking-tight -mt-1 w-full break-all block md:text-[25px]  leading-tight">
              Explore our collections of various good <br />
              curated to your taste something something
            </h1>
          </div>
          <div className='flex flex-col space-y-2'>
            <div className='flex items-center gap-1 relative'>
              <button className='text-white bg-black p-3 rounded-full hover:scale-105 transition'>
                <ShoppingBag className="w-6 h-6" />
              </button>
              <input
                type="text"
                className="py-2 pr-10 pl-5 w-full border border-gray-800 shadow-sm rounded-full text-lg focus:outline-none"
                placeholder="Search text"
              />
              <Search
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-1 rounded-full bg-blue-500"
                size={30}
              />
            </div>
            <div className='w-full flex justify-end items-center'>
              <input type='email' className="py-2 px-5 w-full lg:w-[630px] bg-gray-800 text-white shadow-sm rounded-full text-lg focus:outline-none" disabled value='Filter' />

            </div>
          </div>
        </div>
        <br />
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[400px]">
            {images.map((image) => (
              <div
                key={image.id}
                className={`relative overflow-hidden rounded-3xl transition-transform hover:scale-[0.98] ${image.span ? 'md:col-span-2' : ''
                  }`}
              >
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img
                  src={image.src}
                  alt={image.title}
                  className="object-cover w-full h-full"
                  sizes={image.span ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/50 to-transparent">
                  <h2 className="text-white text-2xl font-bold mb-2">{image.title}</h2>
                  <p className="text-white text-xl">{image.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className='grid lg:px-2 pt-10 grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div>
            <hr />
            <br />
            <p className='text-[20px] lg:text-[26px] text-gray-600 font-thin break-all'>
              Please feel free to provide your critic or issues you face.<br />
              We at Eruchi are always eager to recieve your feedback.
            </p>
          </div>
          <div className='flex flex-col space-y-3'>
            <h1 className='text-3xl'>
              Provide Feedback
            </h1>
            <textarea placeholder='Text Here' className='outline-none border rounded-xl px-3 py-5'/>
            <div className='flex gap-1 items-center'>
              <button className='text-white bg-black p-3 rounded-full hover:scale-105 transition'>
                <ShoppingBag className="w-6 h-6" />
              </button>
              <button className='p-3 text-xl text-white bg-[#2b91f6] rounded-full w-full'>
                Give Feedback
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default shop