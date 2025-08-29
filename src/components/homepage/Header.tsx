import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// components/Header.jsx
export default function Header() {
  return (
     <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 text-white text-sm z-50 bg-transparent">
      {/* Left: Logo / Icon */}
      <Link href={"/"}>
        <div className="font-semibold tracking-wide">luma</div>
      </Link>

      {/* Right: Links */}
      <div className="flex items-center gap-6">
        <span className="text-gray-300">3:31 PM GMT+5</span>
        <Link
          href="/discover"
          className="text-gray-300 hover:text-white flex items-center gap-1"
        >
          Explore Events{" "}
          <span>
            <ArrowUpRight size={17} className="inline" />
          </span>
        </Link>
        <button className="bg-white/30 hover:bg-gray-700 px-3 py-1.5 font-semibold rounded-full text-white/60">
          Sign In
        </button>
      </div>
    </header>
  );
}
