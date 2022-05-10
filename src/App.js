import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import ChatBubble from "./components/ChatBubble";
import { Theme } from "./components/shared";

const Wrapper = styled.div`
	width: 100%;
	max-width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 15rem;
	position: relative;
	min-height: 100vh;
`;

function App() {
	return (
		<Theme>
			<Wrapper>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<Item />} />
					<Route path="/about" element={<About />} />
					<Route path="/account" element={<Account />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
				<Footer />
				<ChatBubble />
			</Wrapper>
		</Theme>
	);
}

export default App;
