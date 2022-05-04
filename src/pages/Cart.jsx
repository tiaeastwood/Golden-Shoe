import React from "react";
import { StyledMain } from "../components/shared";
import { useCart } from "../hooks/useCart";
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
	const { cartItems } = useCart();

	return (
		<StyledMain>
			<h1>Cart</h1>

			<table style={{ textAlign: "left" }}>
				<tr>
					<th>Product</th>
					<th>Price</th>
					<th>Quantity</th>
				</tr>
				<tr>
					<td>
						<CartItem>
							<img src={`${cartItems.img}`} alt={cartItems.name} />
							<div>
								<p>{cartItems.name}</p>
								<p>Size {cartItems.size}</p>
							</div>
						</CartItem>
					</td>
					<td>
						<p>{cartItems.price}</p>
					</td>
					<td>1</td>
				</tr>
			</table>
		</StyledMain>
	);
};

export default Cart;
