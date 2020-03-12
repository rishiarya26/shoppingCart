import React from "react";
import Image from "./image";
import PriceAddItemBar from "./priceAddItemBar";

export default function Product(props) {
  const { filterProducts } = props;
  return (
    <>
      <div className="grid-container topMarg">
        {filterProducts.map((data, id) => (
          <div key={id} className="card1 grid-item ">
            <div className="marg-bot"> {data.title}</div>
            <hr />
            <Image data={data} />
            <PriceAddItemBar data={data} />{" "}
          </div>
        ))}
      </div>
    </>
  );
}
