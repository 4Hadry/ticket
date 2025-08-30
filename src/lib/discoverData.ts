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

export const Events = [
  {
    id: 1,
    title: "BSA Monthly not working August 2025",
    author: "Julien, Bangkok Startup",
    place: "Redo Mex-Tex Grill & Tap House",
    price: "TBH 50",
    time: new Date().toLocaleString(),
    cover:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/cz/1bb55629-242c-42c1-93cd-df6a2ecc234b.png",
    avatar: "https://images.lumacdn.com/discovery/bangkok-icon.png",
  },
  {
    id: 2,
    title: "BSA Monthly not working August 2025",
    author: "Julien, Bangkok Startup",
    place: "Redo Mex-Tex Grill & Tap House",
    price: "TBH 50",
    time: new Date().toLocaleString(),
    cover:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/cz/1bb55629-242c-42c1-93cd-df6a2ecc234b.png",
    avatar: "https://images.lumacdn.com/discovery/bangkok-icon.png",
  },
  {
    id: 3,
    title: "BSA Monthly not working August 2025",
    author: "Julien, Bangkok Startup",
    place: "Redo Mex-Tex Grill & Tap House",
    price: "TBH 50",
    time: new Date().toLocaleString(),
    cover:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/cz/1bb55629-242c-42c1-93cd-df6a2ecc234b.png",
    avatar: "https://images.lumacdn.com/discovery/bangkok-icon.png",
  },
  {
    id: 4,
    title: "BSA Monthly not working August 2025",
    author: "Julien, Bangkok Startup",
    place: "Redo Mex-Tex Grill & Tap House",
    price: "TBH 50",
    time: new Date().toLocaleString(),
    cover:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/cz/1bb55629-242c-42c1-93cd-df6a2ecc234b.png",
    avatar: "https://images.lumacdn.com/discovery/bangkok-icon.png",
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

export type Calendar = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

export const CALENDERS: Calendar[] = [
  {
    title: "Reading Rhythms Global",
    description:
      "Not a book club. A reading party. Read with friends to live music...",
    image: "/logos/reading.png",
    slug: "reading-rhythms-global",
  },
  {
    title: "ADPList",
    description:
      "Your favorite all-things happening at ADPList! We connect you...",
    image: "/logos/adplist.png",
    slug: "adplist",
  },
  {
    title: "Build Club",
    description:
      "Sydney · The best place in the world to learn AI. Curated with...",
    image: "/logos/buildclub.png",
    slug: "build-club",
  },
  {
    title: "Her Workplace",
    description:
      "Her Workplace is the career development platform for women...",
    image: "/logos/herwork.png",
    slug: "her-workplace",
  },
  {
    title: "Design Buddies",
    description:
      "Events for designers and all creatives across SF, online, and...",
    image: "/logos/designbuddies.png",
    slug: "design-buddies",
  },
  {
    title: "South Park Commons",
    description:
      "South Park Commons helps you get from -1 to 0. To learn more...",
    image: "/logos/spc.png",
    slug: "south-park-commons",
  },
  {
    title: "Cursor Community",
    description: "Cursor community hosted meetups, hackathons, and more...",
    image: "/logos/cursor.png",
    slug: "cursor-community",
  },
  {
    title: "The AI Collective",
    description: "The world’s largest AI community: 70,000+ pioneers...",
    image: "/logos/aicollective.png",
    slug: "the-ai-collective",
  },
  {
    title: "Generative AI San Francisco and Bay Area",
    description: "San Francisco · GenerativeAISF.com – the best events...",
    image: "/logos/generativeai.png",
    slug: "generative-ai-san-francisco-and-bay-area",
  },
];
