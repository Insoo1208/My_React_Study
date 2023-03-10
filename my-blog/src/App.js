import MainPage from './component/page/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

const MainTitleText =styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

// 일반적으로 라우팅은 App 컴포넌트에 구현하게 되는데
// App 컴포넌트가 가장 처음으로 렌더링 되는 컴포넌트 이기 때문
function App() {
  return (
    <BrowserRouter>
      <MainTitleText>Mini Blog</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/post-write" element={<PostWritePage />} />
        {/* 여기서 :postId는 동적으로 변하는 파라미터를 위한 값 => URL 파라미터 */}
        {/* 경로에 이렇게 콜론(:)을 사용하고 아이디를 입력하면 실제 컴포넌트에서 useParams() 훅을 사용해 postId로 해당 값을 가져올 수 있음 */}
        <Route path="/post/:postId" element={<PostViewPage />} />
        <Route path="/post/:postId/:othervalue?/:anothervalue?" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
