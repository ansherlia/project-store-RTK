import { shortenText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./BasketBuy.module.css";
import { useDispatch, useSelector } from "react-redux";
import { decreaser, increaser, removeItem } from "../features/cart/cartSlice";

function BasketBuy({ data }) {
  const state = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const { image, id, title, quantity } = data;

  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.click}>
        {quantity === 1 ? (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        ) : (
          <button onClick={() => dispatch(decreaser(data))}>-</button>
        )}
        <p>{quantity}</p>
        <button onClick={() => dispatch(increaser(data))}>+</button>
      </div>
    </div>
  );
}

export default BasketBuy;
