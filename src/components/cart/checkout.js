import React from "react";
import { toast } from "react-toastify";

export default function Checkout() {
  return (
    <>
      <button
        style={{
          backgroundColor: "#008CBA",
          fontSize: "10px",
          padding: "10px 24px",
          color: "white",
          fontWeight: "bold"
        }}
        onClick={() => toast.success("To-do Proceed to Buy")}
        className="btn btn-primary"
      >
        Proceed to Buy
      </button>
    </>
  );
}
