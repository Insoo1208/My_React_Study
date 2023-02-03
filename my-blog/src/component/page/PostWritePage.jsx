import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput.jsx";
import Button from "../ui/Button.jsx";
import { useState } from "react";

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	width: 100%;
	max-width: 720px;

	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;

function PostWritePage() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const navigate = useNavigate();
	
  return (
    <Wrapper>
			<Container>
				<TextInput value={title} onChange={e => setTitle(e.target.value)} height={20}/>
				<TextInput value={content} onChange={e => setContent(e.target.value)} height={480}/>
				<Button title='글 작성하기' onClick={() => navigate('/')}/>
			</Container>
		</Wrapper>
  );
}

export default PostWritePage;