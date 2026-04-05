import { useState } from "react";
import type { CardProduct } from "../../store/cartStore";
import css from "./CartItem.module.css";

interface CartItemProps {
  item: CardProduct;
  updateQuantity: (productId: string, quantity: number) => void;
  onIncrease: (prouctId: string) => void;
  onDecrease: (productId: string) => void;
  onRemove: (productId: string) => void;
}
export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
  updateQuantity,
}: CartItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftQty, setDraftQty] = useState(String(item.quantity));

  const startEditing = () => {
    setDraftQty(String(item.quantity));
    setIsEditing(true);
  };

  const commitDraft = () => {
    const quantity = Number(draftQty);

    if (!draftQty || Number.isNaN(quantity) || quantity < 1) {
      setDraftQty(String(item.quantity));
      setIsEditing(false);
      return;
    }

    updateQuantity(item._id, quantity);
    setIsEditing(false);
  };

  const cancelDraft = () => {
    setDraftQty(String(item.quantity));
    setIsEditing(false);
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
        {isEditing ? (
          <input
            type="text"
            inputMode="numeric"
            value={draftQty}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setDraftQty(value);
              }
            }}
            onBlur={commitDraft}
            onKeyDown={(e) => {
              if(e.key === 'Enter') commitDraft();
              if(e.key === 'Escape') cancelDraft();
            }}
            className={css.quantityInput}
            autoFocus
          />
        ) : (
          <button
            type="button"
            className={css.quantityValue}
            onClick={startEditing}
          >
            {item.quantity}
          </button>
        )}

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
