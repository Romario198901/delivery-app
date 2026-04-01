import type { Order } from "../types/order";
import { api } from "./axios";

interface AxiosOrdersResponse {
  totalPages: number;
  orders: Order[];
}

export const getAllOrders = async (page = 1): Promise<AxiosOrdersResponse> => {
  const { data } = await api.get<AxiosOrdersResponse>("/orders", {
    params: {
      page,
    },
  });
  return data;
};

export const createOrder = async (order: Order): Promise<Order> => {
  const { data } = await api.post<Order>("/orders", order);
  return data;
};
