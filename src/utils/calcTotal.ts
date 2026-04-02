import type { CardProduct } from "../store/cartStore";

export const calcTotal = (items: CardProduct[]) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
