import { Brain, Palette, Leaf, Dumbbell, Flower2, Bitcoin } from "lucide-react";
import { LucideIcon } from "lucide-react";

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
