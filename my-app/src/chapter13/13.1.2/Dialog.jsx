import FancyBorder from "./FancyBorder";

function Dialog(props) {
  return (
    // 제목과 메시지, 컬러를 어떻게 사용하는냐에 따라
    // 인사말이 될 수도 있고, 경고가 될 수도 있음
    <FancyBorder color={props.color}>
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

export default Dialog;