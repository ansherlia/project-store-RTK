const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (product, search) => {
  if (!search) return product;
  const searchedProducts = product.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

const filterProducts = (product, category) => {
  if (!category || category === "all") return product;
  const filteredProducts = product.filter((p) =>
    p.category.toLowerCase().includes(category)
  );
  return filteredProducts;
};

const createObjectQuery = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

// const sumProducts = (products) => {
//   return { itemCounter, totalPrice };
// };

const sumPrice = (products) => {
  return products
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
};

const sumQuantity = (products) => {
  return products.reduce((acc, cur) => acc + cur.quantity, 0);
};

const productQuantity = (state, id) => {
  const indexing = state.selectedItems.findIndex((item) => item.id === id);
  if (indexing === -1) {
    return 0;
  } else {
    return state.selectedItems[indexing].quantity;
  }
};

export {
  getInitialQuery,
  shortenText,
  productQuantity,
  searchProducts,
  filterProducts,
  createObjectQuery,
  sumPrice,
  sumQuantity,
};
