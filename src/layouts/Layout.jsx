import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiShoppingCartSimpleBold } from "react-icons/pi";


import styles from './Layout.module.scss'

function Layout({children}) {
  const state = useSelector(state=>state.cart)
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">ShopStore</Link>
        <Link to="/checkout">
        <div>
        <PiShoppingCartSimpleBold />
          {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
        </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>

        <p>Developed by rezRad with ♥️</p>
      </footer>
    </>
  );
}

export default Layout;
