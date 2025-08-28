// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h4 className="text-gray-400 font-semibold">luma</h4>
          <h1 className="text-5xl md:text-6xl font-bold leading-normal">
            Delightful events <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              start here.
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Set up an event page, invite friends and <br /> sell tickets. Host a
            memorable event <br /> today.
          </p>

          <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition">
            Create Your First Event
          </button>
        </div>

        {/* RIGHT SIDE (VIDEO) */}
        <div className="flex justify-center items-center">
          <div className="w-[662px] flex items-center justify-center">
            <video
              src="/assets/Hero.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
