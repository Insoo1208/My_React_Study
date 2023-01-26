function MyButton() {
  // e: 이벤트 객체(발생한 이벤트에 관한 여러 기능이 담겨있음)
  // e.target: 현재 발생한 이벤트의 대상(여기서는 <button>)
  const handleDelete = (id, e) => console.log(id, e.target);
  const handleDeleteWrong = console.log;

  return (
    <div>
      {/* 매개변수 event로 들어오는 값은 event 객체임 */}
      <button onClick={(event) => handleDelete(1, event)}>Delete!</button>
      <br />
      <button onClick={handleDeleteWrong('Error')}>Wrong Delete Button!</button>
    </div>
  );
}

export default MyButton;