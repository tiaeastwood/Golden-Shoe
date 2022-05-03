import React from "react";
import styled from "styled-components";
import CommentIcon from "@mui/icons-material/Comment";

const Bubble = styled.div`
	width: 100px;
	height: 100px;
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
`;

const ChatBubble = () => {
	return (
		<Bubble>
			<CommentIcon style={{ color: "white", fontSize: 60 }} />
		</Bubble>
	);
};

export default ChatBubble;
