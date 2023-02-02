import { useState } from "react";

function PostDetail(props) {
  const {posts : {title, date, author}, showPostDetail, setPosts} = props;
  const [editTitle, setEditTitle] = useState('');
  
  const handleEditTitle = () => {
    const copyPosts =  posts.map(post => showPostDetail.id === post.id ? { ...post, title: editTitle } : post);
    setPosts(copyPosts);
    setEditTitle('');
  };

  const handleLikeCount = () => {
    const copyPosts = posts.map(post => showPostDetail.id === post.id ? {...post, likeCount: post.likeCount++} : post);
    setPosts(copyPosts);
  };

  return (
    <div className="detail">
      <h4>{title}</h4>
      <p>Date: {date}</p>
      <p>Author: {author}</p>
      <p>contents...</p>
      <button type="button" onClick={handleLikeCount}>Like 💜</button>
      <br />
      <br />
      <label>
        Edit Title : 
        <input style={{ margin: '0 5px' }} type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)}/>
      </label>
      <button type="button" onClick={handleEditTitle} disabled={!(editTitle ?? false)}>Submit</button>
    </div>
  );
}

export default PostDetail;