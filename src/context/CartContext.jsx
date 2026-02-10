import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([])

    const addToCart = (product) => {
        const itemInCart = cartItem.find((item) => item.id === product.id)
        if (itemInCart) {
            // Increase quantity if already in cart
            const updatedCart = cartItem.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItem(updatedCart)
            toast.success("Product quantity increased!")
        } else {
            //Add new ietm with quantity 1
            setCartItem([...cartItem, { ...product, quantity: 1 }])
            toast.success("Product is added to cart!")

        }
    }

    const updateQuantity = (productId, action) => {
  setCartItem(prev =>
    prev
      .map(item => {
        if (item.id === productId) {

          // INCREASE
          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          }

          // DECREASE
          if (action === "decrease") {

            // quantity already 1 → warn & remove
            if (item.quantity === 1) {
              toast.warning("Item removed from cart");
              return null; // removes item
            }

            // quantity > 1 → safe decrease
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
      .filter(Boolean) // removes null items
  );
};


    const deleteItem = (productId) => {
        setCartItem(cartItem.filter(item => item.id !== productId))
        toast.error("Product is deleted from cart!")
    }

    return <CartContext.Provider value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext)