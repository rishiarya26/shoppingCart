import React, { useContext } from "react";
import util from "../../util";
import { CartContext } from "../../CartContext";

export default function TotalSum(props) {
  const [cart, setCart] = useContext(CartContext);
  return (
    <>
      <b>
        Total :{" "}
        {util.formatCurrency(
          cart.reduce((a, c) => a + c.price * c.quantity, 0)
        )}
      </b>
    </>
  );
}
