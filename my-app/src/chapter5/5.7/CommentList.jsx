import Comment from "./Comment";

// 댓글 데이터를 별도의 객체로 분리하고 반복 가능한 배열에 담기
const comments = [
  {
    name: 'Insoo Jeon',
    comment: 'Hello~'
  },

  {
    name: 'Tom Halland',
    comment: 'React Study'
  },

  {
    name: 'Timothee chalamet',
    comment: 'This is a comment'
  },

  {
    name: 'Robert Downey Jr.',
    comment: 'I am Ironman'
  }
];


// 댓글들을 포함하는 CommentList 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* 배열을 동적으로 렌더링 할 때에는 배열의 map 함수를 사용 */}
      {comments.map((v, i) => <Comment key = {i} name = {v.name} comment = {v.comment}/>)}

      {/* map() 결과 */}
      {/* 
        {[<Comment name = {comment[0].name} comment = {comment[0].comment}/>,
          <Comment name = {comment[1].name} comment = {comment[1].comment}/>,
          ...
          <Comment name = {comment[n-1].name} comment = {comment[n-1].comment}/>,
        ]}
       */}
    </div>
  );
}

export default CommentList;