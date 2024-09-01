/** @format */

import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ContextProduct = createContext();

function ProductProvider({ children }) {
	const [product, setProduct] = useState([]);
	const [errorConnect, setErrorConnect] = useState(false);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await api.get("/products");
				setProduct(response);
			} catch (error) {
				setErrorConnect(true);
			}
		};
		fetchProducts();
	}, []);
	return (
		<ContextProduct.Provider value={product}>
			{children}
		</ContextProduct.Provider>
	);
}

const useProducts = () => {
	const products = useContext(ContextProduct);
	return products;
};

const useProductDetail = (id) => {
	const productss = useContext(ContextProduct);
	const result = productss.find((item) => item.id === id);
	return result;
};

// export default ProductProvider;
// export { useProducts, useProductDetail };
