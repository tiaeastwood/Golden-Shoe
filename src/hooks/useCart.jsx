export const useCart = () => {

	const addToCart = (product, size, colour) => {
		const newCartItem = {
			id: product.id,
			name: product.name,
            img: product.imgUrl,
            price: product.price,
			size: size,
			colour: colour
		};
        localStorage.setItem(`cart-item-${newCartItem.id}`, JSON.stringify(newCartItem));

    };
    


	return { addToCart  };
};
