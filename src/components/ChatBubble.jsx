import React, { useState } from "react";
import styled from "styled-components";
import CommentIcon from "@mui/icons-material/Comment";
import CloseIcon from "@mui/icons-material/Close";

const Bubble = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background: darkred;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0;
	right: 0;
	margin: 10px;
	position: fixed;
	z-index: 99;
`;

const ChatWindow = styled.div`
	width: 300px;
	max-width: 95%;
	height: 400px;
	max-height: 90%;
	border-radius: 20px;
	background: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	position: absolute;
	bottom: 0;
	right: 0;
	margin: 50px;
	position: fixed;
	padding: 10px;
	border: 2px solid darkred;
`;

const ChatText = styled.div`
	width: 85%;
	height: auto;
	border-radius: 10px;
	background: lightgrey;
	padding: 5px;
	font-size: 0.9rem;
	margin: 5px 0;
`;

const ChatBubble = () => {
	const [openChat, setOpenChat] = useState(false);
	return (
		<>
			<Bubble onClick={() => setOpenChat(!openChat)}>
				<CommentIcon style={{ color: "white", fontSize: 40 }} />
			</Bubble>

			{openChat && (
				<ChatWindow>
					<CloseIcon
						onClick={() => setOpenChat(!openChat)}
						style={{ alignSelf: "flex-end", fontSize: 30 }}
					/>
					<ChatText style={{ alignSelf: "flex-start" }}>
						Hello, how can I help you today? Please choose an option below:
					</ChatText>

					<ChatText
						style={{
							alignSelf: "flex-end",
							fontWeight: "bold",
							cursor: "pointer",
						}}
					>
						Check something is in stock
					</ChatText>

					<ChatText
						style={{
							alignSelf: "flex-end",
							cursor: "pointer",
							fontWeight: "bold",
						}}
					>
						Sizing information
					</ChatText>

					<ChatText
						style={{
							alignSelf: "flex-end",
							fontWeight: "bold",
							cursor: "pointer",
						}}
					>
						Delivery information
					</ChatText>

					<ChatText
						style={{
							alignSelf: "flex-end",
							fontWeight: "bold",
							cursor: "pointer",
						}}
					>
						Returns process
					</ChatText>

					<ChatText
						style={{
							alignSelf: "flex-end",
							fontWeight: "bold",
							cursor: "pointer",
						}}
					>
						Other (speak to an advisor)
					</ChatText>
				</ChatWindow>
			)}
		</>
	);
};

export default ChatBubble;
