import React from 'react';
import { Link } from 'react-router-dom';

export default function ForEmptyCart() {
  return (
    <>
      <div>
            <div style={{ textAlign: "center" }}>Cart is empty</div>
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <Link to="/">Add Some Items</Link>
            </div>
          </div>
    </>
  );
}
