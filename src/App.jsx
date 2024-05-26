import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import ListProducts from "./components/ListProducts";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mens" element={<Category gender="Masculin" />} />
          <Route path="/womens" element={<Category gender="Féminin" />} />
          <Route path="/mixte" element={<Category gender="Mixte" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/listproduct" element={<ListProducts />} />
          <Route path="/edit/:productId" element={<UpdateProduct />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
