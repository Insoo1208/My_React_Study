import { useNavigate } from "react-router-dom";

function PostItem(props) {
  const { title, date, author, id, likeCount } = props;
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(`/post/${id}`)}>
        <h4>{title}</h4>
        <p>{date}</p>
        <p>{author}</p>
      </div>
      <div>
        <span>💜 {likeCount || null}</span>
      </div>
    </>
  );
}

export default PostItem;