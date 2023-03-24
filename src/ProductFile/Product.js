import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../context/cordContextProvider";
import { Shorter, isInCard, quantityCount } from "./../helper/function";

import styles from "./Product.module.css";
export const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className={styles.container}>
      <img
        className={styles.cardImage}
        src={productData.image}
        alt="products"
        style={{ width: "200px" }}
      />
      <h3> {Shorter(productData.title)} </h3>
      <p>{productData.price}</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img
                src="./img/trash.svg"
                alt="trash"
                style={{ width: "13px" }}
              />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}

          {quantityCount(state, productData.id) > 0 && (
            <span className={styles.counter}>
              {quantityCount(state, productData.id)}
            </span>
          )}

          {isInCard(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
