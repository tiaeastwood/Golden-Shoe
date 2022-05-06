import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import PersonIcon from "@mui/icons-material/Person";

const StyledHeader = styled.header`
	background-color: darkred;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1rem;
	height: 5rem;
	color: white;
	padding: 0 2rem;
	position: fixed;
	top: 0;
	z-index: 99;
	width: 100%;
	min-width: 100vw;
	@media (max-width: 800px) {
		padding: 0.5rem;
	}
`;

const TitleText = styled.h1`
	@media (max-width: 800px) {
		font-size: 1.5rem;
	}
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	@media (max-width: 800px) {
		width: 50%;
	}
`;

const StyledList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 800px) {
		display: none;
	}
`;

const BurgerButton = styled.button`
	background: transparent;
	border: none;
	display: none;
	@media only screen and (max-width: 800px) {
		display: inline;
	}
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

	const menuLinks = [
		{ page: "Home", link: "/" },
		{ page: "Products", link: "/products" },
		{ page: "About", link: "/about" },
	];

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
				{menuLinks.map((menuItem) => (
					<ListItem button key={menuItem.page}>
						<Link to={menuItem.link}>
							<ListItemText primary={menuItem.page} />
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<StyledHeader>
			<Link to="/" style={{ color: "white" }}>
				<TitleText>Golden Shoe</TitleText>
			</Link>
			<StyledNav>
				<StyledList>
					{menuLinks.map((menuItem) => (
						<ListItem button key={menuItem.page}>
							<Link to={menuItem.link}>
								<ListItemText
									style={{ color: "white" }}
									primary={menuItem.page}
								/>
							</Link>
						</ListItem>
					))}
				</StyledList>

				<Link to="/account">
					<PersonIcon
						style={{ fontSize: 40, marginLeft: "10px", color: "white" }}
					/>
				</Link>

				<Link to="/cart">
					<ShoppingBasketIcon
						style={{ fontSize: 40, marginLeft: "10px", color: "white" }}
					/>
				</Link>

				<BurgerButton onClick={toggleDrawer("left", true)}>
					<MenuIcon style={{ color: "white", fontSize: 50 }} />
				</BurgerButton>
			</StyledNav>

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
									onClick={toggleDrawer(anchor, false)}
								/>
							</Button>
							<h1>Menu</h1>
						</DrawerHeader>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</StyledHeader>
	);
};

export default Header;
