import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
