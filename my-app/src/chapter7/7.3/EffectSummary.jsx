import { useEffect, useState } from "react";

function EffectSummary(prop) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // useEffect()는 공통으로 마운트 시에는 무조건 실행

  // 렌더링 될 때마다 매번 실행
  useEffect(() => {
    console.log('렌더링 될 때 실행');
  });

  useEffect(() => {
    console.log('%ccount이(가) 변할 때 실행', 'color: red; background: pink;');
  }, [count]);
  
  useEffect(() => {
    console.log('%cname이(가) 변할 때 실행', 'color: blue; background: skyblue;');
  }, [name]);
  
  
  useEffect(() => {
    console.log('%c마운트 될 때에만 실행', 'color: green; background: lightgreen;');
    
    return () => console.log('%c언마운트 될 때에만 실행', 'color: white; background: black;');
  }, []);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>Count++</button>
      <p>이름: {name}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default EffectSummary;