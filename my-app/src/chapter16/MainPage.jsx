import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MainPage(props) {
  // 사용자가 직접 경로를 쳐서 이동하는 경우는 드물다
  // 페이지 이동을 위한 useNavigate() 훅을 제공
  // navigate('/path');
  // navigate(1); 또는 navigate(-1); => 앞으로 가기, 뒤로 가기 기능
  const navigate = useNavigate();

  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        {/* 방법 1 */}
        <li style={{cursor: 'pointer'}} onClick={() => navigate('/places')}>Place</li>
        <li style={{cursor: 'pointer'}} onClick={() => navigate('/games')}>Game</li>

        {/* 방법 2: a태그 역할을 하는 Link 컴포넌트 */}
        {/* 
          차이점:
          a 태그의 기본 동작은 페이지를 이동시키면서, 페이지를 아예 새로 불러옴(새로고침)
          그렇게 되면 리액트 앱이 지니고있는 상태들도 초기화되고, 컴포넌트들도 새로 렌더링 됨
          리액트에서 a태그의 사용이 필요하다면 Link 컴포넌트 사용
        */}
        <li>
          <Link to='/places'>Place</Link>
        </li>
        <li>
          <Link to='/games'>Game</Link>
        </li>

      </ul>
    </div>
  );
}

export default MainPage;