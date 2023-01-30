import { useState } from "react";

function Reservation() {
  // 여러 개의 입력 제어 -> 여러 개의 state 선언
  const [breakfast, setBreakfast] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  const handleBreakfastChange = e => setBreakfast(e.target.checked);
  const handleGuestChange = e => setNumberOfGuests(e.target.value);
  const handleSubmit = () => alert(`조식 여부: ${breakfast}, 투숙객 수: ${numberOfGuests}`);

  return (
    <>
      <label>
        조식 여부:
        {/* checked 속성은 checkbox, radio 타입에 존재하고 boolean 타입의 값 */}
        <input type="checkbox" checked={breakfast} onChange={handleBreakfastChange}/>
      </label>
      <br />
      <label>
        투숙객 수:
        <input style={{marginLeft: 5, width: 50}} type="number" value={numberOfGuests} onChange={handleGuestChange} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Reservation;