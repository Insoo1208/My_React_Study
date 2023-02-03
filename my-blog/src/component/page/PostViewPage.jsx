import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "../ui/TextInput.jsx";
import Button from "../ui/Button.jsx";
import CommentList from "../list/CommentList.jsx";
import { useState } from "react";
import data from "../../data.json";

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

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

function PostViewPage() {
  const [comment, setComment] = useState();
	const navigate = useNavigate();

  // URL 파라미터로 전달받은 글의 id값 가져오기
  // useParams(): 사용자가 URL 파라미터에 입력한 값을 가져올 수 있음
  const { postId } = useParams();
  const post = data.find(item => item.id == postId);

  return (
    <Wrapper>
			<Container>
				<Button title='뒤로가기' onClick={() => navigate('/')}/>
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>
        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />
				<TextInput value={comment} onChange={e => setComment(e.target.value)} height={40}/>
				<Button title='댓글 작성하기' onClick={() => navigate('/')}/>
			</Container>
		</Wrapper>
  );
}

export default PostViewPage;