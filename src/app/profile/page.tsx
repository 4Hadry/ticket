import React from "react";
import EventsInterface from "./sections/EventsInterface";
import Profile from "./sections/Profile";

const ProfilePage = () => {
  return (
    <div className="w-full bg-bg min-h-screen text-white ">
      <Profile />
      <EventsInterface />
    </div>
  );
};

export default ProfilePage;
