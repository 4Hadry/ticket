import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaFacebookMessenger,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaTwitter size={20} />, href: "https://twitter.com" },
  { icon: <FaYoutube size={20} />, href: "https://youtube.com" },
  { icon: <FaInstagram size={20} />, href: "https://instagram.com" },
  { icon: <FaLinkedinIn size={20} />, href: "https://www.linkedin.com/" },
];

const fotLinks = [
  { label: "Discover", href: "/discover" },
  { label: "Pricing", href: "/" },
  { label: "Help", href: "/" },
];
const fotLinks2 = [
  { label: "Terms", href: "/discover" },
  { label: "Privacy", href: "/" },
  { label: "Security", href: "/" },
];
export default function Footer() {
  return (
    <footer className="bg-transparent  py-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row  justify-between mt-6 pt-6 border-t border-white/10 text-sm text-gray-500 gap-4 text-center">
          <div className="flex flex-col gap-6">
            <div className="hidden md:flex space-x-6 items-center">
              <div className="font-bold tracking-wide text-white">luma</div>
              {fotLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex space-x-6 items-center">
              {fotLinks2.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className=" hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex space-x-5 mt-5">
            {socialLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
