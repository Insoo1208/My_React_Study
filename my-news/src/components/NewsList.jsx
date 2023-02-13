import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// 샘플용
const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160'
};

// API 요청하고 뉴스 데이터가 들어있는 배열을 컴포넌트 배열로 변환하여 렌더링해 주는 컴포넌트
function NewsList(props) {
  const [articles, setArticles] = useState([]);
  const { category } = props;

  // 컴포넌트가 화면에 보이는 시점에 API 요청
  useEffect(() => {
    const fetchData = async () => {
      try{
        const query = category === 'all' ? '' : `&category=${category}`
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=9b627ffab25f4478a914dd5d07b05778`);
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      };
    };

    fetchData();
  }, [category]);

  return (
    <NewsListBlock>
      {/* sampleArticle 렌더링 해보기 */}
      {articles.map(article => <NewsItem key={article.url} article={article}/>)}
    </NewsListBlock>
  );
};

export default NewsList;