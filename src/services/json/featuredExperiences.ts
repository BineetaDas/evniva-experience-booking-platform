import type { Experience } from "../../types/interfaces/experience.interface";

import activitiesImage from "../../assets/images/mountain-adventure.jpg";
import eventsImage from "../../assets/images/live-song.jpg";
import playsImage from "../../assets/images/theatre.jpg";
import artSoul from "../../assets/images/art-workshop.jpg";

export const featuredExperiences: Experience[] = [
  {
    id: 1,
    title: "Live Music Festival",
    description:
      "Feel the rhythm, live the moment. An unforgettable night of music, food and good vibes.",
    image: eventsImage,
    location: "Kolkata",
    category: "Events",
    date: "12 Oct 2026",
    time: "07:00 PM",
    rating: 4.8,
    reviews: 2409,
    price: 999,
  },
  {
    id: 2,
    title: "The Last Act",
    description:
      "Experience a captivating theatre performance filled with powerful storytelling and memorable moments.",
    image: playsImage,
    location: "Kolkata",
    category: "Plays",
    date: "15 Oct 2026",
    time: "07:30 PM",
    rating: 4.9,
    reviews: 856,
    price: 799,
  },
  {
    id: 3,
    title: "Adventure Day",
    description:
      "Step into nature and enjoy an exciting outdoor adventure surrounded by breathtaking mountain views.",
    image: activitiesImage,
    location: "Darjeeling",
    category: "Activities",
    date: "20 Oct 2026",
    time: "06:00 AM",
    rating: 4.7,
    reviews: 342,
    price: 1499,
  },
  {
    id: 4,
    title: "Art & Soul",
    description:
      "Explore creativity, culture and live artistic performances in a vibrant and inspiring atmosphere.",
    image: artSoul,
    location: "Kolkata",
    category: "Events",
    date: "25 Oct 2026",
    time: "06:30 PM",
    rating: 4.8,
    reviews: 621,
    price: 999,
  },
];
