"use client";
import Hero from "./components/hero";
import EventList from "./components/EventList";
import Sidebar from "./components/Sidebar";
import Footer from "@/components/homepage/Footer";
import { Events } from "@/lib/discoverData";
import { eventsData } from "../discover/sections/EventSection";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function BangkokPage({ params }: Props) {
  const allCities = Object.values(eventsData).flat();
  const city = allCities.find((c) => c.slug === params.slug);
  if (!city) return notFound();

  return (
    <div className="flex flex-col pb-16 bg-[#131517]">
      <Hero cities={city} />
      <div className="grid grid-cols-1 lg:grid-cols-10  items-start px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48">
        <div className="lg:col-span-8">
          <EventList events={Events} />
        </div>
        <div className="lg:col-span-2">
          <Sidebar cities={city} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
