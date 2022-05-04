import { useEffect, useState } from "react";

export const useCart = () => {
	// const [cartItems, setCartItems] = useState([]);

	const addToCart = (product, size) => {
		const newCartItem = {
			id: product.id,
			name: product.name,
            img: product.imgUrl,
            price: product.price,
			size: size,
		};
        localStorage.setItem("cart-items", JSON.stringify(newCartItem));

		// setCartItems([...cartItems, newCartItem]);
    };
    
    const cartItems = JSON.parse(localStorage.getItem("cart-items"));

	return { addToCart, cartItems };
};
