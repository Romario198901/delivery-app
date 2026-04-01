export interface Order {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  items: OrderItem[];
}

export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}
