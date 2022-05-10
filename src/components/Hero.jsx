import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/shared";
const axios = require("axios");

const HeroContainer = styled.div`
	width: 100%;
	height: 100vh;
	margin: 0;
	overflow: hidden;
	vertical-align: middle;
	position: relative;
`;

const StyledImage = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center center;
	@media only screen and (max-width: 800px) {
		height: 100%;
	}
`;

const OverLay = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	text-align: center;
`;

const HeroText = styled.h1`
	color: white;
	background: rgb(139, 0, 0, 0.75);
	padding: 5px;
	width: auto;
	max-width: 90%;
`;

const Hero = () => {
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
		<HeroContainer>
			<OverLay>
				<HeroText>THE HOME OF AWESOME SHOES!</HeroText>
				<Link to="/products">
					<Button>
						<h2>SHOP NOW</h2>
					</Button>
				</Link>
			</OverLay>
			<StyledImage src={`${data[0].imgUrl}`} alt="Featured shoes" />
		</HeroContainer>
	);
};

export default Hero;
