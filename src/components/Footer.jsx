import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Grid from "@mui/material/Grid";

const StyledFooter = styled.footer`
	width: 100%;
	height: auto;
	background: black;
	color: white;
	bottom: 0;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
	margin-top: 3rem;
	position: absolute;
	bottom: 0;
	padding: 1rem 0;

	p {
		color: white;
	}

	div {
		display: flex;
		justify-content: center;
	}

	button {
		width: auto;
		background: darkred;
		color: white;
		border: none;
		padding: 0 10px;
		font-weight: bold;
	}

	ul {
		list-style-type: none;
		margin: 1rem 0;
		padding: 0;
	}

	@media only screen and (max-width: 800px) {
		padding-bottom: 3rem;
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<Grid container>
				<Grid
					item
					xs={6}
					md={4}
					display="flex"
					flexDirection="column"
					alignItems="center"
				>
					<ul>
						<li>Delivery Info</li>
						<li>Returns Policy</li>
						<li>Store Finder</li>
						<li>FAQ</li>
					</ul>
				</Grid>
				<Grid
					item
					xs={6}
					md={4}
					display="flex"
					flexDirection="column"
					alignItems="center"
				>
					<div>
						<TwitterIcon style={{ fontSize: 50, margin: "10px" }} />
						<FacebookIcon style={{ fontSize: 50, margin: "10px" }} />
					</div>
				</Grid>

				<Grid
					item
					xs={12}
					md={4}
					display="flex"
					flexDirection="column"
					alignItems="center"
				>
					<p>Sign up to our mailing list for exclusive offers!</p>
					<div>
						<input />
						<button>SIGN UP</button>
					</div>
				</Grid>

				<Grid item xs={12}>
					<p>© Golden Shoe Ltd {new Date().getFullYear()}</p>
				</Grid>
			</Grid>
		</StyledFooter>
	);
};

export default Footer;
