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
			<h1>{data.name}</h1>
			<ImageContainer>
				<StyledImage src={`${data.imgUrl}`} alt="cool shoes" />
			</ImageContainer>
			<p>{data.description}</p>
		</StyledMain>
	);
};

export default Item;
