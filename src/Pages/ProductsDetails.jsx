/** @format */

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/config";
// import { useProductDetail } from "../contexts/ProductContext";
import Loader from "../components/Loader";
import styles from "./ProductsDetails.module.css";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productsSlice";

function ProductsDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.products.product.find((i) => i.id === +id)
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (!item)
    return (
      <div className={styles.load}>
        <Loader />
      </div>
    );
  console.log(item);
  return (
    <div className={styles.container}>
      <img src={item.image} alt={item.title} />
      <div className={styles.details}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div>
          <h3>{item.category}</h3>
          <div className={styles.foot}>
            <p>
              <IoMdPricetag /> <span>{item.price}</span>
            </p>
            <Link to="/">
              <IoMdArrowRoundBack />
              Back To Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
