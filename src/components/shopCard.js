import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CardContext } from "./../context/cordContextProvider";
import Card from "./Card";
import styles from "./ShopCart.module.css";

const ShopCard = () => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectItem.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      {state.itemCounters > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total item:</span> {state.itemCounters}
          </p>
          <p>
            <span>Total Payment : </span> {state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              checkout
            </button>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              clear
            </button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div className={styles.complete}>
          <span>checked out Successfully</span>
          <Link to="/products">Buy more?</Link>
        </div>
      )}
      {!state.checkout && state.itemCounters === 0 && (
        <div>
          <span>Want to Buy</span>
          <Link to="/products">Go Back Shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCard;
