// import { useCart } from "../contexts/CartProvider";
import { FaClipboardList } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../features/cart/cartSlice";

function Information() {
  // const [state, dispatch] = useCart();
  const state = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return (
    !!state.selectedItems.length && (
      <>
        <p>
          <FaClipboardList />
          Total : <span>{state.totalPrice}</span>
        </p>
        <p>
          <FaHashtag />
          Quantity : <span>{state.itemCounter}</span>
        </p>
        <p>
          <AiFillCheckCircle />
          status :{" "}
          {state.checkout ? <span>Success</span> : <span>Pending...</span>}
        </p>
        <button onClick={() => dispatch(checkout())}>Checkout</button>
      </>
    )
  );
}

export default Information;
