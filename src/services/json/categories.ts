import moviesImage from "../../assets/images/movies.png";
import eventsImage from "../../assets/images/events.jpg";
import playsImage from "../../assets/images/plays.jpg";
import activitiesImage from "../../assets/images/activities.jpg";

import type { Category } from "../../types/interfaces/category.interface";

export const categories: Category[] = [
  {
    title: "Movies",
    count: "120+",
    description:
      "Blockbusters, indie gems, and timeless classics — all in one place.",
    image: moviesImage,
    link: "/experiences/movies",
  },
  {
    title: "Events",
    count: "500+",
    description: "Concerts, food festivals, art shows, workshops and more.",
    image: eventsImage,
    link: "/experiences/events",
  },
  {
    title: "Plays",
    count: "80+",
    description:
      "Immersive theatre, thought-provoking stories and unforgettable performances.",
    image: playsImage,
    link: "/experiences/plays",
  },
  {
    title: "Activities",
    count: "200+",
    description:
      "Adventure, workshops, sports, wellness and more to fuel your passions.",
    image: activitiesImage,
    link: "/experiences/activities",
  },
];
