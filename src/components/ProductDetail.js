import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "./../context/ProductContextProvider";
import styles from "./ProductDetails.module.css";

const ProductDetail = ({ match }) => {
  const id = match.params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="Logo" />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          {" "}
          <span>Category:</span> {category}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price}$</span>
          <Link to="/product">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
