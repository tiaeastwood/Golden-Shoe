import React, { useEffect, useState } from "react";
import { StyledMain } from "../components/shared";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { ImageContainer, StyledImage } from "../components/shared";

const axios = require("axios");

const ProductContainer = styled.div`
	width: 100%;
`;

const InfoContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	h4 {
		margin: 0;
	}

	p {
		margin: 0;
		display: block;
	}
`;

const Products = () => {
	const [data, setData] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:4000/shoes")
			.then((res) => {
				setData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (!data) {
		return <p>Loading...</p>;
	}

	return (
		<StyledMain>
			<Grid container spacing={4}>
				{data &&
					data.map((prod) => {
						return (
							<Grid item xs={6} key={prod.id}>
								<ProductContainer>
									<ImageContainer>
										<StyledImage src={`${prod.imgUrl}`} alt={`${prod.name}`} />
									</ImageContainer>
									<InfoContainer>
										<h4>{prod.brand}</h4>
										<p>{prod.name}</p>
										<p>{prod.price}</p>
									</InfoContainer>
								</ProductContainer>
							</Grid>
						);
					})}
			</Grid>
		</StyledMain>
	);
};

export default Products;
