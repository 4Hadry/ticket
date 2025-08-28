"use client";

import { Brain, Palette, Leaf, Dumbbell, Flower2, Bitcoin } from "lucide-react";
import Link from "next/link";
import { Row, Col } from "antd";
import { DISCOVER_CATEGORIES } from "@/lib/discoverData";

type Cat = {
  title: string;
  count: string;
  href: string;
  icon: React.ReactNode;
  color: string;
};

const categories: Cat[] = [
  {
    title: "AI",
    count: "2K Events",
    href: "#",
    icon: <Brain className="w-6 h-6" />,
    color: "text-[#FF4D7E]",
  },
  {
    title: "Arts & Culture",
    count: "838 Events",
    href: "#",
    icon: <Palette className="w-6 h-6" />,
    color: "text-[#C9D970] ring-[#C9D970]/30",
  },
  {
    title: "Climate",
    count: "700 Events",
    href: "#",
    icon: <Leaf className="w-6 h-6" />,
    color: "text-[#7BE38D] ring-[#7BE38D]/30",
  },
  {
    title: "Fitness",
    count: "841 Events",
    href: "#",
    icon: <Dumbbell className="w-6 h-6" />,
    color: "text-[#FF6A2B] ring-[#FF6A2B]/30",
  },
  {
    title: "Wellness",
    count: "1K Events",
    href: "#",
    icon: <Flower2 className="w-6 h-6" />,
    color: "text-[#7ED3D8] ring-[#7ED3D8]/30",
  },
  {
    title: "Crypto",
    count: "1K Events",
    href: "#",
    icon: <Bitcoin className="w-6 h-6" />,
    color: "text-[#9B7BFF] ring-[#9B7BFF]/30",
  },
];

export default function EventsCategories() {
  return (
    <section className="">
      {/* green gradient only below header */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B4C3F]/80 to-transparent pointer-events-none z-0" />

      {/* content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-12">
        {/* Heading */}
        <h2 className="text-[40px] leading-[48px] font-semibold tracking-tight text-white">
          Discover Events
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] font-medium leading-6 text-[#A9AFB8]">
          Explore popular events near you, browse by category, or check out some
          of the great community calendars.
        </p>

        {/* Subheading */}
        <h3 className="mt-8 mb-4 text-xl font-semibold text-white">
          Browse by Category
        </h3>

        {/* Ant Design Grid */}
        <Row gutter={[16, 16]}>
          {DISCOVER_CATEGORIES.map((c) => {
            const Icon = c.icon;
            return (
              <Col key={c.title} xs={24} sm={12} lg={8}>
                <Link
                  href={`/discover/${c.slug}`}
                  className={`
                  group rounded-xl border border-white/5 bg-card
                  hover:border-white/10 transition
                  shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]
                  px-5 py-5 flex flex-col items-start gap-4
                `}
                >
                  {/* icon bubble */}
                  <span
                    className={`
                    inline-flex h-10 w-10 items-center justify-center rounded-lg
                     ${c.color} bg-white/[0.02] group-hover:bg-white/[0.04]
                  `}
                  >
                    <Icon className="w-8 h-8" />
                  </span>

                  {/* text */}
                  <div className="flex-1">
                    <div className="text-[17px] font-semibold text-white">
                      {c.title}
                    </div>
                    <div className="mt-1 text-[13px] text-light_text">
                      {c.events}
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>

        {/* divider line */}
        <div className="mt-10 h-px bg-white/10" />
      </div>
    </section>
  );
}
