"use client";

import Link from "next/link";
import { Row, Col, Card } from "antd";
import { DISCOVER_CATEGORIES } from "@/lib/discoverData";

export default function EventsCategories() {
  return (
    <section>
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

        {/* Ant Design Grid + Card */}
        <Row gutter={[16, 16]}>
          {DISCOVER_CATEGORIES.map((c) => {
            const Icon = c.icon;
            return (
              <Col key={c.title} xs={24} sm={12} lg={8}>
                <Link href={`/discover/${c.slug}`}>
                  <Card
                    hoverable
                    bordered={false}
                    className="rounded-xl border border-white/5 !bg-card hover:border-white/10 transition
                               shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] "
                  >
                    {/* icon bubble */}
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${c.color} 
                                  bg-white/[0.02]`}
                    >
                      <Icon className="w-8 h-8" />
                    </span>

                    {/* text */}
                    <div className="mt-4">
                      <div className="text-[17px] font-semibold text-white">
                        {c.title}
                      </div>
                      <div className="mt-1 text-[13px] text-light_text">
                        {c.events}
                      </div>
                    </div>
                  </Card>
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
