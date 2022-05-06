import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const StyledFooter = styled.footer`
	width: 100%;
	height: 9rem;
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
`;

const Footer = () => {
	return (
		<StyledFooter>
			<div>
				<TwitterIcon style={{ fontSize: 50, margin: "10px" }} />
				<FacebookIcon style={{ fontSize: 50, margin: "10px" }} />
			</div>
			<p>© Golden Shoe Ltd {new Date().getFullYear()}</p>
		</StyledFooter>
	);
};

export default Footer;
