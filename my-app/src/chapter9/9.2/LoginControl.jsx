import { useEffect, useState } from "react";
import Greeting from "../9.1/Greeting";

function LoginButton(props) {
  return <button onClick={props.onClick}>Log in</button>
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Log out</button>
}

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);
  let button;
  // button 변수에 컴포넌트 대입(결과적으로는 리액트 엘리먼트가 저장됨)
  // if (isLoggedIn) button = <LogoutButton onClick={handleLogoutClick}/>;
  // else button = <LoginButton onClick={handleLoginClick}/>;
  button = isLoggedIn ? <LogoutButton onClick={handleLogoutClick}/> : <LoginButton onClick={handleLoginClick}/>;

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
      {button}
    </div>
  );
}

export default LoginControl;