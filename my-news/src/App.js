import './App.css';
// import logo from './logo.svg';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';
// import { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

// function App() {
//   const [category , setCategory] = useState('all');
//   const handleSelect = useCallback(categoryValue => {
//     setCategory(categoryValue);
//   }, []);

//   return (
//     <>
//       <Categories category={category} onSelect={handleSelect}/>
//       <NewsList category={category} />
//     </>
//   );
// }

// 라우팅 + URL params
function App() {

  return (
    <Routes>
      <Route path='/:category?' element={<NewsPage />}/>
    </Routes>
  );
}

export default App;
