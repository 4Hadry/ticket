import React from "react";
import { Button, Input, Avatar } from "antd";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

type Nearby = {
  title: string;
};

const NearbyEvents = ({ title }: Nearby) => {
  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* Main Container */}
      <div className="flex">
        {/* Left Side - Events */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-white">Nearby Events</h1>
            <svg
              className="text-gray-400 text-xl cursor-pointer w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Date */}
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
            <span className="text-white font-medium">Aug 30</span>
            <span className="text-gray-400 ml-2">Saturday</span>
          </div>

          {/* Event Card */}
          <div className="bg-card rounded-lg p-6 mb-6">
            <div className="flex">
              {/* Left side - Event details */}
              <div className="flex-1 pr-6">
                <div className="text-gray-400 text-sm mb-2">3:00 PM</div>
                <h2 className="text-xl font-semibold text-white mb-4 leading-tight">
                  From Inbound Sales Journey To Ai Evolution
                </h2>

                {/* Author */}
                <div className="flex items-center mb-4">
                  <Avatar
                    size={24}
                    className="bg-orange-500 mr-2"
                    style={{ backgroundColor: "#f97316" }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Avatar>
                  <span className="text-gray-300 text-sm">By Aqsa</span>
                </div>

                {/* Location */}
                <div className="flex items-center mb-4">
                  <svg
                    className="w-4 h-4 text-gray-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm">Rspace</span>
                </div>

                {/* Attendees */}
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-2">
                    <Avatar
                      size={24}
                      style={{ backgroundColor: "#3b82f6" }}
                      className="border-2 border-gray-800"
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Avatar>
                    <Avatar
                      size={24}
                      style={{ backgroundColor: "#10b981" }}
                      className="border-2 border-gray-800"
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Avatar>
                    <Avatar
                      size={24}
                      style={{ backgroundColor: "#8b5cf6" }}
                      className="border-2 border-gray-800"
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Avatar>
                    <Avatar
                      size={24}
                      style={{ backgroundColor: "#ef4444" }}
                      className="border-2 border-gray-800"
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Avatar>
                  </div>
                  <span className="text-gray-400 text-sm">+70</span>
                </div>
              </div>

              {/* Right side - Event poster */}
              <div className="w-48 h-32">
                <Image
                  src={"/assets/images/fea3.png"}
                  alt="Event Poster"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-6">
          {/* AI Section */}
          <div className="mb-8">
            {/* Profile Avatar */}
            <div className="flex justify-start mb-4">
              <Avatar size={64} style={{ backgroundColor: "#ec4899" }}>
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    clipRule="evenodd"
                  />
                </svg>
              </Avatar>
            </div>

            <h2 className="text-2xl font-bold text-white text-start mb-4">
              {title}
            </h2>

            <p className="text-gray-300 text-sm text-start mb-6 leading-relaxed">
              Subscribe to stay up-to-date with the latest events, calendars and
              other updates.
            </p>

            {/* Email Input */}
            <div className="mb-4">
              <Input
                size="large"
                placeholder="me@email.com"
                className="!bg-[#1C1C1C] !border-[#2C2C2C] !text-white !placeholder-[#A9AFB8] rounded-full"
              />
            </div>

            {/* Subscribe Button */}
            <Button
              type="primary"
              size="large"
              className="w-full rounded-full font-semibold bg-white p-4 text-black "
            >
              Subscribe
            </Button>
          </div>

          {/* Map Section */}
          <div className="bg-gray-800 rounded-lg p-4 h-64">
            <div className="w-full h-full bg-gray-700 rounded relative overflow-hidden">
              {/* Map grid pattern */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <pattern
                      id="grid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="#4B5563"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Streets */}
                  <line
                    x1="0"
                    y1="50"
                    x2="200"
                    y2="50"
                    stroke="#6B7280"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="100"
                    x2="200"
                    y2="100"
                    stroke="#6B7280"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="150"
                    x2="200"
                    y2="150"
                    stroke="#6B7280"
                    strokeWidth="1"
                  />
                  <line
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="200"
                    stroke="#6B7280"
                    strokeWidth="1"
                  />
                  <line
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="200"
                    stroke="#6B7280"
                    strokeWidth="1"
                  />
                  <line
                    x1="150"
                    y1="0"
                    x2="150"
                    y2="200"
                    stroke="#6B7280"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              {/* Location pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-pink-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyEvents;
