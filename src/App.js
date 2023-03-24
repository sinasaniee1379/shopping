import React from "react";
import ProductContextProvider from "./context/ProductContextProvider";
import Store from "./components/Store";
import { Redirect, Route, Switch } from "react-router";
import ProductDetail from "./components/ProductDetail";
import CardContextProvider from "./context/cordContextProvider";
import NavBar from "./ProductFile/NavBar";
import ShopCard from "./components/shopCard";
function App() {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <NavBar />
        <Switch>
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/products" component={Store} />
          <Route path="/shopCard" component={ShopCard} />
          <Redirect to="/products" />
        </Switch>
      </CardContextProvider>
    </ProductContextProvider>
  );
}

export default App;
