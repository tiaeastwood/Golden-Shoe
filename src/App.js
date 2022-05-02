import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Grid from "@mui/material/Grid";
import shoes1 from "./images/shoes1.jpg";
import shoes2 from "./images/shoes2.jpg";
import styled from "styled-components";

const ImageContainer = styled.div`
	max-width: 100%;
	max-height: 100%;
	vertical-align: middle;
	z-index: 0;
	overflow: hidden;
`;

const StyledImage = styled.img`
	max-width: 100%;
	object-fit: fill;
`;

function App() {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<Hero />
			</Grid>

			<Grid item container xs={12} spacing={2}>
				<Grid item xs={12}>
					<h2 style={{ textAlign: "center" }}>LATEST STYLES</h2>
				</Grid>
				<Grid item xs={12} md={6}>
					<ImageContainer>
						<StyledImage src={shoes1} alt="cool shoes" />
					</ImageContainer>
				</Grid>
				<Grid item xs={12} md={6}>
					<ImageContainer>
						<StyledImage src={shoes2} alt="cool shoes" />
					</ImageContainer>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default App;
