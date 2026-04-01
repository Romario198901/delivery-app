import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.inner}>
        <a href="/" className={css.logo}>
          DELIVERY APP
        </a>
        <nav className={css.nav}>
          <a href="/" className={css.link}>
            Shop
          </a>
          <a href="/" className={css.link}>
            Shopping Cart
          </a>
        </nav>
      </div>
    </header>
  );
}
