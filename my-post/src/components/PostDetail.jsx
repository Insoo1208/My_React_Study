import { useState } from "react";

function PostDetail(props) {
  const {posts, currentIndex, setPosts} = props;
  const [modifiedTitle, setModifiedTitle] = useState();
  return (
    <div className="detail">
      <h4>{posts[currentIndex]}</h4>
      <p>Date: Jan 20, 2023</p>
      <p>Author: Goni</p>
      <p>contents</p>

      {/* 간단한 포스트 수정 */}
      {/* <label>
        Modify: 
        <input type="text" value={modifiedTitle} onChange={() => setModifiedTitle(modifiedTitle)}/>
      </label> */}
      <button type="button" onClick={() => {
        // 배열이나 객체의 state 변경하는 법
        // 새로운 배열 또는 객체를 만들어 set함수에 넣어줘야 함
        const copyPosts = [...posts];
        copyPosts[currentIndex] = `${copyPosts[currentIndex]} - 수정`;
        // copyPosts[currentIndex] = modifiedTitle;
        setPosts(copyPosts);
      }}>Modify</button>
    </div>
  );
}

export default PostDetail;