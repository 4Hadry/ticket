"use client";

import { notFound } from "next/navigation";
import { Input, Button } from "antd";
import Image from "next/image";
import { DISCOVER_CATEGORIES } from "@/lib/discoverData";
import UpcomingEvents from "./components/UpComingEvents";
import PopularCalendars from "./components/PopularClenders";
import NearbyEvents from "./components/NearbyEvent";
import SubscribeField from "@/components/UI/SubscribeField";

type Props = {
  params: { slug: string };
};

export default function CategoryPage({ params }: Props) {
  const category = DISCOVER_CATEGORIES.find((c) => c.slug === params.slug);

  if (!category) return notFound();

  const Icon = category.icon;

  return (
    <div className="relative w-full bg-bg min-h-screen">
      {/* CENTER WRAPPER */}
      <div className="mx-auto w-full max-w-5xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-4">
            {category.title}
          </h1>

          {/* Stats */}
          <div className="flex items-center gap-6 text-[#A9AFB8] mb-6 text-sm">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span className="text-lg">{category.events}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>👤</span>
              <span className="text-lg ">{category.subscribers}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-6" />

          {/* Description */}
          <p className="text-[#A9AFB8] text-base mb-8">
            {category.description}
          </p>

          {/* Subscribe Input */}
          <SubscribeField />
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="flex justify-center">
          <div className="relative rounded-2xl overflow-hidden bg-card border border-[#2C2C2C] p-6 w-full max-w-md flex flex-col items-center">
            {/* Category Icon */}
            <div
              className={`absolute top-4 left-4 h-10 w-10 rounded-full ${category.color} flex items-center justify-center `}
            >
              <Icon className="w-5 h-5" />
            </div>

            {/* Hero Image (circular) */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              {category.heroImage && (
                <Image
                  src={"/assets/images/fea3.png"}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-[#A9AFB8] mt-4 w-full">
              <span>DISCOVER</span>
              <span className={`${category.color} font-medium`}>
                {category.title} EVENTS
              </span>
            </div>
          </div>
        </div>
      </div>
      <UpcomingEvents />
      <PopularCalendars />
      <NearbyEvents title={category.title} />
    </div>
  );
}
