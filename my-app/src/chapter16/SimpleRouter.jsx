import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from './GamePage';
import HotGamePage from './HotGamePage';
import MainPage from './MainPage';
import NewGamePage from './NewGamePage';
import NoMatchPage from './NoMatchPage';
import PlacePage from './PlacePage';

function SimpleRouter(props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/places' element={<PlacePage />}/>

        {/* <Route path='/games' element={<GamePage />}/>
        <Route path='/games/hot' element={<HotGamePage />}/>
        <Route path='/games/new' element={<NewGamePage />}/> */}

        {/* Nested route 방식 */}
        {/* 위 서브 경로 방식과 차이점: 부모 엘리먼트 + 자식 엘리먼트가 보임 */}
        {/* 부모 안에 자식들을 렌더링 해 보여줌(어디에 보여줄지는 부모 안에서 Outlet 컴포넌트로 지정) */}
        {/* Nested 안에 또 Nested 가능 */}
        <Route path='/games' element={<GamePage />}>
          <Route path='hot' element={<HotGamePage />} />
          <Route path='new' element={<NewGamePage />} />
        </Route>
        {/* 경로에서 *의 의미는 match anything */}
        <Route path='*' element={<NoMatchPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default SimpleRouter;

// 설치
// npm install react-router-dom

// react-router-dom
// 리액트를 위한 라우팅 라이브러리
// 라우팅: 사용자가 원하는 경로로 보내는 과정

// 페이지 나누는 법(리액트 미사용)
// MPA라서 각 페이지 별 html 만듦
// /list 경로로 접속하면 해당 list.html 파일을 보내줌

// 페이지 나누는 법(리액트 사용)
// SPA라서 index.html 파일 하나만 존재
// List 컴포넌트를 만듦
// /list 경로로 접속하면 기존 컴포넌트 자리에 List 컴포넌트를 보여줌

// 라우팅 구성을 위한 기본 컴포넌트
// 1) BrowserRouter 2) Routes 3) Route

// 1) BrowserRouter
// 웹 브라우저에서 react-router를 사용하여 라우팅 할 수 있도록 해주는 컴포넌트
// 웹 브라우저의 history 객체를 이용하여 경로를 탐색할 수 있게 해줌

// 2) Routes
// 여러 개의 Route 컴포넌트를 자식으로 가질 수 있음

// 3) Route
// Routes의 하위 컴포넌트로써 path와 element라는 props를 갖고 있음
// 여기에서 path는 경로를 의미, element는 경로가 일치할 경우 렌더링을 할 리액트 엘리먼트를 의미

// 사용자가 주소창에 새로운 경로를 입력하거나 페이지 내에서 경로 이동이 일어나게 되면
// Route 컴포넌트 중에서 현재 경로와 일치하는 경로를 찾아 해당 엘리먼트를 반환하여 사용자에게 보이는 화면이 바뀜