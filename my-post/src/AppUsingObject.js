import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PostDetailUsingObject from './components/PostDetailUsingObject';
import UploadPost from './components/UploadPost';

function AppUsingObject() {
  const [posts, setPosts] = useState([
    { title: '리액트 잘 쓰려면?', date: 'Jan 20, 2023', author: 'Goni', id: '3', likeCount: 0 },
    { title: '자바스크립트 핵심 문법', date: 'Jan 2, 2023', author: 'Alice', id: '2', likeCount: 0 },
    { title: '스타일링 가이드', date: 'Dec 20, 2022', author: 'Herohero', id: '1', likeCount: 0 },
  ]);
  const [newPost, setNewPost] = useState({
    title: '', date: 'Jan 1, 2023', author: 'Insoo', id: '', likeCount: 0
  });
  const [showPostDetail, setShowPostDetail] = useState({
    id: '', isTrue: false
  });
  const [countPost, setCountPost] = useState(4);

  return (
    <>
      {/* 상단 헤더 만들기 */}
      <header className='header--dark'>
        <h4>Insoo Post</h4>
        <nav>
          <ul>
            <li>Trending</li>
            <li>New</li>
          </ul>
        </nav>
      </header>

      <div className='inner'>
        {/* 포스트 목록 */}
        {posts.map(post => (
          <div key={post.id} className='list' onClick={() => setShowPostDetail({id: post.id, isTrue: true})}>
            <h4>{post.title}</h4>
            <p>{post.date}</p>
            <p>by {post.author}</p>
            <hr />
            <span> 💜 {post.likeCount || null}</span>
          </div>
        ))}

        {showPostDetail.isTrue && (
          <div className="detail">
            <PostDetailUsingObject posts={posts} showPostDetail={showPostDetail} setPosts={setPosts}/>
            <button onClick={() => setShowPostDetail({...showPostDetail, isTrue: false})}>Hide</button>
            <br />
            <button style={{margin: '15px 0'}} type="button" onClick={() => {
              setPosts(posts.filter((post) => showPostDetail.id !== post.id));
              setShowPostDetail({...showPostDetail, isTrue: false});
            }}>❌Delete❌</button>
          </div>
        )}

        <UploadPost
          newPost={newPost}
          setNewPost={setNewPost}
          posts={posts}
          setPosts={setPosts}
          countPost={countPost}
          setCountPost={setCountPost}
        />
      </div>
    </>
  );
}

export default AppUsingObject;

// 1. 컴포넌트 추출