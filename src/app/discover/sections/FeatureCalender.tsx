"use client";

import { Row, Col } from "antd";
import Card from "@/components/UI/Card";

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
  {
    title: "Her Workplace",
    description:
      "Her Workplace is the career development platform for women...",
    image: "/logos/herwork.png",
  },
  {
    title: "Design Buddies",
    description:
      "Events for designers and all creatives across SF, online, and...",
    image: "/logos/designbuddies.png",
  },
  {
    title: "South Park Commons",
    description:
      "South Park Commons helps you get from -1 to 0. To learn more...",
    image: "/logos/spc.png",
  },
  {
    title: "Cursor Community",
    description: "Cursor community hosted meetups, hackathons, and more...",
    image: "/logos/cursor.png",
  },
  {
    title: "The AI Collective",
    description: "The world’s largest AI community: 70,000+ pioneers...",
    image: "/logos/aicollective.png",
  },
  {
    title: "Generative AI San Francisco and Bay Area",
    description: "San Francisco · GenerativeAISF.com – the best events...",
    image: "/logos/generativeai.png",
  },
];

export default function FeaturedCalendars() {
  return (
    <section className="relative  text-[#E6E7EB]">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Featured Calendars
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
