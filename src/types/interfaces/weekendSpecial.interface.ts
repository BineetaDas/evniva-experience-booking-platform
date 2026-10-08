export interface WeekendSpecial {
  id: number;
  date: string;
  title: string;
  venue: string;
  location: string;
  image: string;
}

export interface WeekendSpecialCardProps {
  experience: WeekendSpecial;
}
