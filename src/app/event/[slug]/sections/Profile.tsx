import React from "react";
import Button from "antd/es/button";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Image from "next/image";
import { Calendar } from "@/lib/discoverData";

type ProfileProps = {
  data: Calendar;
};
const Profile: React.FC<ProfileProps> = ({ data }) => {
  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Cover Photo */}
      <div className="relative w-full h-64">
        <Image
          src="/assets/images/cover.png"
          alt="Cover"
          fill
          className="object-cover"
        />

        {/* Profile Picture */}
        <div className="absolute -bottom-16 left-8">
          <div className="w-32 h-32 rounded-lg border-4 border-[#111] overflow-hidden">
            <Image
              src="/assets/images/fea3.png"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="mt-20 px-8 max-w-6xl flex justify-between">
        {/* Name & Bio */}
        <div>
          <Title level={2} className="!text-white mb-2">
            {data.title}
          </Title>

          <Paragraph className="text-gray-300 max-w-2xl !mb-2">
            Times in GMT+5 — 6:47 PM
          </Paragraph>
          <Paragraph className="text-gray-300 max-w-2xl">
            {data.description}
          </Paragraph>
        </div>

        {/* Subscribe Button */}
        <div>
          <Button
            type="primary"
            size="large"
            className="rounded-lg font-medium px-6 py-2"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
