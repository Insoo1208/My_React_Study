import 'styled-components';
import { v4 as uuidv4 } from "uuid";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostList from './PostList';
import UploadPost from './Components/UploadPost';
import PostDetail from './PostDetail';
import Button from './UI/Button.jsx';

const Inner = styled.div`
  padding: 0 20px;
`;

function MainPage(props) {
  const [posts, setPosts] = useState([
    { title: '리액트 잘 쓰려면?', date: 'Jan 20, 2023', author: 'Goni', id: '3', likeCount: 0 },
    { title: '자바스크립트 핵심 문법', date: 'Jan 2, 2023', author: 'Alice', id: '2', likeCount: 0 },
    { title: '스타일링 가이드', date: 'Dec 20, 2022', author: 'Herohero', id: '1', likeCount: 0 },
  ]);
  const navigate = useNavigate();


  return (
    <Inner >
      <Button buttonText='새 글' onClick={() => navigate('/upload-post')}/>
      <PostList posts={posts}/>
    </Inner>
  );
}

export default MainPage;