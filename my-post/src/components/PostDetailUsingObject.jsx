import { useState } from "react";

function PostDetail(props) {
  const {posts, showPostDetail, setPosts} = props;
  const [modifiedTitle, setModifiedTitle] = useState();
  const targetPost = posts.filter((post) => post.id === showPostDetail.id);

  return (
    <div className="detail">
      <h4>{targetPost[0].title}</h4>
      <p>Date: {targetPost[0].date}</p>
      <p>Author: {targetPost[0].author}</p>
      <p>contents...</p>

      <label>
        Modify Title : 
        <input style={{ margin: '0 5px' }} type="text" value={modifiedTitle} onChange={e => setModifiedTitle(e.target.value)}/>
      </label>
      <button type="button" onClick={() => {
        
      }}>Modify</button>
    </div>
  );
}

export default PostDetail;