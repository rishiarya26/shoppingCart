import React, { useContext, useEffect } from "react";
import { CartContext } from "../../CartContext";
import Navbar from "../navbar";
import AddToCart from "../dashboard/addToCart";
import ForEmptyCart from "./forEmptyCart";
import DeleteButton from "./deleteButton";
import ProductInfo from "./productInfo";
import Checkout from "./checkout";
import TotalSum from "./totalSum";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    if (localStorage.getItem("cartItems")) {
      setCart(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);

  const handleRemove = (e, item) => {
    let updateCart = [...cart];

    updateCart.forEach((data, id, object) => {
      if (data.id === item.id) {
        if (data.quantity > 1) {
          data.quantity = data.quantity - 1;
        } else if (data.quantity === 1) {
          object.splice(id, 1);
        }
      }
    });

    setCart(updateCart);
  };

  const handleDelete = (e, item) => {
    setCart(cart.filter(a => a.id !== item.id));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const count = () => {
    let track = 0;
    cart.forEach(data => {
      track = track + data.quantity;
    });

    return track;
  };

  return (
    <>
      <Navbar count={count} />
      <div className="alert alert-info card2" style={{ marginLeft: "19%" }}>
        {cart.length === 0 ? (
          <ForEmptyCart />
        ) : (
          <div>
            You have {count()} items in the basket. <hr />
          </div>
        )}

        {cart.length > 0 && (
          <div style={{ overflowY: "scroll", height: "500px" }}>
            <ul style={{ listStyleType: "none" }}>
              {cart.map((item, id) => (
                <>
                  <li key={id}>
                    <div
                      className="grid-box"
                      style={{
                        textAlign: "center",
                        position: "relative"
                      }}
                    >
                      <span>
                        <img
                          src={item.img}
                          alt="Img not found"
                          width="100px"
                          height="100px"
                        />{" "}
                      </span>

                      <div className="grid-small">
                        {" "}
                        <span className="space">{item.name}</span>{" "}
                        <span>
                          <ProductInfo
                            item={item}
                            handleRemove={handleRemove}
                          />
                          <span>
                            {" "}
                            <AddToCart
                              avaQuant={item.avaQuant}
                              name={item.title}
                              id={item.id}
                              img={item.imgUrl}
                              price={item.price}
                            />
                          </span>
                          <DeleteButton
                            handleDelete={handleDelete}
                            item={item}
                          />
                        </span>
                      </div>
                    </div>
                    <br />
                    <hr />
                  </li>
                </>
              ))}
            </ul>
          </div>
        )}
        {cart.length > 0 && (
          <div>
            <hr />
            <div
              style={{
                marginTop: "25px",
                marginBottom: "2px",
                marginLeft: "50px"
              }}
            >
              <TotalSum />
              <span>
                <Checkout />
              </span>
              {/* </div> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
