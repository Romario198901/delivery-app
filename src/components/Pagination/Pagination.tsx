import css from "./Pagination.module.css";
interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}
export default function Pagination({
  onChange,
  page,
  totalPages,
}: PaginationProps) {
  return (
    <div className={css.pagination}>
      <button
        className={css.pageButton}
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        ← Prev
      </button>

      <span className={css.pageInfo}>
        Page {page} of {totalPages}
      </span>

      <button
        className={css.pageButton}
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
      >
        Next →
      </button>
    </div>
  );
}
