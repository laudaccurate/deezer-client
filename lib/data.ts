import { MenuItem } from "@/components/Navbar/Header";
import { NewsCardProps } from "@/components/NewsCard"
import { PlanCardProps } from "@/components/PlanCard";

export const menuList: MenuItem[] = [
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "About",
    link: "#about",
  },
  {
    label: "Features",
    link: "#features",
  },
  {
    label: "Pricing",
    link: "#plans",
  },
  {
    label: "Blog",
    link: "#news",
  },
];

export const team = [
  {
    name: "Israel Olatunji Tijani",
    role: "Founder / Data Scientist",
    avatar: "/images/team/israel.svg",
  },
  {
    name: "Tega Ukavwe",
    role: "Software Engineer",
    avatar: "/images/team/tega.svg",
  },
  {
    name: "Tobi Ekundayo",
    role: "Full Stack Developer",
    avatar: "/images/team/tobi.svg",
  },
  {
    name: "Oluwatobi Akanni",
    role: "Legal Advisor",
    avatar: "/images/team/akanni.svg",
  },
  {
    name: "Oluwafemi A.",
    role: "Head, Marketing & Strategy",
    avatar: "/images/team/femi.svg",
  },
];

export const featureList = [
  {
    label: "Fact Checking",
    desc:
      "Offers real-time fact-checking and image analysis. With the help of natural language processing and image processing algorithms,",
    image: "/images/features/fc.svg",
  },
  {
    label: "i-Reporting",
    desc:
      "Allows witnesses to contribute pictures and videos of violence anonymously.",
    image: "/images/features/ir.svg",
  },
  {
    label: "Booking Appointment",
    desc:
      "Create appointments and reservations including hotels and flight via various communication channels (such as WhatsApp, Facebook Messenger, and mobile apps)",
    image: "/images/features/ba.svg",
  },
  {
    label: "Location Finder",
    desc:
      "Handles users’ inquiries to locate their polling unit (PU) with assistive map navigation by using their permanent voter card (PVC) number.",
    image: "/images/features/lf.svg",
  },
  {
    label: "Conversational AI",
    desc:
      "Provides timely access to frequently asked questions, fast response time, and custom enquiries tailored to the needs of your business.",
    image: "/images/features/ca.svg",
  },
  {
    label: "Toxic Comment Scoring",
    desc:
      "Identify and analyze toxic language in comment section by accepting the url of a specific post to counter violent extremism and radicalization online. ",
    image: "/images/features/tc.svg",
  },
]

export const plans: PlanCardProps[] = [
  {
    plan: "Starter",
    annualPricing: "$499",
    monthlyPricing: "$549",
    features: [
      "1 Active Chatbot",
      "1,000 valid chats/month",
      "Unlimited number of stories",
      "7-day training history",
      "All platforms integration",
      "Basic analytics",
      "Data security",
    ],
  },
  {
    plan: "Business",
    annualPricing: "$999",
    monthlyPricing: "$1049",
    features: [
      "5 Active Chatbots",
      "5,000 valid chats/month",
      "Unlimited number of stories",
      "Unlimited training history",
      "All platforms integration",
      "Advanced analytics",
      "Team collaboration",
      "Button actions",
      "Data security",
      "Version history",
    ],
  },
  {
    plan: "Enterprise",
    annualPricing: "$1999",
    monthlyPricing: "$2249",
    features: [
      "5 Active Chatbots",
      "25,000 valid chats/month",
      "Unlimited number of stories",
      "Unlimited training history",
      "All platforms integration",
      "Advanced analytics and reporting",
      "Team collaboration",
      "Button actions",
      "Chatbot building services",
      "Security Assistance",
      "Personal onboarding",
      "Data security",
      "Version history",
    ],
  },
];

export const services = [
  {
    label: 'Fact Checking',
    image: '/images/fc-service.svg'
  },
  {
    label: 'Machine Learning',
    image: '/images/ml-service.svg'
  },
  {
    label: 'Sentiment Analysis',
    image: '/images/sa-service.svg'
  }
]

export const news: NewsCardProps[] = [
  {
    title: "Africa Rocks",
    desc: "Africa achieves record-breaking VC funding growth...",
    date: "Fri Jun 19 2023",
    category: "Africa",
    image: "/images/news/1.svg",
  },
  {
    title: "Four Quick Ways to verify Images on a Smartphone",
    desc: "There are more ways to sow misinformation or disinformation than...",
    date: "Fri Jun 19 2023",
    category: "Security",
    image: "/images/news/2.svg",
  },
  { 
    title:
      "Lagos hackathon yields Ideas to Tackle Violent Extremism in Election",
    desc: "On 11 February, the Charter Project Africa, in partnership with a coalition...",
    date: "Fri Jun 19 2023",
    category: "Hackathons",
    image: "/images/news/3.svg",
  },
  {
    title: "AI Chatbots Have Been Used to Create Dozens of News Content Farms",
    desc: "The news-rating group News Guard has found dozens of new websites.",
    date: "Fri Jun 19 2023",
    category: "AI",
    image: "/images/news/4.svg",
  },
]

export const socials = [
  {
    link: "#",
    icon: "/images/socials/twitter.svg",
  },
  {
    link: "#",
    icon: "/images/socials/gram.svg",
  },
  {
    link: "#",
    icon: "/images/socials/youtube.svg",
  },
]

export const footerLinks = [
  {
    section: "Contact Us",
    links: [
      {
        label: "hello@chatve.co",
        link: "#",
      },
      {
        label: "+234 814 128 4748",
        link: "#",
      },
      {
        label: "No. 42. Montgomery Avenue, Yaba, Lagos State, Nigeria.",
        link: "#",
      },
    ],
  },
  {
    section: "Solutions",
    links: [
      {
        label: "Bot Builder",
        link: "#",
      },
      {
        label: "Features",
        link: "#",
      },
      {
        label: "Pricing",
        link: "#",
      },
    ],
  },
  {
    section: "Company",
    links: [
      {
        label: "About Us",
        link: "#",
      },
      {
        label: "How it Works",
        link: "#",
      },
      {
        label: "Demo",
        onClick: () => {},
      },
    ],
  },
]