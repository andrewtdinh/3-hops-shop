import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>I am the Checkout Page</h1>
      <div>
        {cartItems.map((cartItem) => {
          if (cartItem) {
            const { id, name, quantity } = cartItem;
            return (
              <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <span onClick={() => removeItemFromCart(cartItem)}>
                  {" "}
                  decrement{" "}
                </span>
                <span onClick={() => addItemToCart(cartItem)}> increment </span>
              </div>
            );
          } else {
            return undefined;
          }
        })}
      </div>
    </div>
  );
};

export default Checkout;
