import css from "./ProductList.module.css";
import type { Product } from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";
interface ProductListProps {
  products: Product[];
  categories: string;
  sortBy: "price" | "name" | "";
  sortOrder: "asc" | "desc";
  onCategoriesChange: (value: string) => void;
  onSortByChange: (value: "price" | "name" | "") => void;
  onSortOrderChange: (value: "asc" | "desc") => void;
  onResetFilters: () => void;
  onAddToCart: (product: Product) => void;
}
export default function ProductList({
  products,
  categories,
  sortBy,
  sortOrder,
  onCategoriesChange,
  onSortByChange,
  onSortOrderChange,
  onResetFilters,
  onAddToCart,
}: ProductListProps) {
  return (
    <div className={css.wrapper}>
      <div className={css.controls}>
        <select
          value={categories}
          onChange={(e) => onCategoriesChange(e.target.value)}
        >
          <option value="">All categories</option>
          <option value="Burgers">Burgers</option>
          <option value="Drinks">Drinks</option>
          <option value="Desserts">Desserts</option>
          <option value="Pizza">Pizza</option>
          <option value="Salads">Salads</option>
          <option value="Snacks">Snacks</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) =>
            onSortByChange(e.target.value as "price" | "name" | "")
          }
        >
          <option value="">No sorting</option>
          <option value="price">Sort by price</option>
          <option value="name">Sort by name</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => onSortOrderChange(e.target.value as "asc" | "desc")}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button type="button" onClick={onResetFilters}>
          Reset filters
        </button>
      </div>
      <ul className={css.grid}>
        {products.map((product) => (
          <li key={product._id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
