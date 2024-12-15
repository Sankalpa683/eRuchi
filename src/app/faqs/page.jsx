"use client"

import React, { useState } from 'react'

const faqs = [
    {
        id: 1,
        title: 'Company Launch',
        date: 'Nov 10, 2024',
        author: 'Shravak Siddi Tuladar',
        content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aperiam quam adipisci necessitatibus, mollitia, incidunt corrupti dolores modi accusamus suscipit libero? Nihil ex dignissimos voluptatem velit iure atque! Obcaecati, sed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error explicabo dignissimos nisi quisquam adipisci optio fugit, quo quam vero asperiores! Dignissimos harum architecto, eaque eveniet itaque ipsum tempora suscipit!
        `,
    },
    {
        id: 2,
        title: 'Advertising Campaign',
        date: 'Nov 10, 2024',
        author: 'Shravak Siddi Tuladar',
        content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aperiam quam adipisci necessitatibus, mollitia, incidunt corrupti dolores modi accusamus suscipit libero? Nihil ex dignissimos voluptatem velit iure atque! Obcaecati, sed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error explicabo dignissimos nisi quisquam adipisci optio fugit, quo quam vero asperiores! Dignissimos harum architecto, eaque eveniet itaque ipsum tempora suscipit!
        `,
    },
    {
        id: 3,
        title: 'Newar Culture',
        date: 'Nov 10, 2024',
        author: 'Shravak Siddi Tuladar',
        content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aperiam quam adipisci necessitatibus, mollitia, incidunt corrupti dolores modi accusamus suscipit libero? Nihil ex dignissimos voluptatem velit iure atque! Obcaecati, sed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error explicabo dignissimos nisi quisquam adipisci optio fugit, quo quam vero asperiores! Dignissimos harum architecto, eaque eveniet itaque ipsum tempora suscipit!
        `,
    },
    {
        id: 4,
        title: 'Company Launch',
        date: 'Nov 10, 2024',
        author: 'Shravak Siddi Tuladar',
        content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aperiam quam adipisci necessitatibus, mollitia, incidunt corrupti dolores modi accusamus suscipit libero? Nihil ex dignissimos voluptatem velit iure atque! Obcaecati, sed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error explicabo dignissimos nisi quisquam adipisci optio fugit, quo quam vero asperiores! Dignissimos harum architecto, eaque eveniet itaque ipsum tempora suscipit!
        `,
    },
    {
        id: 5,
        title: 'Advertising Campaign',
        date: 'Nov 10, 2024',
        author: 'Shravak Siddi Tuladar',
        content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aperiam quam adipisci necessitatibus, mollitia, incidunt corrupti dolores modi accusamus suscipit libero? Nihil ex dignissimos voluptatem velit iure atque! Obcaecati, sed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error explicabo dignissimos nisi quisquam adipisci optio fugit, quo quam vero asperiores! Dignissimos harum architecto, eaque eveniet itaque ipsum tempora suscipit!
        `,
    },
    {
        id: 6,
        title: 'Newar Culture',
        date: 'Nov 10, 2024',
        author: 'Shravak Siddi Tuladar',
        content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aperiam quam adipisci necessitatibus, mollitia, incidunt corrupti dolores modi accusamus suscipit libero? Nihil ex dignissimos voluptatem velit iure atque! Obcaecati, sed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error explicabo dignissimos nisi quisquam adipisci optio fugit, quo quam vero asperiores! Dignissimos harum architecto, eaque eveniet itaque ipsum tempora suscipit!
        `,
    },
];



const page = () => {
    // use state hook for real time getting the response 

    const [query, setQuery] = useState();

    const searchvalue = (e) => {

        setQuery(e.target.value);

        console.log(faqs)
    }

    

    return (
        <>
            <section className='py-16 bg-white text-black max-w-[1400px] mx-auto w-full'>
                <div className='mx-5 flex flex-col gap-16'>
                    <div className='flex flex-col space-y-7'>
                        <h1 className='text-3xl lg:text-5xl'>
                            Most Frequented Questions
                        </h1>
                        <p className='text-lg text-gray-600'>
                            Find answers to our most commonly asked questions below. Search for questions or contact
                            us for your queries smyh smth
                        </p>
                        <input type='text' onChange={searchvalue} placeholder='Search for Questions' className='w-full text-lg outline-none py-4 border-b' />
                    </div>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                        {faqs.map((item) =>
                            <>
                                <div key={item.id} className='p-4 flex flex-col space-y-3 rounded-xl border border-black'>
                                    <h2 className='text-4xl'>{item.title}</h2>
                                    <p className='text-sm'>{item.date}</p>
                                    <span className='text-xl'>{item.author}</span>

                                    <div className='my-5'>
                                        <p className='w-full break-all'>
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default page