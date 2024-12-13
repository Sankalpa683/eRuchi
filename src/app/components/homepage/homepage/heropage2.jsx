import React from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const heropage2 = () => {
    return (
        <>
            {/* py-16  */}
            <section className='py-20 px-6'>
                <div className='flex flex-wrap lg:flex-nowrap space-y-12 justify-between items-center'>
                    <div className='flex flex-wrap flex-col space-y-6'>
                        <div className="flex flex-wrap items-center gap-1">
                            <button className="bg-[#3299fe] text-white text-2xl rounded-full px-14 py-3 shadow-md hover:bg-[#2678c9] transition">
                                Survey
                            </button>
                            <button className="text-white bg-black p-3 rounded-full hover:scale-105 transition">
                                <ArrowUpRight className="w-6 h-6" />
                            </button>
                        </div>
                        <div className='flex gap-4 flex-wrap items-center'>
                            <h1 className='text-2xl lg:text-4xl'>Survey</h1>
                            <ArrowRight className="w-6 h-6" />
                            <h1 className='text-2xl lg:text-4xl'>Waiting</h1>
                            <ArrowRight className="w-6 h-6" />
                            <h1 className='text-2xl lg:text-4xl'>Free Rewards</h1>
                        </div>
                        <div>
                            <p className='text-gray-600'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, reiciendis ut natus optio nihil eligendi officia veniam dicta harum perspiciatis perferendis accusantium numquam

                            </p>
                        </div>
                    </div>
                    <div className=' flex space-y-4 flex-col justify-end items-end flex-wrap'>
                        <h1 className='text-4xl lg:text-5xl font-medium text-end capitalize'>
                            How does eruchi work & what we do
                        </h1>
                        <button className='px-20 py-[10px]  text-white rounded-full bg-black'>FAQs</button>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-16">
                    <div className="bg-[#0A2558] flex flex-col items-start justify-end text-white p-8 rounded-3xl space-y-4">
                        <p className="text-sm">Step 1</p>
                        <h2 className="text-2xl md:text-3xl">
                            Tell us<br />about yourself
                        </h2>
                    </div>

                    <div className="bg-[#0A2558] flex flex-col items-start justify-end text-white p-8 rounded-3xl space-y-4">
                        <p className="text-sm">Step 2</p>
                        <h2 className="text-2xl md:text-3xl ">
                            Sit back<br />and Relax
                        </h2>
                    </div>

                    <div className="bg-[#05132D] text-white p-8 rounded-3xl space-y-4">
                        <h2 className="text-2xl text-end w-full md:text-3xl ">
                            We send you<br />something you<br />love
                        </h2>
                        <div className='flex flex-col space-y-4'>
                            <p className="text-sm">Step 3</p>
                            <p className="text-xl">Free of cost</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default heropage2