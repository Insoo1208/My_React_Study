import { useRef, useState } from "react";

function ComponentVariable() {
  const [count, setCount] = useState(1);

  console.log('Rendered');

  // 매 번 렌더링 될 때마다 항상 같은 레퍼런스 객체를 반환
  // 즉, 렌더링 될 때 값이 초기화 되지 않음
  // 렌더링과 관련 없는 데이터는 useRef()를 사용
  let id = useRef(1);
  console.log(id.current);


  return (
    <div>
      <p>총 {count}번 렌더링 되었습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        count 업데이트
      </button>
      <button onClick={() => id.current++}>
        id 업데이트
      </button>
    </div>
  );
}

export default ComponentVariable;