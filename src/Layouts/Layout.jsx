import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { productQuantity } from "../helper/helper";
import { Link } from "react-router-dom";
// import { useCart } from "../contexts/CartProvider";
import styles from "./Layout.module.css";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const state = useSelector((store) => store.cart);
  // const [state] = useCart();
  return (
    <>
      <header>
        <Link to="/products">TaskMna Shop</Link>
        <Link to="/checkout">
          <LuShoppingCart />
          {!!state.itemCounter && <span>{state.itemCounter}</span>}
        </Link>
      </header>
      {children}
      <footer>
        <p>Developed By Reza With</p>
        {/* <span>
					<FaHeart />
				</span> */}
        <span>&#9829;</span>
      </footer>
    </>
  );
}

export default Layout;
