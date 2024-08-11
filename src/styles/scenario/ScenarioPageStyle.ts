import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: transparent;
`;

export const Title = styled.div`
	font-size: 24px;
	color: white;
	margin-bottom: 20px;
	font: var(--H1);
`;

export const TitleMini = styled.div`
	font-size: 5px;
	color: white;
	margin-bottom: 60px;
	font: var(--N3);
`;

export const TopicBox = styled.div`
	background-color: #ffffff;
	border-radius: 40px;
	padding: 20px 40px;
	font-size: 18px;
	color: black;
	margin-bottom: 40px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
	background-color: var(—NS-Main1);
	text-align: center;
	width: 1170px;
	height: 186px;
	color: var(--NS-Main1);
	font: var(--Logo);
`;

export const TopicHeader = styled.div`
	font-size: 18px;
	margin-bottom: 10px;
	margin-top: 15px;
`;

export const Topic = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-top: 20px;
	font: var(--N3);
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 20px;
`;

export const ActionButton = styled.button`
	background-color: var(--NS-Main1);
	color: white;
	border: none;
	border-radius: 20px;
	padding: 10px 20px;
	width: 450px;
	height: 60px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: var(--NS-Main1-Clicked);
	}
`;

export const AnotherButton = styled.button`
	background-color: var(--NS-Main2);
	color: white;
	border: none;
	border-radius: 20px;
	padding: 10px 20px;
	width: 450px;
	height: 60px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: var(--NS-Main1);
	}
`;
