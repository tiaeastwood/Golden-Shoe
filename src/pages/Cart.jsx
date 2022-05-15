import React, { useEffect, useState } from "react";
import { StyledMain } from "../components/shared";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../hooks/useCart";

const CartItem = styled.div`
	width: 100%;
	display: flex;

	img {
		width: 100px;
		margin-right: 10px;
	}
	p {
		margin: 0;
	}

	@media only screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

const DeleteButton = styled.div`
	background: transparent;

	&:hover {
		cursor: pointer;
	}
`;

const Cart = () => {
	const [cartItems, setCartItems] = useState([]);
	const { getCartItems, removeCartItem } = useCart();

	useEffect(() => {
		let list = [];
		for (let i = 0, len = localStorage.length; i < len; ++i) {
			list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
		}
		setCartItems(list);
	}, []);

	const removeItem = (key) => {
		const itemToRemove = `cart-item-${key}`;
		removeCartItem(itemToRemove);

		const items = getCartItems();
		setCartItems(items);
	};

	if (cartItems.length === 0) {
		return <p>You have nothing in your cart</p>;
	}

	return (
		<StyledMain>
			<h1>Cart</h1>

			<table>
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
									<DeleteButton onClick={() => removeItem(item.cartId)}>
										<DeleteIcon />
									</DeleteButton>
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
