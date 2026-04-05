import { useState } from "react";
import type { CardProduct } from "../../store/cartStore";
import css from "./CartItem.module.css";

interface CartItemProps {
  item: CardProduct;
  updateQuantity: (productId: string,value: number) => void;
  onIncrease: (prouctId: string) => void;
  onDecrease: (productId: string) => void;
  onRemove: (productId: string) => void;
}
export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
  updateQuantity
}: CartItemProps) {
 const [localQty, setLocalQty] = useState<string | null>(null);
const displayQty = localQty ?? String(item.quantity);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
if (/^\d*$/.test(value)) {
    setLocalQty(value);
  }
};

const handleBlur = () => {
  const num = Number(localQty);
  if (!localQty || isNaN(num) || num < 1) {
    setLocalQty("1");
    updateQuantity(item._id, 1);
    return;
  }
  updateQuantity(item._id, num);
};
  return (
    <li className={css.item}>
      <img
        className={css.image}
        src={item.image}
        alt={`Image of ${item.name}`}
        onError={(e) => (e.currentTarget.src = "https://picsum.photos/400/300")}
      />
      <div className={css.info}>
        <p className={css.name}>{item.name}</p>
        <p>{item.category}</p>
        <p className={css.price}>{item.price}</p>
      </div>
      <div className={css.actions}>
        <button
          className={css.qtyBtn}
          type="button"
          onClick={() => onDecrease(item._id)}
        >
          -
        </button>
        <input
          type="text"
          inputMode="numeric"
          value={displayQty}
          onChange={handleChange}
          onBlur={handleBlur}
          className={css.quantityInput}
        /> <span>{displayQty || 1}</span>
       

        <button
          className={css.qtyBtn}
          type="button"
          onClick={() => onIncrease(item._id)}
        >
          +
        </button>

        <button
          className={css.removeBtn}
          type="button"
          onClick={() => onRemove(item._id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
}
