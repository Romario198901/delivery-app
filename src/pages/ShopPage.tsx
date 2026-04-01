import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllShops } from "../api/shops";
import ShopList from "../components/ShopList/ShopList";
import Pagination from "../components/Pagination/Pagination";
import { useState } from "react";
import css from './ShopPage.module.css';

export default function ShopPage() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["shops", page],
    queryFn: () => getAllShops(page),
    initialData: {
      shops: [],
      totalPages: 0,
    },
    placeholderData: keepPreviousData,
  });
  return (
    <section className={css.page}>
    <div className={css.layout}>
    <div className={css.sidebar}>
      {data.shops.length > 0 && !isLoading && !isError && (
        <ShopList shops={data.shops} />
      )}
      {data.totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={data.totalPages}
          onChange={setPage}
        />
      )}
    </div>
    <div className={css.content}>

    </div>
    </div>
    </section>
  );
}
