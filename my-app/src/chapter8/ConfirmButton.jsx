import { useState } from "react";

// 사용자에게 확인을 요구하는 버튼 컴포넌트
function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirm = () => setIsConfirmed(isConfirmed => !isConfirmed);
  return <button onClick={handleConfirm} disabled={isConfirmed}>{isConfirmed ? '확인됨' : '확인하기'}</button>;
}

export default ConfirmButton;

// Quiz: 버튼을 누르면 '확인하기'가 '확인됨'으로 변경되면서 버튼 비활성화 처리 해보기