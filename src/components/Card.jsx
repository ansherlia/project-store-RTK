import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { productQuantity, shortenText } from "../helper/helper";
import styles from "./Card.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaser,
  increaser,
  removeItem,
} from "../features/cart/cartSlice";

function Card({ data }) {
  const { id, image, title, price, category } = data;

  const state = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const quantity = productQuantity(state, id);


  return (
    <div>
      <div className={styles.card}>
        <img src={image} alt={title} style={{ width: "150px" }} />
        <h3>{shortenText(title)}</h3>
        <p>{price} $</p>
        <div className={styles.actions}>
          <Link to={`/products/${id}`}>
            <TbListDetails />
          </Link>
          <div>
            {quantity === 1 && (
              <button onClick={() => dispatch(removeItem(data))}>
                <MdDeleteOutline />
              </button>
            )}
            {quantity > 1 && (
              <button onClick={() => dispatch(decreaser(data))}>-</button>
            )}
            {!!quantity && <span>{quantity}</span>}
            {quantity === 0 ? (
              <button onClick={() => dispatch(addItem(data))}>
                <TbShoppingBagCheck />
              </button>
            ) : (
              <button onClick={() => dispatch(increaser(data))}>+</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
