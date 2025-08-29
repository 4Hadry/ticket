// components/HeroSection.jsx
"use client";

import { Typography, Button, Row, Col } from "antd";

const { Title, Text } = Typography;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      <div className="max-w-7xl w-full mx-auto px-6">
        <Row gutter={[32, 32]} align="middle">
          {/* LEFT SIDE */}
          <Col xs={24} md={12}>
            <div className="space-y-6">
              <Text className="text-gray-400 font-semibold">luma</Text>

              <Title
                level={1}
                className="!text-5xl md:!text-6xl !text-white !leading-normal"
              >
                Delightful events <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  start here.
                </span>
              </Title>

              <Text className="!text-lg text-gray-300 block">
                Set up an event page, invite friends and <br /> sell tickets.
                Host a memorable event <br /> today.
              </Text>

              <Button
                type="default"
                size="large"
                className="!bg-white !text-gray-700 !font-semibold !px-6 !py-5 rounded-lg shadow hover:!bg-gray-200 transition"
              >
                Create Your First Event
              </Button>
            </div>
          </Col>

          {/* RIGHT SIDE (VIDEO) */}
          <Col xs={24} md={12}>
            <div className="flex justify-center items-center">
              <div className="w-[662px] flex items-center justify-center">
                <video
                  src="/assets/Hero.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
