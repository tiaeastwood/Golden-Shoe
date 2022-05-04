import React, { useEffect, useState } from "react";
import { StyledMain } from "../components/shared";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const axios = require("axios");

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
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;

	h4 {
		display: inline;
	}
`;

const Item = () => {
	const [data, setData] = useState();
	let { id } = useParams();

	console.log(id);

	useEffect(() => {
		axios
			.get(`http://localhost:4000/shoes/${id}`)
			.then((res) => {
				console.log(res.data);
				setData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	if (!data) {
		return <h1>Loading</h1>;
	}

	return (
		<StyledMain>
			<ImageContainer>
				<StyledImage src={`${data.imgUrl}`} alt={`${data.name}`} />
			</ImageContainer>
			<InfoContainer>
				<h3>{data.brand}</h3>
				<h3>{data.name}</h3>
				<h3>{data.price}</h3>
			</InfoContainer>
			<p>{data.description}</p>
		</StyledMain>
	);
};

export default Item;
