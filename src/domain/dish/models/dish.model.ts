import { Tag } from "./tag.model";

export interface Dish {
  price: number;
  description: string;
  name: string;
  photo: string;
  tags: Tag[];
}