import React, { useEffect, useState } from "react";
import styled from "styled-components";
const axios = require("axios");

const HeroContainer = styled.div`
	width: 100%;
	height: 100vh;
	margin: 0;
	overflow: hidden;
	vertical-align: middle;

`;

const StyledImage = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center center;
	@media only screen and (max-width: 800px) {
		height: 100%;
	}
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
			<StyledImage src={`${data[0].imgUrl}`} alt="Featured shoes" />
		</HeroContainer>
	);
};

export default Hero;
