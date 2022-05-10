import React, { useEffect, useState } from "react";
import { StyledMain } from "../components/shared";
import styled from "styled-components";

const CartItem = styled.div`
	width: 100%;
	display: flex;
	align-content: flex-start;

	img {
		width: 100px;
		margin-right: 10px;
	}
	p {
		margin: 0;
	}
`;

const Cart = () => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		let list = [];
		for (let i = 0, len = localStorage.length; i < len; ++i) {
			list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
		}
		setCartItems(list);
	}, []);

	const removeItem = (key) => {
		const itemToRemove = `cart-item-${key}`;
		localStorage.removeItem(itemToRemove);

		let list = [];
		for (let i = 0, len = localStorage.length; i < len; ++i) {
			list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
		}
		setCartItems(list);
	};

	console.log(cartItems);

	if (cartItems.length === 0) {
		return <p>You have nothing in your cart</p>;
	}

	return (
		<StyledMain>
			<h1>Cart</h1>

			<table style={{ textAlign: "left" }}>
				<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
					{cartItems.map((item) => {
						return (
							<tr key={item.id}>
								<td>
									<CartItem>
										<img src={`${item.img}`} alt={cartItems.name} />
										<div>
											<p>{item.name}</p>
											<p>Size: {item.size}</p>
											<p>Colour: {item.colour}</p>
										</div>
									</CartItem>
								</td>
								<td>
									<p>{item.price}</p>
								</td>
								<td>1</td>
								<td>
									<button onClick={() => removeItem(item.id)}>Remove</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</StyledMain>
	);
};

export default Cart;
