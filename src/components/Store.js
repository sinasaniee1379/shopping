import React, { useContext } from "react";
import { Product } from "../ProductFile/Product";
import { ProductsContext } from "../context/ProductContextProvider";

import styles from "./Store.module.css";

const Store = () => {
  const products = useContext(ProductsContext);
  // console.log(products);
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
