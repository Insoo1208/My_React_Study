import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reset from "styled-reset";
import MainPage from "./Components/MainPage";
import NewPost from "./Components/NewPost";
import PostDetail from "./Components/PostDetail";

const GlobalStyle = createGlobalStyle`
  // reset Css
  ${reset}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
    user-select: none;
  }
`;

const HeaderDark = styled.header`
  width: 100%;
  height: 100px;
  background-color: #1c1c1c;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const SubMenu = styled.nav`
  margin-left: 2rem;
`;

const SubMenuList = styled.ul`
  li {
    margin: 10px 0;
  }
`;

function App(props) {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HeaderDark>
        <Title>Insoo's Blog</Title>
        <SubMenu>
          <SubMenuList>
            <li>Trending</li>
            <li>New</li>
          </SubMenuList>
        </SubMenu>
      </HeaderDark>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/posts/:postId' element={<PostDetail />} />
        <Route path='/upload-post' element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;