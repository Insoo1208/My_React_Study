import { useState } from "react";
import MainContent from "./MainContent";
import ThemeContext from "./ThemeContext";

function DarkOrLight() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    // ThemeContext의 값을 하위 컴포넌트들이 쓸 수 있게끔 broadcast 해줌
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;