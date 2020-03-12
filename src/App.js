import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/index";
import { Cart } from "./components/cart/index";
import { CartProvider } from "./CartContext";

export const CartContext = React.createContext();

function App() {
  return (
    <React.Fragment>
      <CartProvider>
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </CartProvider>
    </React.Fragment>
  );
}

export default App;
