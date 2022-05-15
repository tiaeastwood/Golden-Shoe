import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		yellow: "#fff834;",
		red: "#8b0000",
		disabled: "grey",
	},
};

export const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const StyledMain = styled.main`
	height: 100%;
	width: 100%;
	padding: 10%;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	@media only screen and (max-width: 800px) {
		padding: 20% 5%;
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

export const Button = styled.button`
	width: auto;
	background: white;
	color: darkred;
	border: none;
	padding: 0 10px;
	font-weight: bold;
	box-shadow: 5px 10px darkred;
	&:hover {
		box-shadow: 5px 5px darkred;
		cursor: pointer;
	}
`;

export const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0;
	background: rgb(0, 0, 0);
	background: rgba(0, 0, 0, 0.5);
	color: #f1f1f1;
	width: 100%;
	height: 100%;
	transition: 0.5s ease;
	opacity: 0;
	color: white;
	font-size: 20px;
	padding: 20px;
	text-align: center;
	&:hover {
		opacity: 1;
		cursor: pointer;
	}
`;