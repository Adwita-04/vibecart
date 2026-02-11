import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import CategoryProduct from "./pages/CategoryProduct";
import { useCart } from "./context/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";

const App = () => {
  const [location, setLocation] = useState({
    city: "",
    region: "",
    country: "",
  });
  const [openDropdown, setOpenDropdown] = useState(false);
  const { cartItem, setCartItem } = useCart();

  // CLEAN GETLOCATION FUNCTION
  const getLocation = async () => {
    try {
      const res = await axios.get("https://ipwho.is/");

      if (res.data && res.data.success) {
        console.log("Location Success:", res.data.city);
        setLocation({
          city: res.data.city,
          region: res.data.region,
          country: res.data.country,
        });
      }
      setOpenDropdown(false); 
    } catch (err) {
      console.error("Galti yahan hai:", err.message);
    }
  };

  // Run once on mount
  useEffect(() => {
    getLocation();
  }, []);

  // Load cart logic (Corrected)
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      try {
        const parsed = JSON.parse(storedCart);
        if (Array.isArray(parsed)) setCartItem(parsed);
      } catch (err) {
        console.log("Error parsing cart:", err);
        setCartItem([]);
      }
    }
  }, [setCartItem]);

  // Save cart logic
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/category/:category" element={<CategoryProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart location={location} getLocation={getLocation} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
