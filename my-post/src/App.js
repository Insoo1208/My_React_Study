import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PostDetail from './components/PostDetail';

function App() {
  // 서버에서 데이터를 가져왔다고 가정
  const [posts, setPosts] = useState(['리액트 잘 쓰려면?', '자바스크립트 핵심 문법', '스타일링 가이드']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPostDetail, setShowPostDetail] = useState(false);
  const [likeCount, setLikeCount] = useState([0, 0, 0]);

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
        {posts.map((post, index) => (
            <div key={index} className='list' onClick={() => {
              setShowPostDetail(true);
              setCurrentIndex(index);
              }}>
              <h4>{post}</h4>
              <p>Jan 20, 2023</p>
              <p>by Goni</p>
              <hr />
              
              <span onClick={() => {
                const copyLikeCount = [...likeCount];
                copyLikeCount[index]++;
                setLikeCount(copyLikeCount);
              }}>💜 {likeCount[index] || null}</span>
            </div>
        ))}
        {showPostDetail && (
          <div className="detail">
            <PostDetail posts={posts} currentIndex={currentIndex} setPosts={setPosts}/>
            <button onClick={() => setShowPostDetail(false)}>Hide</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
