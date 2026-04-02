import type { Product } from "../../types/product";
import css from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className={css.card}>
      <img
        className={css.image}
        src={product.image}
        alt={`Image of ${product.name}`}
        onError={(e) => {
          e.currentTarget.src = "https://picsum.photos/400/300";
        }}
      />
      <div className={css.body}>
        <h3 className={css.name}>{product.name}</h3>
        <p className={css.category}>{product.category}</p>
        <p className={css.price}>{product.price}</p>
        <button className={css.button} onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
