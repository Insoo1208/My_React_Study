import { useEffect } from "react";

function Timer(prop) {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Running Timer...⏳');
    }, 1000);

    // 화면에서 사라질 때 만든 타이머 정리하기
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <span>⌚타이머가 시작 됐습니다.</span>
    </div>
  );
}

export default Timer;