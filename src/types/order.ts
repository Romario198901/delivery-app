export interface Order {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  items: OrderItem[];
  totalPrice: number;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}
