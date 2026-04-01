import css from "./ShopList.module.css";
import type { Shop } from "../../types/shop";

interface ShopListProps {
  shops: Shop[];
  selectedShopId: string | null;
  onSelectShop: (shopId: string) => void;
}
export default function ShopList({
  shops,
  selectedShopId,
  onSelectShop,
}: ShopListProps) {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Shops</h2>

      <ul className={css.list}>
        {shops.map((shop) => (
          <li key={shop._id}>
            <button
              type="button"
              className={`${css.item} ${selectedShopId === shop._id ? css.active : ""}`}
              onClick={() => onSelectShop(shop._id)}
            >
              <span>{shop.name}</span>
              <span className={css.rating}>⭐ {shop.rating}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
