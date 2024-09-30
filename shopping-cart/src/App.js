import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css"; // Import the CSS file here

function App() {
  return (
    <div className="App">
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
