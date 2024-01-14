import { useDispatch } from "react-redux";
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import styles from "./BasketSideBar.module.scss";
import { checkOut } from "../features/cart/cartSlice";
function BasketSideBar({ state }) {

  const dispatch = useDispatch()
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{state.total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>

      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.checkOut && "Pending..."}</span>
      </div>
      <button onClick={() => dispatch(checkOut())}>CheckOut</button>
    </div>
  );
}

export default BasketSideBar;
