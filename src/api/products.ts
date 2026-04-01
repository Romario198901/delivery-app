import type { Product } from "../types/product";
import { api } from "./axios";

interface AxiosProductResponce {
  totalPages: number;
  products: Product[];
}

export const getAllProducts = async (
  page = 1,
): Promise<AxiosProductResponce> => {
  const { data } = await api.get<AxiosProductResponce>("/products", {
    params: {
      page,
      perPage: 10,
    },
  });
  return data;
};
