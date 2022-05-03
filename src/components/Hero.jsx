import React from "react";
import styled from "styled-components";
import shoesPic from "../images/shoes.jpg";

const HeroContainer = styled.div`
	width: 100%;
	height: 100vh;
	margin: 0;
	overflow: hidden;
	vertical-align: middle;
	@media only screen and (max-width: 800px) {
		height: auto;
	}
`;

const StyledImage = styled.img`
    max-width: 100%;
	object-fit: cover;
	object-position: center center;
	@media only screen and (max-width: 800px) {
		max-height: 100%;
	}
`;

const Hero = () => {
	return (
		<HeroContainer>
			<StyledImage src={shoesPic} alt="Featured shoes" />
		</HeroContainer>
	);
};

export default Hero;
