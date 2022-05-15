import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Grid from "@mui/material/Grid";
import { ImageContainer, StyledImage, Overlay } from "../components/shared";
import SocialFeed from "../components/SocialFeed";

const axios = require("axios");

const Home = () => {
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
		return <h1>Loading</h1>;
	}

	return (
		<>
			<Hero />
			<Grid container spacing={2} justifyContent="center" alignItems="center">
				<Grid item xs={12}>
					<h2
						style={{
							textAlign: "center",
							margin: "2rem 0 -1rem 0",
							fontSize: 30,
						}}
					>
						LATEST STYLES
					</h2>
				</Grid>

				<Grid item xs={12} md={6}>
					<Link to={`/products/${data[1].id}`}>
						<ImageContainer>
							<StyledImage src={`${data[1].imgUrl}`} alt={`${data[1].name}`} />
							<Overlay>
								<h2>{`${data[1].brand} ${data[1].name}`}</h2>
							</Overlay>
						</ImageContainer>
					</Link>
				</Grid>

				<Grid item xs={12} md={6}>
					<Link to={`/products/${data[2].id}`}>
						<ImageContainer>
							<StyledImage src={`${data[2].imgUrl}`} alt={`${data[1].name}`} />
							<Overlay>
								<h2>{`${data[2].brand} ${data[2].name}`}</h2>
							</Overlay>
						</ImageContainer>
					</Link>
				</Grid>

				<SocialFeed />
			</Grid>
		</>
	);
};

export default Home;
