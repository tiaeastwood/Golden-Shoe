import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ImageContainer, StyledImage, Overlay } from "./shared";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const SocialImageContainer = styled(ImageContainer)`
	width: 100%;
	max-width: 300px;
	height: 100%;
	max-height: 300px;
`;

const SocialImage = styled(StyledImage)`
	width: 100%;
`;

const images = [
	"https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
	"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
	"https://images.unsplash.com/photo-1600054904350-1d493ae5f922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
];

const SocialFeed = () => {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		if (window.innerWidth < 800) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
	});

	return (
		<Grid item container xs={12} textAlign="center">
			<Grid item xs={1}>
				<ArrowBackIosIcon />
			</Grid>
			<Grid item xs={10} textAlign="center">
				<h2>#GoldenShoe</h2>
			</Grid>
			<Grid item xs={1} direction="row-reverse">
				<ArrowForwardIosIcon />
			</Grid>

			<Grid item xs={12} md={4}>
				<Box display="flex" justifyContent="center" alignItems="center">
					<SocialImageContainer>
						<SocialImage src={`${images[0]}`} alt="Golden Shoe on Instagram" />
						<Overlay>
							<p>@tj12345</p>
						</Overlay>
					</SocialImageContainer>
				</Box>
			</Grid>

			{!isMobile && (
				<Grid item xs={12} md={4}>
					<Box display="flex" justifyContent="center" alignItems="center">
						<SocialImageContainer>
							<SocialImage
								src={`${images[1]}`}
								alt="Golden Shoe on Instagram"
							/>
							<Overlay>
								<p>@shoeluvr</p>
							</Overlay>
						</SocialImageContainer>
					</Box>
				</Grid>
			)}
			{!isMobile && (
				<Grid item xs={12} md={4}>
					<Box display="flex" justifyContent="center" alignItems="center">
						<SocialImageContainer>
							<SocialImage
								src={`${images[2]}`}
								alt="Golden Shoe on Instagram"
							/>
							<Overlay>
								<p>@sicktreads91</p>
							</Overlay>
						</SocialImageContainer>
					</Box>
				</Grid>
			)}
		</Grid>
	);
};

export default SocialFeed;
