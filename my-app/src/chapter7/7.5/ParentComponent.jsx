import { useCallback } from "react";
import { useEffect, useState } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);

  // count state가 변경돼서 재렌더링 될 때마다 매번 함수가 새로 정의됨(실행X 정의O)
  // const handleClick = () => {
  //   // 클릭 이벤트 처리
  //   setCount(count + 1);
  // };

  // useCallback() 안에 넣으면 컴포넌트가 마운트 될 때만 함수가 정의됨
  const handleClick = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  useEffect(() => {
    console.log(`handleClick을 새롭게 정의: ${handleClick}`);
  }, [handleClick]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>button</button>
    </div>
  );
}

export default ParentComponent;