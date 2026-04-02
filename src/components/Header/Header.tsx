import { Link } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.inner}>
        <Link to="/" className={css.logo}>
          DELIVERY APP
        </Link>
        <nav className={css.nav}>
          <Link to="/" className={css.link}>
            Shop
          </Link>
          <Link to="/cart" className={css.link}>
            Shopping Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
