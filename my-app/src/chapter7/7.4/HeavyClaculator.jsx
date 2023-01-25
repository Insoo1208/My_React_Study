import { useMemo, useState } from "react";

function HeavyCalculator() {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState('');

  const heavySum = num => {
    console.log('연산량이 많은 무거운 계산');
    let sum = 0;
    for (let index = 0; index <= 9999999; index++) {
      sum = num + index;
    }
    return sum;
  }

  // const heavyResult = heavySum(number);

  // useMeMo()를 사용 시
  const heavyResult = useMemo(() => {
    return heavySum(number);
  }, [number]);
  // number값의 변화가 없다면 이미 메모이제이션 한 값을 재사용


  return (
    <div>
      <input 
        type="number"
        value={number}
        onChange={e => setNumber(e.target.value)} />
      <p>무거운 계산: {heavyResult}</p>

      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)} />
      <p>이름: {name}</p>
    </div>
  );
}

export default HeavyCalculator;