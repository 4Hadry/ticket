import Header from "@/components/homepage/Header";
import React from "react";
import EventsCategories from "./sections/EventCategory";
import Footer from "@/components/homepage/Footer";
import FeaturedCalendars from "./sections/FeatureCalender";
import EventsSection from "./sections/EventSection";

const page = () => {
  return (
    <div className="relative bg-[#121212]  overflow-hidden">
      <Header />
      <EventsCategories />
      <FeaturedCalendars />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default page;
