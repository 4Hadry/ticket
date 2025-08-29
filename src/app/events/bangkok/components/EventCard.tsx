"use client";
import Image from "next/image";

export default function EventCard({ event }: { event: any }) {
  return (
    <div className="ml-3 sm:ml-6 flex flex-row max-w-full sm:max-w-3xl rounded-xl p-2 sm:p-4 bg-[#222529] shadow-lg relative z-10">
    
      <div className="text-white rounded-xl p-3 sm:p-6 w-full max-w-4xl flex flex-col gap-1 sm:gap-2">
        <p className="text-xs sm:text-sm opacity-70">Live {event.time}</p>
        <h1 className="text-base sm:text-lg font-semibold">{event.title}</h1>

        <div className="flex items-center gap-2">
          <Image
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white/20"
            src={event.avatar}
            alt={event.author}
            width={20}
            height={20}
          />
          <p className="text-xs sm:text-sm">By {event.author}</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-row relative">
            {[1, 2, 3].map((i) => (
              <Image
                key={i}
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white/20 ${
                  i > 1 ? "-ml-2 sm:-ml-3" : ""
                }`}
                src={event.avatar}
                alt={`avatar${i}`}
                width={32}
                height={32}
              />
            ))}
          </div>
          <p className="text-xs sm:text-sm">{event.place}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex justify-center text-[10px] sm:text-xs rounded-xl bg-green-900 px-2 py-0.5 sm:py-1">
            {event.price}
          </span>
          <p className="text-xs sm:text-sm">{event.place}</p>
        </div>
      </div>

      <Image
        className="w-20 h-20 sm:w-40 sm:h-40 bg-slate-50 bg-opacity-20 rounded-md object-cover"
        src={event.cover}
        alt={event.title}
        width={96}
        height={96}
      />
    </div>
  );
}
