import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const StyledHeader = styled.header`
	background-color: darkred;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1rem;
	height: 5rem;
	color: white;
	padding: 0 2rem;
`;

const StyledNav = styled.nav`
	width: 60%;
	list-style-type: none;
	@media (max-width: 700px) {
		display: none;
	}
`;

const StyledList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const BurgerButton = styled.button`
    background: transparent;
	border: none;
	display: none;
	@media only screen and (max-width: 700px) {
	   display: inline;
		
`;

const DrawerHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const Header = () => {
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const menuLinks = ["Home", "Products", "Account", "About", "Contact"];

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{menuLinks.map((text) => (
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
				<ListItem>
					<ShoppingBasketIcon />
				</ListItem>
			</List>
		</Box>
	);

	return (
		<>
			<StyledHeader>
				<h1>Golden Shoe</h1>
				<StyledNav>
					<StyledList>
						{menuLinks.map((item) => (
							<ListItem>{item}</ListItem>
						))}
						<ListItem>
							<ShoppingBasketIcon />
						</ListItem>
					</StyledList>
				</StyledNav>
				<BurgerButton onClick={toggleDrawer("left", true)}>
					<MenuIcon style={{ color: "white", fontSize: 50 }} />
				</BurgerButton>
			</StyledHeader>

			<div>
				{["left", "right", "top", "bottom"].map((anchor) => (
					<React.Fragment key={anchor}>
						<Drawer
							anchor={anchor}
							open={state[anchor]}
							onClose={toggleDrawer(anchor, false)}
						>
							<DrawerHeader>
								<Button>
									<CloseIcon
										style={{ fontSize: 50, color: "black" }}
										onClose={toggleDrawer(anchor, false)}
									/>
								</Button>
								<h1>Menu</h1>
							</DrawerHeader>
							{list(anchor)}
						</Drawer>
					</React.Fragment>
				))}
			</div>
		</>
	);
};

export default Header;
