"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const signupSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  middleName: z.string().min(1, "Middle Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Handle form submission (e.g., API call)
  };

  return (
    <>
      <section className="px-6 py-12 lg:py-20 mx-auto max-w-[1400px] w-full bg-white text-black">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex flex-col">
              <h1 className="text-3xl lg:text-5xl">
                Hey There!<br />
                What's your name? <span className="text-4xl text-[#12ff01]">*</span>
              </h1>
              <br />
              <p className="text-lg text-gray-700">
                (<span className="text-lg text-[#12ff01]">*</span> means the question is mandatory)
              </p>
            </div>
            <div className="pt-16">
              <h2 className="text-2xl">
                Full name <span className="text-2xl text-[#12ff01]">*</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-8">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register('firstName')}
                    className={`w-full text-lg outline-none py-4 border-b ${
                      errors.firstName ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Middle Name"
                    {...register('middleName')}
                    className={`w-full text-lg outline-none py-4 border-b ${
                      errors.middleName ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.middleName && (
                    <p className="text-sm text-red-500">{errors.middleName.message}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register('lastName')}
                    className={`w-full text-lg outline-none py-4 border-b ${
                      errors.lastName ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
            </div>
            <br />
            <div>
              <button
                type="submit"
                className="mt-4 py-3 text-xl px-20 bg-[#3399fe] text-white rounded-full"
              >
                Proceed
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;
