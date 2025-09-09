import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import ShoppingCart from "./pages/ShopingCart/ShopingCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shop />} path="/" />
        <Route element={<ShoppingCart />} path="/shoppingCart" />
        <Route element="" path="" />
        <Route element="" path="" />
        <Route path="*" element={<div>Сторінка не знайдена</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
