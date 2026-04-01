export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: ProductCategories;
  shopId?: string;
}
export type ProductCategories =
  | "Burgers"
  | "Drinks"
  | "Desserts"
  | "Pizza"
  | "Salads"
  | "Snacks";
