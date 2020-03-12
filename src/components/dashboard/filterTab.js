import React from "react";

export default function FilterTab(props) {
  const { handleSort, handleFilter, sort, filteredProducts } = props;
  return (
    <div>
      <span
        style={{
          display: "inline-block",
          marginLeft: "30px",
          marginRight: "30px"
        }}
      >
        <label>
          <h4>Order by</h4>
          <select className="form-control" value={sort} onChange={handleSort}>
            <option value="">Select</option>
            <option value="ascending">ascending by Name</option>
            <option value="descending">descending by Name</option>
            <option value="lowestprice">Lowest to highest</option>
            <option value="highestprice">Highest to lowest</option>
          </select>
        </label>
      </span>
      <span style={{ display: "inline-block" }}>
        <label>
          {" "}
          <h4>Filter Size</h4>
          <select
            className="form-control"
            // value={filter}
            onChange={handleFilter}
          >
            <option value="all">ALL</option>
            <option value="X">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </label>
      </span>
      <span style={{ display: "inline-block" }}>
        {filteredProducts.length} products found.
      </span>
    </div>
  );
}
