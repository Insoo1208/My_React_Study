import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlacePage(props) {
  const navigator = useNavigate();
  return (
    <div>
      <h1>Place Page</h1>
      <button onClick={() => navigator('/')}>Main</button>
    </div>
  );
}

export default PlacePage;