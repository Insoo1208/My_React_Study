import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PostDetailUsingObject from './components/PostDetailUsingObject';

function AppUsingObject() {
  const [posts, setPosts] = useState([
    { title: '리액트 잘 쓰려면?', date: 'Jan 20, 2023', author: 'Goni', id: '001', likeCount: 0 },
    { title: '자바스크립트 핵심 문법', date: 'Jan 2, 2023', author: 'Alice', id: '002', likeCount: 0 },
    { title: '스타일링 가이드', date: 'Dec 20, 2022', author: 'Herohero', id: '003', likeCount: 0 },
  ]);
  const [showPostDetail, setShowPostDetail] = useState({
    id: '', isTrue: false
  });

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
        {posts.map((post) => (
          <div key={post.id} className='list' onClick={() => setShowPostDetail({id: post.id, isTrue: true})}>
            <h4>{post.title}</h4>
            <p>{post.date}</p>
            <p>by {post.author}</p>
            <hr />
            <span onClick={post => {
              const copyPosts = [...posts];
              console.log(copyPosts);
            }}> 💜 {post.likeCount || null}</span>
          </div>
        ))}
        {showPostDetail.isTrue && (
          <div className="detail">
            <PostDetailUsingObject posts={posts} showPostDetail={showPostDetail} setPosts={setPosts}/>
            <button onClick={() => setShowPostDetail({...showPostDetail, isTrue: false})}>Hide</button>
          </div>
        )}
      </div>
    </>
  );
}

export default AppUsingObject;
