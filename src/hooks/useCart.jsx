export const useCart = () => {


	const addToCart = (product, size, colour) => {
		const newCartItem = {
			cartId: Date.now(),
			id: product.id,
			name: product.name,
            img: product.imgUrl,
            price: product.price,
			size: size,
			colour: colour
		};
        localStorage.setItem(`cart-item-${newCartItem.cartId}`, JSON.stringify(newCartItem));

    };
    


	return { addToCart  };
};
