import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, selectCount } from "./counterSlice";

// 5. 리액트 컴포넌트에서 Redux State와 Actions 사용하기

function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;
  // Redux Store에 있는 state를 가져오는 함수
  // const count = useSelector(state => state.counter.value);
  const count = useSelector(selectCount); // state만 리턴하면 전역 state 전부 가져옴

  // Redux Store에 요청을 보내주는 함수
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {/* dispatch() 함수: 액션을 발생시켜 스토어에 보냄 */}
        {/* 스토어는 해당 액션에 매칭되는 리듀서 함수를 실행시켜서 새로운 상태를 만들어 줌 */}
        {/* decrement() 함수: 액션(객체) 생성 함수*/}
        <button type="button" onClick={() => dispatch(decrement())}>-1</button>
        <span>{count}</span>
        <button type="button" onClick={() => dispatch(increment())}>+1</button>
      </div>
      <div>
        <input type="number" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)}/>
        <button type="button" onClick={() => dispatch(incrementByAmount(incrementValue))}>Add</button>
      </div>
    </div>
  );
}

export default Counter;