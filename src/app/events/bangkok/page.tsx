"use client";
import Hero from "./components/hero";
import EventList from "./components/EventList";
import Sidebar from "./components/Sidebar";
import Footer from "@/components/homepage/Footer";

const events = [
  {
    id: 1,
    title: "BSA Monthly not working August 2025",
    author: "Julien, Bangkok Startup",
    place: "Redo Mex-Tex Grill & Tap House",
    price: "TBH 50",
    time: new Date().toLocaleString(),
    cover:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/cz/1bb55629-242c-42c1-93cd-df6a2ecc234b.png",
    avatar: "https://images.lumacdn.com/discovery/bangkok-icon.png",
  },
  {
    id: 2,
    title: "BSA Monthly not working August 2025",
    author: "Julien, Bangkok Startup",
    place: "Redo Mex-Tex Grill & Tap House",
    price: "TBH 50",
    time: new Date().toLocaleString(),
    cover:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/cz/1bb55629-242c-42c1-93cd-df6a2ecc234b.png",
    avatar: "https://images.lumacdn.com/discovery/bangkok-icon.png",
  },
  {
    id: 3,
    title: "BSA Monthly not working August 2025",
    author: "Julien, Bangkok Startup",
    place: "Redo Mex-Tex Grill & Tap House",
    price: "TBH 50",
    time: new Date().toLocaleString(),
    cover:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/cz/1bb55629-242c-42c1-93cd-df6a2ecc234b.png",
    avatar: "https://images.lumacdn.com/discovery/bangkok-icon.png",
  },
  {
    id: 4,
    title: "BSA Monthly not working August 2025",
    author: "Julien, Bangkok Startup",
    place: "Redo Mex-Tex Grill & Tap House",
    price: "TBH 50",
    time: new Date().toLocaleString(),
    cover:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/cz/1bb55629-242c-42c1-93cd-df6a2ecc234b.png",
    avatar: "https://images.lumacdn.com/discovery/bangkok-icon.png",
  },
  
];

export default function BangkokPage() {
  return (
    <div className="flex flex-col pb-16 bg-[#131517]">
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-10  items-start px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48">
        <div className="lg:col-span-8">
          <EventList events={events} />
        </div>
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
