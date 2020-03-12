import React, { useState, useContext, useEffect } from "react";
import data from "../../data/data.json";
import Navbar from "../navbar/index";
import { CartContext } from "../../CartContext";
import FilterTab from "./filterTab.js";
import Product from "./product/index";

export default function Dashboard(props) {
  const [cart, setCart] = useContext(CartContext);
  const [products, setProducts] = useState(data);
  const [filterProducts, setFilterProducts] = useState(products);

  useEffect(() => {
    if (localStorage.getItem("cartItems")) {
      setCart(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);

  const count = () => {
    let track = 0;
    cart.forEach(data => {
      track = track + data.quantity;
    });

    return track;
  };

  const handleSort = e => {
    let sortProducts = [...filterProducts];
    if (e.currentTarget.value === "ascending") {
      sortProducts.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
    } else if (e.currentTarget.value === "descending") {
      sortProducts.sort((a, b) => (b.title > a.title ? 1 : -1));
    } else if (e.currentTarget.value === "lowestprice") {
      sortProducts.sort((a, b) =>
        a.price > b.price ? 1 : b.price > a.price ? -1 : 0
      );
    } else if (e.currentTarget.value === "highestprice") {
      sortProducts.sort((a, b) => (b.price > a.price ? 1 : -1));
    }
    setFilterProducts(sortProducts);
  };

  const handleFilter = e => {
    if (e.currentTarget.value === "all") {
      setFilterProducts(products);
    } else {
      let filterProducts = [...products];
      let result = filterProducts.filter(
        a => a.availableSizes.indexOf(e.currentTarget.value) >= 0
      );
      setFilterProducts(result);
    }
  };

  return (
    <>
      <Navbar count={count} />
      <div className="margin-all">
        <FilterTab
          handleSort={handleSort}
          handleFilter={handleFilter}
          filteredProducts={filterProducts}
        />
        <Product filterProducts={filterProducts} />
      </div>
    </>
  );
}
