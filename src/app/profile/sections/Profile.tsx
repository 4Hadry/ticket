import { Button } from "antd";
import Image from "next/image";
import React from "react";

const Profile = () => {
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

        {/* Subscribe Button */}
      </div>

      {/* Profile Info Section */}
      <div className="mt-20 px-8 max-w-6xl flex justify-between">
        {/* Name */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Reading Rhythms Global</h1>

          {/* Description / Bio */}
          <p className="text-gray-300 max-w-2xl leading-relaxed">
            Times in GMT+5 — 6:47 PM
          </p>
          <p className="text-gray-300 max-w-2xl leading-relaxed">
            Not a book club. A reading party. Read with friends to live music &
            curated playlists!
          </p>
        </div>

        <div className="">
          <Button
            type="primary"
            size="large"
            className="rounded-lg font-medium bg-pink-700 text-white px-6 py-2"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
