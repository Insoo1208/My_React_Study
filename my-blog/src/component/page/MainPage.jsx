import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button.jsx";
import PostList from "../list/PostList.jsx";

// 서버에서 받아온 데이터로 가정
import data from '../../data.json';

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

// 글 작성 버튼, 글 목록
function MainPage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Button title="글 작성하기" onClick={() => navigate('/post-write')}/>
        <PostList posts={data} onClickItem={item => navigate(`/post/${item.id}`)}/> {/* id값은 URL 파라미터로 사용할 예정 */}
      </Container>
    </Wrapper>
  );
}

export default MainPage;