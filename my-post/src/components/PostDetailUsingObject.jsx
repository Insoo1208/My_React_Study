import { useState } from "react";

function PostDetail(props) {
  const {posts, showPostDetail, setPosts} = props;
  const [editTitle, setEditTitle] = useState('');
  const targetPost = posts.reduce((acc, post) => {
    if (post.id === showPostDetail.id) acc = {...post};
    return acc;
  });
  const handleEditTitle = () => {
    const copyPosts = [...posts].map(post => {
      if (showPostDetail.id === post.id) post.title = editTitle;
      return post;
    });
    setEditTitle('');
    setPosts(copyPosts);
  };

  const handleLikeCount = () => {
    const copyPosts = [...posts].map(post => {
      if (showPostDetail.id === post.id) post.likeCount++;
      return post;
    });
    setPosts(copyPosts);
  };

  return (
    <div className="detail">
      <h4>{targetPost.title}</h4>
      <p>Date: {targetPost.date}</p>
      <p>Author: {targetPost.author}</p>
      <p>contents...</p>
      <button type="button" onClick={handleLikeCount}>Like 💜</button>
      <br />
      <br />
      <label>
        Edit Title : 
        <input style={{ margin: '0 5px' }} type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)}/>
      </label>
      <button type="button" onClick={handleEditTitle}>Modify</button>
    </div>
  );
}

export default PostDetail;