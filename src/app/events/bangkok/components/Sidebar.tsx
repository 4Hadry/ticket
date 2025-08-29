"use client";
import Image from "next/image";
import { Button } from "antd";

export default function Sidebar() {
  return (
    <div className="col-span-2 mt-10 flex max-w-md space-y-6 flex-col">
      <div className="flex justify-start">
        <Image
          className="w-14 h-14 bg-[#e39936] rounded-full border-4 border-white/20 shadow-md"
          src="https://images.lumacdn.com/discovery/bangkok-icon.png"
          alt="Bangkok"
          width={112}
          height={112}
        />
      </div>

      <h1 className="text-white text-4xl font-bold text-start tracking-tight">
        Bangkok
      </h1>

      <p className="text-gray-300 text-start text-lg leading-relaxed">
        Discover the hottest events in Bangkok, and get notified of new events
        before they sell out.
      </p>

   <span className="flex flex-col space-y-4">
       <input
        className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        type="email"
        placeholder="me@gmail.com"
      />

      <Button className="bg-gradient-to-r bg-black text-white font-semibold px-6 py-5 rounded-full shadow-md hover:scale-105 transition">
        Subscribe
      </Button> 
   </span>

      <div className="w-full h-48 rounded-xl bg-gray-800/40 flex items-center justify-center text-gray-500 border border-white/10">
        <span>Map Coming Soon</span>
      </div>
    </div>
  );
}
