export const useCart = () => {
	const addToCart = (product, size, colour) => {
		const newCartItem = {
			cartId: Date.now(),
			id: product.id,
			name: product.name,
			img: product.imgUrl,
			price: product.price,
			size: size,
			colour: colour,
		};
		localStorage.setItem(
			`cart-item-${newCartItem.cartId}`,
			JSON.stringify(newCartItem)
		);
	};

	const getCartItems = () => {
		let list = [];
		for (let i = 0, len = localStorage.length; i < len; ++i) {
			list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
		}
		return list;
	};

	const removeCartItem = (itemToRemove) => {
		return localStorage.removeItem(itemToRemove);
	};

	return { addToCart, getCartItems, removeCartItem };
};
