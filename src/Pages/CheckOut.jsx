import { useSelector } from "react-redux";
import BasketBuy from "../components/BasketBuy";
import Information from "../components/Information";
// import { useCart } from "../contexts/CartProvider";
import styles from "./Checkout.module.css";
function CheckOut() {
  const state = useSelector((store) => store.cart);
  // const [state, dispatch] = useCart();

  return (
    <div className={styles.container}>
      {!!state.selectedItems.length ? (
        <div className={styles.checkout}>
          <Information />
        </div>
      ) : (
        <h1>Your Cart Is Empty</h1>
      )}
      <div className={styles.orders}>
        {state.selectedItems.map((p) => (
          <BasketBuy key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

export default CheckOut;
