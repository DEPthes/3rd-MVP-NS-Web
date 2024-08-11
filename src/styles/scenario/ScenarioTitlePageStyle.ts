import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;

export const SearchBar = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	max-width: 450px;
	height:60px;
	position: relative;
	margin-left: auto;
	margin-right: auto;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	width: 480px;
`;

export const SearchInput = styled.input`
	flex: 1;
	padding: 10px 40px 10px 10px;
	border: 1px solid #ddd;
	border-radius: 20px;
`;

export const SearchIconWrapper = styled.div`
	position: absolute;
	right: 10px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
`;

export const Title = styled.div`
	font-size: 14px;
	font-weight: bold;
	color: var(--NS-White);
	margin-right: 800px;
	font:var(--H2);
`;

export const SortOptions = styled.div`
	display: flex;
	gap: 10px;
	color: var(--NS-White);
	font: var(--S1);
`;

export const SortOption = styled.div`
	cursor: pointer;
	font-size: 14px;
	&:hover {
		color: var(--NS-Main1);
	}
	&:active {
		color: var(--NS-Main1);
	}
`;

export const TopicBox = styled.div`
	padding: 20px;
	background-color: #f9f9f9;
	border-radius: 40px;
	margin-bottom: 20px;
	width: 1170px;
	height: 151px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	margin-left: auto; 
	margin-right: auto;
`;

export const TopicTitle = styled.div`
	font-size: 20px;
	font-weight: bold;
	color: var(--NS-Black);
`;

export const TopicDate = styled.div`
	font-size: 14px;
	color: #888;
	margin-top: 8px;
`;

export const LikeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	margin-left: auto;
`;

export const LikeCount = styled.div`
	margin-top: 5px;
	color: var(--NS-Main1);
`;

export const PostCount = styled.div`
	font-size: 14px;
	color: var(--NS-Black);
	margin-top: 10px;
	font:var(--T4);
`;
