import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";
import TodoTemplate from "./Components/TodoTemplate";
import TodoInsert from "./Components/TodoInsert";
import TodoList from "./Components/TodoList";
import { useCallback, useEffect, useRef, useState } from "react";

const GlobalStyle = createGlobalStyle`
  /* reset CSS */
  ${reset}

  /* Global Style */
  body {
    background: #e9ecef;
  }
`;

function App() {
  const [todos, setTodos] = useState([
    // { id:1, text: '수업 교안 작성하기', checked: true },
    // { id:2, text: '시험 채점하기', checked: true },
    // { id:3, text: '단계별 실습 예제 만들기', checked: false },
  ]);

  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(dbTodos);
  }, []);

  const handleInsert = useCallback(text => {
    const todo = {id: uuidv4(), text, checked: false}
    const newTodo = todos.concat(todo);
    setTodos(newTodo);

    // 로컬 스토리지에 저장
    localStorage.setItem('todos', JSON.stringify(newTodo));
  }, [todos]);

  const handleRemove = useCallback(id => {
    const newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
    localStorage.setItem('todos', JSON.stringify(newTodo));
  }, [todos]);
  
  const handleToggle = useCallback(id => {
    const newTodo = todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo);
    setTodos(newTodo);
    localStorage.setItem('todos', JSON.stringify(newTodo));
  }, [todos]);

  return (
    <>
      {/* <Reset /> */}
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
      </TodoTemplate>
    </>
  );
}

export default App;


// 패키지 설치
// npm install styled-components styled-reset react-icons

// react-icons: 리액트에서 다양한 아이콘을 쓸 수 있는 라이브러리
// SVG 형태의 아이콘을 리액트 컴포넌트처럼 쉽게 사용
// 커스텀은 props 또는 css 스타일로 변경 가능