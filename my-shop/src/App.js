import { createGlobalStyle } from 'styled-components';
// bootstrap CSS
// bootstrap: 레이아웃을 복사, 붙여넣기 식으로 편하게 개발 가능한 CSS,JS 라이브러리
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Main from './pages/Main';



const GlobalStyle = createGlobalStyle`
  /* Global Common CSS */
  body {
    box-sizing: border-box;
  }

  #root {
    text-align: center;
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* bootstrap practice */}
      {/* <Button variant="primary">Primary</Button> */}
      {/* <button className="btn btn-primary" type="button">primary</button> */}

      {/* 헤더 영역: 상단 네비게이션 바 */}
      <Routes>
        <Route path='/' element={<Header />}>
          {/* index: index route(여기서는 defalut child route) */}
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;