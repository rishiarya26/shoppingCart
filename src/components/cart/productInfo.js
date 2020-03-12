import React from "react";
import util from "../../util";

export default function ProductInfo(props) {
  const { item, handleRemove } = props;
  return (
    <>
      {item.quantity} X {util.formatCurrency(item.price)}
      <button
        className="btn btn-danger btn-xs"
        onClick={e => handleRemove(e, item)}
      >
        -
      </button>
    </>
  );
}
