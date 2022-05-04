export const useCart = () => {

	const addToCart = (product, size) => {
		const newCartItem = {
			id: product.id,
			name: product.name,
            img: product.imgUrl,
            price: product.price,
			size: size,
		};
        localStorage.setItem(`cart-item-${newCartItem.id}`, JSON.stringify(newCartItem));


    };
    


	return { addToCart  };
};
