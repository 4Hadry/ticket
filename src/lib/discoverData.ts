import { Brain, Palette, Leaf, Dumbbell, Flower2, Bitcoin } from "lucide-react";
import {
  BankOutlined,
  HomeOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { LucideIcon } from "lucide-react";
import { IconBaseProps } from "react-icons/lib";

export type DiscoverCategory = {
  slug: string;
  title: string;
  events: string;
  subscribers?: string;
  description?: string;
  heroImage?: string;
  icon: LucideIcon;
  color?: string;
};

export const DISCOVER_CATEGORIES: DiscoverCategory[] = [
  {
    slug: "ai",
    title: "AI",
    events: "2K Events",
    subscribers: "29K Subscribers",
    description:
      "Join a hackathon, learn about LLMs and prompt engineering, or connect with other AI practitioners.",
    heroImage: "/ai.jpg",
    icon: Brain,
    color: "text-[#FF4D7E] ring-[#FF4D7E]/30",
  },
  {
    slug: "arts-culture",
    title: "Arts & Culture",
    events: "838 Events",
    subscribers: "12K Subscribers",
    description: "Talks, exhibitions and meetups for art lovers and creators.",
    heroImage: "/arts.jpg",
    icon: Palette,
    color: "text-[#C9D970]",
  },
  {
    slug: "climate",
    title: "Climate",
    events: "700 Events",
    subscribers: "9K Subscribers",
    description: "Sustainability, climate tech and policy discussions.",
    heroImage: "/climate.jpg",
    icon: Leaf,
    color: "text-[#7BE38D]",
  },
  {
    slug: "fitness",
    title: "Fitness",
    events: "841 Events",
    subscribers: "15K Subscribers",
    description: "Workshops, training and meetups for fitness lovers.",
    heroImage: "/fitness.jpg",
    icon: Dumbbell,
    color: "text-[#FF6A2B]",
  },
  {
    slug: "wellness",
    title: "Wellness",
    events: "1K Events",
    subscribers: "18K Subscribers",
    heroImage: "/wellness.jpg",
    icon: Flower2,
    color: "text-[#7ED3D8]",
  },
  {
    slug: "crypto",
    title: "Crypto",
    events: "1K Events",
    subscribers: "21K Subscribers",
    heroImage: "/crypto.jpg",
    icon: Bitcoin,
    color: "text-[#9B7BFF]",
  },
];

export const EVENTS = [
  {
    id: 1,
    date: "Sep 1",
    day: "Monday",
    time: "12:00 AM",
    endTime: "Aug 31, 2:00 PM CDT",
    title: "Reading Rhythms Chicago: August 31st",
    authors: "By Reading Rhythms & Sarah Roth",
    location: "Oz Park",
    price: "$10",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    date: "Sep 7",
    day: "Sunday",
    time: "1:00 AM",
    endTime: "Sep 6, 4:00 PM EDT",
    title: "National Book Festival Happy Hour with Reading Rhythms DC",
    authors: "By Reading Rhythms, Ellen Le, Jesse B Rauch & A...",
    location: "Lost & Found DC",
    price: null,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    isPurple: false,
  },
  {
    id: 3,
    date: "Sep 7",
    day: "Sunday",
    time: "8:00 PM",
    endTime: "11:00 AM EDT",
    title:
      "Reading Rhythms x The Toronto Flea Market present: Chapters Under the Tree",
    authors: "By Reading Rhythms & Devan Hambrock",
    location: "Ashbridge Estate",
    price: null,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
    isBrown: false,
  },
];

// type AntdIconType = React.ComponentType<IconBaseProps>;

// const slugify = (name: string) =>
//   name
//     .toLowerCase()
//     .replace(/\s+/g, "-") // space → dash
//     .replace(/[^a-z0-9-]/g, "");
// const eventsData: Record<
//   string,
//   {
//     city: string;
//     slug: string;
//     events: number;
//     icon: AntdIconType;
//     color: string;
//   }[]
// > = {
//   "Asia & Pacific": [
//     {
//       city: "Bangkok",
//       slug: slugify("Bangkok"),
//       events: 13,
//       icon: BankOutlined,
//       color: "#f97316",
//     },
//     {
//       city: "Bengaluru",
//       slug: slugify("Bengaluru"),
//       events: 24,
//       icon: HomeOutlined,
//       color: "#a16207",
//     },
//     {
//       city: "Dubai",
//       slug: slugify("Dubai"),
//       events: 11,
//       icon: EnvironmentOutlined,
//       color: "#db2777",
//     },
//     {
//       city: "Hong Kong",
//       slug: slugify("Hong Kong"),
//       events: 31,
//       icon: GlobalOutlined,
//       color: "#06b6d4",
//     },
//     {
//       city: "Honolulu",
//       slug: slugify("Honolulu"),
//       events: 23,
//       icon: GlobalOutlined,
//       color: "#3b82f6",
//     },
//     {
//       city: "Jakarta",
//       slug: slugify("Jakarta"),
//       events: 9,
//       icon: GlobalOutlined,
//       color: "#fb923c",
//     },
//     {
//       city: "Manila",
//       slug: slugify("Manila"),
//       events: 11,
//       icon: GlobalOutlined,
//       color: "#14b8a6",
//     },
//     {
//       city: "Melbourne",
//       slug: slugify("Melbourne"),
//       events: 12,
//       icon: GlobalOutlined,
//       color: "#22c55e",
//     },
//     {
//       city: "Mumbai",
//       slug: slugify("Mumbai"),
//       events: 10,
//       icon: GlobalOutlined,
//       color: "#ef4444",
//     },
//     {
//       city: "New Delhi",
//       slug: slugify("New Delhi"),
//       events: 10,
//       icon: GlobalOutlined,
//       color: "#f97316",
//     },
//     {
//       city: "Seoul",
//       slug: slugify("Seoul"),
//       events: 22,
//       icon: GlobalOutlined,
//       color: "#3b82f6",
//     },
//     {
//       city: "Singapore",
//       slug: slugify("Singapore"),
//       events: 42,
//       icon: GlobalOutlined,
//       color: "#16a34a",
//     },
//     {
//       city: "Sydney",
//       slug: slugify("Sydney"),
//       events: 11,
//       icon: GlobalOutlined,
//       color: "#eab308",
//     },
//     {
//       city: "Taipei",
//       slug: slugify("Taipei"),
//       events: 12,
//       icon: GlobalOutlined,
//       color: "#6366f1",
//     },
//     {
//       city: "Tel Aviv-Yafo",
//       slug: slugify("Tel Aviv-Yafo"),
//       events: 16,
//       icon: GlobalOutlined,
//       color: "#f97316",
//     },
//     {
//       city: "Tokyo",
//       slug: slugify("Tokyo"),
//       events: 15,
//       icon: GlobalOutlined,
//       color: "#f43f5e",
//     },
//     {
//       city: "Ho Chi Minh",
//       slug: slugify("Ho Chi Minh"),
//       events: 8,
//       icon: GlobalOutlined,
//       color: "#f87171",
//     },
//     {
//       city: "Kuala Lumpur",
//       slug: slugify("Kuala Lumpur"),
//       events: 9,
//       icon: GlobalOutlined,
//       color: "#9333ea",
//     },
//   ],
//   Europe: [
//     {
//       city: "London",
//       slug: slugify("London"),
//       events: 20,
//       icon: BankOutlined,
//       color: "#2563eb",
//     },
//     {
//       city: "Paris",
//       slug: slugify("Paris"),
//       events: 18,
//       icon: HomeOutlined,
//       color: "#ec4899",
//     },
//   ],
//   Africa: [
//     {
//       city: "Cairo",
//       slug: slugify("Cairo"),
//       events: 12,
//       icon: BankOutlined,
//       color: "#eab308",
//     },
//     {
//       city: "Cape Town",
//       slug: slugify("Cape Town"),
//       events: 10,
//       icon: GlobalOutlined,
//       color: "#22c55e",
//     },
//   ],
//   "North America": [
//     {
//       city: "New York",
//       slug: slugify("New York"),
//       events: 25,
//       icon: HomeOutlined,
//       color: "#3b82f6",
//     },
//     {
//       city: "Toronto",
//       slug: slugify("Toronto"),
//       events: 14,
//       icon: BankOutlined,
//       color: "#ef4444",
//     },
//   ],
//   "South America": [
//     {
//       city: "São Paulo",
//       slug: slugify("São Paulo"),
//       events: 19,
//       icon: HomeOutlined,
//       color: "#ea580c",
//     },
//     {
//       city: "Buenos Aires",
//       slug: slugify("Buenos Aires"),
//       events: 15,
//       icon: GlobalOutlined,
//       color: "#a855f7",
//     },
//   ],
// };
