import FancyBorder from "./FancyBorder";

function WelcomeDialog() {
  return (
    <FancyBorder color='blue'>
      {/* FancyBorder 컴포넌트 안에 있는 모든 자식 요소들은 children 이라는 이름의 props로 전달됨 */}
      {/* 자식 엘리먼트로 무엇이 올 지 모를 때 동적으로 전달 가능 */}
      <h1 className="Dialog-title">Welcome!</h1>
      <p className="Dialog-message">Thanks to visit our spaceship..</p>
    </FancyBorder>
  );
}

export default WelcomeDialog;