import React from 'react'
import { Send } from 'lucide-react'

const heropage3 = () => {
    return (
        <>
            <section className='py-24 px-6'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                    <div className='flex flex-col space-y-5'>
                        <h1 className='text-4xl lg:text-6xl tracking-wide'>
                            Interested in including your products to our
                            website?
                        </h1>
                        <p className='text-lg text-gray-600'>
                            Include your product to allows thousands of our
                            users to product to allows thousands of our
                            users to
                        </p>

                        <div className='flex flex-col space-y-6'>
                            <h1 className='text-blue-400 text-4xl'>Contact Us</h1>
                            <div className='flex items-center justify-between gap-1 sm:flex-row'>
                                <input type='email' className="py-2.5 px-5 w-full md:max-w-md border border-gray-300 shadow-sm rounded-full text-lg focus:outline-none" placeholder={`Your Email Address`} />
                                <button className="p-3 sm:p-4 text-white shadow-sm rounded-full bg-indigo-600 font-semibold"><Send /></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className="bg-blue-700 col-span-1 lg:col-span-2 text-white p-8 rounded-3xl space-y-4">
                            <h2 className="text-2xl text-end w-full md:text-3xl ">
                                We send you<br />something you<br />love
                            </h2>
                            <div className='flex flex-col space-y-4'>
                                <p className="text-sm">Step 3</p>
                                <p className="text-xl">Free of cost</p>
                            </div>
                        </div>
                        {/* [#05132D] */}
                        <div className='grid w-full gap-5 items-center'>
                            <div className='bg-gray-800 w-full h-full text-white p-8 rounded-3xl space-y-4'>

                                <h2 className="text-2xl text-end w-full md:text-3xl ">
                                    We have<br /> almost a total of
                                </h2>
                                <div className='flex flex-col items-start justify-end space-y-1'>
                                    <p className="text-sm">Monthly Users</p>
                                    <p className="text-3xl lg:text-5xl">1000+ </p>
                                </div>
                            </div>
                        </div>
                        <div className='grid w-full gap-5 items-center'>
                            <div className='bg-[#05132D] p-8 w-full h-[160px] lg:h-full object-cover bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg)] text-white p-8 rounded-3xl space-y-4'>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default heropage3