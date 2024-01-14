import { useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";

import styles from "./CheckOutPage.module.scss";

function CheckOutPage() {
  const state = useSelector((state) => state.cart);



  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p>Empty cart</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <BasketSideBar state={state}  />
      <div className={styles.products}>
        {state.selectedItems.map((item) => (
          <BasketCard key={item.id} data={item}  />
        ))}
      </div>
    </div>
  );
}

export default CheckOutPage;
