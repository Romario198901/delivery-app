import css from "./ShopList.module.css";
import type { Shop } from "../../types/shop";

interface ShopListProps {
  shops: Shop[];
}
export default function ShopList({ shops }: ShopListProps) {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Shops:</h2>
      <ul className={css.list}>
        {shops.map((shop) => (
          <li className={css.item} key={shop._id}>
            {shop.name}
            <span className={css.rating}>{shop.rating}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
