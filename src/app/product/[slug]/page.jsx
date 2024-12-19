import React from 'react'
import { ShoppingBag } from 'lucide-react';


const product = ({ params }) => {
    return (
        <section className='w-full mx-auto max-w-[1400px] bg-white text-black py-12'>
            <div className='w-full max-w-6xl mx-auto px-4 flex justify-start items-start space-x-12 flex-wrap space-y-12 lg:space-y-0'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-fit'>
                    <div className='bg-[#05132D] col-span-2 w-full h-[360px] lg:w-[550px] lg:h-[400px]  object-cover bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg)] text-white p-8 rounded-3xl space-y-4'>

                    </div>
                    <div className='bg-[#05132D] hidden lg:block w-full h-full lg:h-[260px] object-cover bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_D1kqvG9zijEIjc1qNsJ99tPnWMPBawEqQ&s)] text-white p-8 rounded-3xl space-y-4'>

                    </div>
                    <div className='bg-[#05132D] hidden lg:block w-full h-full lg:h-[260px] object-cover bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg)] text-white p-8 rounded-3xl space-y-4'>

                    </div>
                </div>
                <div className='flex flex-col space-y-3'>
                    <div className='flex gap-1 items-center'>
                        <button className='py-2 px-12 bg-white text-black border border-black rounded-full'>
                            View Cart
                        </button>
                        <ShoppingBag className='w-10 h-10 p-2 text-white bg-[#258bef] rounded-full' />
                    </div>
                    <div className='py-2'>
                        <p className='text-lg text-gray-700'>
                            eRuchi Company
                        </p>
                        <h1 className='text-4xl lg:text-5xl'>
                            Product Name
                        </h1>
                        <br />
                        <span className='text-2xl'>
                            $1,200
                        </span>
                    </div>
                    <div className='flex flex-col space-y-5 lg:w-full'>
                        <p className='text-lg break-all w-full'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.?<br />
                            vel aliquid quae corrupti sit quasi nobis aspernatur officia <br /> dolorem impedit itaque! Illum dolorum quam asperiores <br />dolorem, earum amet dolores optio quidem!
                        </p>
                        <div className='w-full pt-2 flex justify-between'>
                            <p className='text-lg'>
                                Size
                            </p>
                            <ul className='flex space-x-5'>
                                <p>
                                    XS
                                </p>
                                <p>
                                    S
                                </p>
                                <p>
                                    M
                                </p>
                                <p>
                                    L
                                </p>
                                <p>
                                    XL
                                </p>
                            </ul>
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <p> Color: TEXT</p>
                            <div className='flex space-x-2'>
                                <div className='p-4 bg-black'>

                                </div>
                                <div className='p-4 bg-red-500'>

                                </div>
                                <div className='p-4 bg-blue-500'>

                                </div>
                            </div>
                        </div><br />
                        <button className='w-full py-3 rounded-full bg-[#258bf0] text-white uppercase hover:bg-blue-600 transition-all'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default product