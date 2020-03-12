import React from "react";
import util from "../../../util";
import AddToCart from "../addToCart";

export default function PriceAddItemBar(props) {
  const { data } = props;

  const addButtonStyle = {
    position: "absolute",
    right: "25px"
  };
  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "40%"
        }}
      >
        {" "}
        {util.formatCurrency(data.price)}{" "}
        <AddToCart
          styleProps={addButtonStyle}
          avaQuant={data.availableQuantity}
          title={data.title}
          id={data.id}
          price={data.price}
          img={data.imgUrl}
        />
        {data.quantity && <span>{data.quantity}</span>}
      </div>
    </>
  );
}
