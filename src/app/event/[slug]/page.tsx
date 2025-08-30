import React from "react";
import EventsInterface from "./sections/EventsInterface";
import Profile from "./sections/Profile";
import { CALENDERS } from "@/lib/discoverData";
import { notFound } from "next/navigation";
type Props = {
  params: { slug: string };
};
const Page = ({ params }: Props) => {
  const calenders = CALENDERS.find((c) => c.slug === params.slug);

  if (!calenders) return notFound();

  return (
    <div className="w-full bg-bg min-h-screen text-white ">
      <Profile data={calenders} />
      <EventsInterface />
    </div>
  );
};

export default Page;
