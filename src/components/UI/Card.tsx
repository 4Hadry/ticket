"use client";

import Image from "next/image";
import { Button } from "antd";

type CardProps = {
  title: string;
  description: string;
  image: string;
};

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-card rounded-xl border border-white/5 hover:border-white/10 transition p-4 h-full flex flex-col shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] cursor-pointer">
      {/* top row */}
      <div className="flex items-start gap-3">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex justify-between items-center w-full">
            <span>
              <Image
                src={"/assets/icons/feature.avif"}
                alt={title}
                width={40}
                height={40}
                className="rounded-md"
              />
            </span>
            <Button
              size="middle"
              className="!bg-[#1F242B] !text-white/50 font-semibold hover:!bg-[#2B3139] rounded-full border-none"
            >
              Subscribe
            </Button>
          </div>
          <div>
            <h3 className="text-base font-medium text-title_text">{title}</h3>
            <p className="text-xs text-light_text line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
