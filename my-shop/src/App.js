import { createGlobalStyle } from 'styled-components';
// bootstrap CSS
// bootstrap: 레이아웃을 복사, 붙여넣기 식으로 편하게 개발 가능한 CSS,JS 라이브러리
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css'; // React-toastify
// import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './pages/Header';
import Main from './pages/Main';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import LatestView from './components/LatestView';



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

  .text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
          {/* /detail/1 로 접속하면 productId에 1이 담김 */}
          <Route path='/detail/:productId' element={<ProductDetail />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
      <ToastContainer
        position='bottom-right'
        autoClose={2500}
        pauseOnFocusLoss={false}
        theme='dark'
      />
    </BrowserRouter>
  );
}

export default App;