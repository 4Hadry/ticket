"use client";

import { Row, Col } from "antd";
import Card from "@/components/UI/Card";
import { CALENDERS } from "@/lib/discoverData";
import Link from "next/link";

export default function FeaturedCalendars() {
  return (
    <section className="relative  text-[#E6E7EB]">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Featured Calendars
        </h2>

        <Row gutter={[16, 16]}>
          {CALENDERS.map((c) => (
            <Col key={c.title} xs={24} sm={12} lg={8}>
              <Link href={`/event/${c.slug}`}>
                <Card
                  title={c.title}
                  description={c.description}
                  image={c.image}
                />
              </Link>
            </Col>
          ))}
        </Row>

        <div className="mt-10 h-px bg-white/10" />
      </div>
    </section>
  );
}
