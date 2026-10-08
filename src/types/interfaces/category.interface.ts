export interface Category {
  title: string;
  count: string;
  description: string;
  image: string;
  link: string;
}

export interface CategoryCardProps {
  category: Category;
  isActive: boolean;
  onActivate: () => void;
}
