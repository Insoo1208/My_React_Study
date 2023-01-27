const students = [
  {id: '001', name: 'Insoo'},
  {id: '002', name: '유재석'},
  {id: '003', name: '이미주'},
  {id: '004', name: '이이경'},
];

// Quiz: 배열의 각 요소를 렌더링하고, 배열 렌더링 시 key값 추가해보기, key값은 id속성을 추가
function AttendanceBook() {
  return (
    <ul>
      {students.map(student => <li key={student.id}>{student.name}</li>)}
    </ul>
  );
}

export default AttendanceBook;