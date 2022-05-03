import React, { useState } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
	width: 100%;
	height: 6rem;
	background: black;
	color: white;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`;

const Footer = () => {
	return (
		<StyledFooter>
			Copyright Golden Shoe Ltd {new Date().getFullYear()}
		</StyledFooter>
	);
};

export default Footer;
