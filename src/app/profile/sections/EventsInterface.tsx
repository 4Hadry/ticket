"use client";
import React, { useState } from "react";
import { Button, Calendar, Avatar, Badge } from "antd";
import Image from "next/image";
import RightSidbar from "../components/RightSidbar";
import { EVENTS } from "@/lib/discoverData";

const EventsInterface = () => {
  // const [selectedDate, setSelectedDate] = useState(dayjs());

  // const onDateChange = (date: any) => {
  //   setSelectedDate(date);
  // };

  return (
    <div className="mx-auto w-full max-w-5xl text-white border-t border-white/10 mt-8">
      <div className="flex">
        {/* Left Side - Events (Scrollable) */}
        <div className="flex-1 p-8 pr-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">Events</h1>
            <div className="flex items-center gap-3">
              <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </div>
              <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-400"
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

              <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-8">
            {EVENTS.map((event, index) => (
              <div key={event.id}>
                {/* Date Header */}
                {(index === 0 || EVENTS[index - 1].date !== event.date) && (
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-3 bg-gray-500 rounded-full mr-4"></div>
                    <span className="text-white font-medium text-lg">
                      {event.date}
                    </span>
                    <span className="text-gray-400 ml-2 text-lg">
                      {event.day}
                    </span>
                  </div>
                )}

                {/* Event Card */}
                <div className="bg-card rounded-lg border border-gray-800 p-6 hover:bg-gray-750 transition-colors cursor-pointer ml-7">
                  <div className="flex">
                    {/* Left side - Event details */}
                    <div className="flex-1 pr-6">
                      <div className="text-gray-400 text-sm mb-3">
                        <span className="text-white">{event.time}</span>
                        <span className="mx-2">•</span>
                        <span>{event.endTime}</span>
                      </div>

                      <h2 className="text-xl font-semibold text-white mb-4 leading-tight hover:text-blue-400 transition-colors">
                        {event.title}
                      </h2>

                      {/* Authors */}
                      <div className="flex items-center mb-4">
                        <div className="flex -space-x-2 mr-3">
                          <Avatar
                            size={24}
                            className="border-2 border-gray-800"
                            style={{ backgroundColor: "#f97316" }}
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
                          {event.id === 2 && (
                            <Avatar
                              size={24}
                              className="border-2 border-gray-800"
                              style={{ backgroundColor: "#3b82f6" }}
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
                          )}
                        </div>
                        <span className="text-gray-300 text-sm">
                          {event.authors}
                        </span>
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
                        <span className="text-gray-300 text-sm">
                          {event.location}
                        </span>
                      </div>

                      {/* Price */}
                      {event.price && (
                        <div className="text-green-500 font-semibold">
                          {event.price}
                        </div>
                      )}
                    </div>

                    {/* Right side - Event image */}
                    <div className="w-32 h-24 flex-shrink-0">
                      <Image
                        src={"/assets/images/cover.png"}
                        alt={event.title}
                        className="w-full h-full object-cover rounded-lg"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Sticky */}
        <RightSidbar />
      </div>
    </div>
  );
};

export default EventsInterface;
