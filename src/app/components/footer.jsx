import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
const footer = () => {
    return (
        <>
            <footer className="bg-white text-[#0a1929] py-12 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="bg-white text-black py-12 ">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {/* Logo and App Store Links */}
                            <div className="col-span-2 md:col-span-4 lg:col-span-4 xl:col-span-5 flex flex-col items-start justify-center">
                                <div className="mb-4">
                                    <img
                                        src="http://localhost:3000/_next/image?url=%2Flogo.png&w=256&q=75"
                                        alt="HamroCommerce Logo"
                                        className="w-[200px]"
                                    />
                                </div>
                                <p className="mb-4 text-lg text-gray-800">
                                Your one-stop survey platform for all insights. Explore a variety of feedback tools, gain actionable insights, and experience the best of consumer engagement in Nepal.
                                
                                </p>
                                <div className="flex gap-4">
                                    <img
                                        src="https://www.ubereats.com/_static/783bb4a82e5be29e.svg"
                                        alt="Google Play Store"
                                        className="w-[134px] h-[40px]"
                                    />
                                    <img
                                        src="https://www.ubereats.com/_static/163bdc9b0f1e7c9e.png"
                                        alt="Apple App Store"
                                        className="w-[134px] h-[40px]"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* About Section */}
                    <div className=" border-t border-gray-700 pt-8">
                        <h2 className="text-xl mb-4">eRuchi - Nepal's Largest Product Survey Brand</h2>
                        <p className="text-sm mb-8">
                            eRuchi is Nepal’s largest product survey brand, designed to bridge the gap between customers and companies nationwide. Established in 2018, we started as a platform for honest feedback, helping businesses improve their products and services. Our mission is to empower consumers by giving them a voice while enabling brands to make data-driven decisions. Over the years, we’ve introduced features like real-time survey analytics, reward systems, and customized feedback tools, making consumer engagement more impactful and accessible for all. </p>
                        {/* Footer Bottom */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-2">
                                <img src="/icon.png" alt="eRuchi Logo" className="h-8 w-8" />
                                <span className="text-sm">
                                    © eRuchi 2024, All Rights Reserved | <a href="#" className="">Privacy</a> | <a href="#" className="">Terms of Service</a>
                                </span>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex gap-4">
                                <a href="#" className=" p-2 rounded-full  transition-colors">
                                    <Facebook className="h-5 w-5" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a href="#" className=" p-2 rounded-full  transition-colors">
                                    <Twitter className="h-5 w-5" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                                <a href="#" className=" p-2 rounded-full  transition-colors">
                                    <Instagram className="h-5 w-5" />
                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a href="#" className=" p-2 rounded-full  transition-colors">
                                    <Youtube className="h-5 w-5" />
                                    <span className="sr-only">YouTube</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default footer