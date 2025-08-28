"use client";

import Card from "@/components/UI/Card";
import { Row, Col } from "antd";

type Calendar = {
  title: string;
  description: string;
  image: string;
};

const calendars: Calendar[] = [
  {
    title: "Reading Rhythms Global",
    description:
      "Not a book club. A reading party. Read with friends to live music...",
    image: "/logos/reading.png",
  },
  {
    title: "ADPList",
    description:
      "Your favorite all-things happening at ADPList! We connect you...",
    image: "/logos/adplist.png",
  },
  {
    title: "Build Club",
    description:
      "Sydney · The best place in the world to learn AI. Curated with...",
    image: "/logos/buildclub.png",
  },
];

export default function PopularCalendars() {
  return (
    <section className="relative">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Popular Calendars
        </h2>

        <Row gutter={[16, 16]}>
          {calendars.map((c) => (
            <Col key={c.title} xs={24} sm={12} lg={8}>
              <Card
                title={c.title}
                description={c.description}
                image={c.image}
              />
            </Col>
          ))}
        </Row>

        <div className="mt-10 h-px bg-white/10" />
      </div>
    </section>
  );
}
