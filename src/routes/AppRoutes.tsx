import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Contact from "../pages/Contact/contact";
import Products from "../pages/Products/products";
import About from "../pages/About/About";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Payment from "../pages/Payment/Payment";
import OrderConfirmation from "../pages/OrderConfirmation/OrderConfirmation";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
