import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import HeroSection from "@/components/homepage/Hero";
import React from "react";

const Home = () => {
  return (
    <div className=" bg-gradient-to-tl from-black via-gray-900 to-yellow-900">
      <Header />
      <HeroSection />

      <Footer />
    </div>
  );
};

export default Home;
