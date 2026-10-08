export interface ComingUpNext {
  id: number;
  date: string;
  month: string;
  day: string;
  type: "Movie" | "Event" | "Play" | "Activity";
  title: string;
  venue: string;
  location: string;
  image: string;
  link: string;
}

export interface ComingUpNextItemProps {
  experience: ComingUpNext;
}
