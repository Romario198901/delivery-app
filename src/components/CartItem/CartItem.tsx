import type { CardProduct } from "../../store/cartStore";
import css from "./CartItem.module.css";

interface CartItemProps {
  item: CardProduct;
  onIncrease: (prouctId: string) => void;
  onDecrease: (productId: string) => void;
  onRemove: (productId: string) => void;
}
export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
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

        <span>{item.quantity}</span>

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
