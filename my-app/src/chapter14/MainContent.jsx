import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent() {
  // 필요한 곳에서 useContext() 훅을 사용해 데이터 가져오기
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      width: '100vw',
      height: '100vw',
      padding: '1.5rem',
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color : theme === 'light' ? 'black' : 'white',
    }}>
      <p>테마 변경이 가능한 웹사이트 입니다.</p>
      <button type="button" onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default MainContent;