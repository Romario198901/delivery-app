import type { Shop } from "../types/shop";
import { api } from "./axios";

interface AxiosShopResponce {
  totalPages: number;
  shops: Shop[];
}

export const getAllShops = async (page = 1): Promise<AxiosShopResponce> => {
  const { data } = await api.get<AxiosShopResponce>("/shops", {
    params: {
      page,
      perPage: 10,
    },
  });
  return data;
};
