import React, { useContext } from "react";

import { CardContext } from "../context/cordContextProvider";
import { Shorter } from "./../helper/function";

import styles from "./Cart.module.css";
const Card = (props) => {
  const { state, dispatch } = useContext(CardContext);
  const { image, title, price, quantity } = props.data;

  return (
    <div className={styles.container}>
      <img className={styles.productImage} alt="logos" src={image} />
      <div className={styles.data}>
        <h3>{Shorter(title)}</h3>
        <p>{price}</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <img style={{ width: "10px" }} alt="images" src="./img/trash.svg" />
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
