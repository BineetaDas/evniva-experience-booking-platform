export interface TrendingExperience {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  date: string;
  time: string;
  venue: string;
  format?: string;
  rating: number;
  reviews: number;
  price: number;
}

export interface TrendingExperienceCardProps {
  experience: TrendingExperience;
}
