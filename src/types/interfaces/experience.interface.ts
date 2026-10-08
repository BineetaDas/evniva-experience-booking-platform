export interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  category: string;
  date: string;
  time: string;
  rating: number;
  reviews: number;
  price: number;
}

export interface FeaturedExperienceCardProps {
  experience: Experience;
  isSelected: boolean;
  onSelect: () => void;
}
