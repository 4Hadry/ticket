"use client";
import Image from "next/image";
import { Button } from "antd";

export default function Hero() {
    return (
        <div
            className="flex flex-col justify-center items-center sm:items-start px-4 sm:px-12 lg:px-56 w-full min-h-[80vh] sm:min-h-screen bg-cover bg-center text-center sm:text-left"
            style={{
                backgroundImage:
                    "url('https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,anim=false,background=white,quality=75,width=1080/discovery/bangkok-desktop.jpg')",
            }}
        >


            <span className="flex flex-col max-w-2xl space-y-6">

                <Image
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-50 bg-opacity-10 rounded-full"
                    src="https://images.lumacdn.com/discovery/bangkok-icon.png"
                    alt="Bangkok Icon"
                    width={96}
                    height={96}
                />

                <div className="flex flex-col items-start sm:items-start text-white space-y-4">
                    <p className="opacity-50 text-lg sm:text-2xl">What’s Happening in</p>
                    <p>
                        <strong className="text-4xl sm:text-6xl font-medium">Bangkok</strong>
                    </p>

                    <span className="flex items-center space-x-2 sm:space-x-4">
                        <Image
                            className="w-5 h-5 sm:w-6 sm:h-6 bg-slate-50 bg-opacity-20 rounded-full"
                            src="https://images.lumacdn.com/discovery/bangkok-icon.png"
                            alt="Bangkok Icon"
                            width={16}
                            height={16}
                        />
                        <p className="text-sm sm:text-base">6:03 PM GMT+7</p>
                    </span>

                    <hr className="w-full h-[1px] opacity-35 border-gray-400" />


                    <p className="text-sm sm:text-base lg:text-lg text-start sm:text-start opacity-90 leading-relaxed">
                        In Bangkok, events range from innovation conferences to co-working
                        sessions and meetups for tech enthusiasts, drawing professionals and
                        innovators from diverse industries to shape the future together.
                    </p>

                    <span className="flex w-full sm:w-auto gap-3">
                        <input
                            className="w-[70%] px-3 py-2 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:outline-none"
                            type="text"
                            placeholder="me@gmail.com"
                        />
                        <Button className="flex w-[30%] p-5 text-base sm:text-xl rounded-full bg-white p-2 border-none">
                            Subscribe
                        </Button>
                    </span>

                </div>
            </span>
        </div>
    );
}
