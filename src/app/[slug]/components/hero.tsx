"use client";
import Image from "next/image";
import { Row, Col, Typography, Input, Button } from "antd";

const { Title, Text, Paragraph } = Typography;

export default function Hero({ cities }: any) {
  return (
    <div
      className="flex flex-col justify-center items-center sm:items-start px-4 sm:px-12 lg:px-56 w-full min-h-[80vh] sm:min-h-screen bg-cover bg-center text-center sm:text-left"
      style={{
        backgroundImage:
          "url('https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,anim=false,background=white,quality=75,width=1080/discovery/bangkok-desktop.jpg')",
      }}
    >
      <Row className="max-w-2xl" gutter={[0, 24]}>
        <Col span={24}>
          <Image
            className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-50 bg-opacity-10 rounded-full"
            src="https://images.lumacdn.com/discovery/bangkok-icon.png"
            alt="Bangkok Icon"
            width={96}
            height={96}
          />
        </Col>

        <Col span={24} className="text-white space-y-4">
          {/* Heading */}
          <Text className="text-gray-400 text-lg sm:text-2xl font-semibold block">
            What’s Happening in
          </Text>
          <Title
            level={1}
            className="!text-4xl sm:!text-6xl !font-medium !text-white !m-0"
          >
            {cities.city}
          </Title>

          {/* Time row */}
          <Row align="middle" gutter={8}>
            <Col>
              <Image
                className="w-5 h-5 sm:w-6 sm:h-6 bg-slate-50 bg-opacity-20 rounded-full"
                src="https://images.lumacdn.com/discovery/bangkok-icon.png"
                alt="Bangkok Icon"
                width={20}
                height={20}
              />
            </Col>
            <Col>
              <Text className="!text-sm sm:!text-base !text-white">
                6:03 PM GMT+7
              </Text>
            </Col>
          </Row>

          {/* Divider */}
          <hr className="w-full h-[1px] opacity-35 border-gray-400" />

          {/* Description */}
          <Paragraph className="!text-sm sm:!text-base lg:!text-lg !text-white !opacity-90 !leading-relaxed !text-start">
            In {cities.city}, events range from innovation conferences to
            co-working sessions and meetups for tech enthusiasts, drawing
            professionals and innovators from diverse industries to shape the
            future together.
          </Paragraph>

          {/* Subscribe */}
          <Row gutter={12} className="w-full sm:w-[400px]">
            <Col flex="auto">
              <Input
                placeholder="me@gmail.com"
                className="!bg-white/10 !border-white/30 !text-white !placeholder-gray-300 !rounded-2xl"
              />
            </Col>
            <Col flex="none">
              <Button
                type="primary"
                className="!rounded-full !px-6 !py-3 !text-base sm:!text-xl !bg-white !text-black !border-none"
              >
                Subscribe
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
