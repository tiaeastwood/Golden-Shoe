import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Hero from "../components/Hero";
import Grid from "@mui/material/Grid";


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

const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0;
	background: rgb(0, 0, 0);
	background: rgba(0, 0, 0, 0.5);
	color: #f1f1f1;
	width: 100%;
	height: 100%;
	transition: 0.5s ease;
	opacity: 0;
	color: white;
	font-size: 20px;
	padding: 20px;
	text-align: center;
	&:hover {
		opacity: 1;
		cursor: pointer;
	}
`;

const Home = () => {
	const [data, setData] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:4000/shoes")
			.then((res) => {
				console.log("initial data", res.data);
				setData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (!data) {
		return <h1>Loading</h1>;
	}

	return (
		<>
			<Hero />
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<h2
						style={{
							textAlign: "center",
							margin: "2rem 0 -1rem 0",
							fontSize: 40,
						}}
					>
						LATEST STYLES
					</h2>
				</Grid>

				<Grid item xs={12} md={6}>
					<Link to={`/products/${data[1].id}`}>
						<ImageContainer>
							<StyledImage src={`${data[1].imgUrl}`} alt="cool shoes" />
							<Overlay>
								<h2>SHOP NOW!</h2>
							</Overlay>
						</ImageContainer>
					</Link>
				</Grid>

				<Grid item xs={12} md={6}>
					<Link to={`/products/${data[2].id}`}>
						<ImageContainer>
							<StyledImage src={`${data[2].imgUrl}`} alt="cool shoes" />
							<Overlay>
								<h2>SHOP NOW!</h2>
							</Overlay>
						</ImageContainer>
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
