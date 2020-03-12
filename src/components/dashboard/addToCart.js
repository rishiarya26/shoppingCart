import React, { useContext, useEffect } from "react";
import { CartContext } from "../../CartContext";
import { toast } from "react-toastify";

export default function AddToCart(props) {
  const [cart, setCart] = useContext(CartContext);

  const { title, price, id, img, avaQuant } = props;
  const addToCart = () => {
    const tshirt = {
      name: title,
      price: price,
      id: id,
      img: img,
      avaQuant: avaQuant
    };

    let cartItems = [...cart];
    let productAlreadyInCart = false;

    cartItems.forEach(data => {
      if (data.id === id) {
        if (data.quantity < avaQuant) {
          data.quantity += 1;
          toast.success(`${data.name} added to cart`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
          });
        } else {
          toast.error(`Can only add ${avaQuant} of this ${title}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 4000
          });
        }
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartItems.push({ ...tshirt, quantity: 1 });
      toast.success(`${tshirt.name} added to cart`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      });
    }

    setCart(cartItems);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <button onClick={addToCart}>
        {" "}
        {
          <i className="fa fa-cart-plus fa-1x " aria-hidden="true">
            {" "}
            +
          </i>
        }
      </button>
    </>
  );
}
