import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllShops } from "../api/shops";
import ShopList from "../components/ShopList/ShopList";
import Pagination from "../components/Pagination/Pagination";
import { useState } from "react";
import css from "./ShopPage.module.css";
import ProductList from "../components/ProductList/ProductList";
import { getAllProducts } from "../api/products";
import type { Product } from "../types/product";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useCartStore } from "../store/cartStore";
import toast from "react-hot-toast";

export default function ShopPage() {
  const [shopsPage, setShopsPage] = useState(1);
  const [productsPage, setProductsPage] = useState(1);
  const [manualSelectedShopId, setManualSelectedShopId] = useState<
    string | null
  >(null);
  const [categories, setCategories] = useState("");
  const [sortBy, setSortBy] = useState<"price" | "name" | "">("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const addToCart = useCartStore((state) => state.addToCart);

  const {
    data: shopsData,
    isLoading: shopsIsLoading,
    isError: shopsIsError,
  } = useQuery({
    queryKey: ["shops", shopsPage],
    queryFn: () => getAllShops(shopsPage),
    initialData: {
      shops: [],
      totalPages: 0,
    },
    placeholderData: keepPreviousData,
  });
  const selectedShopId =
    manualSelectedShopId ?? shopsData.shops[0]?._id ?? null;

  const {
    data: productsData,
    isLoading: productsIsLoading,
    isError: productsIsError,
  } = useQuery({
    queryKey: [
      "products",
      selectedShopId,
      productsPage,
      categories,
      sortBy,
      sortOrder,
    ],
    queryFn: () =>
      getAllProducts({
        page: productsPage,
        shopId: selectedShopId ?? undefined,
        categories: categories || undefined,
        sortBy: sortBy || undefined,
        sortOrder,
      }),
    enabled: !!selectedShopId,
    initialData: {
      products: [],
      totalPages: 0,
    },
    placeholderData: keepPreviousData,
  });
  const handleSelectShop = (shopId: string) => {
    setManualSelectedShopId(shopId);
    setProductsPage(1);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const handleResetFilters = () => {
    setCategories("");
    setSortBy("");
    setSortOrder("asc");
    setProductsPage(1);
  };

  return (
    <section className={css.page}>
      <div className={css.layout}>
        <div className={css.sidebar}>
          {shopsIsLoading && <Loader />}
          {shopsIsError && <Error />}
          {shopsData.shops.length > 0 && !shopsIsLoading && !shopsIsError && (
            <ShopList
              shops={shopsData.shops}
              selectedShopId={selectedShopId}
              onSelectShop={handleSelectShop}
            />
          )}
          {shopsData.totalPages > 1 && (
            <Pagination
              page={shopsPage}
              totalPages={shopsData.totalPages}
              onChange={setShopsPage}
            />
          )}
        </div>
        <div className={css.content}>
          {productsIsLoading && <Loader />}
          {productsIsError && <Error />}
              <ProductList
                products={productsData.products}
                categories={categories}
                sortBy={sortBy}
                sortOrder={sortOrder}
                onCategoriesChange={setCategories}
                onSortByChange={setSortBy}
                onSortOrderChange={setSortOrder}
                onResetFilters={handleResetFilters}
                onAddToCart={handleAddToCart}
              ></ProductList>
          {productsData.totalPages > 1 && (
            <Pagination
              page={productsPage}
              totalPages={productsData.totalPages}
              onChange={setProductsPage}
            />
          )}
        </div>
      </div>
    </section>
  );
}
