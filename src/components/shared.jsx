
import styled from "styled-components";

export const StyledMain = styled.main`
	height: 100%;
    min-height: 100vh;
	padding: 10% 20%;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 800px) {
		padding: 20% 10%;
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	vertical-align: middle;
	overflow: hidden;
`;

export const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
`;