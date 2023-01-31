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
  const [newTitle, setNewTitle] = useState('');

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

            <div className='toolbar'>
              <span onClick={e => {
                // (버그 수정) 현재는 좋아요 버튼 누를 때 포스트 상세 보기까지 같이 클릭됨
                // 부모-자식 관계에 있을 때 이벤트 버블링 발생함
                e.stopPropagation(); // 상위 요소로 전파되는 이벤트 버블링을 막고 싶을 때 사용
                const copyLikeCount = [...likeCount];
                copyLikeCount[index]++;
                setLikeCount(copyLikeCount);
              }}>💜 {likeCount[index] || null}</span>

              <span style={{fontSize: 28}} onClick={e => {
                e.stopPropagation();
                const curIdx = index;
                setPosts(posts.filter((post, index) => curIdx !== index));
                setLikeCount(likeCount.filter((count, index) => curIdx !== index));
              }}>🗑</span>
            </div>
          </div>
        ))}

        {/* 새로운 포스트 등록 */}
        <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)}/>
        <button style={{marginLeft: 5}} type='button' onClick={() => {
          setPosts([newTitle, ...posts]);
          setLikeCount([0, ...likeCount]);
          setNewTitle('');
        }}>Upload Post</button>

        {showPostDetail && (
          <div className="detail">
            <PostDetail posts={posts} currentIndex={currentIndex} setPosts={setPosts}/>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
