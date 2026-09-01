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
        const item = cartItem.find((cartProduct) => cartProduct.id === productId);

        if (!item) return;

        setCartItem((previousCart) =>
            previousCart
                .map((cartProduct) => {
                    if (cartProduct.id !== productId) return cartProduct;

                    if (action === "increase") {
                        return { ...cartProduct, quantity: cartProduct.quantity + 1 };
                    }

                    return cartProduct.quantity === 1
                        ? null
                        : { ...cartProduct, quantity: cartProduct.quantity - 1 };
                })
                .filter(Boolean),
        );

        if (action === "decrease" && item.quantity === 1) {
            toast.warning("Item removed from cart");
        }
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
