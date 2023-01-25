import UserInfo from "./UserInfo";

function Comment(props) {
  return (
    <div className="comment">
      {/* <h1>제가 만든 첫 컴포넌트입니다.</h1> */}
      <UserInfo user={props.author} />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {props.date}
      </div>
    </div>
  );
}

export default Comment;