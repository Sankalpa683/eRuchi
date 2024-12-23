"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Schema for login form validation
const loginSchema = z.object({
  username: z
    .string()
    .min(1, "Username or Email is required")
    .max(50, "Username or Email must be less than 50 characters"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be less than 50 characters"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Handle form submission (e.g., API call)
  };

  return (
    <>
      <section className="py-20 bg-white text-black">
        <div className="flex justify-center items-center">
          <div className="flex w-full rounded-lg lg:w-fit mx-5 space-y-8 flex-wrap flex-col">
            <h1 className="text-[28px] lg:text-5xl font-thin">
              Welcome Back!
              <br />
              Please sign in to continue
            </h1>
            <form
              className="grid grid-cols-1 space-y-7"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-1 space-y-5">
                {/* Username/Email input */}
                <div>
                  <input
                    type="text"
                    placeholder="Username/Email Address"
                    {...register("username")}
                    className={`w-full text-lg outline-none p-4 border-b ${
                      errors.username ? "border-red-500" : ""
                    }`}
                  />
                  {errors.username && (
                    <p className="text-sm text-red-500">
                      {errors.username.message}
                    </p>
                  )}
                </div>
                {/* Password input */}
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    className={`w-full outline-none text-lg p-4 border-b ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Links */}
              <div className="w-full flex justify-between text-gray-500 flex-wrap">
                <Link href="/" className="text-gray-600 underline">
                  Forgot password?
                </Link>
                <Link href="/signup" className="text-gray-600 underline">
                  Don&apos;t have an account?
                </Link>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="w-full mt-4 p-3 bg-black text-white rounded-2xl"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
