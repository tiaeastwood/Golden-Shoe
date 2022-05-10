import React, { useEffect, useState } from "react";
import { StyledMain } from "../components/shared";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useCart } from "../hooks/useCart";
import { Button } from "../components/shared";

const axios = require("axios");

const AddToCartButton = styled(Button)`
	margin-top: 20px;
	background: darkred;
	color: white;
	box-shadow: 5px 10px black;
	padding: 5px;
	font-size: 18px;
	&:disabled {
		background: ${({ theme: { colors } }) => colors.disabled};
	}
	&:hover {
		box-shadow: 5px 5px black;
		cursor: pointer;
	}
	span {
		margin: 0 10px;
	}
`;

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	vertical-align: middle;
	overflow: hidden;
`;

const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	#main {
		h4,
		p {
			margin: 0;
		}
	}
	#size-area {
		display: flex;
		flex-direction: column;

		select {
			padding: 10px;
		}
	}
`;

const Item = () => {
	const [selectedSize, setSelectedSize] = React.useState(null);
	const [selectedColour, setSelectedColour] = React.useState("");
	const [product, setProduct] = useState();
	let { id } = useParams();

	const { addToCart } = useCart();

	useEffect(() => {
		axios
			.get(`http://localhost:4000/shoes/${id}`)
			.then((res) => {
				setProduct(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	const handleChangeColour = (event) => {
		setSelectedColour(event.target.value);
	};

	const handleChangeSize = (event) => {
		setSelectedSize(event.target.value);
	};

	if (!product) {
		return <h1>Loading</h1>;
	}

	return (
		<StyledMain>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<ImageContainer>
						<StyledImage src={`${product.imgUrl}`} alt={`${product.name}`} />
					</ImageContainer>
				</Grid>
				<Grid item xs={12} md={6}>
					<InfoContainer>
						<div id="main">
							<h4>{product.brand}</h4>
							<p>{product.name}</p>
							<p>{product.price}</p>
						</div>
						<div id="description">
							<p>{product.description}</p>
						</div>

						<div id="size-area">
							<label htmlFor="sizes">Choose your colour</label>
							<select
								name="colours"
								id="colours"
								value={selectedColour}
								onChange={handleChangeColour}
							>
								<option value="" selected>
									Choose an option
								</option>
								{product.options.map((prod, index) => {
									return (
										<option key={`colour-${index}`} value={prod.colour}>
											{prod.colour}
										</option>
									);
								})}
							</select>

							{selectedColour && (
								<>
									<label htmlFor="sizes">Choose your size</label>
									<select
										name="sizes"
										id="sizes"
										value={selectedSize}
										onChange={handleChangeSize}
									>
										<option value="" selected>
											Choose an option
										</option>
										{product.options
											.filter((a) => a.colour === selectedColour)[0]
											.stock.map((b, index) => (
												<option
													key={`size-${index}`}
													disabled={b.amount === 0}
													value={b.amount}
												>
													{b.amount > 0
														? b.size
														: `${b.size} - Sorry, that size is out of stock`}
												</option>
											))}
									</select>
								</>
							)}
						</div>
						<AddToCartButton
							disabled={!selectedColour && !selectedSize}
							onClick={() => addToCart(product, selectedSize, selectedColour)}
						>
							<span>BUY</span>
							<ShoppingBasketIcon />
						</AddToCartButton>
					</InfoContainer>
				</Grid>
			</Grid>
		</StyledMain>
	);
};

export default Item;
