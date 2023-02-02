import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function GamePage(props) {
  const navigator = useNavigate();
  return (
    <div>
      <h1>Game Page</h1>
      <ul>
        <li><Link to='/games/hot'>Hot</Link></li>
        <li><Link to='/games/new'>New</Link></li>
      </ul>
      {/* Nested route의 자식 엘리먼트를 보여주는 역할 */}
      <Outlet />
      <button onClick={() => navigator('/')}>Main</button>
    </div>
  );
}

export default GamePage;