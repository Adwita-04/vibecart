import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import CategoryProduct from './pages/CategoryProduct'
import { useCart } from './context/CartContext'
import ProtectedRoute from './components/ProtectedRoute'
import axios from 'axios'

const App = () => {
  const [location, setLocation] = useState(null)
  const [openDropdown, setOpenDropdown] = useState(false)
  const { cartItem, setCartItem } = useCart()

  // Frontend-safe IP-based location fetch (avoids CORS issues)
  const getLocation = async () => {
    try {
      const res = await axios.get('https://ipapi.co/json/')
      setLocation({
        city: res.data.city,
        region: res.data.region,
        country: res.data.country_name,
        postal: res.data.postal,
      })
      setOpenDropdown(false)
    } catch (err) {
      console.log('Location fetch error:', err)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  // Load cart from local storage safely
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItem')
    if (storedCart) {
      try {
        const parsed = JSON.parse(storedCart)
        if (Array.isArray(parsed)) setCartItem(parsed)
        else setCartItem([])
      } catch (err) {
        console.log('Error parsing cart:', err)
        setCartItem([])
      }
    }
  }, [])

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
  }, [cartItem])

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/category/:category' element={<CategoryProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/cart'
          element={
            <ProtectedRoute>
              <Cart location={location} getLocation={getLocation} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
