import { Category } from './Category';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: Category;
  brand?: string;
  imageUri?: string;
};
