import type { Product } from "../types/product";
import { api } from "./axios";
interface GetAllProductsParams {
  page?: number;
  perPage?: number;
  shopId?: string;
  categories?: string;
  sortBy?: "price" | "name";
  sortOrder?: "asc" | "desc";
}
interface AxiosProductResponce {
  totalPages: number;
  products: Product[];
}

export const getAllProducts = async (
  params: GetAllProductsParams,
): Promise<AxiosProductResponce> => {
  const { data } = await api.get<AxiosProductResponce>("/products", {
    params,
  });
  return data;
};
