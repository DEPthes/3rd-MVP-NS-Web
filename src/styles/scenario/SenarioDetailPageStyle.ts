import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: var(--NS-Background);
`;

export const TopicBox = styled.div`
	background-color: var(--NS-White);
	border-radius: 20px;
	padding: 40px 60px;
	text-align: center;
	box-shadow: 0 4px 6px var(--NS-Main1);
	width: 1170px;
	height: 120px;
`;

export const TopicHeader = styled.div`
	font-size: 24px;
	color: var(--NS-Main1);
`;

export const Topic = styled.div`
	margin-top: 10px;
	font-size: 20px;
	color: var(--NS-Main1);
`;

export const LikeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	cursor: pointer;
`;

export const LikeText = styled.div`
	font-size: 16px;
	color: var(--NS-Main5);
	margin-left: 10px;
`;

export const NewTopicBox = styled.div`
	background-color: var(--NS-White);
	border-radius: 20px;
	padding: 40px 60px;
	text-align: center;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	margin-top: 20px;
	width: 1170px;
	height: 380px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	border-radius: 10px;
	border: 1px solid var(--NS-TextArea-Background);
	margin-bottom: 20px;
	font-size: 16px;
	color: var(--NS-Black);
	text-align: center;
	box-sizing: border-box;
`;

export const Separator = styled.hr`
	border: none;
	border-top: 2px solid var(--NS-Separator);
	margin: 20px 0;
`;

export const TextArea = styled.textarea`
	width: 100%;
	height: 150px;
	padding: 10px;
	border-radius: 10px;
	border: 1px solid var(--NS-White);
	margin-bottom: 20px;
	font-size: 14px;
	color: var(--NS-Black);
	text-align: center;
	resize: none;
	box-sizing: border-box;
	background-color: var(--NS-TextArea-Background);
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	margin-top: 20px;
`;

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
`;

export const ModalContainer = styled.div`
	background-color: var(--NS-White);
	padding: 20px;
	border-radius: 10px;
	text-align: center;
	width: 400px;
`;

export const ModalTitle = styled.h2`
	font-size: 24px;
	margin-bottom: 10px;
	color: var(--NS-Text);
`;

export const ModalText = styled.p`
	font-size: 16px;
	margin-bottom: 10px;
	color: var(--NS-Text);
`;

export const ModalTextSmall = styled.p`
	font-size: 12px;
	margin-bottom: 20px;
	color: var(--NS-Text);
`;
