"use client";
import { Button } from "antd";
import EventCard from "./EventCard";
import { LucideSignal, Plus, Search, Signal } from "lucide-react";

export default function EventList({ events }: { events: any[] }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row w-full max-w-4xl mt-10 px-10 justify-between">
                <h1 className="text-white text-3xl font-bold">Events</h1>
                <div className="flex items-center gap-4">

                    <Button
                        type="primary"
                        icon={<Plus size={18} />}
                        className="flex items-center p-5 text-lg bg-card"
                    >
                        Submit Event
                    </Button>


                    <div className="flex items-center gap-4">
                        <span className="bg-card p-3 rounded-lg">
                            <Signal size={20} className="text-white cursor-pointer" />
                        </span>
                        <span className="bg-card p-3 rounded-lg">
                            <Search size={20} className="text-white cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>

            <div className="col-span-10 md:col-span-7 flex relative flex-col gap-10 sm:gap-16 mt-6 sm:mt-10 px-4 sm:px-10">

                <div className="absolute pl-1.5 top-2 bottom-0 opacity-25 z-0">
                    <div
                        className="w-[2px] sm:w-[3px] h-full"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(to bottom, gray 0px, gray 8px, transparent 8px, transparent 16px)",
                        }}
                    />
                </div>

                {events.map((event, index) => (
                    <div key={event.id} className="relative flex flex-col">

                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 relative z-10">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full border border-gray-500 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"></div>
                            </div>
                            <span className="text-gray-400 text-xs sm:text-sm font-medium">
                                {index === 0 ? "Today" : index === 1 ? "Yesterday" : "Earlier"}
                            </span>
                        </div>

                        <EventCard event={event} />
                    </div>
                ))}
            </div>
        </div>
    );
}
