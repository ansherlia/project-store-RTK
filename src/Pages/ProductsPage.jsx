/** @format */

import { ImSearch } from "react-icons/im";
import Card from "../components/Card";
import Loader from "../components/Loader";
import styles from "./ProductsPage.module.css";
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";
import { RotatingLines } from "react-loader-spinner";
import {
  filterProducts,
  searchProducts,
  createObjectQuery,
  getInitialQuery,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productsSlice";

function ProductsPage() {
  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
console.log(query)
  useEffect(() => {
    setDisplayed(product);
    setQuery(getInitialQuery(searchParams));
  }, [product]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalData = filterProducts(product, query.category);
    finalData = searchProducts(finalData, query.search);
    setDisplayed(finalData);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        {!displayed.length && <Loader />}

        <div className={styles.products}>
          {displayed.map((p) => (
            <Card data={p} key={p.id} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
